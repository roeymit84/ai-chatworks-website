'use client'

import { useState, useEffect } from 'react'

export default function OwnerView({ supabase }) {
  const [loading, setLoading] = useState(true)
  const [metrics, setMetrics] = useState({
    totalUsers: 0,
    activeUsers7d: 0,
    activeUsers30d: 0,
    newUsersToday: 0,
    newUsers7d: 0,
    newUsers30d: 0,
    freeUsers: 0,
    starterUsers: 0,
    proUsers: 0,
    premiumUsers: 0,
    betaUsers: 0,
    totalPrompts: 0,
    totalFolders: 0,
    usersNeverLoggedIn: 0,
    inactiveUsers30d: 0,
    inactiveUsers90d: 0,
    marketplacePrompts: 0,
    marketplaceDownloads: 0,
    securityEvents7d: 0
  })

  useEffect(() => {
    fetchMetrics()
  }, [])

  async function fetchMetrics() {
    try {
      setLoading(true)

      const [
        { count: totalUsers },
        { count: newUsersToday },
        { count: newUsers7d },
        { count: newUsers30d },
        { count: activeUsers7d },
        { count: activeUsers30d },
        { count: freeUsers },
        { count: starterUsers },
        { count: proUsers },
        { count: premiumUsers },
        { data: betaAgreements },
        { count: totalPrompts },
        { count: totalFolders },
        { count: usersNeverLoggedIn },
        { count: inactiveUsers30d },
        { count: inactiveUsers90d },
        { count: marketplacePrompts },
        { data: marketplaceData },
        { count: securityEvents7d }
      ] = await Promise.all([
        supabase.from('user_profiles').select('*', { count: 'exact', head: true }),
        supabase.from('user_profiles').select('*', { count: 'exact', head: true })
          .gte('created_at', new Date(new Date().setHours(0, 0, 0, 0)).toISOString()),
        supabase.from('user_profiles').select('*', { count: 'exact', head: true })
          .gte('created_at', new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()),
        supabase.from('user_profiles').select('*', { count: 'exact', head: true })
          .gte('created_at', new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString()),
        supabase.from('user_profiles').select('*', { count: 'exact', head: true })
          .gte('last_sign_in_at', new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()),
        supabase.from('user_profiles').select('*', { count: 'exact', head: true })
          .gte('last_sign_in_at', new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString()),
        supabase.from('user_profiles').select('*', { count: 'exact', head: true })
          .or('tier.is.null,tier.eq.free'),
        supabase.from('user_profiles').select('*', { count: 'exact', head: true })
          .eq('tier', 'starter'),
        supabase.from('user_profiles').select('*', { count: 'exact', head: true })
          .eq('tier', 'pro'),
        supabase.from('user_profiles').select('*', { count: 'exact', head: true })
          .eq('tier', 'premium'),
        supabase.from('user_agreements').select('user_id')
          .eq('agreement_type', 'beta'),
        supabase.from('prompts').select('*', { count: 'exact', head: true }),
        supabase.from('folders').select('*', { count: 'exact', head: true }),
        supabase.from('user_profiles').select('*', { count: 'exact', head: true })
          .is('last_sign_in_at', null),
        supabase.from('user_profiles').select('*', { count: 'exact', head: true })
          .lt('last_sign_in_at', new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString()),
        supabase.from('user_profiles').select('*', { count: 'exact', head: true })
          .lt('last_sign_in_at', new Date(Date.now() - 90 * 24 * 60 * 60 * 1000).toISOString()),
        supabase.from('marketplace_prompts').select('*', { count: 'exact', head: true }),
        supabase.from('marketplace_prompts').select('downloads_count'),
        supabase.from('security_events').select('*', { count: 'exact', head: true })
          .gte('created_at', new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString())
      ])

      const betaUsers = betaAgreements ? new Set(betaAgreements.map(a => a.user_id)).size : 0
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
        betaUsers,
        totalPrompts: totalPrompts || 0,
        totalFolders: totalFolders || 0,
        usersNeverLoggedIn: usersNeverLoggedIn || 0,
        inactiveUsers30d: inactiveUsers30d || 0,
        inactiveUsers90d: inactiveUsers90d || 0,
        marketplacePrompts: marketplacePrompts || 0,
        marketplaceDownloads,
        securityEvents7d: securityEvents7d || 0
      })
    } catch (error) {
      console.error('Error fetching metrics:', error)
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

  const growthRate7d = metrics.totalUsers > metrics.newUsers7d && metrics.newUsers7d > 0 
    ? (((metrics.newUsers7d) / (metrics.totalUsers - metrics.newUsers7d)) * 100).toFixed(1)
    : 0
  const retentionRate = metrics.totalUsers > 0
    ? ((metrics.activeUsers30d / metrics.totalUsers) * 100).toFixed(1)
    : 0

  return (
    <div className="p-8">
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

      {/* Key Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <p className="text-sm text-gray-500 mb-1">Total Users</p>
          <p className="text-3xl font-bold text-purple-600">{metrics.totalUsers}</p>
          <p className="text-xs text-gray-400 mt-1">All registered accounts</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <p className="text-sm text-gray-500 mb-1">Active (7d)</p>
          <p className="text-3xl font-bold text-green-600">{metrics.activeUsers7d}</p>
          <p className="text-xs text-gray-400 mt-1">{((metrics.activeUsers7d / metrics.totalUsers) * 100).toFixed(1)}% of total</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <p className="text-sm text-gray-500 mb-1">New Users (7d)</p>
          <p className="text-3xl font-bold text-blue-600">{metrics.newUsers7d}</p>
          <p className="text-xs text-green-600 mt-1 font-medium">↑ {growthRate7d}% growth</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <p className="text-sm text-gray-500 mb-1">Retention Rate</p>
          <p className="text-3xl font-bold text-purple-600">{retentionRate}%</p>
          <p className="text-xs text-gray-400 mt-1">30-day active rate</p>
        </div>
      </div>

      {/* Growth & Tier Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Growth Metrics */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Growth Metrics</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="text-sm text-gray-600">Today</p>
                <p className="text-2xl font-bold text-gray-900">{metrics.newUsersToday}</p>
              </div>
              <p className="text-xs text-gray-500">new signups</p>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="text-sm text-gray-600">This Week</p>
                <p className="text-2xl font-bold text-gray-900">{metrics.newUsers7d}</p>
              </div>
              <p className="text-xs text-green-600 font-semibold">+{growthRate7d}%</p>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="text-sm text-gray-600">This Month</p>
                <p className="text-2xl font-bold text-gray-900">{metrics.newUsers30d}</p>
              </div>
              <p className="text-xs text-gray-500">signups</p>
            </div>
          </div>
        </div>

        {/* Tier Distribution */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Tier Distribution</h2>
          <div className="space-y-3">
            {[
              { label: 'Free', value: metrics.freeUsers, color: 'gray' },
              { label: 'Starter', value: metrics.starterUsers, color: 'blue' },
              { label: 'Pro', value: metrics.proUsers, color: 'purple' },
              { label: 'Premium', value: metrics.premiumUsers, color: 'yellow' },
              { label: 'Beta', value: metrics.betaUsers, color: 'green' }
            ].map((tier) => (
              <div key={tier.label} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full bg-${tier.color}-500`}></div>
                  <p className="text-sm font-medium text-gray-900">{tier.label}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-gray-900">{tier.value}</p>
                  <p className="text-xs text-gray-500">{((tier.value / metrics.totalUsers) * 100).toFixed(1)}%</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content & Health */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Content Stats */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Content & Engagement</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Total Prompts</span>
              <span className="text-lg font-bold text-gray-900">{metrics.totalPrompts.toLocaleString()}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Total Folders</span>
              <span className="text-lg font-bold text-gray-900">{metrics.totalFolders.toLocaleString()}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Avg Prompts/User</span>
              <span className="text-lg font-bold text-gray-900">{(metrics.totalPrompts / metrics.totalUsers).toFixed(1)}</span>
            </div>
          </div>
        </div>

        {/* Health Indicators */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Health Indicators</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Never Logged In</span>
              <span className={`text-lg font-bold ${metrics.usersNeverLoggedIn > 50 ? 'text-red-600' : 'text-gray-900'}`}>
                {metrics.usersNeverLoggedIn}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Inactive 30d</span>
              <span className="text-lg font-bold text-gray-900">{metrics.inactiveUsers30d}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Due for Deletion (90d)</span>
              <span className={`text-lg font-bold ${metrics.inactiveUsers90d > 0 ? 'text-red-600' : 'text-gray-900'}`}>
                {metrics.inactiveUsers90d}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Marketplace & Security */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Marketplace */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Marketplace</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Total Prompts</span>
              <span className="text-lg font-bold text-gray-900">{metrics.marketplacePrompts}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Total Downloads</span>
              <span className="text-lg font-bold text-gray-900">{metrics.marketplaceDownloads.toLocaleString()}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Avg Downloads</span>
              <span className="text-lg font-bold text-gray-900">
                {metrics.marketplacePrompts > 0 ? (metrics.marketplaceDownloads / metrics.marketplacePrompts).toFixed(1) : 0}
              </span>
            </div>
          </div>
        </div>

        {/* Security */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Security</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Security Events (7d)</span>
              <span className="text-lg font-bold text-gray-900">{metrics.securityEvents7d}</span>
            </div>
            <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-sm font-medium text-green-900">System Healthy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
