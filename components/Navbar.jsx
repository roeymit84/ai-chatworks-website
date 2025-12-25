'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const isActive = (path) => pathname === path

  return (
    <nav className="fixed w-full z-50 glass-panel">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image 
            src="/images/AI_ChatWorks.svg" 
            alt="AI ChatWorks" 
            width={40} 
            height={40}
            className="w-10 h-10"
            onError={(e) => { e.target.style.display = 'none' }}
          />
          <span className="font-bold text-2xl tracking-tight">AI ChatWorks</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-brand-gray">
          <Link 
            href="/" 
            className={`hover:text-brand-purple transition-colors ${isActive('/') ? 'text-brand-purple font-bold' : ''}`}
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className={`hover:text-brand-purple transition-colors ${isActive('/about') ? 'text-brand-purple font-bold' : ''}`}
          >
            About
          </Link>
          <Link 
            href="/contact" 
            className={`hover:text-brand-purple transition-colors ${isActive('/contact') ? 'text-brand-purple font-bold' : ''}`}
          >
            Contact us
          </Link>
          
          <div className="h-4 w-px bg-gray-200"></div>
          
          <a 
            href="https://chromewebstore.google.com/detail/ai-chatworks/legmkjenpjbcgmmifpdhehgbmbkofmmc" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-brand-purple text-white rounded-lg font-semibold hover:bg-brand-purpleDark shadow-lg shadow-brand-purple/25 transition-all"
          >
            Add to Chrome
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-brand-border py-4 px-6 space-y-4">
          <Link 
            href="/" 
            onClick={() => setMobileMenuOpen(false)}
            className={`block py-2 hover:text-brand-purple transition-colors ${isActive('/') ? 'text-brand-purple font-bold' : ''}`}
          >
            Home
          </Link>
          <Link 
            href="/about" 
            onClick={() => setMobileMenuOpen(false)}
            className={`block py-2 hover:text-brand-purple transition-colors ${isActive('/about') ? 'text-brand-purple font-bold' : ''}`}
          >
            About
          </Link>
          <Link 
            href="/contact" 
            onClick={() => setMobileMenuOpen(false)}
            className={`block py-2 hover:text-brand-purple transition-colors ${isActive('/contact') ? 'text-brand-purple font-bold' : ''}`}
          >
            Contact us
          </Link>
          <a 
            href="https://chromewebstore.google.com/detail/ai-chatworks/legmkjenpjbcgmmifpdhehgbmbkofmmc" 
            target="_blank"
            rel="noopener noreferrer"
            className="block py-2 text-brand-purple font-semibold"
          >
            Add to Chrome
          </a>
        </div>
      )}
    </nav>
  )
}
