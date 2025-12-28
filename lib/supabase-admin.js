import { createClient } from '@supabase/supabase-js'

/**
 * Creates a Supabase client specifically for admin operations
 * Uses a dedicated admin publishable key with elevated permissions
 */
export function createAdminClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAdminKey = process.env.NEXT_PUBLIC_SUPABASE_ADMIN_KEY
  
  if (!supabaseUrl || !supabaseAdminKey) {
    throw new Error('Missing Supabase admin credentials')
  }

  return createClient(supabaseUrl, supabaseAdminKey, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true
    }
  })
}

/**
 * Hook to use admin Supabase client in client components
 */
export function useAdminSupabase() {
  return createAdminClient()
}
