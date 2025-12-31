// BetaModal.jsx
// Fixed 650x650px modal with no scrolling
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
        className="relative bg-white rounded-2xl shadow-2xl animate-scale-in"
        style={{ width: '650px', height: '650px' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors duration-200 group z-10"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="px-7 pt-7 pb-5 border-b border-gray-200">
          <div className="flex items-center gap-2 mb-2">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-yellow-50 border border-yellow-200 rounded-lg">
              <span className="text-xs font-bold text-yellow-800">BETA</span>
            </div>
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-purple-50 border border-purple-200 rounded-lg">
              <span className="text-xs font-semibold text-purple-700">Limited Time</span>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-1.5">Join the Beta Program</h2>
          <p className="text-sm text-gray-600">Get started with AI ChatWorks in 4 simple steps</p>
        </div>

        {/* Content */}
        <div className="px-7 py-5">
          {/* Steps - Compact */}
          <div className="space-y-3 mb-5">
            {/* Step 1 */}
            <div className="flex items-start gap-3 p-3.5 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
              <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg bg-white border-2 border-purple-200 text-purple-600 font-bold text-sm">
                1
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <svg className="w-4 h-4 text-gray-700 flex-shrink-0" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="50" cy="50" rx="20" ry="20" fill="#188FD1" />
                    <path d="M 8.5,26 A 48,48 0 0 1 91.5,26 L 62,29.5 A 24,24 0 0 0 26,50 z" fill="#EA3939" />
                    <path d="M 50,98 A 48,48 0 0 1 8.5,26 L 26,50 A 24,24 0 0 0 62,70.5 z" fill="#4AAE48" />
                    <path d="M 91.5,26 A 48,48 0 0 1 50,98 L 62,70.5 A 24,24 0 0 0 62,29.5 z" fill="#FED14B" />
                  </svg>
                  <h3 className="text-base font-semibold text-gray-900">Download from Chrome Store</h3>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">Install the AI ChatWorks extension from the Chrome Web Store</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-3 p-3.5 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
              <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg bg-white border-2 border-purple-200 text-purple-600 font-bold text-sm">
                2
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <svg className="w-4 h-4 text-gray-700 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <h3 className="text-base font-semibold text-gray-900">Create Your Account</h3>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">Open the extension and create your free account to enable cloud sync</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-3 p-3.5 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
              <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg bg-white border-2 border-purple-200 text-purple-600 font-bold text-sm">
                3
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <svg className="w-4 h-4 text-gray-700 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-base font-semibold text-gray-900">Consent to Beta Terms</h3>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">Review and accept the beta program terms to unlock all features</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex items-start gap-3 p-3.5 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
              <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg bg-white border-2 border-purple-200 text-purple-600 font-bold text-sm">
                4
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <svg className="w-4 h-4 text-gray-700 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <h3 className="text-base font-semibold text-gray-900">Start Using AI ChatWorks</h3>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">Access all beta features including 25 prompts, cloud sync, and marketplace</p>
              </div>
            </div>
          </div>

          {/* Benefits Box - Compact */}
          <div className="p-4 bg-purple-50 border border-purple-200 rounded-xl mb-5">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">What You Get as a Beta User</h3>
            <div className="grid grid-cols-2 gap-2.5">
              <div className="flex items-start gap-1.5">
                <svg className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-xs text-gray-700 leading-snug">25 saved prompts</span>
              </div>
              <div className="flex items-start gap-1.5">
                <svg className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-xs text-gray-700 leading-snug">5 organized folders</span>
              </div>
              <div className="flex items-start gap-1.5">
                <svg className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-xs text-gray-700 leading-snug">Automatic cloud sync</span>
              </div>
              <div className="flex items-start gap-1.5">
                <svg className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-xs text-gray-700 leading-snug">4 export formats</span>
              </div>
              <div className="flex items-start gap-1.5">
                <svg className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-xs text-gray-700 leading-snug">Marketplace access</span>
              </div>
              <div className="flex items-start gap-1.5">
                <svg className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-xs text-gray-700 leading-snug">Priority support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-7 pb-6">
          <div className="flex gap-3 mb-3">
            <button
              onClick={onClose}
              className="flex-1 px-5 py-2.5 bg-white border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 text-sm"
            >
              Cancel
            </button>
            <a
              href="https://chromewebstore.google.com/detail/ai-chatworks/legmkjenpjbcgmmifpdhehgbmbkofmmc"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="flex-1 flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-semibold transition-all duration-200 shadow-sm text-sm text-white"
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
          <p className="text-xs text-gray-500 text-center">Free during beta • No credit card required</p>
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
