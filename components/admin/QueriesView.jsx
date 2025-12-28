'use client'

import { useState } from 'react'

export default function QueriesView({ supabase }) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [queryHistory, setQueryHistory] = useState([])

  // Pre-defined safe queries
  const sampleQueries = [
    {
      name: 'All Users',
      query: 'SELECT id, email, display_name, tier, role, beta_user, created_at FROM user_profiles ORDER BY created_at DESC LIMIT 50'
    },
    {
      name: 'Recent Prompts',
      query: 'SELECT id, user_id, title, created_at, updated_at FROM prompts ORDER BY updated_at DESC LIMIT 50'
    },
    {
      name: 'User Statistics',
      query: 'SELECT COUNT(*) as total_users, COUNT(CASE WHEN created_at > NOW() - INTERVAL \'7 days\' THEN 1 END) as new_users_7d, COUNT(CASE WHEN beta_user = true THEN 1 END) as beta_users FROM user_profiles'
    },
    {
      name: 'Marketplace Prompts',
      query: 'SELECT id, title, category, tier, downloads_count, is_active, created_at FROM marketplace_prompts ORDER BY created_at DESC LIMIT 50'
    },
    {
      name: 'Usage History',
      query: 'SELECT id, user_id, prompt_name, platform, used_at FROM usage_history ORDER BY used_at DESC LIMIT 50'
    },
    {
      name: 'Security Events',
      query: 'SELECT id, user_id, event_type, severity, created_at FROM security_events ORDER BY created_at DESC LIMIT 50'
    }
  ]

  async function executeQuery() {
    if (!query.trim()) {
      setError('Please enter a query')
      return
    }

    setLoading(true)
    setError(null)
    setResults(null)

    try {
      // Use Supabase RPC to execute raw SQL (requires a database function)
      // For safety, you should create a secure RPC function in Supabase
      const { data, error: queryError } = await supabase.rpc('execute_admin_query', {
        query_text: query
      })

      if (queryError) {
        // If RPC doesn't exist, try parsing as a SELECT query for specific tables
        if (queryError.message.includes('execute_admin_query')) {
          await executeTableQuery()
          return
        }
        throw queryError
      }

      setResults(data)
      setQueryHistory([{ query, timestamp: new Date(), success: true }, ...queryHistory.slice(0, 9)])
    } catch (err) {
      setError(err.message)
      setQueryHistory([{ query, timestamp: new Date(), success: false, error: err.message }, ...queryHistory.slice(0, 9)])
    } finally {
      setLoading(false)
    }
  }

  async function executeTableQuery() {
    // Parse simple SELECT queries and execute them using Supabase client
    const trimmedQuery = query.trim().toLowerCase()
    
    try {
      let tableName = ''
      let columns = '*'
      
      // Simple parser for SELECT queries
      const selectMatch = trimmedQuery.match(/select\s+(.+?)\s+from\s+(\w+)/i)
      if (selectMatch) {
        columns = selectMatch[1].trim()
        tableName = selectMatch[2].trim()
      } else {
        throw new Error('Only SELECT queries are supported in this interface')
      }

      // Build query
      let queryBuilder = supabase.from(tableName).select(columns)
      
      // Check for ORDER BY
      const orderMatch = trimmedQuery.match(/order\s+by\s+(\w+)(?:\s+(asc|desc))?/i)
      if (orderMatch) {
        const column = orderMatch[1]
        const direction = orderMatch[2] === 'asc'
        queryBuilder = queryBuilder.order(column, { ascending: direction })
      }
      
      // Check for LIMIT
      const limitMatch = trimmedQuery.match(/limit\s+(\d+)/i)
      if (limitMatch) {
        queryBuilder = queryBuilder.limit(parseInt(limitMatch[1]))
      }

      const { data, error: queryError } = await queryBuilder

      if (queryError) throw queryError

      setResults(data)
      setQueryHistory([{ query, timestamp: new Date(), success: true }, ...queryHistory.slice(0, 9)])
    } catch (err) {
      setError(err.message)
      setQueryHistory([{ query, timestamp: new Date(), success: false, error: err.message }, ...queryHistory.slice(0, 9)])
    } finally {
      setLoading(false)
    }
  }

  function loadSampleQuery(sampleQuery) {
    setQuery(sampleQuery.query)
    setError(null)
    setResults(null)
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Database Queries</h1>
        <p className="text-gray-500 mt-2">Execute queries and view results</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Query Editor */}
        <div className="lg:col-span-2 space-y-6">
          {/* Sample Queries */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Sample Queries</h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
              {sampleQueries.map((sq, index) => (
                <button
                  key={index}
                  onClick={() => loadSampleQuery(sq)}
                  className="px-4 py-2 text-sm text-left text-purple-600 hover:bg-purple-50 rounded-lg border border-purple-200 transition-all"
                >
                  {sq.name}
                </button>
              ))}
            </div>
          </div>

          {/* Query Input */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">SQL Query</h2>
              <button
                onClick={executeQuery}
                disabled={loading || !query.trim()}
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all flex items-center gap-2"
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
            <textarea
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="SELECT * FROM user_profiles LIMIT 10"
              className="w-full h-40 p-4 font-mono text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <p className="text-xs text-gray-500 mt-2">
              ⚠️ Only SELECT queries are supported for security reasons
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
                <h2 className="text-lg font-semibold text-gray-900">Query Results</h2>
                <span className="text-sm text-gray-500">{results.length} rows</span>
              </div>
              <div className="overflow-x-auto">
                {results.length > 0 ? (
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        {Object.keys(results[0]).map((key) => (
                          <th key={key} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            {key}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {results.map((row, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          {Object.values(row).map((value, i) => (
                            <td key={i} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              {typeof value === 'object' ? JSON.stringify(value) : String(value)}
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

        {/* Query History Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 sticky top-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Query History</h2>
            <div className="space-y-3">
              {queryHistory.length === 0 ? (
                <p className="text-sm text-gray-500 text-center py-8">No queries yet</p>
              ) : (
                queryHistory.map((item, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-lg border cursor-pointer transition-all ${
                      item.success
                        ? 'border-green-200 bg-green-50 hover:bg-green-100'
                        : 'border-red-200 bg-red-50 hover:bg-red-100'
                    }`}
                    onClick={() => setQuery(item.query)}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`w-2 h-2 rounded-full ${item.success ? 'bg-green-500' : 'bg-red-500'}`}></div>
                      <span className="text-xs text-gray-500">
                        {item.timestamp.toLocaleTimeString()}
                      </span>
                    </div>
                    <p className="text-xs font-mono text-gray-700 truncate">{item.query}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
