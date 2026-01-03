'use client'

import { useState, useEffect } from 'react'

export default function OwnerView({ supabase }) {
  const [loading, setLoading] = useState(true)
  const [metrics, setMetrics] = useState({
    // Core Metrics
    totalUsers: 0,
    activeUsers7d: 0,
    activeUsers30d: 0,
    newUsersToday: 0,
    newUsers7d: 0,
    newUsers30d: 0,
    
    // Tier Distribution
    freeUsers: 0,
    starterUsers: 0,
    proUsers: 0,
    premiumUsers: 0,
    betaUsers: 0,
    
    // Engagement
    totalPrompts: 0,
    avgPromptsPerUser: 0,
    totalFolders: 0,
    totalUsageEvents: 0,
    
    // Health Indicators
    usersNeverLoggedIn: 0,
    inactiveUsers30d: 0,
    inactiveUsers90d: 0,
    usersWithZeroPrompts: 0,
    
    // Growth
    growthRate7d: 0,
    growthRate30d: 0,
    retentionRate: 0,
    
    // Marketplace
    marketplacePrompts: 0,
    marketplaceDownloads: 0,
    
    // Security
    recentSecurityEvents: 0
  })

  const [trends, setTrends] = useState({
    dailySignups: [],
    dailyActiveUsers: [],
    tierDistribution: []
  })

  useEffect(() => {
    fetchMetrics()
  }, [])

  async function fetchMetrics() {
    try {
      setLoading(true)

      // Parallel fetch all metrics
      const [
        // Core counts
        { count: totalUsers },
        { count: newUsersToday },
        { count: newUsers7d },
        { count: newUsers30d },
        
        // Active users
        { count: activeUsers7d },
        { count: activeUsers30d },
        
        // Tier distribution
        { count: freeUsers },
        { count: starterUsers },
        { count: proUsers },
        { count: premiumUsers },
        { count: betaUsers },
        
        // Content
        { count: totalPrompts },
        { count: totalFolders },
        { count: totalUsageEvents },
        
        // Health indicators
        { count: usersNeverLoggedIn },
        { count: inactiveUsers30d },
        { count: inactiveUsers90d },
        { count: usersWithZeroPrompts },
        
        // Marketplace
        { count: marketplacePrompts },
        { data: marketplaceData },
        
        // Security
        { count: recentSecurityEvents },
        
        // Trends
        { data: dailySignupsData },
        { data: dailyActiveData },
        { data: tierDistData }
      ] = await Promise.all([
        // Total users
        supabase.from('user_profiles').select('*', { count: 'exact', head: true }),
        
        // New users today
        supabase.from('user_profiles').select('*', { count: 'exact', head: true })
          .gte('created_at', new Date(new Date().setHours(0, 0, 0, 0)).toISOString()),
        
        // New users 7 days
        supabase.from('user_profiles').select('*', { count: 'exact', head: true })
          .gte('created_at', new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()),
        
        // New users 30 days
        supabase.from('user_profiles').select('*', { count: 'exact', head: true })
          .gte('created_at', new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString()),
        
        // Active users 7 days
        supabase.from('user_profiles').select('*', { count: 'exact', head: true })
          .gte('last_sign_in_at', new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()),
        
        // Active users 30 days
        supabase.from('user_profiles').select('*', { count: 'exact', head: true })
          .gte('last_sign_in_at', new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString()),
        
        // Free tier
        supabase.from('user_profiles').select('*', { count: 'exact', head: true })
          .or('tier.is.null,tier.eq.free'),
        
        // Starter tier
        supabase.from('user_profiles').select('*', { count: 'exact', head: true })
          .eq('tier', 'starter'),
        
        // Pro tier
        supabase.from('user_profiles').select('*', { count: 'exact', head: true })
          .eq('tier', 'pro'),
        
        // Premium tier
        supabase.from('user_profiles').select('*', { count: 'exact', head: true })
          .eq('tier', 'premium'),
        
        // Beta users
        supabase.from('user_profiles').select('*', { count: 'exact', head: true })
          .eq('beta_user', true),
        
        // Total prompts
        supabase.from('prompts').select('*', { count: 'exact', head: true }),
        
        // Total folders
        supabase.from('folders').select('*', { count: 'exact', head: true }),
        
        // Usage events (last 30 days)
        supabase.from('usage_history').select('*', { count: 'exact', head: true })
          .gte('used_at', new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString()),
        
        // Users never logged in
        supabase.from('user_profiles').select('*', { count: 'exact', head: true })
          .is('last_sign_in_at', null),
        
        // Inactive 30 days
        supabase.from('user_profiles').select('*', { count: 'exact', head: true })
          .lt('last_sign_in_at', new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString()),
        
        // Inactive 90 days (due for deletion)
        supabase.from('user_profiles').select('*', { count: 'exact', head: true })
          .lt('last_sign_in_at', new Date(Date.now() - 90 * 24 * 60 * 60 * 1000).toISOString()),
        
        // Users with zero prompts
        supabase.rpc('count_users_with_zero_prompts').then(res => ({ count: res.data || 0 })),
        
        // Marketplace prompts
        supabase.from('marketplace_prompts').select('*', { count: 'exact', head: true }),
        
        // Marketplace downloads
        supabase.from('marketplace_prompts').select('downloads_count'),
        
        // Security events (last 7 days)
        supabase.from('security_events').select('*', { count: 'exact', head: true })
          .gte('created_at', new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()),
        
        // Daily signups (last 30 days)
        supabase.rpc('get_daily_signups', { days: 30 }),
        
        // Daily active users (last 30 days)
        supabase.rpc('get_daily_active_users', { days: 30 }),
        
        // Tier distribution details
        supabase.from('user_profiles').select('tier')
      ])

      // Calculate derived metrics
      const avgPromptsPerUser = totalUsers > 0 ? (totalPrompts / totalUsers).toFixed(1) : 0
      const growthRate7d = totalUsers > newUsers7d && newUsers7d > 0 
        ? (((newUsers7d) / (totalUsers - newUsers7d)) * 100).toFixed(1)
        : 0
      const growthRate30d = totalUsers > newUsers30d && newUsers30d > 0
        ? (((newUsers30d) / (totalUsers - newUsers30d)) * 100).toFixed(1)
        : 0
      const retentionRate = totalUsers > 0
        ? ((activeUsers30d / totalUsers) * 100).toFixed(1)
        : 0
      
      const marketplaceDownloads = marketplaceData?.reduce((sum, p) => sum + (p.downloads_count || 0), 0) || 0

      setMetrics({
        totalUsers: totalUsers || 0,
        activeUsers7d: activeUsers7d || 0,
        activeUsers30d: activeUsers30d || 0,
        newUsersToday: newUsersToday || 0,
        newUsers7d: newUsers7d || 0,
        newUsers30d: newUsers30d || 0,
        freeUsers: freeUsers || 0,
        starterUsers: starterUsers || 0,
        proUsers: proUsers || 0,
        premiumUsers: premiumUsers || 0,
        betaUsers: betaUsers || 0,
        totalPrompts: totalPrompts || 0,
        avgPromptsPerUser,
        totalFolders: totalFolders || 0,
        totalUsageEvents: totalUsageEvents || 0,
        usersNeverLoggedIn: usersNeverLoggedIn || 0,
        inactiveUsers30d: inactiveUsers30d || 0,
        inactiveUsers90d: inactiveUsers90d || 0,
        usersWithZeroPrompts: usersWithZeroPrompts || 0,
        growthRate7d,
        growthRate30d,
        retentionRate,
        marketplacePrompts: marketplacePrompts || 0,
        marketplaceDownloads,
        recentSecurityEvents: recentSecurityEvents || 0
      })

      setTrends({
        dailySignups: dailySignupsData || [],
        dailyActiveUsers: dailyActiveData || [],
        tierDistribution: tierDistData || []
      })

    } catch (error) {
      console.error('Error fetching owner metrics:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </div>
    )
  }

  const MetricCard = ({ title, value, subtitle, icon, color = 'purple', trend, alert }) => (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
      <div className="flex items-start justify-between mb-3">
        <div className={`p-3 rounded-lg bg-${color}-50`}>
          <svg className={`w-6 h-6 text-${color}-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
          </svg>
        </div>
        {alert && (
          <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-semibold rounded-full">
            Alert
          </span>
        )}
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-1">{value?.toLocaleString()}</h3>
      <p className="text-sm text-gray-600 mb-2">{title}</p>
      {subtitle && <p className="text-xs text-gray-500">{subtitle}</p>}
      {trend && (
        <div className={`mt-2 flex items-center text-xs font-semibold ${
          trend > 0 ? 'text-green-600' : trend < 0 ? 'text-red-600' : 'text-gray-600'
        }`}>
          {trend > 0 ? '↑' : trend < 0 ? '↓' : '→'} {Math.abs(trend)}%
        </div>
      )}
    </div>
  )

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Owner Analytics</h1>
          <p className="text-gray-500 mt-2">High-level business metrics and insights</p>
        </div>
        <button
          onClick={fetchMetrics}
          className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Refresh
        </button>
      </div>

      {/* Key Performance Indicators */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Key Performance Indicators</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            title="Total Users"
            value={metrics.totalUsers}
            subtitle="All registered accounts"
            icon="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
            color="purple"
          />
          <MetricCard
            title="Active Users (7d)"
            value={metrics.activeUsers7d}
            subtitle={`${((metrics.activeUsers7d / metrics.totalUsers) * 100).toFixed(1)}% of total`}
            icon="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            color="green"
          />
          <MetricCard
            title="New Users (7d)"
            value={metrics.newUsers7d}
            subtitle="This week's signups"
            icon="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
            color="blue"
            trend={metrics.growthRate7d}
          />
          <MetricCard
            title="Retention Rate"
            value={`${metrics.retentionRate}%`}
            subtitle="30-day active rate"
            icon="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
            color="emerald"
          />
        </div>
      </div>

      {/* Growth & Engagement */}
      <div className="mb-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Growth Metrics */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Growth Metrics</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="text-sm font-medium text-gray-600">Today</p>
                <p className="text-2xl font-bold text-gray-900">{metrics.newUsersToday}</p>
              </div>
              <div className="text-xs text-gray-500">new signups</div>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="text-sm font-medium text-gray-600">This Week</p>
                <p className="text-2xl font-bold text-gray-900">{metrics.newUsers7d}</p>
              </div>
              <div className="text-xs text-green-600 font-semibold">+{metrics.growthRate7d}%</div>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="text-sm font-medium text-gray-600">This Month</p>
                <p className="text-2xl font-bold text-gray-900">{metrics.newUsers30d}</p>
              </div>
              <div className="text-xs text-green-600 font-semibold">+{metrics.growthRate30d}%</div>
            </div>
          </div>
        </div>

        {/* Engagement Metrics */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Engagement Metrics</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Prompts</p>
                <p className="text-2xl font-bold text-gray-900">{metrics.totalPrompts.toLocaleString()}</p>
              </div>
              <div className="text-xs text-gray-500">{metrics.avgPromptsPerUser} avg/user</div>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Folders</p>
                <p className="text-2xl font-bold text-gray-900">{metrics.totalFolders.toLocaleString()}</p>
              </div>
              <div className="text-xs text-gray-500">organization</div>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="text-sm font-medium text-gray-600">Usage Events (30d)</p>
                <p className="text-2xl font-bold text-gray-900">{metrics.totalUsageEvents.toLocaleString()}</p>
              </div>
              <div className="text-xs text-gray-500">prompt uses</div>
            </div>
          </div>
        </div>
      </div>

      {/* Tier Distribution */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">User Tier Distribution</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">{metrics.freeUsers}</div>
            <div className="text-sm text-gray-600 mb-1">Free</div>
            <div className="text-xs text-gray-500">{((metrics.freeUsers / metrics.totalUsers) * 100).toFixed(1)}%</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">{metrics.starterUsers}</div>
            <div className="text-sm text-gray-600 mb-1">Starter</div>
            <div className="text-xs text-gray-500">{((metrics.starterUsers / metrics.totalUsers) * 100).toFixed(1)}%</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">{metrics.proUsers}</div>
            <div className="text-sm text-gray-600 mb-1">Pro</div>
            <div className="text-xs text-gray-500">{((metrics.proUsers / metrics.totalUsers) * 100).toFixed(1)}%</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 text-center">
            <div className="text-3xl font-bold text-amber-600 mb-2">{metrics.premiumUsers}</div>
            <div className="text-sm text-gray-600 mb-1">Premium</div>
            <div className="text-xs text-gray-500">{((metrics.premiumUsers / metrics.totalUsers) * 100).toFixed(1)}%</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 text-center">
            <div className="text-3xl font-bold text-yellow-600 mb-2">{metrics.betaUsers}</div>
            <div className="text-sm text-gray-600 mb-1">Beta</div>
            <div className="text-xs text-gray-500">{((metrics.betaUsers / metrics.totalUsers) * 100).toFixed(1)}%</div>
          </div>
        </div>
      </div>

      {/* Health Indicators & Alerts */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Health Indicators & Alerts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            title="Never Logged In"
            value={metrics.usersNeverLoggedIn}
            subtitle="Accounts created but unused"
            icon="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            color="yellow"
            alert={metrics.usersNeverLoggedIn > 50}
          />
          <MetricCard
            title="Inactive 30d"
            value={metrics.inactiveUsers30d}
            subtitle="No login in 30 days"
            icon="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            color="orange"
          />
          <MetricCard
            title="Due for Deletion"
            value={metrics.inactiveUsers90d}
            subtitle="Inactive 90+ days"
            icon="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            color="red"
            alert={metrics.inactiveUsers90d > 0}
          />
          <MetricCard
            title="Zero Prompts"
            value={metrics.usersWithZeroPrompts}
            subtitle="Not using core feature"
            icon="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            color="gray"
          />
        </div>
      </div>

      {/* Marketplace & Security */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Marketplace Stats */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Marketplace</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Prompts</p>
                <p className="text-2xl font-bold text-gray-900">{metrics.marketplacePrompts}</p>
              </div>
              <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Downloads</p>
                <p className="text-2xl font-bold text-gray-900">{metrics.marketplaceDownloads.toLocaleString()}</p>
              </div>
              <div className="text-xs text-gray-500">
                {metrics.marketplacePrompts > 0 
                  ? `${(metrics.marketplaceDownloads / metrics.marketplacePrompts).toFixed(1)} avg`
                  : '0 avg'
                }
              </div>
            </div>
          </div>
        </div>

        {/* Security Overview */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Security Overview</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="text-sm font-medium text-gray-600">Security Events (7d)</p>
                <p className="text-2xl font-bold text-gray-900">{metrics.recentSecurityEvents}</p>
              </div>
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-sm font-semibold text-green-900">System Healthy</p>
              </div>
              <p className="text-xs text-green-700">No critical security issues detected</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="px-4 py-3 bg-white text-gray-700 rounded-lg hover:bg-gray-50 border border-gray-200 transition-all text-sm font-medium">
            Export User Data
          </button>
          <button className="px-4 py-3 bg-white text-gray-700 rounded-lg hover:bg-gray-50 border border-gray-200 transition-all text-sm font-medium">
            Cleanup Inactive
          </button>
          <button className="px-4 py-3 bg-white text-gray-700 rounded-lg hover:bg-gray-50 border border-gray-200 transition-all text-sm font-medium">
            Generate Report
          </button>
          <button className="px-4 py-3 bg-white text-gray-700 rounded-lg hover:bg-gray-50 border border-gray-200 transition-all text-sm font-medium">
            View Full Analytics
          </button>
        </div>
      </div>
    </div>
  )
}
