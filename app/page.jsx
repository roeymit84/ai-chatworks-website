// page.jsx
// Complete homepage with BetaModal integration and improved badge positioning
// Place in: /app/page.jsx

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

        {/* COMPARISON SECTION */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose AI ChatWorks?</h2>
              <p className="text-xl text-brand-slate max-w-2xl mx-auto">See how we compare to other AI productivity tools</p>
            </div>

            {/* Compact Comparison Table */}
            <div className="bg-white rounded-2xl border border-brand-border shadow-lg overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-brand-surface/30 border-b border-brand-border">
                    <th className="px-4 py-3 text-left w-[35%]">
                      <span className="text-xs font-semibold text-brand-slate uppercase tracking-wide">Feature</span>
                    </th>
                    <th className="px-4 py-3 w-[32.5%]">
                      <span className="text-sm font-bold text-brand-purple block text-center">AI ChatWorks</span>
                    </th>
                    <th className="px-4 py-3 w-[32.5%]">
                      <span className="text-sm font-semibold text-brand-gray block text-center">Competitors</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Cloud Sync */}
                  <tr className="border-b border-brand-border hover:bg-brand-surface/30 transition-colors">
                    <td className="px-4 py-3">
                      <div className="font-semibold text-brand-dark text-sm mb-0.5">Cloud Sync</div>
                      <div className="text-xs text-brand-slate">Automatic backup across all devices</div>
                    </td>
                    <td className="px-4 py-3 bg-brand-purple/5">
                      <div className="flex items-center gap-2 justify-start">
                        <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="font-semibold text-brand-dark text-sm">Automatic</span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2 justify-start">
                        <div className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </div>
                        <span className="text-brand-gray text-sm">Rarely</span>
                      </div>
                    </td>
                  </tr>

                  {/* Prompt Library */}
                  <tr className="border-b border-brand-border hover:bg-brand-surface/30 transition-colors">
                    <td className="px-4 py-3">
                      <div className="font-semibold text-brand-dark text-sm mb-0.5">Prompt Library</div>
                      <div className="text-xs text-brand-slate">Save and organize your prompts</div>
                    </td>
                    <td className="px-4 py-3 bg-brand-purple/5">
                      <div className="flex items-center gap-2 justify-start">
                        <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="font-semibold text-brand-dark text-sm">Unlimited</span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2 justify-start">
                        <div className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </div>
                        <span className="text-brand-gray text-sm">Limited</span>
                      </div>
                    </td>
                  </tr>

                  {/* Folder Organization */}
                  <tr className="border-b border-brand-border hover:bg-brand-surface/30 transition-colors">
                    <td className="px-4 py-3">
                      <div className="font-semibold text-brand-dark text-sm mb-0.5">Folder Organization</div>
                      <div className="text-xs text-brand-slate">Organize with folders & categories</div>
                    </td>
                    <td className="px-4 py-3 bg-brand-purple/5">
                      <div className="flex items-center gap-2 justify-start">
                        <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="font-semibold text-brand-dark text-sm">Unlimited</span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2 justify-start">
                        <div className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </div>
                        <span className="text-brand-gray text-sm">Limited</span>
                      </div>
                    </td>
                  </tr>

                  {/* Marketplace */}
                  <tr className="border-b border-brand-border hover:bg-brand-surface/30 transition-colors">
                    <td className="px-4 py-3">
                      <div className="font-semibold text-brand-dark text-sm mb-0.5">Marketplace</div>
                      <div className="text-xs text-brand-slate">Access community prompts</div>
                    </td>
                    <td className="px-4 py-3 bg-brand-purple/5">
                      <div className="flex items-center gap-2 justify-start">
                        <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="font-semibold text-brand-dark text-sm">Curated</span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2 justify-start">
                        <div className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </div>
                        <span className="text-brand-gray text-sm">Some</span>
                      </div>
                    </td>
                  </tr>

                  {/* Export Formats */}
                  <tr className="border-b border-brand-border hover:bg-brand-surface/30 transition-colors">
                    <td className="px-4 py-3">
                      <div className="font-semibold text-brand-dark text-sm mb-0.5">Export Formats</div>
                      <div className="text-xs text-brand-slate">Export in multiple formats</div>
                    </td>
                    <td className="px-4 py-3 bg-brand-purple/5">
                      <div className="flex items-center gap-2 justify-start">
                        <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="font-semibold text-brand-dark text-sm">8 formats</span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2 justify-start">
                        <div className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </div>
                        <span className="text-brand-gray text-sm">0-2 formats</span>
                      </div>
                    </td>
                  </tr>

                  {/* Timeline/Minimap */}
                  <tr className="border-b border-brand-border hover:bg-brand-surface/30 transition-colors">
                    <td className="px-4 py-3">
                      <div className="font-semibold text-brand-dark text-sm mb-0.5">Timeline/Minimap</div>
                      <div className="text-xs text-brand-slate">Visual conversation navigation</div>
                    </td>
                    <td className="px-4 py-3 bg-brand-purple/5">
                      <div className="flex items-center gap-2 justify-start">
                        <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="font-semibold text-brand-dark text-sm">Yes</span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2 justify-start">
                        <div className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </div>
                        <span className="text-brand-gray text-sm">No</span>
                      </div>
                    </td>
                  </tr>

                  {/* Ghost Text */}
                  <tr className="hover:bg-brand-surface/30 transition-colors">
                    <td className="px-4 py-3">
                      <div className="font-semibold text-brand-dark text-sm mb-0.5">Ghost Text</div>
                      <div className="text-xs text-brand-slate">AI-powered autocomplete</div>
                    </td>
                    <td className="px-4 py-3 bg-brand-purple/5">
                      <div className="flex items-center gap-2 justify-start">
                        <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="font-semibold text-brand-dark text-sm">AI-powered</span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2 justify-start">
                        <div className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </div>
                        <span className="text-brand-gray text-sm">No</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-10">
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

        {/* VIDEO DEMONSTRATION SECTION */}
        <section className="py-20 px-6 bg-brand-surface/30">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">See AI ChatWorks in Action</h2>
              <p className="text-xl text-brand-slate max-w-2xl mx-auto">Watch how AI ChatWorks transforms your AI workflow</p>
            </div>

            {/* Video Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-brand-border bg-black">
              <div className="relative aspect-video">
                <video
                  className="w-full h-full"
                  controls
                  preload="metadata"
                  poster="/videos/demo-thumbnail.jpg"
                >
                  <source src="/videos/ai-chatworks-demo.mp4" type="video/mp4" />
                  <source src="/videos/ai-chatworks-demo.webm" type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            {/* Optional: Video highlights below */}
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-purple/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-brand-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-brand-dark mb-2">Lightning Fast</h3>
                <p className="text-sm text-brand-slate">Access your prompts instantly</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-purple/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-brand-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                  </svg>
                </div>
                <h3 className="font-semibold text-brand-dark mb-2">Cloud Synced</h3>
                <p className="text-sm text-brand-slate">Your library follows you across all devices</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-purple/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-brand-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="font-semibold text-brand-dark mb-2">Organized</h3>
                <p className="text-sm text-brand-slate">Keep your prompts structured in folders</p>
              </div>
            </div>
          </div>
        </section>

        {/* PRICING SECTION */}
        <section id="pricing" className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <p className="text-sm font-bold tracking-wider text-brand-slate uppercase mb-3">PRICING</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Our pricing is simple and transparent.</h2>
              <p className="text-lg text-brand-slate max-w-2xl mx-auto">You only pay for the number of prompts you want to manage. Start small and only upgrade when your library grows.</p>
            </div>

            {/* Pricing Cards */}
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">

              {/* Basic Tier */}
              <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 transition-all hover:shadow-lg flex flex-col">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">Basic</h3>
                  <p className="text-brand-slate text-sm mb-6">Perfect for trying it out instantly</p>
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-5xl font-bold">$0</span>
                    <span className="text-brand-slate">/month</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-brand-gray text-sm"><strong>5 Saved Prompts</strong> to organize your workflow</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-brand-gray text-sm"><strong>1 Personal Folder</strong> for categorization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-brand-gray text-sm"><strong>2 Export Formats</strong> (Markdown, Text)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-brand-gray text-sm">Chat timeline for conversation tracking</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-brand-gray text-sm">Flow command palette - all actions enabled</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-brand-gray text-sm"><strong>No account required</strong> – instant access</span>
                  </li>
                </ul>

                <a href="https://chromewebstore.google.com/detail/ai-chatworks/legmkjenpjbcgmmifpdhehgbmbkofmmc" target="_blank" rel="noopener noreferrer" className="block w-full text-center px-6 py-3 bg-white border-2 border-brand-dark text-brand-dark rounded-lg font-semibold hover:bg-brand-dark hover:text-white transition-all duration-200 mt-auto">
                  Get Started
                </a>
              </div>

              {/* Starter Tier - IMPROVED BADGE POSITIONING */}
              <div className="bg-white rounded-2xl border-3 border-brand-purple p-8 relative shadow-lg transition-all hover:shadow-xl flex flex-col" style={{ borderWidth: '3px' }}>
                {/* Most Popular Badge - CENTERED */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-brand-purple text-white px-5 py-1.5 rounded-full text-xs font-bold shadow-md">
                    Most Popular
                  </div>
                </div>
                
                {/* BETA Badge - TOP RIGHT CORNER */}
                <div className="absolute -top-3 -right-3">
                  <div className="bg-yellow-400 text-gray-900 px-4 py-1.5 rounded-full text-xs font-bold shadow-lg border-2 border-white">
                    BETA
                  </div>
                </div>

                <div className="mb-8 mt-4">
                  <h3 className="text-2xl font-bold mb-2">Starter</h3>
                  <p className="text-brand-slate text-sm mb-6">Great for everyday AI workflows</p>
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <span className="text-4xl font-bold text-gray-300 line-through decoration-2">$4.99</span>
                    <span className="text-5xl font-bold text-brand-dark">$0</span>
                    <span className="text-brand-slate">/month</span>
                  </div>
                </div>

                <div className="mb-2">
                  <p className="text-brand-purple font-semibold text-sm">All Basic features, plus:</p>
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-brand-gray text-sm"><strong>25 Saved Prompts</strong> for expanded library</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-brand-gray text-sm"><strong>5 Organized Folders</strong> for better structure</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-brand-gray text-sm"><strong>4 Export Formats:</strong> HTML, PDF</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-brand-gray text-sm"><strong>Automatic Cloud Sync</strong> across all devices</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-brand-gray text-sm"><strong>Marketplace Access</strong> - unlimited curated prompts</span>
                  </li>
                </ul>

                {/* BUTTON - Opens Modal */}
                <button
                  onClick={() => setShowBetaModal(true)}
                  className="block w-full text-center px-6 py-3 bg-brand-purple text-white rounded-lg font-semibold hover:bg-brand-purpleDark transition-all duration-200 mt-auto"
                >
                  Join Beta
                </button>
                
                <p className="text-xs text-brand-dark font-medium text-center mt-3">
                  Free during beta period (limited time only)
                </p>
                
                <p className="text-xs text-brand-slate text-center mt-2">
                  * Agreement to beta terms required
                </p>
              </div>

              {/* Pro Tier */}
              <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 transition-all hover:shadow-lg flex flex-col">
                <div className="mb-5">
                  <h3 className="text-2xl font-bold mb-2">Pro</h3>
                  <p className="text-brand-slate text-sm mb-6">Built for power users and pros</p>
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-5xl font-bold">$7.99</span>
                    <span className="text-brand-slate">/month</span>
                  </div>
                </div>

                <div className="mb-2">
                  <p className="text-brand-purple font-semibold text-sm">All Starter features, plus:</p>
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-brand-gray text-sm"><strong>UNLIMITED Prompts</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-brand-gray text-sm"><strong>UNLIMITED Folders</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-brand-gray text-sm"><strong>8 Export Formats:</strong> JSON, XML, Doc, HTML Raw</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-brand-gray text-sm"><strong>Marketplace Pro</strong> - exclusive premium prompts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-brand-gray text-sm"><strong>7-Day Recycle Bin</strong> retention & recovery</span>
                  </li>
                </ul>

                <button disabled className="block w-full text-center px-6 py-3 bg-gray-100 text-gray-400 rounded-lg font-semibold cursor-not-allowed mt-auto">
                  Coming Soon...
                </button>
              </div>

            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-10 text-brand-dark">Ready to work smarter with AI?</h2>

            <a href="https://chromewebstore.google.com/detail/ai-chatworks/legmkjenpjbcgmmifpdhehgbmbkofmmc" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-10 py-5 bg-brand-purple text-white rounded-xl font-bold text-lg hover:bg-brand-purpleDark hover:scale-105 transition-all duration-300 shadow-xl shadow-brand-purple/25">
              <svg className="w-6 h-6" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
                <ellipse cx="50" cy="50" rx="20" ry="20" style={{ fill: "#188FD1" }} />
                <path d="M 8.5,26 A 48,48 0 0 1 91.5,26 L 62,29.5 A 24,24 0 0 0 26,50 z" style={{ fill: "#EA3939" }} />
                <path d="M 50,98 A 48,48 0 0 1 8.5,26 L 26,50 A 24,24 0 0 0 62,70.5 z" style={{ fill: "#4AAE48" }} />
                <path d="M 91.5,26 A 48,48 0 0 1 50,98 L 62,70.5 A 24,24 0 0 0 62,29.5 z" style={{ fill: "#FED14B" }} />
              </svg>
              Add to Chrome
            </a>
          </div>
        </section>

        {/* USE CASES SECTION */}
        <section className="py-24 px-6 bg-brand-surface/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-dark">You're drowning in a sea of messy chats and lost ideas.</h2>
              <p className="text-lg md:text-xl text-brand-slate max-w-3xl mx-auto">Stop the "Notes App" context-switching and turn your scattered thoughts into a professional, embedded prompt library.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Embedded Mastery */}
              <div className="bg-white rounded-2xl border border-brand-border p-8 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-blue-600" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 3.5c-7.181 0-13 5.82-13 13s5.819 13 13 13c7.179 0 13-5.82 13-13s-5.82-13-13-13zM15.895 27.027c-5.799 0-10.5-4.701-10.5-10.5s4.701-10.5 10.5-10.5c5.798 0 10.5 4.701 10.5 10.5s-4.702 10.5-10.5 10.5zM18.93 17.131h-2.98v-5.032c0-0.546-0.443-0.99-0.989-0.99s-0.99 0.443-0.99 0.99v6.021c0 0.547 0.443 0.989 0.99 0.989h3.969c0.547 0 0.99-0.442 0.99-0.989 0-0.546-0.443-0.989-0.99-0.989z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-brand-dark">Embedded Mastery</h3>
                <p className="text-brand-slate leading-relaxed">Stop the 10-second "copy-paste" hunt from external docs. Your prompt library now lives where you work, keeping your best logic exactly one click away at all times.</p>
              </div>

              {/* Effortless Organization */}
              <div className="bg-white rounded-2xl border border-brand-border p-8 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"></path>
                    <path d="M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"></path>
                    <path d="M3 5a2 2 0 0 0 2 2h3"></path>
                    <path d="M3 3v13a2 2 0 0 0 2 2h3"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-brand-dark">Effortless Organization</h3>
                <p className="text-brand-slate leading-relaxed">Stop treating your best prompts like messy notes. We provide a simple, folder-based system that makes it easy to manage hundreds of items with zero clutter.</p>
              </div>

              {/* 0.5 Second Execution */}
              <div className="bg-white rounded-2xl border border-brand-border p-8 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-brand-dark">0.5 Second Execution</h3>
                <p className="text-brand-slate leading-relaxed">Trigger the Spotlight-style search with `Cmd+Shift+F`/`Ctrl+Shift+F`. Find, select, and deploy your most complex prompts faster than you can type a single word into the chat.</p>
              </div>

              {/* Clean Logic. No Maintenance. */}
              <div className="bg-white rounded-2xl border border-brand-border p-8 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                    <path d="M20 2v4"></path>
                    <path d="M22 4h-4"></path>
                    <circle cx="4" cy="20" r="2"></circle>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-brand-dark">Clean Logic. No Maintenance.</h3>
                <p className="text-brand-slate leading-relaxed">As your prompt list grows, finding what you need stays easy. We handle the technical heavy lifting so your library remains fast and searchable whether you have 10 prompts or 10,000.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ZERO FRICTION SETUP SECTION */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-brand-purple font-bold text-sm md:text-base mb-6 tracking-wide uppercase">NO COMPLEXITY. JUST SPEED.</p>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-brand-dark">Zero Friction Setup</h2>
            <p className="text-lg md:text-xl text-brand-slate max-w-4xl mx-auto mb-12 leading-relaxed">
              No account required. No login. No "cloud sync" delays to get started. Install the extension and it works instantly on your existing tabs. Only enable Cloud Sync when you're ready to backup across devices and use advanced features.
            </p>

            {/* Three Checkmarks */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-12">
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 text-teal-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-brand-dark font-semibold text-lg">Works Instantly</span>
              </div>

              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 text-teal-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-brand-dark font-semibold text-lg">No Registration</span>
              </div>

              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 text-teal-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-brand-dark font-semibold text-lg">Local First</span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section id="faq" className="py-24 px-6 bg-brand-surface/50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-brand-slate">Everything you need to know about AI ChatWorks</p>
            </div>

            <div className="space-y-4">
              <details className="group bg-white rounded-xl border border-brand-border overflow-hidden">
                <summary className="flex items-center justify-between p-6 font-bold text-brand-dark cursor-pointer hover:bg-brand-surface transition select-none">
                  Can I backup my library?
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180 text-brand-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="px-6 pb-6 text-brand-slate leading-relaxed">Yes. The "Local Data" tab in Settings features a robust Import/Export tool. You can create a full backup of your prompts, folders, and settings as a single .zip file, allowing you to restore your library or move it to a new computer at any time.</div>
              </details>

              <details className="group bg-white rounded-xl border border-brand-border overflow-hidden">
                <summary className="flex items-center justify-between p-6 font-bold text-brand-dark cursor-pointer hover:bg-brand-surface transition select-none">
                  How do I get started?
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180 text-brand-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="px-6 pb-6 text-brand-slate leading-relaxed">After installing, the extension will automatically activate on supported sites (ChatGPT, Claude, Gemini). You can either follow the quick onboarding tour or start immediately. Open the main window by clicking the floating icon, or press Cmd+Shift+F (Mac) / Ctrl+Shift+F (Windows) to launch the "Flow" command palette.</div>
              </details>

              <details className="group bg-white rounded-xl border border-brand-border overflow-hidden">
                <summary className="flex items-center justify-between p-6 font-bold text-brand-dark cursor-pointer hover:bg-brand-surface transition select-none">
                  Which AI platforms does it support?
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180 text-brand-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="px-6 pb-6 text-brand-slate leading-relaxed">AI ChatWorks currently supports ChatGPT (chat.openai.com), Claude (claude.ai), and Google Gemini (gemini.google.com). The extension automatically activates on these platforms, giving you instant access to your prompt library wherever you work.</div>
              </details>

              <details className="group bg-white rounded-xl border border-brand-border overflow-hidden">
                <summary className="flex items-center justify-between p-6 font-bold text-brand-dark cursor-pointer hover:bg-brand-surface transition select-none">
                  Is there technical support?
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180 text-brand-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="px-6 pb-6 text-brand-slate leading-relaxed">Yes. We offer community and direct support. Contact email directly from the "Help & Support" section.</div>
              </details>

              <details className="group bg-white rounded-xl border border-brand-border overflow-hidden">
                <summary className="flex items-center justify-between p-6 font-bold text-brand-dark cursor-pointer hover:bg-brand-surface transition select-none">
                  What is "Flow"?
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180 text-brand-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="px-6 pb-6 text-brand-slate leading-relaxed">Flow is your productivity command palette. Press Cmd+Shift+F (Mac) or Ctrl+Shift+F (Windows) to open it. From there, you can instantly search your entire prompt library or execute smart actions, like "Summarize Chat" or "Open Settings", all without using your mouse.</div>
              </details>

              <details className="group bg-white rounded-xl border border-brand-border overflow-hidden">
                <summary className="flex items-center justify-between p-6 font-bold text-brand-dark cursor-pointer hover:bg-brand-surface transition select-none">
                  How does the "Summarize Chat" action work?
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180 text-brand-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="px-6 pb-6 text-brand-slate leading-relaxed">The "Summarize Chat" action (available in Flow/Actions) is an intelligent tool that reads the current conversation, detects the dominant language, and then instructs the AI to generate a "full fidelity" summary. This summary is automatically copied to your clipboard, allowing you to seamlessly start a new chat with full context.</div>
              </details>

              <details className="group bg-white rounded-xl border border-brand-border overflow-hidden">
                <summary className="flex items-center justify-between p-6 font-bold text-brand-dark cursor-pointer hover:bg-brand-surface transition select-none">
                  What export formats are available in the Pro tier?
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180 text-brand-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="px-6 pb-6 text-brand-slate leading-relaxed">Pro users get access to 8 professional export formats: Markdown, Text, HTML, PDF, JSON, XML, Doc (Word), and HTML Raw. This gives you maximum flexibility to integrate your prompts into any workflow, documentation system, or development environment. Perfect for teams and power users who need advanced data portability.</div>
              </details>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
