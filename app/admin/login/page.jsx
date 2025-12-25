// DESTINATION: /app/admin/login/page.jsx

'use client'

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { supabase } from '../../../lib/supabase'

export default function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()

  const handleLogin = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const { data, error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (signInError) throw signInError

      const { data: profile } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', data.user.id)
        .single()

      if (profile && profile.role !== 'admin') {
        await supabase.auth.signOut()
        throw new Error('You do not have admin access')
      }

      const redirectTo = searchParams.get('redirectedFrom') || '/admin'
      router.push(redirectTo)
      router.refresh()
    } catch (error) {
      setError(error.message || 'Failed to sign in')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 flex items-center justify-center px-6">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-xl">
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl mb-4 shadow-lg shadow-purple-600/25">AC</div>
            <h1 className="font-bold text-2xl text-gray-900">AI ChatWorks</h1>
            <p className="text-gray-500 mt-1">Admin Dashboard</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all"
                placeholder="admin@ai-chatworks.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all"
                placeholder="••••••••"
                required
              />
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">{error}</div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 disabled:opacity-50 transition-all shadow-lg shadow-purple-600/25"
            >
              {loading ? 'Signing in...' : 'Sign In to Admin'}
            </button>
          </form>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">🔒 Protected by Supabase Auth + RLS</p>
        </div>
      </div>
    </div>
  )
}
