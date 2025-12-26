import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'Terms and Conditions - AI ChatWorks',
  description: 'Terms of service for using AI ChatWorks extension.',
}

export default function TermsPage() {
  return (
    <>
      <Navbar />
      
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 text-brand-dark animate-fade-in">Terms and Conditions</h1>
          <p className="text-brand-slate text-lg mb-8 animate-fade-in">Last updated: December 2024</p>
          
          <div className="prose prose-lg max-w-none animate-fade-in">
            <div className="bg-white rounded-2xl border border-brand-border p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-brand-dark">1. Acceptance of Terms</h2>
              <p className="text-brand-gray leading-relaxed">
                By installing and using AI ChatWorks, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use the Extension.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-brand-border p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-brand-dark">2. Description of Service</h2>
              <p className="text-brand-gray leading-relaxed mb-4">
                AI ChatWorks is a Chrome browser extension that provides productivity features for AI chatbots.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-brand-border p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-brand-dark">3. License and Usage</h2>
              <p className="text-brand-gray leading-relaxed">
                We grant you a limited, non-exclusive, non-transferable license to use AI ChatWorks for personal or commercial purposes.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-brand-border p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-brand-dark">4. User Responsibilities</h2>
              <p className="text-brand-gray leading-relaxed">
                You are responsible for maintaining the security of your account and all content you create using the Extension.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-brand-border p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-brand-dark">5. Data and Privacy</h2>
              <p className="text-brand-gray leading-relaxed">
                All your data is stored locally on your device. For more details, see our <a href="/privacy" className="text-brand-purple hover:underline">Privacy Policy</a>.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-brand-border p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-brand-dark">6. Disclaimer of Warranties</h2>
              <p className="text-brand-gray leading-relaxed">
                THE EXTENSION IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-brand-border p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-brand-dark">7. Limitation of Liability</h2>
              <p className="text-brand-gray leading-relaxed">
                AI CHATWORKS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES.
              </p>
            </div>

            <div className="bg-purple-50 rounded-2xl border border-purple-200 p-8">
              <h2 className="text-2xl font-bold mb-4 text-purple-900">Contact Us</h2>
              <p className="text-purple-800 leading-relaxed mb-4">
                If you have any questions about these Terms and Conditions, please contact us:
              </p>
              <p className="text-purple-800">
                <strong>Email:</strong> <a href="mailto:info@ai-chatworks.com" className="text-brand-purple hover:underline">info@ai-chatworks.com</a>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
