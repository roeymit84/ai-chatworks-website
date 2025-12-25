// DESTINATION: /app/changelog/page.jsx

'use client'

import { useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function ChangelogPage() {
  const [openVersion, setOpenVersion] = useState('1.1.1')

  const toggleVersion = (version) => {
    setOpenVersion(openVersion === version ? null : version)
  }

  return (
    <>
      <Navbar />
      
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold mb-4 text-brand-dark">Changelog</h1>
          <p className="text-xl text-brand-slate">Stay up to date with the latest features and improvements.</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
          {/* v1.1.1 */}
          <div className="bg-white rounded-2xl border border-brand-border overflow-hidden transition-all hover:shadow-lg group">
            <div 
              className="p-6 cursor-pointer hover:bg-brand-surface transition-colors" 
              onClick={() => toggleVersion('1.1.1')}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <h2 className="text-2xl font-bold text-brand-dark">Version 1.1.1</h2>
                  <span className="bg-brand-purple text-white text-xs font-bold px-2 py-1 rounded">LATEST</span>
                </div>
                <div className="flex items-center gap-2 text-brand-slate">
                  <svg 
                    className={`w-4 h-4 transition-transform duration-200 ${openVersion === '1.1.1' ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                  </svg>
                  <span className="text-sm">November 24, 2025</span>
                </div>
              </div>
            </div>
            {openVersion === '1.1.1' && (
              <div className="px-6 pb-6 border-t border-brand-border bg-gray-50/50 pt-6">
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded text-xs font-bold h-fit border border-emerald-200 flex-shrink-0">✨ New</span>
                    <p className="text-brand-gray text-sm"><span className="font-semibold text-brand-dark">Ghost Text Autocomplete (Flow):</span> Begin typing a prompt name for instant, Tab-to-accept suggestions.</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded text-xs font-bold h-fit border border-emerald-200 flex-shrink-0">✨ New</span>
                    <p className="text-brand-gray text-sm"><span className="font-semibold text-brand-dark">Prompt Enhancer (Flow Action):</span> Automatically re-engineer your current prompt for improved performance.</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* v1.1.0 */}
          <div className="bg-white rounded-2xl border border-brand-border overflow-hidden transition-all hover:shadow-lg group">
            <div 
              className="p-6 cursor-pointer hover:bg-brand-surface transition-colors" 
              onClick={() => toggleVersion('1.1.0')}
            >
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-brand-dark">Version 1.1.0</h2>
                <div className="flex items-center gap-2 text-brand-slate">
                  <svg className={`w-4 h-4 transition-transform duration-200 ${openVersion === '1.1.0' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
                  <span className="text-sm">November 04, 2025</span>
                </div>
              </div>
            </div>
            {openVersion === '1.1.0' && (
              <div className="px-6 pb-6 border-t border-brand-border bg-gray-50/50 pt-6">
                <p className="text-brand-gray text-sm"><span className="font-semibold">Full Fidelity Chat Summaries</span> and Flow Command Palette added.</p>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
