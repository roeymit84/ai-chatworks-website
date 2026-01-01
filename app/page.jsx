// DESTINATION: /app/page.jsx
// Updated homepage with comparison section between features and pricing

'use client'

import { useState } from 'react'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BetaModal from '../components/BetaModal'

export default function Home() {
  const [showBetaModal, setShowBetaModal] = useState(false)

  return (
    <>
      {/* Beta Modal */}
      <BetaModal isOpen={showBetaModal} onClose={() => setShowBetaModal(false)} />

      {/* Background Effects */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-brand-purple/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px]"></div>
      </div>

      <Navbar />

      <main className="relative">
        {/* HERO SECTION */}
        <section className="pt-32 pb-16 px-6 text-center">
          <div className="max-w-6xl mx-auto">
            {/* Announcement Banner */}
            <div className="mb-12 animate-fade-in">
              <div className="inline-flex items-center gap-4 bg-brand-surface/50 border border-brand-border rounded-[20px] px-6 py-2 animate-bounce-slow">
                <div className="bg-brand-purple text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                  NOW SYNCED
                </div>
                <p className="text-brand-dark text-sm md:text-base font-medium">
                  AI ChatWorks is now on the Cloud. Your library follows you everywhere.
                </p>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in">
              Get Your AI Workflow <span className="text-brand-purple">Systematized</span> Once and For All.
            </h1>

            <p className="text-xl md:text-2xl text-brand-slate max-w-4xl mx-auto mb-12 leading-relaxed animate-fade-in">
              From beginners organizing their first prompt library to professionals managing complex cloud-synced systems. AI ChatWorks unifies ChatGPT, Claude, and Gemini into one high-speed engine.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in">
              <a href="https://chromewebstore.google.com/detail/ai-chatworks/legmkjenpjbcgmmifpdhehgbmbkofmmc" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-purple text-white rounded-xl font-semibold text-lg hover:bg-brand-purpleDark hover:scale-105 transition-all duration-300 shadow-xl shadow-brand-purple/25">
                <svg className="w-6 h-6" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
                  <ellipse cx="50" cy="50" rx="20" ry="20" style={{ fill: "#188FD1" }} />
                  <path d="M 8.5,26 A 48,48 0 0 1 91.5,26 L 62,29.5 A 24,24 0 0 0 26,50 z" style={{ fill: "#EA3939" }} />
                  <path d="M 50,98 A 48,48 0 0 1 8.5,26 L 26,50 A 24,24 0 0 0 62,70.5 z" style={{ fill: "#4AAE48" }} />
                  <path d="M 91.5,26 A 48,48 0 0 1 50,98 L 62,70.5 A 24,24 0 0 0 62,29.5 z" style={{ fill: "#FED14B" }} />
                </svg>
                Add to Chrome
              </a>
              <a href="#features" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-brand-border text-brand-dark rounded-xl font-semibold text-lg hover:border-brand-purple hover:bg-brand-surface transition-all duration-300">
                Learn More
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </a>
            </div>

            {/* Platform Logos */}
            <div className="mt-16 animate-fade-in">
              <p className="text-sm text-brand-slate mb-6 font-medium">Works seamlessly with</p>
              <div className="flex items-center justify-center gap-8 md:gap-12 opacity-70">
                <Image
                  src="/images/openai-logo.svg"
                  alt="ChatGPT"
                  width={140}
                  height={48}
                  className="h-10 md:h-12 w-auto object-contain self-center grayscale hover:grayscale-0 transition-all duration-300"
                />
                <Image
                  src="/images/claude-logo.svg"
                  alt="Claude"
                  width={140}
                  height={48}
                  className="h-10 md:h-12 w-auto object-contain self-center grayscale hover:grayscale-0 transition-all duration-300"
                />
                <Image
                  src="/images/gemini-logo.svg"
                  alt="Google Gemini"
                  width={140}
                  height={48}
                  className="h-10 md:h-12 w-auto object-contain self-center grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </section>

        {/* BENTO GRID FEATURES */}
        <section id="features" className="py-24 px-6 bg-brand-surface/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Everything You Need</h2>
              <p className="text-xl text-brand-slate max-w-2xl mx-auto">Powerful features designed to supercharge your AI workflow</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 1 - Prompt Library */}
              <div className="bento-card bg-white rounded-2xl border border-brand-border p-8 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-brand-purple/10 rounded-xl flex items-center justify-center mb-6 text-brand-purple">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m16 6 4 14"></path>
                    <path d="M12 6v14"></path>
                    <path d="M8 8v12"></path>
                    <path d="M4 4v16"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">Prompt Library</h3>
                <p className="text-brand-slate leading-relaxed">Save your best prompts and find them in seconds. Stop digging through chat history, docs, Notion, or text files. Everything is centralized and easy to reach.</p>
              </div>

              {/* Card 2 - Cloud Sync */}
              <div className="bento-card bg-white rounded-2xl border border-brand-border p-8 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17,9a4.08,4.08,0,0,0-.93.12,5,5,0,0,0-9,2.09A3,3,0,1,0,6,17H17a4,4,0,0,0,0-8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">Cloud Sync</h3>
                <p className="text-brand-slate leading-relaxed">Backup your entire prompt library automatically. Access your prompts from any computer and never worry about losing your best work.</p>
              </div>

              {/* Card 3 - Prompt Marketplace */}
              <div className="bento-card bg-white rounded-2xl border border-brand-border p-8 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6 text-emerald-600">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M2.7,9.45a4.235,4.235,0,0,0,.3.3V22a1,1,0,0,0,1,1H20a1,1,0,0,0,1-1V9.752a4.235,4.235,0,0,0,.3-.3,4,4,0,0,0,.731-3.456L20.97,1.758A1,1,0,0,0,20,1H4a1,1,0,0,0-.97.758L1.972,5.994A4,4,0,0,0,2.7,9.45ZM13,21H11V16h2Zm6,0H15V15a1,1,0,0,0-1-1H10a1,1,0,0,0-1,1v6H5V10.9A3.989,3.989,0,0,0,8.914,9.61c.026.03.053.059.08.089A4.086,4.086,0,0,0,12.041,11a4.039,4.039,0,0,0,2.965-1.3c.027-.03.054-.059.08-.089A3.989,3.989,0,0,0,19,10.9ZM3.911,6.479,4.781,3H19.219l.87,3.479A2.029,2.029,0,0,1,18.12,9,2.041,2.041,0,0,1,16.1,7.14l-.042-.5a1,1,0,0,0-1.993.166v0a2.006,2.006,0,0,1-.529,1.539A2.059,2.059,0,0,1,11.959,9,2.029,2.029,0,0,1,9.937,6.806v0a1,1,0,0,0-.914-1.079.989.989,0,0,0-1.079.913l-.042.5A2.041,2.041,0,0,1,5.88,9,2.029,2.029,0,0,1,3.911,6.479Z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">Prompt Marketplace</h3>
                <p className="text-brand-slate leading-relaxed">Search and download curated prompts from the marketplace. Get expert-level results from your AI instantly without writing a single line yourself.</p>
              </div>

              {/* Card 4 - Flow */}
              <div className="bento-card bg-white rounded-2xl border border-brand-border p-8 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 text-purple-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 12C3 12 5.5 7 9 7C12.5 7 12.5 17 16 17C19.5 17 22 12 22 12"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">Flow</h3>
                <p className="text-brand-slate leading-relaxed">Your command palette for instant actions. Use CMD / CTRL + SHIFT + F to trigger your best prompts without touching your mouse.</p>
              </div>

              {/* Card 5 - Timeline */}
              <div className="bento-card bg-white rounded-2xl border border-brand-border p-8 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-6 text-orange-600">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                    <line x1="3" y1="14" x2="21" y2="14"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">Timeline</h3>
                <p className="text-brand-slate leading-relaxed">A visual history of your conversations. Easily find any past interaction and jump back to it with total ease.</p>
              </div>

              {/* Card 6 - Export Content */}
              <div className="bento-card bg-white rounded-2xl border border-brand-border p-8 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-pink-500/10 rounded-xl flex items-center justify-center mb-6 text-pink-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">Export Content</h3>
                <p className="text-brand-slate leading-relaxed">Turn AI chat messages into clean files. Export any conversation to PDF, Markdown, or JSON with one click for easy sharing or documentation.</p>
              </div>
            </div>
          </div>
        </section>

        {/* COMPARISON SECTION - NEW */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose AI ChatWorks?</h2>
              <p className="text-xl text-brand-slate max-w-2xl mx-auto">See how we compare to other AI productivity tools</p>
            </div>

            {/* Comparison Table */}
            <div className="bg-white rounded-2xl border border-brand-border shadow-lg overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-brand-surface border-b border-brand-border">
                    <th className="px-6 py-5 text-left">
                      <span className="text-sm font-semibold text-brand-slate uppercase tracking-wide">Feature</span>
                    </th>
                    <th className="px-6 py-5 text-center bg-brand-purple/5">
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-10 h-10 bg-brand-purple rounded-lg flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                            <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
                          </svg>
                        </div>
                        <span className="text-sm font-bold text-brand-purple">AI ChatWorks</span>
                      </div>
                    </th>
                    <th className="px-6 py-5 text-center">
                      <span className="text-sm font-semibold text-brand-gray">Competitors</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Cloud Sync */}
                  <tr className="border-b border-brand-border hover:bg-brand-surface/50 transition-colors">
                    <td className="px-6 py-5">
                      <div>
                        <div className="font-semibold text-brand-dark mb-1">Cloud Sync</div>
                        <div className="text-sm text-brand-slate">Automatic backup across all devices</div>
                      </div>
                    </td>
                    <td className="px-6 py-5 bg-brand-purple/5">
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                          <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="font-semibold text-brand-dark">Automatic</span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </div>
                        <span className="text-brand-gray">Rarely</span>
                      </div>
                    </td>
                  </tr>

                  {/* Prompt Library */}
                  <tr className="border-b border-brand-border hover:bg-brand-surface/50 transition-colors">
                    <td className="px-6 py-5">
                      <div>
                        <div className="font-semibold text-brand-dark mb-1">Prompt Library</div>
                        <div className="text-sm text-brand-slate">Save and organize your prompts</div>
                      </div>
                    </td>
                    <td className="px-6 py-5 bg-brand-purple/5">
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                          <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="font-semibold text-brand-dark">Unlimited</span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                          <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                        </div>
                        <span className="text-brand-gray">Limited</span>
                      </div>
                    </td>
                  </tr>

                  {/* Folder Organization */}
                  <tr className="border-b border-brand-border hover:bg-brand-surface/50 transition-colors">
                    <td className="px-6 py-5">
                      <div>
                        <div className="font-semibold text-brand-dark mb-1">Folder Organization</div>
                        <div className="text-sm text-brand-slate">Organize with folders & categories</div>
                      </div>
                    </td>
                    <td className="px-6 py-5 bg-brand-purple/5">
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                          <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="font-semibold text-brand-dark">Unlimited</span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                          <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                        </div>
                        <span className="text-brand-gray">Limited</span>
                      </div>
                    </td>
                  </tr>

                  {/* Marketplace */}
                  <tr className="border-b border-brand-border hover:bg-brand-surface/50 transition-colors">
                    <td className="px-6 py-5">
                      <div>
                        <div className="font-semibold text-brand-dark mb-1">Marketplace</div>
                        <div className="text-sm text-brand-slate">Access community prompts</div>
                      </div>
                    </td>
                    <td className="px-6 py-5 bg-brand-purple/5">
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                          <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="font-semibold text-brand-dark">Curated</span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                          <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                        </div>
                        <span className="text-brand-gray">Some</span>
                      </div>
                    </td>
                  </tr>

                  {/* Export Formats */}
                  <tr className="border-b border-brand-border hover:bg-brand-surface/50 transition-colors">
                    <td className="px-6 py-5">
                      <div>
                        <div className="font-semibold text-brand-dark mb-1">Export Formats</div>
                        <div className="text-sm text-brand-slate">Export in multiple formats</div>
                      </div>
                    </td>
                    <td className="px-6 py-5 bg-brand-purple/5">
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                          <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="font-semibold text-brand-dark">8 formats</span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </div>
                        <span className="text-brand-gray">0-2 formats</span>
                      </div>
                    </td>
                  </tr>

                  {/* Timeline/Minimap */}
                  <tr className="border-b border-brand-border hover:bg-brand-surface/50 transition-colors">
                    <td className="px-6 py-5">
                      <div>
                        <div className="font-semibold text-brand-dark mb-1">Timeline/Minimap</div>
                        <div className="text-sm text-brand-slate">Visual conversation navigation</div>
                      </div>
                    </td>
                    <td className="px-6 py-5 bg-brand-purple/5">
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                          <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="font-semibold text-brand-dark">Yes</span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </div>
                        <span className="text-brand-gray">No</span>
                      </div>
                    </td>
                  </tr>

                  {/* Ghost Text */}
                  <tr className="hover:bg-brand-surface/50 transition-colors">
                    <td className="px-6 py-5">
                      <div>
                        <div className="font-semibold text-brand-dark mb-1">Ghost Text</div>
                        <div className="text-sm text-brand-slate">AI-powered autocomplete</div>
                      </div>
                    </td>
                    <td className="px-6 py-5 bg-brand-purple/5">
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                          <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="font-semibold text-brand-dark">AI-powered</span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </div>
                        <span className="text-brand-gray">No</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-12">
              <p className="text-brand-slate mb-6">Join thousands of users who switched to AI ChatWorks</p>
              <a href="https://chromewebstore.google.com/detail/ai-chatworks/legmkjenpjbcgmmifpdhehgbmbkofmmc" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-brand-purple text-white rounded-xl font-semibold text-lg hover:bg-brand-purpleDark hover:scale-105 transition-all duration-300 shadow-xl shadow-brand-purple/25">
                <svg className="w-6 h-6" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
                  <ellipse cx="50" cy="50" rx="20" ry="20" style={{ fill: "#188FD1" }} />
                  <path d="M 8.5,26 A 48,48 0 0 1 91.5,26 L 62,29.5 A 24,24 0 0 0 26,50 z" style={{ fill: "#EA3939" }} />
                  <path d="M 50,98 A 48,48 0 0 1 8.5,26 L 26,50 A 24,24 0 0 0 62,70.5 z" style={{ fill: "#4AAE48" }} />
                  <path d="M 91.5,26 A 48,48 0 0 1 50,98 L 62,70.5 A 24,24 0 0 0 62,29.5 z" style={{ fill: "#FED14B" }} />
                </svg>
                Add to Chrome
              </a>
            </div>
          </div>
        </section>

        {/* PRICING SECTION */}
        <section id="pricing" className="py-24 px-6 bg-brand-surface/30">
