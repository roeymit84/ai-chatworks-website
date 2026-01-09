'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const isActive = (path) => pathname === path

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <img 
              alt="AI ChatWorks" 
              loading="lazy" 
              width="32" 
              height="32" 
              decoding="async" 
              className="w-8 h-8" 
              src="/images/AI_ChatWorks.svg"
            />
            <span className="text-xl font-bold text-brand-dark">AI ChatWorks</span>
          </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-brand-gray">
          {/* Features Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-brand-purple transition-colors">
              Features
              <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* Dropdown Menu */}
            <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-brand-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="py-2">
                <Link 
                  href="/features/prompt-library"
                  className="flex items-start gap-3 px-4 py-3 hover:bg-brand-surface transition-colors"
                >
                  <svg className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m16 6 4 14"></path>
                    <path d="M12 6v14"></path>
                    <path d="M8 8v12"></path>
                    <path d="M4 4v16"></path>
                  </svg>
                  <div>
                    <div className="font-semibold text-brand-dark">Prompt Library</div>
                    <div className="text-xs text-brand-slate">Organize your AI prompts</div>
                  </div>
                </Link>
                
                <Link 
                  href="/features/marketplace"
                  className="flex items-start gap-3 px-4 py-3 hover:bg-brand-surface transition-colors"
                >
                  <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M2.7,9.45a4.235,4.235,0,0,0,.3.3V22a1,1,0,0,0,1,1H20a1,1,0,0,0,1-1V9.752a4.235,4.235,0,0,0,.3-.3,4,4,0,0,0,.731-3.456L20.97,1.758A1,1,0,0,0,20,1H4a1,1,0,0,0-.97.758L1.972,5.994A4,4,0,0,0,2.7,9.45ZM13,21H11V16h2Zm6,0H15V15a1,1,0,0,0-1-1H10a1,1,0,0,0-1,1v6H5V10.9A3.989,3.989,0,0,0,8.914,9.61c.026.03.053.059.08.089A4.086,4.086,0,0,0,12.041,11a4.039,4.039,0,0,0,2.965-1.3c.027-.03.054-.059.08-.089A3.989,3.989,0,0,0,19,10.9ZM3.911,6.479,4.781,3H19.219l.87,3.479A2.029,2.029,0,0,1,18.12,9,2.041,2.041,0,0,1,16.1,7.14l-.042-.5a1,1,0,0,0-1.993.166v0a2.006,2.006,0,0,1-.529,1.539A2.059,2.059,0,0,1,11.959,9,2.029,2.029,0,0,1,9.937,6.806v0a1,1,0,0,0-.914-1.079.989.989,0,0,0-1.079.913l-.042.5A2.041,2.041,0,0,1,5.88,9,2.029,2.029,0,0,1,3.911,6.479Z"></path>
                  </svg>
                  <div>
                    <div className="font-semibold text-brand-dark">Marketplace</div>
                    <div className="text-xs text-brand-slate">Browse curated prompts</div>
                  </div>
                </Link>
                
                <Link 
                  href="/features/flow"
                  className="flex items-start gap-3 px-4 py-3 hover:bg-brand-surface transition-colors"
                >
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 12C3 12 5.5 7 9 7C12.5 7 12.5 17 16 17C19.5 17 22 12 22 12"></path>
                  </svg>
                  <div>
                    <div className="font-semibold text-brand-dark">Flow</div>
                    <div className="text-xs text-brand-slate">Command palette power</div>
                  </div>
                </Link>

                <div className="h-px bg-brand-border my-2"></div>
                
                <Link 
                  href="/changelog"
                  className="flex items-start gap-3 px-4 py-3 hover:bg-brand-surface transition-colors"
                >
                  <svg className="w-5 h-5 text-brand-gray flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <div>
                    <div className="font-semibold text-brand-dark">Changelog</div>
                    <div className="text-xs text-brand-slate">What's new</div>
                  </div>
                </Link>
                
                <Link 
                  href="/roadmap"
                  className="flex items-start gap-3 px-4 py-3 hover:bg-brand-surface transition-colors"
                >
                  <svg className="w-5 h-5 text-brand-gray flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-brand-dark">Roadmap</div>
                    <div className="text-xs text-brand-slate">Coming next</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <Link 
            href="/#pricing" 
            className={`hover:text-brand-purple transition-colors ${pathname.includes('#pricing') ? 'text-brand-purple font-bold' : ''}`}
          >
            Pricing
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
            Contact
          </Link>
          
          <div className="h-4 w-px bg-gray-200"></div>
          
          <a 
            href="https://chromewebstore.google.com/detail/ai-chatworks/legmkjenpjbcgmmifpdhehgbmbkofmmc" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-brand-purple text-white rounded-lg font-semibold hover:bg-brand-purpleDark shadow-lg shadow-brand-purple/25 transition-all"
          >
            <svg className="w-5 h-5" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
              <ellipse cx="50" cy="50" rx="20" ry="20" style={{fill:"#188FD1"}}/>
              <path d="M 8.5,26 A 48,48 0 0 1 91.5,26 L 62,29.5 A 24,24 0 0 0 26,50 z" style={{fill:"#EA3939"}}/>
              <path d="M 50,98 A 48,48 0 0 1 8.5,26 L 26,50 A 24,24 0 0 0 62,70.5 z" style={{fill:"#4AAE48"}}/>
              <path d="M 91.5,26 A 48,48 0 0 1 50,98 L 62,70.5 A 24,24 0 0 0 62,29.5 z" style={{fill:"#FED14B"}}/>
            </svg>
            Add to Chrome
          </a>
        </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-brand-gray hover:text-brand-purple transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-brand-border pt-4 space-y-3">
            <div className="space-y-2">
              <div className="font-semibold text-brand-purple mb-2">Features</div>
              <Link 
                href="/features/prompt-library" 
                className="block pl-4 py-2 text-sm text-brand-gray hover:text-brand-purple"
                onClick={() => setMobileMenuOpen(false)}
              >
                Prompt Library
              </Link>
              <Link 
                href="/features/marketplace" 
                className="block pl-4 py-2 text-sm text-brand-gray hover:text-brand-purple"
                onClick={() => setMobileMenuOpen(false)}
              >
                Marketplace
              </Link>
              <Link 
                href="/features/flow" 
                className="block pl-4 py-2 text-sm text-brand-gray hover:text-brand-purple"
                onClick={() => setMobileMenuOpen(false)}
              >
                Flow
              </Link>
              <Link 
                href="/changelog" 
                className="block pl-4 py-2 text-sm text-brand-gray hover:text-brand-purple"
                onClick={() => setMobileMenuOpen(false)}
              >
                Changelog
              </Link>
              <Link 
                href="/roadmap" 
                className="block pl-4 py-2 text-sm text-brand-gray hover:text-brand-purple"
                onClick={() => setMobileMenuOpen(false)}
              >
                Roadmap
              </Link>
            </div>
            
            <Link 
              href="/#pricing" 
              className="block py-2 text-sm text-brand-gray hover:text-brand-purple"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              href="/about" 
              className="block py-2 text-sm text-brand-gray hover:text-brand-purple"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="block py-2 text-sm text-brand-gray hover:text-brand-purple"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            
            <a 
              href="https://chromewebstore.google.com/detail/ai-chatworks/legmkjenpjbcgmmifpdhehgbmbkofmmc" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-brand-purple text-white rounded-lg font-semibold hover:bg-brand-purpleDark shadow-lg transition-all mt-4"
            >
              <svg className="w-5 h-5" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
                <ellipse cx="50" cy="50" rx="20" ry="20" style={{fill:"#188FD1"}}/>
                <path d="M 8.5,26 A 48,48 0 0 1 91.5,26 L 62,29.5 A 24,24 0 0 0 26,50 z" style={{fill:"#EA3939"}}/>
                <path d="M 50,98 A 48,48 0 0 1 8.5,26 L 26,50 A 24,24 0 0 0 62,70.5 z" style={{fill:"#4AAE48"}}/>
                <path d="M 91.5,26 A 48,48 0 0 1 50,98 L 62,70.5 A 24,24 0 0 0 62,29.5 z" style={{fill:"#FED14B"}}/>
              </svg>
              Add to Chrome
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
