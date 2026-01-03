'use client'

import { useState } from 'react'

export default function QueriesView({ supabase }) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [queryHistory, setQueryHistory] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all')

  // Comprehensive query library organized by category
  const queryLibrary = {
    userManagement: {
      name: 'User Management',
      icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
      queries: [
        {
          name: 'Find User by Email',
          description: 'Search for a specific user',
          query: "SELECT id, email, display_name, tier, role, beta_user, created_at, last_sign_in_at FROM user_profiles WHERE email ILIKE '%@%' ORDER BY created_at DESC LIMIT 1",
          params: ['email']
        },
        {
          name: 'Recent Signups (24h)',
          description: 'Users who joined today',
          query: "SELECT id, email, display_name, tier, created_at FROM user_profiles WHERE created_at > NOW() - INTERVAL '24 hours' ORDER BY created_at DESC"
        },
        {
          name: 'Recent Signups (7 days)',
          description: 'Users who joined this week',
          query: "SELECT id, email, display_name, tier, created_at FROM user_profiles WHERE created_at > NOW() - INTERVAL '7 days' ORDER BY created_at DESC"
        },
        {
          name: 'Inactive Users (30+ days)',
          description: 'Users who haven\'t logged in for 30 days',
          query: "SELECT id, email, display_name, tier, last_sign_in_at FROM user_profiles WHERE last_sign_in_at < NOW() - INTERVAL '30 days' OR last_sign_in_at IS NULL ORDER BY last_sign_in_at ASC NULLS FIRST LIMIT 100"
        },
        {
          name: 'Users Due for Deletion',
          description: 'Inactive users (90+ days, no activity)',
          query: "SELECT id, email, display_name, tier, last_sign_in_at, created_at FROM user_profiles WHERE (last_sign_in_at < NOW() - INTERVAL '90 days' OR last_sign_in_at IS NULL) AND created_at < NOW() - INTERVAL '90 days' ORDER BY last_sign_in_at ASC NULLS FIRST LIMIT 50"
        },
        {
          name: 'Beta Users',
          description: 'All users in beta program',
          query: "SELECT id, email, display_name, tier, beta_user, created_at FROM user_profiles WHERE beta_user = true ORDER BY created_at DESC"
        },
        {
          name: 'Users by Tier',
          description: 'User distribution across tiers',
          query: "SELECT tier, COUNT(*) as user_count FROM user_profiles GROUP BY tier ORDER BY user_count DESC"
        }
      ]
    },
    analytics: {
      name: 'Analytics & Metrics',
      icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
      queries: [
        {
          name: 'Daily Active Users (7 days)',
          description: 'Daily login count for past week',
          query: "SELECT DATE(last_sign_in_at) as date, COUNT(DISTINCT id) as active_users FROM user_profiles WHERE last_sign_in_at > NOW() - INTERVAL '7 days' GROUP BY DATE(last_sign_in_at) ORDER BY date DESC"
        },
        {
          name: 'User Growth Rate',
          description: 'Weekly signup trends',
          query: "SELECT DATE_TRUNC('week', created_at) as week, COUNT(*) as new_users FROM user_profiles WHERE created_at > NOW() - INTERVAL '12 weeks' GROUP BY week ORDER BY week DESC"
        },
        {
          name: 'Tier Conversion Rate',
          description: 'Users who upgraded from free',
          query: "SELECT tier, COUNT(*) as count, ROUND(COUNT(*) * 100.0 / SUM(COUNT(*)) OVER (), 2) as percentage FROM user_profiles GROUP BY tier ORDER BY count DESC"
        },
        {
          name: 'Prompt Usage Statistics',
          description: 'Most used prompts across platform',
          query: "SELECT prompt_name, COUNT(*) as usage_count, COUNT(DISTINCT user_id) as unique_users FROM usage_history WHERE used_at > NOW() - INTERVAL '30 days' GROUP BY prompt_name ORDER BY usage_count DESC LIMIT 20"
        },
        {
          name: 'Platform Distribution',
          description: 'Usage across ChatGPT, Claude, Gemini',
          query: "SELECT platform, COUNT(*) as usage_count FROM usage_history WHERE used_at > NOW() - INTERVAL '30 days' GROUP BY platform ORDER BY usage_count DESC"
        },
        {
          name: 'User Retention (30 days)',
          description: 'Users who signed in after 30 days',
          query: "SELECT COUNT(*) as returning_users FROM user_profiles WHERE created_at < NOW() - INTERVAL '30 days' AND last_sign_in_at > NOW() - INTERVAL '7 days'"
        }
      ]
    },
    support: {
      name: 'Support Queries',
      icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z',
      queries: [
        {
          name: 'Users with Zero Prompts',
          description: 'Users who haven\'t created any prompts',
          query: "SELECT up.id, up.email, up.display_name, up.tier, up.created_at FROM user_profiles up LEFT JOIN prompts p ON up.id = p.user_id WHERE p.id IS NULL ORDER BY up.created_at DESC LIMIT 50"
        },
        {
          name: 'Users with Many Prompts',
          description: 'Power users with 50+ prompts',
          query: "SELECT up.id, up.email, up.display_name, up.tier, COUNT(p.id) as prompt_count FROM user_profiles up LEFT JOIN prompts p ON up.id = p.user_id GROUP BY up.id, up.email, up.display_name, up.tier HAVING COUNT(p.id) >= 50 ORDER BY prompt_count DESC"
        },
        {
          name: 'Recent Security Events',
          description: 'Last 50 security events',
          query: "SELECT se.id, se.event_type, se.severity, se.details, up.email, se.created_at FROM security_events se LEFT JOIN user_profiles up ON se.user_id = up.id ORDER BY se.created_at DESC LIMIT 50"
        },
        {
          name: 'Failed Login Attempts',
          description: 'Recent failed authentication',
          query: "SELECT user_id, event_type, COUNT(*) as attempt_count, MAX(created_at) as last_attempt FROM security_events WHERE event_type = 'failed_login' AND created_at > NOW() - INTERVAL '7 days' GROUP BY user_id, event_type ORDER BY attempt_count DESC LIMIT 50"
        },
        {
          name: 'Users Never Logged In',
          description: 'Accounts created but never used',
          query: "SELECT id, email, display_name, created_at FROM user_profiles WHERE last_sign_in_at IS NULL ORDER BY created_at DESC LIMIT 50"
        }
      ]
    },
    marketplace: {
      name: 'Marketplace',
      icon: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z',
      queries: [
        {
          name: 'Top Downloaded Prompts',
          description: 'Most popular marketplace prompts',
          query: "SELECT id, title, category, tier, downloads_count, created_at FROM marketplace_prompts ORDER BY downloads_count DESC LIMIT 20"
        },
        {
          name: 'Recent Marketplace Uploads',
          description: 'Latest prompts added to marketplace',
          query: "SELECT mp.id, mp.title, mp.category, mp.tier, up.email as uploader, mp.created_at FROM marketplace_prompts mp LEFT JOIN user_profiles up ON mp.user_id = up.id ORDER BY mp.created_at DESC LIMIT 50"
        },
        {
          name: 'Inactive Marketplace Prompts',
          description: 'Prompts pending review or deactivated',
          query: "SELECT id, title, category, tier, is_active, created_at FROM marketplace_prompts WHERE is_active = false ORDER BY created_at DESC LIMIT 50"
        },
        {
          name: 'Marketplace by Category',
          description: 'Prompt distribution by category',
          query: "SELECT category, COUNT(*) as prompt_count, AVG(downloads_count) as avg_downloads FROM marketplace_prompts WHERE is_active = true GROUP BY category ORDER BY prompt_count DESC"
        },
        {
          name: 'Zero Download Prompts',
          description: 'Prompts never downloaded',
          query: "SELECT id, title, category, tier, created_at FROM marketplace_prompts WHERE downloads_count = 0 OR downloads_count IS NULL ORDER BY created_at ASC LIMIT 50"
        }
      ]
    },
    dataIntegrity: {
      name: 'Data Integrity',
      icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
      queries: [
        {
          name: 'Orphaned Prompts',
          description: 'Prompts without valid user',
          query: "SELECT p.id, p.title, p.user_id, p.created_at FROM prompts p LEFT JOIN user_profiles up ON p.user_id = up.id WHERE up.id IS NULL LIMIT 50"
        },
        {
          name: 'Orphaned Folders',
          description: 'Folders without valid user',
          query: "SELECT f.id, f.name, f.user_id, f.created_at FROM folders f LEFT JOIN user_profiles up ON f.user_id = up.id WHERE up.id IS NULL LIMIT 50"
        },
        {
          name: 'Users with Duplicate Emails',
          description: 'Potential duplicate accounts',
          query: "SELECT email, COUNT(*) as count FROM user_profiles GROUP BY LOWER(email) HAVING COUNT(*) > 1"
        },
        {
          name: 'Recycle Bin Overflow',
          description: 'Items in recycle bin > 7 days',
          query: "SELECT rb.id, rb.item_type, up.email, rb.deleted_at, AGE(NOW(), rb.deleted_at) as age FROM recycle_bin rb LEFT JOIN user_profiles up ON rb.user_id = up.id WHERE rb.deleted_at < NOW() - INTERVAL '7 days' ORDER BY rb.deleted_at ASC LIMIT 100"
        },
        {
          name: 'Null Email Users',
          description: 'Users without email (data issue)',
          query: "SELECT id, display_name, created_at FROM user_profiles WHERE email IS NULL OR email = '' LIMIT 50"
        }
      ]
    },
    performance: {
      name: 'Performance',
      icon: 'M13 10V3L4 14h7v7l9-11h-7z',
      queries: [
        {
          name: 'Large Prompt Owners',
          description: 'Users with prompts > 10KB',
          query: "SELECT up.email, p.title, LENGTH(p.content) as size_bytes FROM prompts p JOIN user_profiles up ON p.user_id = up.id WHERE LENGTH(p.content) > 10000 ORDER BY size_bytes DESC LIMIT 50"
        },
        {
          name: 'Users Near Prompt Limit',
          description: 'Free users with 4-5 prompts',
          query: "SELECT up.id, up.email, up.tier, COUNT(p.id) as prompt_count FROM user_profiles up LEFT JOIN prompts p ON up.id = p.user_id WHERE up.tier = 'free' GROUP BY up.id, up.email, up.tier HAVING COUNT(p.id) >= 4 ORDER BY prompt_count DESC"
        },
        {
          name: 'Database Size by Table',
          description: 'Table size statistics',
          query: "SELECT 'user_profiles' as table_name, COUNT(*) as row_count FROM user_profiles UNION ALL SELECT 'prompts', COUNT(*) FROM prompts UNION ALL SELECT 'folders', COUNT(*) FROM folders UNION ALL SELECT 'marketplace_prompts', COUNT(*) FROM marketplace_prompts UNION ALL SELECT 'usage_history', COUNT(*) FROM usage_history ORDER BY row_count DESC"
        },
        {
          name: 'Usage History Volume',
          description: 'Usage tracking data size',
          query: "SELECT DATE_TRUNC('day', used_at) as date, COUNT(*) as events FROM usage_history WHERE used_at > NOW() - INTERVAL '30 days' GROUP BY date ORDER BY date DESC"
        }
      ]
    }
  }

  async function executeQuery() {
    if (!query.trim()) {
      setError('Please enter a query')
      return
    }

    setLoading(true)
    setError(null)
    setResults(null)

    try {
      await executeTableQuery()
    } catch (err) {
      setError(err.message)
      setQueryHistory([{ query, timestamp: new Date(), success: false, error: err.message }, ...queryHistory.slice(0, 19)])
    } finally {
      setLoading(false)
    }
  }

  async function executeTableQuery() {
    const trimmedQuery = query.trim()
    
    try {
      // For safety, only allow SELECT queries
      if (!trimmedQuery.toLowerCase().startsWith('select')) {
        throw new Error('Only SELECT queries are allowed for security reasons')
      }

      // Use RPC function for complex queries
      const { data, error: rpcError } = await supabase.rpc('execute_read_query', {
        query_text: trimmedQuery
      })

      if (rpcError) {
        // Fallback to simple table query parsing
        const selectMatch = trimmedQuery.match(/select\s+(.+?)\s+from\s+(\w+)/i)
        if (!selectMatch) {
          throw new Error('Invalid SELECT query format')
        }

        const columns = selectMatch[1].trim()
        const tableName = selectMatch[2].trim()

        let queryBuilder = supabase.from(tableName).select(columns)
        
        // Parse ORDER BY
        const orderMatch = trimmedQuery.match(/order\s+by\s+(\w+)(?:\s+(asc|desc))?/i)
        if (orderMatch) {
          const column = orderMatch[1]
          const direction = orderMatch[2]?.toLowerCase() !== 'desc'
          queryBuilder = queryBuilder.order(column, { ascending: direction })
        }
        
        // Parse LIMIT
        const limitMatch = trimmedQuery.match(/limit\s+(\d+)/i)
        if (limitMatch) {
          queryBuilder = queryBuilder.limit(parseInt(limitMatch[1]))
        }

        const { data: fallbackData, error: fallbackError } = await queryBuilder

        if (fallbackError) throw fallbackError
        
        setResults(fallbackData || [])
      } else {
        setResults(data || [])
      }
      
      setQueryHistory([{ query, timestamp: new Date(), success: true, resultCount: (data || []).length }, ...queryHistory.slice(0, 19)])
    } catch (err) {
      throw err
    }
  }

  function loadQuery(queryText) {
    setQuery(queryText)
    setError(null)
    setResults(null)
  }

  function exportResults() {
    if (!results || results.length === 0) return
    
    const csv = [
      Object.keys(results[0]).join(','),
      ...results.map(row => Object.values(row).map(val => 
        typeof val === 'string' ? `"${val.replace(/"/g, '""')}"` : val
      ).join(','))
    ].join('\n')
    
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `query-results-${Date.now()}.csv`
    a.click()
    URL.revokeObjectURL(url)
  }

  const categories = Object.keys(queryLibrary)
  const filteredCategories = selectedCategory === 'all' 
    ? categories 
    : [selectedCategory]

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Database Queries</h1>
        <p className="text-gray-500 mt-2">Execute queries and analyze your data</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Query Library Sidebar */}
        <div className="lg:col-span-1 space-y-4">
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
            <h2 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide">Query Library</h2>
            
            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="all">All Categories</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{queryLibrary[cat].name}</option>
              ))}
            </select>

            {/* Query Categories */}
            <div className="space-y-3 max-h-[calc(100vh-400px)] overflow-y-auto">
              {filteredCategories.map(categoryKey => {
                const category = queryLibrary[categoryKey]
                return (
                  <div key={categoryKey} className="border-b border-gray-200 pb-3 last:border-0">
                    <div className="flex items-center gap-2 mb-2">
                      <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={category.icon} />
                      </svg>
                      <h3 className="font-semibold text-xs text-gray-900">{category.name}</h3>
                    </div>
                    <div className="space-y-1">
                      {category.queries.map((q, idx) => (
                        <button
                          key={idx}
                          onClick={() => loadQuery(q.query)}
                          className="w-full text-left px-3 py-2 text-xs text-gray-700 hover:bg-purple-50 hover:text-purple-700 rounded-lg transition-all"
                          title={q.description}
                        >
                          {q.name}
                        </button>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
            <h3 className="text-sm font-bold text-gray-900 mb-3">Query History</h3>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {queryHistory.length === 0 ? (
                <p className="text-xs text-gray-500 text-center py-4">No queries yet</p>
              ) : (
                queryHistory.slice(0, 10).map((item, index) => (
                  <div
                    key={index}
                    className={`p-2 rounded-lg text-xs cursor-pointer transition-all ${
                      item.success
                        ? 'bg-green-50 border border-green-200 hover:bg-green-100'
                        : 'bg-red-50 border border-red-200 hover:bg-red-100'
                    }`}
                    onClick={() => loadQuery(item.query)}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-gray-500">{item.timestamp.toLocaleTimeString()}</span>
                      {item.success && item.resultCount !== undefined && (
                        <span className="text-green-700 font-semibold">{item.resultCount} rows</span>
                      )}
                    </div>
                    <p className="font-mono truncate text-gray-700">{item.query.substring(0, 40)}...</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Main Query Area */}
        <div className="lg:col-span-3 space-y-6">
          {/* Query Editor */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">SQL Query Editor</h2>
              <div className="flex gap-2">
                {results && results.length > 0 && (
                  <button
                    onClick={exportResults}
                    className="px-4 py-2 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Export CSV
                  </button>
                )}
                <button
                  onClick={executeQuery}
                  disabled={loading || !query.trim()}
                  className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all flex items-center gap-2 text-sm"
                >
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      <span>Running...</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Execute</span>
                    </>
                  )}
                </button>
              </div>
            </div>
            <textarea
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="SELECT * FROM user_profiles ORDER BY created_at DESC LIMIT 10"
              className="w-full h-40 p-4 font-mono text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <p className="text-xs text-gray-500 mt-2 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              Only SELECT queries are allowed for security
            </p>
          </div>

          {/* Error Display */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-red-900">Query Error</h3>
                  <p className="text-sm text-red-700 mt-1">{error}</p>
                </div>
              </div>
            </div>
          )}

          {/* Results Display */}
          {results && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200 flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">Query Results</h2>
                  <p className="text-sm text-gray-500 mt-1">{results.length} rows returned</p>
                </div>
              </div>
              <div className="overflow-x-auto">
                {results.length > 0 ? (
                  <table className="w-full">
                    <thead className="bg-gray-50 sticky top-0">
                      <tr>
                        {Object.keys(results[0]).map((key) => (
                          <th key={key} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                            {key}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {results.map((row, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          {Object.values(row).map((value, i) => (
                            <td key={i} className="px-6 py-4 text-sm text-gray-900 max-w-xs truncate" title={String(value)}>
                              {value === null ? (
                                <span className="text-gray-400 italic">null</span>
                              ) : typeof value === 'object' ? (
                                <span className="font-mono text-xs">{JSON.stringify(value)}</span>
                              ) : typeof value === 'boolean' ? (
                                <span className={`px-2 py-1 rounded text-xs font-medium ${value ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
                                  {value ? 'true' : 'false'}
                                </span>
                              ) : (
                                String(value)
                              )}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <div className="p-6 text-center text-gray-500">No results found</div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
