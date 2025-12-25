import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = {
  title: 'About Us - AI ChatWorks',
  description: 'Transforming how people work with AI chatbots. Learn about our mission and story.',
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      
      <main className="pt-32 pb-20 px-6">
        {/* Hero Section */}
        <div className="max-w-5xl mx-auto text-center mb-20 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-brand-dark">
            About AI ChatWorks
          </h1>
          <p className="text-xl text-brand-slate max-w-3xl mx-auto">
            Transforming how people work with AI chatbots.
          </p>
        </div>

        {/* Content Sections */}
        <div className="max-w-5xl mx-auto space-y-8 animate-fade-in">
          {/* Mission Card */}
          <div className="bg-white rounded-3xl border border-brand-border p-12 shadow-sm">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="w-16 h-16 rounded-2xl bg-brand-purple/10 flex items-center justify-center flex-shrink-0 text-brand-purple">
                <svg className="w-8 h-8" viewBox="0 0 494.914 494.914" fill="currentColor">
                  <path d="M285.813,266.034v36.483c91.16,9.032,145.408,40.674,145.408,64.427c0,27.993-75.088,67.024-197.362,67.024 S36.514,394.937,36.514,366.944c0-23.93,54.996-55.856,147.32-64.635v-36.466C87.701,274.843,0,309.59,0,366.944 c0,67.247,120.488,103.54,233.858,103.54c113.369,0,233.877-36.293,233.877-103.54 C467.735,309.972,381.194,275.321,285.813,266.034z"/>
                  <path d="M486.869,40.363c-2.789-1.752-5.959-2.63-9.145-2.63c-2.551,0-5.098,0.558-7.472,1.704l-30.271,14.689 c-14.084,6.836-29.346,10.245-44.593,10.245c-16.123,0-32.214-3.808-46.919-11.392c-14.673-7.568-30.699-11.327-46.695-11.327 c-16.728,0-33.441,4.095-48.592,12.252V42.8c0-10.149-8.236-18.37-18.369-18.37c-10.133,0-18.354,8.221-18.354,18.37v328.94 c0,10.133,8.221,18.354,18.354,18.354c10.133,0,18.369-8.221,18.369-18.354V203.853c15.15-8.157,31.88-12.268,48.607-12.268 c15.996,0,32.007,3.76,46.68,11.326c14.705,7.584,30.796,11.393,46.902,11.393c15.247,0,30.51-3.41,44.609-10.244l45.245-21.953 c5.927-2.868,9.686-8.859,9.686-15.438V54.908C494.914,48.981,491.855,43.485,486.869,40.363z"/>
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4 text-brand-dark">Our Mission</h2>
                <p className="text-lg text-brand-slate leading-relaxed">
                  AI ChatWorks was created from a deep understanding of the everyday challenges of 
                  working with AI tools. We saw how users struggled with organizing prompts, switching 
                  between platforms, and managing their workflow efficiently.<br /><br />
                  We decided to create a solution that combines all the essential tools in one place - 
                  simple, elegant, and effective.
                </p>
              </div>
            </div>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Simplicity Card */}
            <div className="bg-white rounded-3xl border border-brand-border p-10 shadow-sm hover:border-brand-purple/30 transition-colors">
              <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6 text-blue-600">
                <svg className="w-7 h-7" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M10.3 8.2l-0.9 0.9 0.9 0.9-1.2 1.2 4.3 4.3c0.6 0.6 1.5 0.6 2.1 0s0.6-1.5 0-2.1l-5.2-5.2zM14.2 15c-0.4 0-0.8-0.3-0.8-0.8 0-0.4 0.3-0.8 0.8-0.8s0.8 0.3 0.8 0.8c0 0.5-0.3 0.8-0.8 0.8z"/>
                  <path d="M3.6 8l0.9-0.6 1.5-1.7 0.9 0.9 0.9-0.9-0.1-0.1c0.2-0.5 0.3-1 0.3-1.6 0-2.2-1.8-4-4-4-0.6 0-1.1 0.1-1.6 0.3l2.9 2.9-2.1 2.1-2.9-2.9c-0.2 0.5-0.3 1-0.3 1.6 0 2.1 1.6 3.7 3.6 4z"/>
                  <path d="M8 10.8l0.9-0.8-0.9-0.9 5.7-5.7 1.2-0.4 1.1-2.2-0.7-0.7-2.3 1-0.5 1.2-5.6 5.7-0.9-0.9-0.8 0.9c0 0 0.8 0.6-0.1 1.5-0.5 0.5-1.3-0.1-2.8 1.4-0.5 0.5-2.1 2.1-2.1 2.1s-0.6 1 0.6 2.2 2.2 0.6 2.2 0.6 1.6-1.6 2.1-2.1c1.4-1.4 0.9-2.3 1.3-2.7 0.9-0.9 1.6-0.2 1.6-0.2zM4.9 10.4l0.7 0.7-3.8 3.8-0.7-0.7z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-brand-dark">
                Simplicity and Efficiency
              </h3>
              <p className="text-brand-slate leading-relaxed">
                We believe that good tools should be simple to use and intuitive. Every feature in 
                AI ChatWorks is designed to save you time and help you work smarter.
              </p>
            </div>

            {/* Community Card */}
            <div className="bg-white rounded-3xl border border-brand-border p-10 shadow-sm hover:border-brand-purple/30 transition-colors">
              <div className="w-14 h-14 rounded-xl bg-emerald-50 flex items-center justify-center mb-6 text-emerald-600">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-brand-dark">
                Community and Support
              </h3>
              <p className="text-brand-slate leading-relaxed mb-6">
                We're not just building tools, we're building a community of users who help each 
                other. Your feedback is important to us.
              </p>
              <a 
                href="https://www.facebook.com/groups/1208608001123842/" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 font-bold hover:underline"
              >
                Join our Facebook Community
              </a>
            </div>
          </div>

          {/* Story Card */}
          <div className="rounded-3xl p-12 text-white bg-gradient-to-br from-brand-purple to-blue-600 shadow-xl">
            <h2 className="text-3xl font-bold mb-6 text-white">Our Story</h2>
            <p className="text-lg leading-relaxed opacity-90 mb-6">
              AI ChatWorks started as a personal project by developers who worked daily with ChatGPT, 
              Claude, and Gemini. We were frustrated with the need to switch between tools, copy and 
              paste prompts, and manage our workflow across multiple platforms.
            </p>
            <p className="text-lg leading-relaxed opacity-90">
              So we built a solution for ourselves, and discovered thousands of other users faced the 
              same problems. Today, AI ChatWorks serves a growing community looking for a better way 
              to work.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
