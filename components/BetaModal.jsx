// BetaModal.jsx
// Matches mockup exactly: 500x620px, no icons in steps, gray perks section
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
      
      {/* Modal Container - EXACTLY 500x620px as per mockup */}
      <div 
        className="relative bg-white rounded-2xl shadow-2xl animate-scale-in flex flex-col border border-gray-200"
        style={{ width: '500px', height: '620px', padding: '32px' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors text-xl"
          aria-label="Close modal"
        >
          ✕
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="flex gap-2 mb-3">
            <span className="text-[10px] font-extrabold px-2.5 py-1 rounded bg-amber-100 text-amber-900 tracking-wider">
              BETA
            </span>
            <span className="text-[10px] font-extrabold px-2.5 py-1 rounded bg-purple-50 text-purple-700 tracking-wider">
              LIMITED TIME
            </span>
          </div>
          <h2 className="text-[26px] font-extrabold text-gray-900 mb-1.5">Join the Beta Program</h2>
          <p className="text-sm text-gray-500">Complete these steps to activate AI ChatWorks</p>
        </div>

        {/* Steps - NO ICONS, just numbers and text */}
        <div className="flex flex-col gap-2 mb-4">
          {/* Step 1 */}
          <div className="flex items-center bg-gray-50 rounded-[10px] border border-gray-100" style={{ padding: '12px 16px' }}>
            <div className="w-6 h-6 flex items-center justify-center bg-white rounded-md border border-purple-200 text-purple-700 text-xs font-extrabold mr-4">
              1
            </div>
            <span className="text-sm font-semibold text-gray-900">Download from Chrome Store</span>
          </div>

          {/* Step 2 */}
          <div className="flex items-center bg-gray-50 rounded-[10px] border border-gray-100" style={{ padding: '12px 16px' }}>
            <div className="w-6 h-6 flex items-center justify-center bg-white rounded-md border border-purple-200 text-purple-700 text-xs font-extrabold mr-4">
              2
            </div>
            <span className="text-sm font-semibold text-gray-900">Create Your Account</span>
          </div>

          {/* Step 3 */}
          <div className="flex items-center bg-gray-50 rounded-[10px] border border-gray-100" style={{ padding: '12px 16px' }}>
            <div className="w-6 h-6 flex items-center justify-center bg-white rounded-md border border-purple-200 text-purple-700 text-xs font-extrabold mr-4">
              3
            </div>
            <span className="text-sm font-semibold text-gray-900">Consent to Beta Terms</span>
          </div>

          {/* Step 4 */}
          <div className="flex items-center bg-gray-50 rounded-[10px] border border-gray-100" style={{ padding: '12px 16px' }}>
            <div className="w-6 h-6 flex items-center justify-center bg-white rounded-md border border-purple-200 text-purple-700 text-xs font-extrabold mr-4">
              4
            </div>
            <span className="text-sm font-semibold text-gray-900">Start Using AI ChatWorks</span>
          </div>
        </div>

        {/* Perks Section - GRAY background (not purple!) */}
        <div className="bg-gray-50 rounded-xl p-4 grid grid-cols-2 gap-2">
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <span className="text-emerald-600 font-bold">✓</span>
            <span>25 saved prompts</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <span className="text-emerald-600 font-bold">✓</span>
            <span>5 organized folders</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <span className="text-emerald-600 font-bold">✓</span>
            <span>Cloud sync</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <span className="text-emerald-600 font-bold">✓</span>
            <span>4 export formats</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <span className="text-emerald-600 font-bold">✓</span>
            <span>Prompt Marketplace</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <span className="text-emerald-600 font-bold">✓</span>
            <span>Priority support</span>
          </div>
        </div>

        {/* Footer - Pushed to bottom with margin-top: auto */}
        <footer className="mt-auto pt-5">
          <div className="flex gap-3 mb-4">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-3.5 bg-white border border-gray-200 text-gray-500 rounded-xl font-bold text-[15px] hover:bg-gray-50 transition-all"
            >
              Cancel
            </button>
            <a
              href="https://chromewebstore.google.com/detail/defbmebondpdilmjcdnjpgindiljpohp"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="flex-1 flex items-center justify-center px-4 py-3.5 rounded-xl font-bold text-[15px] text-white transition-all"
              style={{ 
                backgroundColor: '#7C3AED',
                boxShadow: '0 4px 6px -1px rgba(124, 58, 237, 0.2)'
              }}
            >
              Install Extension
            </a>
          </div>
          <p className="text-xs text-gray-400 text-center">Free during beta • No credit card required</p>
        </footer>
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
