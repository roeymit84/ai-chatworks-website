// DESTINATION: /app/page.jsx

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = {
  title: 'AI ChatWorks - Your Smart Layer for AI Chatbots',
  description: 'The smart productivity layer for modern AI workflows. Stay organized, save time, and master your prompts across ChatGPT, Claude, and Gemini.',
}

export default function Home() {
  return (
    <>
      {/* Background Effects */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-brand-purple/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px]"></div>
      </div>

      <Navbar />

      <main className="relative">
        {/* HERO SECTION */}
        <section className="pt-40 pb-24 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-brand-purple/10 text-brand-purple rounded-full text-sm font-semibold animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-purple opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-purple"></span>
              </span>
              Now available on Chrome Web Store
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in">
              Your <span className="bg-gradient-to-r from-brand-purple to-blue-600 bg-clip-text text-transparent">Smart Layer</span><br />for AI Chatbots
            </h1>
            
            <p className="text-xl md:text-2xl text-brand-slate max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in">
              Save, organize, and reuse your best prompts across ChatGPT, Claude, and Gemini. The productivity boost you've been waiting for.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in">
              <a href="https://chromewebstore.google.com/detail/ai-chatworks/legmkjenpjbcgmmifpdhehgbmbkofmmc" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-purple text-white rounded-xl font-semibold text-lg hover:bg-brand-purpleDark hover:scale-105 transition-all duration-300 shadow-xl shadow-brand-purple/25">
                <svg className="w-6 h-6" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="50" cy="50" rx="20" ry="20" style={{fill:"#188FD1"}}/>
                  <path d="M 8.5,26 A 48,48 0 0 1 91.5,26 L 62,29.5 A 24,24 0 0 0 26,50 z" style={{fill:"#EA3939"}}/>
                  <path d="M 91.5,74 A 48,48 0 0 1 8.5,74 L 38,70.5 A 24,24 0 0 0 74,50 z" style={{fill:"#FBBC04"}}/>
                  <path d="M 50,8.5 A 48,48 0 0 1 74,91.5 L 70.5,62 A 24,24 0 0 0 50,26 z" style={{fill:"#34A853"}}/>
                </svg>
                Add to Chrome — It's Free
              </a>
              <a href="#features" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-brand-border text-brand-dark rounded-xl font-semibold text-lg hover:border-brand-purple hover:bg-brand-surface transition-all duration-300">
                Learn More
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
              </a>
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
              {/* Card 1 */}
              <div className="bento-card bg-white rounded-2xl border border-brand-border p-8 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-brand-purple/10 rounded-xl flex items-center justify-center mb-6 text-brand-purple text-2xl">📚</div>
                <h3 className="text-2xl font-bold mb-3">Prompt Library</h3>
                <p className="text-brand-slate leading-relaxed">Build your personal collection of AI prompts. Organize them in folders, tag them, and find exactly what you need in seconds.</p>
              </div>

              {/* Card 2 */}
              <div className="bento-card bg-white rounded-2xl border border-brand-border p-8 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 text-blue-600 text-2xl">⚡</div>
                <h3 className="text-2xl font-bold mb-3">Universal Compatibility</h3>
                <p className="text-brand-slate leading-relaxed">Works seamlessly across ChatGPT, Claude, and Gemini. One extension, all your favorite AI platforms.</p>
              </div>

              {/* Card 3 */}
              <div className="bento-card bg-white rounded-2xl border border-brand-border p-8 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6 text-emerald-600 text-2xl">🔒</div>
                <h3 className="text-2xl font-bold mb-3">100% Private</h3>
                <p className="text-brand-slate leading-relaxed">Your data stays on your device. Everything is stored locally in your browser — no servers, no tracking.</p>
              </div>

              {/* Card 4 */}
              <div className="bento-card bg-white rounded-2xl border border-brand-border p-8 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 text-purple-600 text-2xl">⌨️</div>
                <h3 className="text-2xl font-bold mb-3">Flow Command Palette</h3>
                <p className="text-brand-slate leading-relaxed">Press Cmd+Shift+F to open Flow. Search your prompts, run actions, summarize chats — all without touching your mouse.</p>
              </div>

              {/* Card 5 */}
              <div className="bento-card bg-white rounded-2xl border border-brand-border p-8 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-6 text-orange-600 text-2xl">💾</div>
                <h3 className="text-2xl font-bold mb-3">Import & Export</h3>
                <p className="text-brand-slate leading-relaxed">Backup your entire library or move it between computers. Full control over your data with simple zip file exports.</p>
              </div>

              {/* Card 6 */}
              <div className="bento-card bg-white rounded-2xl border border-brand-border p-8 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-pink-500/10 rounded-xl flex items-center justify-center mb-6 text-pink-600 text-2xl">✨</div>
                <h3 className="text-2xl font-bold mb-3">Smart Features</h3>
                <p className="text-brand-slate leading-relaxed">Ghost text autocomplete, prompt enhancer, context menu integration, and bulk actions make prompt management effortless.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-purple via-purple-600 to-blue-600 p-12 md:p-16 text-white text-center shadow-2xl">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
              
              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to work smarter with AI?</h2>
                <p className="text-lg md:text-xl opacity-90 mb-10 max-w-2xl mx-auto">Join thousands of users who've transformed their AI workflow with AI ChatWorks.</p>
                
                <a href="https://chromewebstore.google.com/detail/ai-chatworks/legmkjenpjbcgmmifpdhehgbmbkofmmc" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-10 py-5 bg-white text-brand-purple rounded-xl font-bold text-lg hover:bg-gray-50 hover:scale-105 transition-all duration-300 shadow-xl">
                  <svg className="w-6 h-6" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="50" cy="50" rx="20" ry="20" style={{fill:"#188FD1"}}/>
                    <path d="M 8.5,26 A 48,48 0 0 1 91.5,26 L 62,29.5 A 24,24 0 0 0 26,50 z" style={{fill:"#EA3939"}}/>
                    <path d="M 91.5,74 A 48,48 0 0 1 8.5,74 L 38,70.5 A 24,24 0 0 0 74,50 z" style={{fill:"#FBBC04"}}/>
                    <path d="M 50,8.5 A 48,48 0 0 1 74,91.5 L 70.5,62 A 24,24 0 0 0 50,26 z" style={{fill:"#34A853"}}/>
                  </svg>
                  Install Free Extension
                </a>
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
                  Is AI ChatWorks really free?
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180 text-brand-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
                </summary>
                <div className="px-6 pb-6 text-brand-slate leading-relaxed">Yes! AI ChatWorks is completely free to use. All core features — including the prompt library, Flow command palette, and multi-platform support — are available at no cost. We believe in making productivity tools accessible to everyone.</div>
              </details>

              <details className="group bg-white rounded-xl border border-brand-border overflow-hidden">
                <summary className="flex items-center justify-between p-6 font-bold text-brand-dark cursor-pointer hover:bg-brand-surface transition select-none">
                  Which AI platforms does it support?
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180 text-brand-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
                </summary>
                <div className="px-6 pb-6 text-brand-slate leading-relaxed">AI ChatWorks currently supports ChatGPT (chat.openai.com), Claude (claude.ai), and Google Gemini (gemini.google.com). The extension automatically activates on these platforms, giving you instant access to your prompt library wherever you work.</div>
              </details>

              <details className="group bg-white rounded-xl border border-brand-border overflow-hidden">
                <summary className="flex items-center justify-between p-6 font-bold text-brand-dark cursor-pointer hover:bg-brand-surface transition select-none">
                  Is my information secure?
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180 text-brand-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
                </summary>
                <div className="px-6 pb-6 text-brand-slate leading-relaxed">Absolutely. Security and privacy are core to our design. Your entire prompt library is stored 100% locally on your computer using secure browser storage (chrome.storage.local). Nothing is ever sent to an external server, ensuring your data remains private and secure.</div>
              </details>

              <details className="group bg-white rounded-xl border border-brand-border overflow-hidden">
                <summary className="flex items-center justify-between p-6 font-bold text-brand-dark cursor-pointer hover:bg-brand-surface transition select-none">
                  Is there a backup for the prompt library?
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180 text-brand-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
                </summary>
                <div className="px-6 pb-6 text-brand-slate leading-relaxed">Yes. The "Data Management" tab in Settings features a robust Import/Export tool. You can create a full backup of your prompts, folders, and settings as a single .zip file, allowing you to restore your library or move it to a new computer at any time.</div>
              </details>

              <details className="group bg-white rounded-xl border border-brand-border overflow-hidden">
                <summary className="flex items-center justify-between p-6 font-bold text-brand-dark cursor-pointer hover:bg-brand-surface transition select-none">
                  How do I get started?
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180 text-brand-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
                </summary>
                <div className="px-6 pb-6 text-brand-slate leading-relaxed">After installing, the extension will automatically activate on supported sites (ChatGPT, Claude, Gemini). You can either follow the quick onboarding tour or start immediately. Open the main window by clicking the floating icon, or press Cmd+Shift+F (Mac) / Ctrl+Shift+F (Windows) to launch the "Flow" command palette.</div>
              </details>

              <details className="group bg-white rounded-xl border border-brand-border overflow-hidden">
                <summary className="flex items-center justify-between p-6 font-bold text-brand-dark cursor-pointer hover:bg-brand-surface transition select-none">
                  Is there technical support?
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180 text-brand-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
                </summary>
                <div className="px-6 pb-6 text-brand-slate leading-relaxed">Yes. We offer community and direct support. You can access support links, join our Facebook group, or find our contact email directly from the "Help & Support" section within the extension's settings panel.</div>
              </details>

              <details className="group bg-white rounded-xl border border-brand-border overflow-hidden">
                <summary className="flex items-center justify-between p-6 font-bold text-brand-dark cursor-pointer hover:bg-brand-surface transition select-none">
                  What is "Flow"?
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180 text-brand-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
                </summary>
                <div className="px-6 pb-6 text-brand-slate leading-relaxed">Flow is your productivity command palette. Press Cmd+Shift+F (Mac) or Ctrl+Shift+F (Windows) to open it. From there, you can instantly search your entire prompt library or execute smart actions, like "Summarize Chat" or "Open Settings", all without using your mouse.</div>
              </details>

              <details className="group bg-white rounded-xl border border-brand-border overflow-hidden">
                <summary className="flex items-center justify-between p-6 font-bold text-brand-dark cursor-pointer hover:bg-brand-surface transition select-none">
                  How does the "Summarize Chat" action work?
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180 text-brand-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
                </summary>
                <div className="px-6 pb-6 text-brand-slate leading-relaxed">The "Summarize Chat" action (available in Flow) is an intelligent tool that reads the current conversation, detects the dominant language, and then instructs the AI to generate a "full fidelity" summary. This summary is automatically copied to your clipboard, allowing you to seamlessly start a new chat with full context.</div>
              </details>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
