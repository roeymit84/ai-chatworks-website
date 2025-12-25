import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

export async function middleware(req) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  // Only protect /admin routes
  if (req.nextUrl.pathname.startsWith('/admin')) {
    // Don't protect the login page itself
    if (req.nextUrl.pathname === '/admin/login') {
      return res
    }

    // Check if user is authenticated
    const {
      data: { session },
    } = await supabase.auth.getSession()

    if (!session) {
      // Redirect to login page
      const redirectUrl = req.nextUrl.clone()
      redirectUrl.pathname = '/admin/login'
      redirectUrl.searchParams.set('redirectedFrom', req.nextUrl.pathname)
      return NextResponse.redirect(redirectUrl)
    }

    // Optional: Check if user has admin role
    // Your RLS policies should handle this, but double-check here
    const { data: profile } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', session.user.id)
      .single()

    if (profile?.role !== 'admin') {
      return new NextResponse(
        JSON.stringify({ error: 'Unauthorized - Admin access required' }),
        { status: 403, headers: { 'content-type': 'application/json' } }
      )
    }
  }

  return res
}

export const config = {
  matcher: '/admin/:path*',
}
