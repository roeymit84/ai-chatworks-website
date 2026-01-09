// DESTINATION: /app/features/flow/page.jsx

import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'

export const metadata = {
  title: 'Flow - AI ChatWorks',
  description: 'Your command palette for AI. Execute any action, find any prompt in milliseconds with keyboard shortcuts.',
}

export default function FlowPage() {
  return (
    <>
      <Navbar />
      
      <main className="pt-32 pb-20 px-6">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-2 mb-6">
            <svg className="w-4 h-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 12C3 12 5.5 7 9 7C12.5 7 12.5 17 16 17C19.5 17 22 12 22 12"></path>
            </svg>
            <span className="text-sm font-semibold text-blue-700">PRODUCTIVITY SUPERPOWER</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-brand-dark">
            Work at the <span className="text-brand-purple">Speed of Thought</span>
          </h1>
          <p className="text-xl md:text-2xl text-brand-slate max-w-3xl mx-auto leading-relaxed">
            Meet Flow: Your Spotlight-style command palette for AI. Find any prompt, execute any action, and navigate your entire workflow without ever touching your mouse.
          </p>

          {/* Keyboard Shortcut Badge */}
          <div className="mt-8 inline-flex items-center gap-3 bg-gray-900 text-white px-6 py-3 rounded-xl">
            <span className="text-sm font-medium">Quick Launch:</span>
            <div className="flex items-center gap-2">
              <kbd className="px-3 py-1 bg-gray-700 rounded text-sm font-mono">Cmd</kbd>
              <span>+</span>
              <kbd className="px-3 py-1 bg-gray-700 rounded text-sm font-mono">Shift</kbd>
              <span>+</span>
              <kbd className="px-3 py-1 bg-gray-700 rounded text-sm font-mono">F</kbd>
            </div>
            <span className="text-gray-400 text-sm">(or Ctrl on Windows)</span>
          </div>
        </div>

        {/* Key Benefits Grid */}
        <div className="max-w-6xl mx-auto mb-20 animate-fade-in">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-white rounded-2xl border border-brand-border p-8 hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-brand-dark">0.5 Second Access</h3>
              <p className="text-brand-slate leading-relaxed">
                Press Cmd+Shift+F and your entire prompt library appears instantly. Find and deploy complex prompts faster than typing a single word.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white rounded-2xl border border-brand-border p-8 hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-brand-dark">Smart Actions</h3>
              <p className="text-brand-slate leading-relaxed">
                Execute powerful actions like "Summarize Chat," "Open Settings," or "Export Conversation" directly from the command palette. No clicking through menus.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white rounded-2xl border border-brand-border p-8 hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-brand-dark">Fuzzy Search</h3>
              <p className="text-brand-slate leading-relaxed">
                Type partial words, abbreviations, or even typos. Flow's intelligent search understands what you're looking for and surfaces it instantly.
              </p>
            </div>
          </div>
        </div>

        {/* How Flow Works */}
        <div className="max-w-5xl mx-auto mb-20 animate-fade-in">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-brand-dark">How Flow Works</h2>
            <p className="text-xl text-brand-slate">Master your AI workflow in three steps</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-3 text-brand-dark">Launch Flow</h3>
              <p className="text-brand-slate">
                Press <kbd className="px-2 py-1 bg-gray-100 rounded text-sm font-mono">Cmd+Shift+F</kbd> anywhere on ChatGPT, Claude, or Gemini. The command palette appears instantly.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-3 text-brand-dark">Type to Search</h3>
              <p className="text-brand-slate">
                Start typing the name of a prompt or action. Results appear in real-time with intelligent fuzzy matching.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-3 text-brand-dark">Hit Enter</h3>
              <p className="text-brand-slate">
                Press Enter to execute. Your prompt deploys to the chat, or your action executes immediately. Zero friction.
              </p>
            </div>
          </div>
        </div>

        {/* Available Actions */}
        <div className="max-w-6xl mx-auto mb-20 animate-fade-in">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-brand-dark">Powerful Actions Built-In</h2>
            <p className="text-xl text-brand-slate">Execute common tasks without leaving the keyboard</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                name: 'Summarize Chat', 
                description: 'Generate a comprehensive summary of your current conversation',
                icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
              },
              { 
                name: 'Enhance Prompt', 
                description: 'Automatically improve any prompt for better AI responses',
                icon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'
              },
              { 
                name: 'Export Chat', 
                description: 'Download conversation in multiple formats (PDF, Markdown, JSON)',
                icon: 'M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4'
              },
              { 
                name: 'Open Settings', 
                description: 'Quick access to all AI ChatWorks configuration options',
                icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z'
              },
              { 
                name: 'New Folder', 
                description: 'Create a new folder to organize your prompts',
                icon: 'M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z'
              },
              { 
                name: 'Jump to Timeline', 
                description: 'Navigate to any point in your conversation history',
                icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
              }
            ].map((action, index) => (
              <div key={index} className="bg-white rounded-xl border border-brand-border p-6 hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={action.icon} />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-dark mb-1">{action.name}</h4>
                    <p className="text-sm text-brand-slate">{action.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Keyboard-First Design */}
        <div className="max-w-5xl mx-auto mb-20 animate-fade-in">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 text-white">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Designed for Keyboard Masters</h2>
              <p className="text-xl text-gray-300">Navigate everything without touching your mouse</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold mb-4 text-gray-300">Navigation</h3>
                <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                  <span className="text-sm">Open Flow</span>
                  <div className="flex gap-1">
                    <kbd className="px-2 py-1 bg-gray-700 rounded text-xs">Cmd/Ctrl</kbd>
                    <span className="text-gray-500">+</span>
                    <kbd className="px-2 py-1 bg-gray-700 rounded text-xs">Shift</kbd>
                    <span className="text-gray-500">+</span>
                    <kbd className="px-2 py-1 bg-gray-700 rounded text-xs">F</kbd>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                  <span className="text-sm">Move Down</span>
                  <kbd className="px-2 py-1 bg-gray-700 rounded text-xs">↓</kbd>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                  <span className="text-sm">Move Up</span>
                  <kbd className="px-2 py-1 bg-gray-700 rounded text-xs">↑</kbd>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                  <span className="text-sm">Select Item</span>
                  <kbd className="px-2 py-1 bg-gray-700 rounded text-xs">Enter</kbd>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold mb-4 text-gray-300">Quick Actions</h3>
                <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                  <span className="text-sm">Close Flow</span>
                  <kbd className="px-2 py-1 bg-gray-700 rounded text-xs">Esc</kbd>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                  <span className="text-sm">Clear Search</span>
                  <div className="flex gap-1">
                    <kbd className="px-2 py-1 bg-gray-700 rounded text-xs">Cmd/Ctrl</kbd>
                    <span className="text-gray-500">+</span>
                    <kbd className="px-2 py-1 bg-gray-700 rounded text-xs">K</kbd>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                  <span className="text-sm">Execute & Close</span>
                  <kbd className="px-2 py-1 bg-gray-700 rounded text-xs">Enter</kbd>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                  <span className="text-sm">View Details</span>
                  <kbd className="px-2 py-1 bg-gray-700 rounded text-xs">Space</kbd>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Productivity Stats */}
        <div className="max-w-5xl mx-auto mb-20 animate-fade-in">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12 border border-blue-100">
            <h2 className="text-3xl font-bold mb-8 text-brand-dark text-center">Work Faster, Think Clearer</h2>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold text-blue-600 mb-2">10x</div>
                <p className="text-brand-slate">Faster than clicking through menus</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-purple-600 mb-2">0.5s</div>
                <p className="text-brand-slate">Average time to deploy a prompt</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-emerald-600 mb-2">100%</div>
                <p className="text-brand-slate">Keyboard-driven workflow</p>
              </div>
            </div>
          </div>
        </div>


      </main>

      <Footer />
    </>
  )
}
