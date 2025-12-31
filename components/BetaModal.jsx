// DESTINATION: /components/BetaModal.jsx

'use client'

import { useEffect } from 'react'

export default function BetaModal({ isOpen, onClose }) {
  // Prevent body scroll when modal is open
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

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const steps = [
    {
      number: '1',
      title: 'Download from Chrome Store',
      description: 'Install the AI ChatWorks extension from the Chrome Web Store',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="50" cy="50" rx="20" ry="20" fill="#188FD1"/>
          <path d="M 8.5,26 A 48,48 0 0 1 91.5,26 L 62,29.5 A 24,24 0 0 0 26,50 z" fill="#EA3939"/>
          <path d="M 50,98 A 48,48 0 0 1 8.5,26 L 26,50 A 24,24 0 0 0 62,70.5 z" fill="#4AAE48"/>
          <path d="M 91.5,26 A 48,48 0 0 1 50,98 L 62,70.5 A 24,24 0 0 0 62,29.5 z" fill="#FED14B"/>
        </svg>
      )
    },
    {
      number: '2',
      title: 'Create Your Account',
      description: 'Open the extension and create your free account to enable cloud sync',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
        </svg>
      )
    },
    {
      number: '3',
      title: 'Consent to Beta Terms',
      description: 'Review and accept the beta program terms to unlock all features',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      number: '4',
      title: 'Start Using AI ChatWorks',
      description: 'Access all beta features including 25 prompts, cloud sync, and marketplace',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ]

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-brand-purple to-blue-600 text-white p-8 rounded-t-2xl">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold">
                  BETA
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold">
                  Limited Time - Free
                </div>
              </div>
              <h2 className="text-3xl font-bold mb-2">Join the Beta Program</h2>
              <p className="text-white/90 text-sm">Get started with AI ChatWorks in 4 simple steps</p>
            </div>
            <button
              onClick={onClose}
              className="text-white/80 hover:text-white transition-colors ml-4 p-1"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Steps */}
        <div className="p-8 space-y-6">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="flex gap-4 p-6 rounded-xl border-2 border-gray-100 hover:border-brand-purple/30 hover:bg-brand-surface/50 transition-all group"
            >
              {/* Step Number Circle */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-brand-purple/10 group-hover:bg-brand-purple group-hover:text-white text-brand-purple font-bold text-lg flex items-center justify-center transition-all">
                  {step.number}
                </div>
              </div>

              {/* Step Content */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-brand-purple group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-bold text-brand-dark">{step.title}</h3>
                </div>
                <p className="text-brand-slate text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* What You Get Section */}
        <div className="px-8 pb-6">
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-100">
            <h3 className="text-lg font-bold text-brand-dark mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-brand-purple" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              What You Get as a Beta User
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                '25 Saved Prompts',
                '5 Organized Folders',
                'Cloud Sync',
                'Marketplace Access',
                '4 Export Formats',
                'Early Feature Access'
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-brand-dark">
                  <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="sticky bottom-0 bg-white border-t border-gray-200 p-6 rounded-b-2xl">
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={onClose}
              className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all"
            >
              Cancel
            </button>
            <a
              href="https://chromewebstore.google.com/detail/ai-chatworks/legmkjenpjbcgmmifpdhehgbmbkofmmc"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="flex-1 px-6 py-3 bg-brand-purple text-white rounded-lg font-semibold hover:bg-brand-purpleDark transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand-purple/25"
            >
              <svg className="w-5 h-5" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="50" cy="50" rx="20" ry="20" fill="#188FD1"/>
                <path d="M 8.5,26 A 48,48 0 0 1 91.5,26 L 62,29.5 A 24,24 0 0 0 26,50 z" fill="#EA3939"/>
                <path d="M 50,98 A 48,48 0 0 1 8.5,26 L 26,50 A 24,24 0 0 0 62,70.5 z" fill="#4AAE48"/>
                <path d="M 91.5,26 A 48,48 0 0 1 50,98 L 62,70.5 A 24,24 0 0 0 62,29.5 z" fill="#FED14B"/>
              </svg>
              Install Extension
            </a>
          </div>
          <p className="text-xs text-center text-brand-slate mt-3">
            Free during beta • No credit card required • Cancel anytime
          </p>
        </div>
      </div>
    </div>
  )
}
