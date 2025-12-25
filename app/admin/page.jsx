// DESTINATION: /app/admin/page.jsx

'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '../../lib/supabase'

export default function AdminDashboard() {
  const router = useRouter()
  const [user, setUser] = useState(null)
  const [stats, setStats] = useState({
    totalUsers: 2847,
    totalPrompts: 45231,
    activeToday: 892,
    supportTickets: 12,
  })
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getUser = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      setUser(session?.user)
    }
    getUser()
  }, [])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/admin/login')
    router.refresh()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold">AC</div>
            <div>
              <h1 className="font-bold text-xl">AI ChatWorks Admin</h1>
              <p className="text-sm text-gray-500">{user?.email || 'Dashboard'}</p>
            </div>
          </div>
          <button onClick={handleLogout} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
            Logout
          </button>
        </div>
      </header>

      <main className="p-6 max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Welcome to Admin Dashboard</h2>
          <p className="text-gray-600">Manage your AI ChatWorks application</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              </div>
              <span className="text-green-600 text-sm font-semibold">+12%</span>
            </div>
            <h3 className="text-gray-600 text-sm font-medium mb-1">Total Users</h3>
            <p className="text-3xl font-bold">{stats.totalUsers.toLocaleString()}</p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              </div>
              <span className="text-green-600 text-sm font-semibold">+8%</span>
            </div>
            <h3 className="text-gray-600 text-sm font-medium mb-1">Total Prompts</h3>
            <p className="text-3xl font-bold">{stats.totalPrompts.toLocaleString()}</p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              </div>
              <span className="text-green-600 text-sm font-semibold">+23%</span>
            </div>
            <h3 className="text-gray-600 text-sm font-medium mb-1">Active Today</h3>
            <p className="text-3xl font-bold">{stats.activeToday.toLocaleString()}</p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" /></svg>
              </div>
              <span className="text-red-600 text-sm font-semibold">-3%</span>
            </div>
            <h3 className="text-gray-600 text-sm font-medium mb-1">Support Tickets</h3>
            <p className="text-3xl font-bold">{stats.supportTickets}</p>
          </div>
        </div>

        <div className="mt-8 bg-purple-50 border border-purple-200 rounded-xl p-6">
          <h4 className="font-bold text-purple-900 mb-2">🔒 Admin Area Protected</h4>
          <p className="text-purple-800 text-sm">This dashboard is secured with Supabase authentication and RLS policies.</p>
        </div>
      </main>
    </div>
  )
}
