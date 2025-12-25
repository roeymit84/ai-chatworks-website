// DESTINATION: /lib/supabase.js

import { createClient } from '@supabase/supabase-js'

// Client for all Supabase operations
// Uses anon key + RLS (Row Level Security) for data protection
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)
