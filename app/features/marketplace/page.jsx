// DESTINATION: /app/features/marketplace/page.jsx

import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'

export const metadata = {
  title: 'Marketplace - AI ChatWorks',
  description: 'Browse and download curated AI prompts from the community. Get expert-level results instantly.',
}

export default function MarketplacePage() {
  return (
    <>
      <Navbar />
      
      <main className="pt-32 pb-20 px-6">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-2 mb-6">
            <svg className="w-4 h-4 text-emerald-600" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M2.7,9.45a4.235,4.235,0,0,0,.3.3V22a1,1,0,0,0,1,1H20a1,1,0,0,0,1-1V9.752a4.235,4.235,0,0,0,.3-.3,4,4,0,0,0,.731-3.456L20.97,1.758A1,1,0,0,0,20,1H4a1,1,0,0,0-.97.758L1.972,5.994A4,4,0,0,0,2.7,9.45ZM13,21H11V16h2Zm6,0H15V15a1,1,0,0,0-1-1H10a1,1,0,0,0-1,1v6H5V10.9A3.989,3.989,0,0,0,8.914,9.61c.026.03.053.059.08.089A4.086,4.086,0,0,0,12.041,11a4.039,4.039,0,0,0,2.965-1.3c.027-.03.054-.059.08-.089A3.989,3.989,0,0,0,19,10.9ZM3.911,6.479,4.781,3H19.219l.87,3.479A2.029,2.029,0,0,1,18.12,9,2.041,2.041,0,0,1,16.1,7.14l-.042-.5a1,1,0,0,0-1.993.166v0a2.006,2.006,0,0,1-.529,1.539A2.059,2.059,0,0,1,11.959,9,2.029,2.029,0,0,1,9.937,6.806v0a1,1,0,0,0-.914-1.079.989.989,0,0,0-1.079.913l-.042.5A2.041,2.041,0,0,1,5.88,9,2.029,2.029,0,0,1,3.911,6.479Z"></path>
            </svg>
            <span className="text-sm font-semibold text-emerald-700">COMMUNITY POWERED</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-brand-dark">
            Expert Prompts, <span className="text-brand-purple">Instant Results</span>
          </h1>
          <p className="text-xl md:text-2xl text-brand-slate max-w-3xl mx-auto leading-relaxed">
            Skip the trial and error. Download battle-tested prompts curated by the community and start getting professional-grade AI outputs immediately.
          </p>
        </div>

        {/* Value Proposition Grid */}
        <div className="max-w-6xl mx-auto mb-20 animate-fade-in">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-white rounded-2xl border border-brand-border p-8 hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-brand-dark">Instant Expertise</h3>
              <p className="text-brand-slate leading-relaxed">
                Get professional-quality results without spending hours crafting the perfect prompt. Our curated library gives you expert-level prompts in seconds.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white rounded-2xl border border-brand-border p-8 hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-brand-dark">Smart Discovery</h3>
              <p className="text-brand-slate leading-relaxed">
                Find exactly what you need with powerful search and category filters. Browse by use case, industry, or popularity to discover your next go-to prompt.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white rounded-2xl border border-brand-border p-8 hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-brand-dark">One-Click Install</h3>
              <p className="text-brand-slate leading-relaxed">
                No copy-pasting. No manual organization. Download any prompt directly to your personal library and start using it immediately.
              </p>
            </div>
          </div>
        </div>

        {/* Categories Showcase */}
        <div className="max-w-6xl mx-auto mb-20 animate-fade-in">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-brand-dark">Browse by Category</h2>
            <p className="text-xl text-brand-slate">Curated prompts for every use case</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Writing & Content', icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z', color: 'blue' },
              { name: 'Coding & Development', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4', color: 'green' },
              { name: 'Marketing & Sales', icon: 'M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z', color: 'purple' },
              { name: 'Data Analysis', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z', color: 'orange' },
              { name: 'Creative & Design', icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01', color: 'pink' },
              { name: 'Business & Strategy', icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', color: 'gray' }
            ].map((category, index) => (
              <div key={index} className={`bg-white rounded-xl border border-brand-border p-6 hover:shadow-lg transition-all cursor-pointer group`}>
                <div className={`w-12 h-12 bg-${category.color}-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <svg className={`w-6 h-6 text-${category.color}-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={category.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-brand-dark mb-2">{category.name}</h3>
                <p className="text-sm text-brand-slate">Explore prompts →</p>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="max-w-5xl mx-auto mb-20 animate-fade-in">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-brand-dark">How It Works</h2>
            <p className="text-xl text-brand-slate">From discovery to deployment in three steps</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-3 text-brand-dark">Browse & Preview</h3>
              <p className="text-brand-slate">
                Search the marketplace by category or keyword. Preview each prompt to see exactly what you're getting before downloading.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-3 text-brand-dark">Download Instantly</h3>
              <p className="text-brand-slate">
                Click "Add to Library" and the prompt is yours. It automatically appears in your personal Prompt Library, ready to use.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-3 text-brand-dark">Customize & Deploy</h3>
              <p className="text-brand-slate">
                Edit the prompt to fit your needs or use it as-is. Deploy it to ChatGPT, Claude, or Gemini with a single click.
              </p>
            </div>
          </div>
        </div>

        {/* Tiers Explanation */}
        <div className="max-w-5xl mx-auto mb-20 animate-fade-in">
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-12 border border-purple-100">
            <h2 className="text-3xl font-bold mb-8 text-brand-dark text-center">Two Quality Tiers</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Standard Tier */}
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-brand-dark">Standard Prompts</h3>
                </div>
                <p className="text-brand-slate mb-6">
                  High-quality, community-vetted prompts available to all users. Perfect for everyday tasks and general use cases.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-brand-gray">Free for all users</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-brand-gray">Community curated</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-brand-gray">Regular updates</span>
                  </li>
                </ul>
              </div>

              {/* Pro Tier */}
              <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl p-8 text-white border-2 border-purple-400">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold">Pro Prompts</h3>
                </div>
                <p className="text-purple-100 mb-6">
                  Premium, expert-crafted prompts for advanced use cases. Tested extensively and optimized for maximum performance.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">Pro tier subscription required</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">Expert-level quality</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">Advanced workflows included</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-3xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Start Using Expert Prompts Today
            </h2>
            <p className="text-xl mb-8 text-emerald-100">
              Install AI ChatWorks and get instant access to hundreds of curated prompts.
            </p>
            <a 
              href="https://chromewebstore.google.com/detail/ai-chatworks/legmkjenpjbcgmmifpdhehgbmbkofmmc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-emerald-600 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all shadow-xl"
            >
              <svg className="w-6 h-6" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
                <ellipse cx="50" cy="50" rx="20" ry="20" style={{ fill: "#188FD1" }} />
                <path d="M 8.5,26 A 48,48 0 0 1 91.5,26 L 62,29.5 A 24,24 0 0 0 26,50 z" style={{ fill: "#EA3939" }} />
                <path d="M 50,98 A 48,48 0 0 1 8.5,26 L 26,50 A 24,24 0 0 0 62,70.5 z" style={{ fill: "#4AAE48" }} />
                <path d="M 91.5,26 A 48,48 0 0 1 50,98 L 62,70.5 A 24,24 0 0 0 62,29.5 z" style={{ fill: "#FED14B" }} />
              </svg>
              Browse Marketplace
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
