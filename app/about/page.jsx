import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'About Us - AI ChatWorks',
  description: 'Learn about our mission to enhance your AI workflow experience.',
}

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4">
              About AI ChatWorks
            </h1>
            <p className="text-xl text-brand-slate max-w-3xl mx-auto">
              Empowering users to work smarter with AI through seamless integration and intelligent workflow tools
            </p>
          </div>

          {/* Our Story Section - Updated Design */}
          <section className="mb-16 animate-fade-in">
            <div className="bg-white shadow-xl shadow-brand-dark/5 rounded-2xl border border-brand-border p-10 md:p-12 relative overflow-hidden">
              {/* Subtle accent decoration */}
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-brand-purple to-blue-600"></div>
              
              <h2 className="text-3xl font-bold text-brand-dark mb-6 pl-6">Our Story</h2>
              
              <div className="space-y-4 text-brand-gray leading-relaxed pl-6">
                <p className="text-lg">
                  AI ChatWorks started as a personal project by developers who worked daily with ChatGPT, Claude, and Gemini. 
                  We were frustrated with the need to switch between tools, copy and paste prompts, and manage our workflow 
                  across multiple platforms.
                </p>
                <p className="text-lg">
                  So we built a solution for ourselves, and discovered thousands of other users faced the same problems. Today, 
                  AI ChatWorks serves a growing community looking for a better way to work.
                </p>
              </div>
            </div>
          </section>

          {/* Mission & Vision */}
          <section className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white shadow-lg shadow-brand-dark/5 rounded-2xl border border-brand-border p-8 animate-fade-in">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-purple to-blue-600 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">Our Mission</h2>
              <p className="text-brand-gray leading-relaxed">
                To streamline and enhance your AI interaction experience by providing powerful tools that save time, 
                boost productivity, and make working with multiple AI platforms effortless.
              </p>
            </div>

            <div className="bg-white shadow-lg shadow-brand-dark/5 rounded-2xl border border-brand-border p-8 animate-fade-in">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-purple to-blue-600 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">Our Vision</h2>
              <p className="text-brand-gray leading-relaxed">
                We envision a future where AI tools work seamlessly together, empowering everyone to harness the full 
                potential of artificial intelligence without technical barriers or platform limitations.
              </p>
            </div>
          </section>

          {/* Core Values */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-brand-dark text-center mb-10">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center animate-fade-in">
                <div className="w-16 h-16 rounded-2xl bg-brand-surface border border-brand-border flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-brand-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-brand-dark mb-2">Privacy First</h3>
                <p className="text-brand-gray">
                  Your data is yours. We use a local-first architecture to ensure your conversations remain private.
                </p>
              </div>

              <div className="text-center animate-fade-in">
                <div className="w-16 h-16 rounded-2xl bg-brand-surface border border-brand-border flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-brand-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-brand-dark mb-2">User-Centric</h3>
                <p className="text-brand-gray">
                  Every feature is designed with your needs in mind, based on real user feedback and experience.
                </p>
              </div>

              <div className="text-center animate-fade-in">
                <div className="w-16 h-16 rounded-2xl bg-brand-surface border border-brand-border flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-brand-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-brand-dark mb-2">Innovation</h3>
                <p className="text-brand-gray">
                  We continuously evolve and improve, staying ahead of the curve in AI technology.
                </p>
              </div>
            </div>
          </section>

          {/* Team or Community Section */}
          <section className="bg-gradient-to-r from-brand-surface to-white rounded-2xl border border-brand-border p-10 text-center">
            <h2 className="text-3xl font-bold text-brand-dark mb-4">Join Our Community</h2>
            <p className="text-brand-gray text-lg max-w-2xl mx-auto mb-8">
              AI ChatWorks is built by a passionate team of developers and AI enthusiasts. 
              We're constantly improving based on feedback from our amazing community of users.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="px-8 py-3 rounded-lg bg-brand-purple text-white font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg shadow-brand-purple/30"
              >
                Get in Touch
              </a>
              <a 
                href="/" 
                className="px-8 py-3 rounded-lg bg-white border-2 border-brand-purple text-brand-purple font-semibold hover:bg-brand-surface transition-all duration-300"
              >
                Try AI ChatWorks
              </a>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  )
}
