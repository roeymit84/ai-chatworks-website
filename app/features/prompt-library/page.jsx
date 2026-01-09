// DESTINATION: /app/features/prompt-library/page.jsx

import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'

export const metadata = {
  title: 'Prompt Library - AI ChatWorks',
  description: 'Organize, save, and access your AI prompts instantly. Never lose your best prompts again.',
}

export default function PromptLibraryPage() {
  return (
    <>
      <Navbar />
      
      <main className="pt-32 pb-20 px-6">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-200 rounded-full px-4 py-2 mb-6">
            <svg className="w-4 h-4 text-purple-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m16 6 4 14"></path>
              <path d="M12 6v14"></path>
              <path d="M8 8v12"></path>
              <path d="M4 4v16"></path>
            </svg>
            <span className="text-sm font-semibold text-purple-700">CORE FEATURE</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-brand-dark">
            Your Personal <span className="text-brand-purple">Prompt Library</span>
          </h1>
          <p className="text-xl md:text-2xl text-brand-slate max-w-3xl mx-auto leading-relaxed">
            Stop digging through chat history, Notion docs, or scattered text files. Save your best prompts in one place and access them instantly across ChatGPT, Claude, and Gemini.
          </p>
        </div>

        {/* Key Benefits Grid */}
        <div className="max-w-6xl mx-auto mb-20 animate-fade-in">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Benefit 1 */}
            <div className="bg-white rounded-2xl border border-brand-border p-8 hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-brand-dark">Unlimited Storage</h3>
              <p className="text-brand-slate leading-relaxed">
                Save as many prompts as you need. From simple one-liners to complex multi-paragraph instructions, your entire prompt collection is stored securely and accessible instantly.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white rounded-2xl border border-brand-border p-8 hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-brand-dark">Smart Organization</h3>
              <p className="text-brand-slate leading-relaxed">
                Create unlimited folders to categorize your prompts by project, use case, or any system that works for you. Color-code folders for instant visual recognition.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white rounded-2xl border border-brand-border p-8 hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-brand-dark">Lightning-Fast Search</h3>
              <p className="text-brand-slate leading-relaxed">
                Find any prompt in milliseconds. Search by title, content, or tags. The more prompts you save, the more valuable your searchable knowledge base becomes.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="bg-white rounded-2xl border border-brand-border p-8 hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-brand-dark">Favorites System</h3>
              <p className="text-brand-slate leading-relaxed">
                Star your most-used prompts for instant access. Your favorites appear at the top of your library, ensuring your go-to prompts are always one click away.
              </p>
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="max-w-5xl mx-auto mb-20 animate-fade-in">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-brand-dark">How It Works</h2>
            <p className="text-xl text-brand-slate">Three simple steps to organize your AI workflow</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-3 text-brand-dark">Save Your Prompts</h3>
              <p className="text-brand-slate">
                Click the AI ChatWorks icon while using ChatGPT, Claude, or Gemini. Save any prompt with a single click or create new ones from scratch.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-3 text-brand-dark">Organize Everything</h3>
              <p className="text-brand-slate">
                Create folders, add tags, and favorite your best prompts. Build a system that matches how you work. Everything syncs instantly to the cloud.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-3 text-brand-dark">Deploy Instantly</h3>
              <p className="text-brand-slate">
                Use the floating button or press Cmd/Ctrl+Shift+F to open your library. Find any prompt in seconds and deploy it with one click.
              </p>
            </div>
          </div>
        </div>

        {/* Features Showcase */}
        <div className="max-w-6xl mx-auto mb-20 animate-fade-in">
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-12 border border-purple-100">
            <h2 className="text-3xl font-bold mb-8 text-brand-dark text-center">Advanced Features</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-brand-dark mb-1">Rich Text Formatting</h4>
                  <p className="text-sm text-brand-slate">Add formatting, line breaks, and structure to your prompts for perfect readability.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-brand-dark mb-1">Flexible Tagging</h4>
                  <p className="text-sm text-brand-slate">Add multiple tags to each prompt for cross-category organization and powerful filtering.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-brand-dark mb-1">Bulk Actions</h4>
                  <p className="text-sm text-brand-slate">Select multiple prompts to move, delete, or organize them all at once. Save time at scale.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-brand-dark mb-1">Import & Export</h4>
                  <p className="text-sm text-brand-slate">Full data portability. Export your entire library as JSON or import prompts from other tools.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-brand-dark mb-1">Privacy First</h4>
                  <p className="text-sm text-brand-slate">Your prompts are encrypted and stored securely. Optional cloud sync means you control where your data lives.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-brand-dark mb-1">Usage History</h4>
                  <p className="text-sm text-brand-slate">Track which prompts you use most often. Identify your MVPs and refine your workflow over time.</p>
                </div>
              </div>
            </div>
          </div>
        </div>


      </main>

      <Footer />
    </>
  )
}
