// DESTINATION: /app/page.jsx

import Image from 'next/image'
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
            <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-purple-50 text-brand-purple rounded-full text-sm font-semibold animate-fade-in border border-purple-200">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-purple opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-purple"></span>
              </span>
              Beta v1.2.0: Unified Cloud Sync & Chat Timeline Now Live
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
                  <ellipse cx="50" cy="50" rx="20" ry="20" style={{fill:"#188FD1"}}/>
                  <path d="M 8.5,26 A 48,48 0 0 1 91.5,26 L 62,29.5 A 24,24 0 0 0 26,50 z" style={{fill:"#EA3939"}}/>
                  <path d="M 50,98 A 48,48 0 0 1 8.5,26 L 26,50 A 24,24 0 0 0 62,70.5 z" style={{fill:"#4AAE48"}}/>
                  <path d="M 91.5,26 A 48,48 0 0 1 50,98 L 62,70.5 A 24,24 0 0 0 62,29.5 z" style={{fill:"#FED14B"}}/>
                </svg>
                Add to Chrome — It's Free
              </a>
              <a href="#features" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-brand-border text-brand-dark rounded-xl font-semibold text-lg hover:border-brand-purple hover:bg-brand-surface transition-all duration-300">
                Learn More
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
              </a>
            </div>
            
            {/* Platform Logos */}
            <div className="mt-16 animate-fade-in">
              <p className="text-sm text-brand-slate mb-6 font-medium">Works seamlessly with</p>
              <div className="flex items-center justify-center gap-8 md:gap-12 opacity-80">
                <Image 
                  src="/images/chatgpt-logo.webp" 
                  alt="ChatGPT" 
                  width={120} 
                  height={40}
                  className="h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                />
                <Image 
                  src="/images/claude-logo.webp" 
                  alt="Claude" 
                  width={120} 
                  height={40}
                  className="h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                />
                <Image 
                  src="/images/google-gemini-logo.webp" 
                  alt="Google Gemini" 
                  width={120} 
                  height={40}
                  className="h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
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


        {/* PRICING SECTION */}
        <section id="pricing" className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <p className="text-sm font-bold tracking-wider text-brand-slate uppercase mb-3">PRICING</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Simplified pricing</h2>
              <p className="text-lg text-brand-slate max-w-2xl mx-auto">Our pricing is simple and transparent, you just pay for the amount of prompts you need each month.</p>
            </div>
            
            {/* Pricing Cards */}
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              
              {/* Free Tier */}
              <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 transition-all hover:shadow-lg">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">Basic</h3>
                  <p className="text-brand-slate text-sm mb-6">Perfect for getting started</p>
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-5xl font-bold">$0</span>
                    <span className="text-brand-slate">/month</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                    <span className="text-brand-gray text-sm">5 Saved Prompts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                    <span className="text-brand-gray text-sm">1 Personal Folder</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                    <span className="text-brand-gray text-sm">Chat messages timeline</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                    <span className="text-brand-gray text-sm">Flow - All Actions Enabled</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                    <span className="text-brand-gray text-sm">2 Exports (MD, Text)</span>
                  </li>
                </ul>
                
                <a href="https://chromewebstore.google.com/detail/ai-chatworks/legmkjenpjbcgmmifpdhehgbmbkofmmc" target="_blank" rel="noopener noreferrer" className="block w-full text-center px-6 py-3 bg-white border-2 border-brand-dark text-brand-dark rounded-lg font-semibold hover:bg-brand-dark hover:text-white transition-all duration-200">
                  Get Started Free
                </a>
              </div>

              {/* Starter Tier - Most Popular */}
              <div className="bg-white rounded-2xl border-3 border-brand-purple p-8 relative shadow-lg transition-all hover:shadow-xl" style={{borderWidth: '3px'}}>
                {/* Most Popular Badge */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-brand-purple text-white px-4 py-1.5 rounded-full text-xs font-bold">
                  Most Popular
                </div>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">Starter</h3>
                  <p className="text-brand-slate text-sm mb-6">For growing businesses</p>
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-5xl font-bold">$3.99</span>
                    <span className="text-brand-slate">/month</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                    <span className="text-brand-gray text-sm">15 Saved Prompts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                    <span className="text-brand-gray text-sm">3 Organized Folders</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                    <span className="text-brand-gray text-sm">Automatic Cloud Sync</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                    <span className="text-brand-gray text-sm">Marketplace Access</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                    <span className="text-brand-gray text-sm">4 Exports (MD, Text, HTML, PDF)</span>
                  </li>
                </ul>
                
                <a href="https://chromewebstore.google.com/detail/ai-chatworks/legmkjenpjbcgmmifpdhehgbmbkofmmc" target="_blank" rel="noopener noreferrer" className="block w-full text-center px-6 py-3 bg-brand-purple text-white rounded-lg font-semibold hover:bg-brand-purpleDark transition-all duration-200">
                  Get Started
                </a>
              </div>

              {/* Pro Tier */}
              <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 transition-all hover:shadow-lg">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">Pro</h3>
                  <p className="text-brand-slate text-sm mb-6">For high-volume users</p>
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-5xl font-bold">$7.99</span>
                    <span className="text-brand-slate">/month</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                    <span className="text-brand-gray text-sm">UNLIMITED Prompts & Folders</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                    <span className="text-brand-gray text-sm">Marketplace Pro Prompts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                    <span className="text-brand-gray text-sm">8 Exports (Docx, JSON, XML, HTML Raw)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                    <span className="text-brand-gray text-sm">7-Day Recycle Bin Retention</span>
                  </li>
                </ul>
                
                <button disabled className="block w-full text-center px-6 py-3 bg-gray-100 text-gray-400 rounded-lg font-semibold cursor-not-allowed">
                  Coming Soon
                </button>
              </div>
              
            </div>
            
            {/* View full pricing link */}
            <div className="text-center mt-12">
              <a href="#faq" className="inline-flex items-center gap-2 text-brand-slate hover:text-brand-purple transition-colors text-sm font-medium">
                View full pricing details
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </a>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-10 text-brand-dark">Ready to work smarter with AI?</h2>
            
            <a href="https://chromewebstore.google.com/detail/ai-chatworks/legmkjenpjbcgmmifpdhehgbmbkofmmc" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-10 py-5 bg-white border-2 border-brand-border text-brand-dark rounded-xl font-bold text-lg hover:border-brand-purple hover:bg-brand-surface transition-all duration-300">
              <svg className="w-6 h-6" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
                <ellipse cx="50" cy="50" rx="20" ry="20" style={{fill:"#188FD1"}}/>
                <path d="M 8.5,26 A 48,48 0 0 1 91.5,26 L 62,29.5 A 24,24 0 0 0 26,50 z" style={{fill:"#EA3939"}}/>
                <path d="M 50,98 A 48,48 0 0 1 8.5,26 L 26,50 A 24,24 0 0 0 62,70.5 z" style={{fill:"#4AAE48"}}/>
                <path d="M 91.5,26 A 48,48 0 0 1 50,98 L 62,70.5 A 24,24 0 0 0 62,29.5 z" style={{fill:"#FED14B"}}/>
              </svg>
              Install Free Extension
            </a>
          </div>
        </section>

        {/* USE CASES SECTION */}
        <section className="py-24 px-6 bg-brand-surface/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-dark">Stop letting your best ideas vanish.</h2>
              <p className="text-lg md:text-xl text-brand-slate max-w-3xl mx-auto">You don't need another subscription. You need a system. AI ChatWorks is built for the "early adopters" who are tired of copy-pasting from Apple Notes.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* For Developers */}
              <div className="bg-white rounded-2xl border border-brand-border p-8 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-brand-dark">For Developers</h3>
                <p className="text-brand-slate leading-relaxed">Store your best code refactoring prompts and debugging frameworks. Stop typing "act as a senior react developer" fifty times a day.</p>
              </div>

              {/* For Writers & Marketers */}
              <div className="bg-white rounded-2xl border border-brand-border p-8 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-brand-dark">For Writers & Marketers</h3>
                <p className="text-brand-slate leading-relaxed">Keep your brand voice guidelines and article structures one click away. Never let the AI drift off-brand again.</p>
              </div>

              {/* Zero Friction Setup */}
              <div className="bg-white rounded-2xl border border-brand-border p-8 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-brand-dark">Zero Friction Setup</h3>
                <p className="text-brand-slate leading-relaxed">No account required. No login. No "cloud sync" delays. Install the extension and it works instantly on your existing tabs.</p>
              </div>

              {/* Privacy First */}
              <div className="bg-white rounded-2xl border border-brand-border p-8 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-brand-dark">Privacy First</h3>
                <p className="text-brand-slate leading-relaxed">Your prompts are your IP. We store everything locally in your browser. We don't see your data, ever.</p>
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
