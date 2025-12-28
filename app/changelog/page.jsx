// DESTINATION: /app/changelog/page.jsx

'use client'

import { useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function ChangelogPage() {
  const [openVersion, setOpenVersion] = useState('1.2.0')

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
          {/* v1.2.0 */}
          <div className="bg-white rounded-2xl border border-brand-border overflow-hidden transition-all hover:shadow-lg group">
            <div 
              className="p-6 cursor-pointer hover:bg-brand-surface transition-colors" 
              onClick={() => toggleVersion('1.2.0')}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <h2 className="text-2xl font-bold text-brand-dark">Version 1.2.0</h2>
                  <span className="bg-brand-purple text-white text-xs font-bold px-2 py-1 rounded">LATEST</span>
                </div>
                <div className="flex items-center gap-2 text-brand-slate">
                  <svg 
                    className={`w-4 h-4 transition-transform duration-200 ${openVersion === '1.2.0' ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                  </svg>
                  <span className="text-sm">January 2026</span>
                </div>
              </div>
            </div>
            {openVersion === '1.2.0' && (
              <div className="px-6 pb-6 border-t border-brand-border bg-gray-50/50 pt-6">
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded text-xs font-bold h-fit border border-emerald-200 flex-shrink-0 flex items-center gap-1">
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 3C12 7.97056 7.97056 12 3 12C7.97056 12 12 16.0294 12 21C12 16.0294 16.0294 12 21 12C16.0294 12 12 7.97056 12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      New
                    </span>
                    <div>
                      <p className="font-semibold text-brand-dark text-sm mb-1">Unified Cloud Sync</p>
                      <p className="text-brand-gray text-sm leading-relaxed">Experience effortless continuity as your prompts and configurations synchronize across every device. Simply authenticate once to deploy your complete professional library to any Chrome browser, ensuring your intellectual property is always secure and accessible.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded text-xs font-bold h-fit border border-emerald-200 flex-shrink-0 flex items-center gap-1">
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 3C12 7.97056 7.97056 12 3 12C7.97056 12 12 16.0294 12 21C12 16.0294 16.0294 12 21 12C16.0294 12 12 7.97056 12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      New
                    </span>
                    <div>
                      <p className="font-semibold text-brand-dark text-sm mb-1">Conversation Timeline (Minimap)</p>
                      <p className="text-brand-gray text-sm leading-relaxed">Master long-form AI interactions with our intuitive visual minimap. Effortlessly hover to preview messages or click to jump through deep discussions on ChatGPT, Claude, and Gemini with surgical precision.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded text-xs font-bold h-fit border border-emerald-200 flex-shrink-0 flex items-center gap-1">
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 3C12 7.97056 7.97056 12 3 12C7.97056 12 12 16.0294 12 21C12 16.0294 16.0294 12 21 12C16.0294 12 12 7.97056 12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      New
                    </span>
                    <div>
                      <p className="font-semibold text-brand-dark text-sm mb-1">Professional Export Suite</p>
                      <p className="text-brand-gray text-sm leading-relaxed">Convert AI outputs into production-ready TXT, Markdown, JSON, HTML, DOCX, PDF, or XML with a single click. Our engine maintains flawless formatting and full RTL/LTR integrity for global workflows. Tailor your interface by selecting only the formats you need within Settings.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded text-xs font-bold h-fit border border-emerald-200 flex-shrink-0 flex items-center gap-1">
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 3C12 7.97056 7.97056 12 3 12C7.97056 12 12 16.0294 12 21C12 16.0294 16.0294 12 21 12C16.0294 12 12 7.97056 12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      New
                    </span>
                    <div>
                      <p className="font-semibold text-brand-dark text-sm mb-1">Prompt Marketplace</p>
                      <p className="text-brand-gray text-sm leading-relaxed">Accelerate your workflow by integrating high-performance prompts curated by the community. Use powerful search and category filters to preview and install professional-grade assets directly into your library.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded text-xs font-bold h-fit border border-emerald-200 flex-shrink-0 flex items-center gap-1">
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 3C12 7.97056 7.97056 12 3 12C7.97056 12 12 16.0294 12 21C12 16.0294 16.0294 12 21 12C16.0294 12 12 7.97056 12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      New
                    </span>
                    <div>
                      <p className="font-semibold text-brand-dark text-sm mb-1">Recycle Bin</p>
                      <p className="text-brand-gray text-sm leading-relaxed">Protect your work from accidental deletions. Pro users now benefit from a 7-day safety window, allowing you to restore deleted prompts or permanently purge them at your discretion.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* v1.1.1 */}
          <div className="bg-white rounded-2xl border border-brand-border overflow-hidden transition-all hover:shadow-lg group">
            <div 
              className="p-6 cursor-pointer hover:bg-brand-surface transition-colors" 
              onClick={() => toggleVersion('1.1.1')}
            >
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-brand-dark">Version 1.1.1</h2>
                <div className="flex items-center gap-2 text-brand-slate">
                  <svg 
                    className={`w-4 h-4 transition-transform duration-200 ${openVersion === '1.1.1' ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                  </svg>
                  <span className="text-sm">November 2025</span>
                </div>
              </div>
            </div>
            {openVersion === '1.1.1' && (
              <div className="px-6 pb-6 border-t border-brand-border bg-gray-50/50 pt-6">
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded text-xs font-bold h-fit border border-emerald-200 flex-shrink-0 flex items-center gap-1">
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 3C12 7.97056 7.97056 12 3 12C7.97056 12 12 16.0294 12 21C12 16.0294 16.0294 12 21 12C16.0294 12 12 7.97056 12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      New
                    </span>
                    <p className="text-brand-gray text-sm"><span className="font-semibold text-brand-dark">Intelligent Ghost Text:</span> Reduce friction with Tab-to-complete suggestions that predict your prompt needs as you type.</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded text-xs font-bold h-fit border border-emerald-200 flex-shrink-0 flex items-center gap-1">
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 3C12 7.97056 7.97056 12 3 12C7.97056 12 12 16.0294 12 21C12 16.0294 16.0294 12 21 12C16.0294 12 12 7.97056 12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      New
                    </span>
                    <p className="text-brand-gray text-sm"><span className="font-semibold text-brand-dark">Prompt Enhancer (Flow Action):</span> Instantly re-engineer existing prompts into high-performance structures for superior AI responses.</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded text-xs font-bold h-fit border border-emerald-200 flex-shrink-0 flex items-center gap-1">
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 3C12 7.97056 7.97056 12 3 12C7.97056 12 12 16.0294 12 21C12 16.0294 16.0294 12 21 12C16.0294 12 12 7.97056 12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      New
                    </span>
                    <p className="text-brand-gray text-sm"><span className="font-semibold text-brand-dark">Seamless Context Integration:</span> Capture inspiration instantly by right-clicking any text on the web to save it as a structured prompt.</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded text-xs font-bold h-fit border border-emerald-200 flex-shrink-0 flex items-center gap-1">
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 3C12 7.97056 7.97056 12 3 12C7.97056 12 12 16.0294 12 21C12 16.0294 16.0294 12 21 12C16.0294 12 12 7.97056 12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      New
                    </span>
                    <p className="text-brand-gray text-sm"><span className="font-semibold text-brand-dark">High-Volume Bulk Actions:</span> Organize massive libraries in seconds with multi-select tools for rapid moving and deletion.</p>
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
                  <span className="text-sm">November 2025</span>
                </div>
              </div>
            </div>
            {openVersion === '1.1.0' && (
              <div className="px-6 pb-6 border-t border-brand-border bg-gray-50/50 pt-6">
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded text-xs font-bold h-fit border border-emerald-200 flex-shrink-0 flex items-center gap-1">
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 3C12 7.97056 7.97056 12 3 12C7.97056 12 12 16.0294 12 21C12 16.0294 16.0294 12 21 12C16.0294 12 12 7.97056 12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      New
                    </span>
                    <p className="text-brand-gray text-sm"><span className="font-semibold text-brand-dark">Enhanced Chat Summaries:</span> Generate comprehensive 7-point executive analyses, including action items and metadata automatically copied to your clipboard.</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded text-xs font-bold h-fit border border-emerald-200 flex-shrink-0 flex items-center gap-1">
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 3C12 7.97056 7.97056 12 3 12C7.97056 12 12 16.0294 12 21C12 16.0294 16.0294 12 21 12C16.0294 12 12 7.97056 12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      New
                    </span>
                    <p className="text-brand-gray text-sm"><span className="font-semibold text-brand-dark">Flow Command Palette:</span> Navigate your entire AI ecosystem via keyboard with a centralized "Spotlight" search (Ctrl+Space).</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded text-xs font-bold h-fit border border-emerald-200 flex-shrink-0 flex items-center gap-1">
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 3C12 7.97056 7.97056 12 3 12C7.97056 12 12 16.0294 12 21C12 16.0294 16.0294 12 21 12C16.0294 12 12 7.97056 12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      New
                    </span>
                    <p className="text-brand-gray text-sm"><span className="font-semibold text-brand-dark">Engine Optimization:</span> Refined search and loading algorithms provide a snappier, more responsive library experience.</p>
                  </div>
                  <div className="flex gap-4 mt-6">
                    <span className="bg-red-100 text-red-700 px-3 py-1 rounded text-xs font-bold h-fit border border-red-200 flex-shrink-0 flex items-center gap-1">
                      <svg className="w-3 h-3" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                        <path fillRule="evenodd" clipRule="evenodd" d="M10.877 4.5v-.582a2.918 2.918 0 1 0-5.836 0V4.5h-.833L2.545 2.829l-.593.59 1.611 1.619-.019.049a8.03 8.03 0 0 0-.503 2.831c0 .196.007.39.02.58l.003.045H1v.836h2.169l.006.034c.172.941.504 1.802.954 2.531l.034.055L2.2 13.962l.592.592 1.871-1.872.058.066c.868.992 2.002 1.589 3.238 1.589 1.218 0 2.336-.579 3.199-1.544l.057-.064 1.91 1.92.593-.591-1.996-2.006.035-.056c.467-.74.81-1.619.986-2.583l.006-.034h2.171v-.836h-2.065l.003-.044a8.43 8.43 0 0 0 .02-.58 8.02 8.02 0 0 0-.517-2.866l-.019-.05 1.57-1.57-.592-.59L11.662 4.5h-.785zm-5 0v-.582a2.082 2.082 0 1 1 4.164 0V4.5H5.878zm5.697.837l.02.053c.283.753.447 1.61.447 2.528 0 1.61-.503 3.034-1.274 4.037-.77 1.001-1.771 1.545-2.808 1.545-1.036 0-2.037-.544-2.807-1.545-.772-1.003-1.275-2.427-1.275-4.037 0-.918.164-1.775.448-2.528l.02-.053h7.229z"/>
                      </svg>
                      Fix
                    </span>
                    <p className="text-brand-gray text-sm">Corrected visual inconsistencies within the folder color selection interface.</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* v1.0.0 */}
          <div className="bg-white rounded-2xl border border-brand-border overflow-hidden transition-all hover:shadow-lg group">
            <div 
              className="p-6 cursor-pointer hover:bg-brand-surface transition-colors" 
              onClick={() => toggleVersion('1.0.0')}
            >
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-brand-dark">Version 1.0.0</h2>
                <div className="flex items-center gap-2 text-brand-slate">
                  <svg className={`w-4 h-4 transition-transform duration-200 ${openVersion === '1.0.0' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
                  <span className="text-sm">September 2025</span>
                </div>
              </div>
            </div>
            {openVersion === '1.0.0' && (
              <div className="px-6 pb-6 border-t border-brand-border bg-gray-50/50 pt-6">
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded text-xs font-bold h-fit border border-emerald-200 flex-shrink-0 flex items-center gap-1">
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 3C12 7.97056 7.97056 12 3 12C7.97056 12 12 16.0294 12 21C12 16.0294 16.0294 12 21 12C16.0294 12 12 7.97056 12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      New
                    </span>
                    <p className="text-brand-gray text-sm"><span className="font-semibold text-brand-dark">Official Launch:</span> AI ChatWorks is now live on the Chrome Web Store.</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded text-xs font-bold h-fit border border-emerald-200 flex-shrink-0 flex items-center gap-1">
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 3C12 7.97056 7.97056 12 3 12C7.97056 12 12 16.0294 12 21C12 16.0294 16.0294 12 21 12C16.0294 12 12 7.97056 12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      New
                    </span>
                    <p className="text-brand-gray text-sm"><span className="font-semibold text-brand-dark">Universal Compatibility:</span> Native, seamless support for ChatGPT, Claude, and Gemini.</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded text-xs font-bold h-fit border border-emerald-200 flex-shrink-0 flex items-center gap-1">
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 3C12 7.97056 7.97056 12 3 12C7.97056 12 12 16.0294 12 21C12 16.0294 16.0294 12 21 12C16.0294 12 12 7.97056 12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      New
                    </span>
                    <p className="text-brand-gray text-sm"><span className="font-semibold text-brand-dark">Centralized Prompt Library:</span> Take command of your prompts with folders, favorites, and lightning-fast search.</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded text-xs font-bold h-fit border border-emerald-200 flex-shrink-0 flex items-center gap-1">
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 3C12 7.97056 7.97056 12 3 12C7.97056 12 12 16.0294 12 21C12 16.0294 16.0294 12 21 12C16.0294 12 12 7.97056 12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      New
                    </span>
                    <p className="text-brand-gray text-sm"><span className="font-semibold text-brand-dark">Portable Data:</span> Effortlessly safeguard your library with full JSON export and import capabilities.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
