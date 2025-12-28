'use client'

import { useState, useEffect } from 'react'

export default function MarketplaceView({ supabase, user }) {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedItem, setSelectedItem] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [filter, setFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetchMarketplaceItems()
  }, [filter])

  async function fetchMarketplaceItems() {
    try {
      let query = supabase
        .from('marketplace_prompts')
        .select('*, user_profiles(email, display_name)')
        .order('created_at', { ascending: false })

      if (filter !== 'all') {
        query = query.eq('category', filter)
      }

      const { data, error } = await query

      if (error) throw error
      setItems(data || [])
    } catch (error) {
      console.error('Error fetching marketplace prompts:', error)
    } finally {
      setLoading(false)
    }
  }

  async function handleApprove(itemId) {
    try {
      const { error } = await supabase
        .from('marketplace_prompts')
        .update({ is_active: true })
        .eq('id', itemId)

      if (error) throw error
      
      await fetchMarketplaceItems()
      alert('Prompt approved and activated successfully')
    } catch (error) {
      console.error('Error approving prompt:', error)
      alert('Failed to approve prompt')
    }
  }

  async function handleReject(itemId) {
    try {
      const { error } = await supabase
        .from('marketplace_prompts')
        .update({ is_active: false })
        .eq('id', itemId)

      if (error) throw error
      
      await fetchMarketplaceItems()
      alert('Prompt deactivated')
    } catch (error) {
      console.error('Error deactivating prompt:', error)
      alert('Failed to deactivate prompt')
    }
  }

  async function handleDelete(itemId) {
    if (!confirm('Are you sure you want to delete this prompt?')) return

    try {
      const { error } = await supabase
        .from('marketplace_prompts')
        .delete()
        .eq('id', itemId)

      if (error) throw error
      
      await fetchMarketplaceItems()
      setShowModal(false)
      alert('Prompt deleted successfully')
    } catch (error) {
      console.error('Error deleting prompt:', error)
      alert('Failed to delete prompt')
    }
  }

  const filteredItems = items.filter(item => {
    if (!searchTerm) return true
    return item.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
           item.description?.toLowerCase().includes(searchTerm.toLowerCase())
  })

  const stats = {
    total: items.length,
    active: items.filter(i => i.is_active === true).length,
    inactive: items.filter(i => i.is_active === false).length,
    premium: items.filter(i => i.tier === 'premium').length
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </div>
    )
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Marketplace Management</h1>
        <p className="text-gray-500 mt-2">Review and manage marketplace items</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {[
          { label: 'Total Prompts', value: stats.total, color: 'purple' },
          { label: 'Active', value: stats.active, color: 'green' },
          { label: 'Inactive', value: stats.inactive, color: 'gray' },
          { label: 'Premium Tier', value: stats.premium, color: 'yellow' }
        ].map((stat, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
            <p className={`text-3xl font-bold text-${stat.color}-600`}>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {['all', 'productivity', 'writing', 'coding', 'creative', 'analysis'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  filter === f
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div key={item.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
            {/* Item Header */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    {item.tier && (
                      <span className={`px-2 py-0.5 text-xs font-medium rounded ${
                        item.tier === 'premium' ? 'bg-yellow-100 text-yellow-700' :
                        item.tier === 'pro' ? 'bg-blue-100 text-blue-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {item.tier}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-gray-500">{item.category}</p>
                </div>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  item.is_active ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                }`}>
                  {item.is_active ? 'Active' : 'Inactive'}
                </span>
              </div>
              <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>
            </div>

            {/* Item Details */}
            <div className="p-6 bg-gray-50">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Creator:</span>
                  <span className="text-gray-900 font-medium">
                    {item.user_profiles?.display_name || item.user_profiles?.email || 'Unknown'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Downloads:</span>
                  <span className="text-gray-900 font-semibold">{item.downloads_count || 0}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Created:</span>
                  <span className="text-gray-900">{new Date(item.created_at).toLocaleDateString()}</span>
                </div>
                {item.tags && item.tags.length > 0 && (
                  <div className="pt-2 border-t border-gray-200">
                    <div className="flex flex-wrap gap-1">
                      {item.tags.map((tag, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => {
                    setSelectedItem(item)
                    setShowModal(true)
                  }}
                  className="flex-1 px-3 py-2 text-sm bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all"
                >
                  View Details
                </button>
                {!item.is_active ? (
                  <button
                    onClick={() => handleApprove(item.id)}
                    className="px-3 py-2 text-sm bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all"
                    title="Activate"
                  >
                    ✓
                  </button>
                ) : (
                  <button
                    onClick={() => handleReject(item.id)}
                    className="px-3 py-2 text-sm bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-all"
                    title="Deactivate"
                  >
                    ⏸
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No items found</p>
        </div>
      )}

      {/* Detail Modal */}
      {showModal && selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between sticky top-0 bg-white">
              <h2 className="text-2xl font-bold text-gray-900">{selectedItem.title}</h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <label className="text-sm font-medium text-gray-700">Description</label>
                <p className="mt-1 text-gray-600">{selectedItem.description}</p>
              </div>

              {selectedItem.content && (
                <div>
                  <label className="text-sm font-medium text-gray-700">Content</label>
                  <div className="mt-1 p-4 bg-gray-50 rounded-lg font-mono text-sm text-gray-800 whitespace-pre-wrap">
                    {selectedItem.content}
                  </div>
                </div>
              )}

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">Category</label>
                  <p className="mt-1 text-gray-900">{selectedItem.category}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Status</label>
                  <p className="mt-1">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      selectedItem.is_active ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                    }`}>
                      {selectedItem.is_active ? 'Active' : 'Inactive'}
                    </span>
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Tier</label>
                  <p className="mt-1">
                    <span className={`px-2 py-1 text-xs font-medium rounded ${
                      selectedItem.tier === 'premium' ? 'bg-yellow-100 text-yellow-700' :
                      selectedItem.tier === 'pro' ? 'bg-blue-100 text-blue-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {selectedItem.tier || 'free'}
                    </span>
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Downloads</label>
                  <p className="mt-1 text-gray-900 font-semibold">{selectedItem.downloads_count || 0}</p>
                </div>
              </div>

              <div className="flex gap-3 pt-4 border-t border-gray-200">
                {!selectedItem.is_active ? (
                  <button
                    onClick={() => {
                      handleApprove(selectedItem.id)
                      setShowModal(false)
                    }}
                    className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all"
                  >
                    Activate
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      handleReject(selectedItem.id)
                      setShowModal(false)
                    }}
                    className="flex-1 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-all"
                  >
                    Deactivate
                  </button>
                )}
                <button
                  onClick={() => handleDelete(selectedItem.id)}
                  className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-all"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
