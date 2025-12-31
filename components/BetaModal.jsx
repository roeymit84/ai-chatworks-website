// BetaModal.jsx
// Clean, sophisticated modal matching AI ChatWorks brand guidelines
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
      
      {/* Modal Container */}
      <div 
        className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors duration-200 group"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="px-8 pt-8 pb-6 border-b border-gray-200">
          <div className="flex items-center gap-3 mb-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-50 border border-yellow-200 rounded-lg">
              <span className="text-xs font-bold text-yellow-800">BETA</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-50 border border-purple-200 rounded-lg">
              <span className="text-xs font-semibold text-purple-700">Limited Time</span>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Join the Beta Program</h2>
          <p className="text-base text-gray-600">Get started with AI ChatWorks in 4 simple steps</p>
        </div>

        {/* Content */}
        <div className="px-8 py-6">
          {/* Steps */}
          <div className="space-y-4 mb-8">
            {/* Step 1 */}
            <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-white border-2 border-purple-200 text-purple-600 font-bold">
                1
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <svg className="w-5 h-5 text-gray-700" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="50" cy="50" rx="20" ry="20" fill="#188FD1" />
                    <path d="M 8.5,26 A 48,48 0 0 1 91.5,26 L 62,29.5 A 24,24 0 0 0 26,50 z" fill="#EA3939" />
                    <path d="M 50,98 A 48,48 0 0 1 8.5,26 L 26,50 A 24,24 0 0 0 62,70.5 z" fill="#4AAE48" />
                    <path d="M 91.5,26 A 48,48 0 0 1 50,98 L 62,70.5 A 24,24 0 0 0 62,29.5 z" fill="#FED14B" />
                  </svg>
                  <h3 className="text-lg font-semibold text-gray-900">Download from Chrome Store</h3>
                </div>
                <p className="text-sm text-gray-600">Install the AI ChatWorks extension from the Chrome Web Store</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-white border-2 border-purple-200 text-purple-600 font-bold">
                2
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <h3 className="text-lg font-semibold text-gray-900">Create Your Account</h3>
                </div>
                <p className="text-sm text-gray-600">Open the extension and create your free account to enable cloud sync</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-white border-2 border-purple-200 text-purple-600 font-bold">
                3
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-lg font-semibold text-gray-900">Consent to Beta Terms</h3>
                </div>
                <p className="text-sm text-gray-600">Review and accept the beta program terms to unlock all features</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-white border-2 border-purple-200 text-purple-600 font-bold">
                4
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <h3 className="text-lg font-semibold text-gray-900">Start Using AI ChatWorks</h3>
                </div>
                <p className="text-sm text-gray-600">Access all beta features including 25 prompts, cloud sync, and marketplace</p>
              </div>
            </div>
          </div>

          {/* Benefits Box */}
          <div className="p-6 bg-purple-50 border border-purple-200 rounded-xl mb-6">
            <h3 className="text-base font-semibold text-gray-900 mb-4">What You Get as a Beta User</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-gray-700">25 saved prompts</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-gray-700">5 organized folders</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-gray-700">Automatic cloud sync</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-gray-700">4 export formats</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-gray-700">Marketplace access</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-gray-700">Priority support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-8 pb-8 pt-2">
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={onClose}
              className="flex-1 px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-200"
            >
              Cancel
            </button>
            <a
              href="https://chromewebstore.google.com/detail/ai-chatworks/legmkjenpjbcgmmifpdhehgbmbkofmmc"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-all duration-200 shadow-sm"
            >
              <svg className="w-5 h-5" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="50" cy="50" rx="20" ry="20" fill="#188FD1" />
                <path d="M 8.5,26 A 48,48 0 0 1 91.5,26 L 62,29.5 A 24,24 0 0 0 26,50 z" fill="#EA3939" />
                <path d="M 50,98 A 48,48 0 0 1 8.5,26 L 26,50 A 24,24 0 0 0 62,70.5 z" fill="#4AAE48" />
                <path d="M 91.5,26 A 48,48 0 0 1 50,98 L 62,70.5 A 24,24 0 0 0 62,29.5 z" fill="#FED14B" />
              </svg>
              Install Extension
            </a>
          </div>
          <p className="text-xs text-gray-500 text-center mt-4">Free during beta • No credit card required • Cancel anytime</p>
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
