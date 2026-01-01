// BetaModal.jsx
// Ultra-compact 650x650px modal - minimal spacing, tight layout
// Place in: /components/BetaModal.jsx

import { useEffect } from 'react'

export default function BetaModal({ isOpen, onClose }) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      window.addEventListener('keydown', handleEsc)
      return () => window.removeEventListener('keydown', handleEsc)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      
      {/* Modal Container - FIXED 650x650px */}
      <div 
        className="relative bg-white rounded-2xl shadow-2xl animate-scale-in flex flex-col"
        style={{ width: '650px', height: '650px' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors duration-200 group z-10"
          aria-label="Close modal"
        >
          <svg className="w-4 h-4 text-gray-400 group-hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header - Compact */}
        <div className="px-6 pt-6 pb-4 border-b border-gray-200">
          <div className="flex items-center gap-2 mb-2">
            <div className="px-2 py-0.5 bg-yellow-50 border border-yellow-200 rounded text-[10px] font-bold text-yellow-800">
              BETA
            </div>
            <div className="px-2 py-0.5 bg-purple-50 border border-purple-200 rounded text-[10px] font-semibold text-purple-700">
              Limited Time
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-1">Join the Beta Program</h2>
          <p className="text-sm text-gray-600">Get started with AI ChatWorks in 4 simple steps</p>
        </div>

        {/* Content - Ultra Compact */}
        <div className="flex-1 px-6 py-4 overflow-hidden">
          {/* Steps - Minimal */}
          <div className="space-y-2 mb-4">
            {/* Step 1 */}
            <div className="flex items-center gap-2.5 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
              <div className="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded bg-white border border-purple-200 text-purple-600 font-bold text-sm">
                1
              </div>
              <svg className="w-4 h-4 text-gray-700 flex-shrink-0" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="50" cy="50" rx="20" ry="20" fill="#188FD1" />
                <path d="M 8.5,26 A 48,48 0 0 1 91.5,26 L 62,29.5 A 24,24 0 0 0 26,50 z" fill="#EA3939" />
                <path d="M 50,98 A 48,48 0 0 1 8.5,26 L 26,50 A 24,24 0 0 0 62,70.5 z" fill="#4AAE48" />
                <path d="M 91.5,26 A 48,48 0 0 1 50,98 L 62,70.5 A 24,24 0 0 0 62,29.5 z" fill="#FED14B" />
              </svg>
              <span className="text-base font-semibold text-gray-900">Download from Chrome Store</span>
            </div>

            {/* Step 2 */}
            <div className="flex items-center gap-2.5 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
              <div className="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded bg-white border border-purple-200 text-purple-600 font-bold text-sm">
                2
              </div>
              <svg className="w-4 h-4 text-gray-700 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="text-base font-semibold text-gray-900">Create Your Account</span>
            </div>

            {/* Step 3 */}
            <div className="flex items-center gap-2.5 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
              <div className="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded bg-white border border-purple-200 text-purple-600 font-bold text-sm">
                3
              </div>
              <svg className="w-4 h-4 text-gray-700 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-base font-semibold text-gray-900">Consent to Beta Terms</span>
            </div>

            {/* Step 4 */}
            <div className="flex items-center gap-2.5 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
              <div className="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded bg-white border border-purple-200 text-purple-600 font-bold text-sm">
                4
              </div>
              <svg className="w-4 h-4 text-gray-700 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-base font-semibold text-gray-900">Start Using AI ChatWorks</span>
            </div>
          </div>

          {/* Benefits Box - Compact */}
          <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
            <h3 className="text-sm font-semibold text-gray-900 mb-2">What You Get as a Beta User</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-emerald-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-xs text-gray-700">25 saved prompts</span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-emerald-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-xs text-gray-700">5 organized folders</span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-emerald-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-xs text-gray-700">Automatic cloud sync</span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-emerald-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-xs text-gray-700">4 export formats</span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-emerald-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-xs text-gray-700">Marketplace access</span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-emerald-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-xs text-gray-700">Priority support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer - Compact */}
        <div className="px-6 pb-6">
          <div className="flex gap-3 mb-2">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-2.5 bg-white border-2 border-gray-300 text-gray-700 rounded-lg font-semibold text-sm hover:bg-gray-50 hover:border-gray-400 transition-all duration-200"
            >
              Cancel
            </button>
            <a
              href="https://chromewebstore.google.com/detail/ai-chatworks/legmkjenpjbcgmmifpdhehgbmbkofmmc"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 shadow-sm text-white"
              style={{ backgroundColor: '#8b5cf6' }}
            >
              <svg className="w-4 h-4" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="50" cy="50" rx="20" ry="20" fill="#188FD1" />
                <path d="M 8.5,26 A 48,48 0 0 1 91.5,26 L 62,29.5 A 24,24 0 0 0 26,50 z" fill="#EA3939" />
                <path d="M 50,98 A 48,48 0 0 1 8.5,26 L 26,50 A 24,24 0 0 0 62,70.5 z" fill="#4AAE48" />
                <path d="M 91.5,26 A 48,48 0 0 1 50,98 L 62,70.5 A 24,24 0 0 0 62,29.5 z" fill="#FED14B" />
              </svg>
              Install Extension
            </a>
          </div>
          <p className="text-[11px] text-gray-500 text-center">Free during beta • No credit card required</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
        
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </div>
  )
}
