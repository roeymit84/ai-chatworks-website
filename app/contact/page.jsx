import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Contact Us - AI ChatWorks',
  description: 'Get in touch with the AI ChatWorks team. We\'d love to hear from you.',
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      
      <main className="pt-32 pb-20 px-6 text-center min-h-[70vh]">
        <div className="animate-fade-in">
          <h1 className="text-4xl font-bold mb-4 text-brand-dark">Contact Us</h1>
          <p className="text-brand-slate mb-12">We'd love to hear from you.</p>
          
          <div className="max-w-xl mx-auto bg-white p-10 rounded-2xl border border-brand-border shadow-lg">
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center text-brand-purple mb-2">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-brand-dark">Get in touch via Email</h2>
              <p className="text-brand-slate mb-6">For support, feedback, or just to say hi.</p>
              <a 
                href="mailto:info@ai-chatworks.com" 
                className="px-8 py-3 bg-brand-purple text-white rounded-lg font-bold hover:bg-brand-purpleDark transition-all"
              >
                info@ai-chatworks.com
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
