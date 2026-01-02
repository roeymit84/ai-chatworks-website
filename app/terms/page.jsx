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
        <div className="max-w-4xl mx-auto bg-white shadow-xl shadow-brand-dark/5 rounded-2xl border border-brand-border overflow-hidden animate-fade-in">
          <div className="px-8 py-10 border-b border-brand-border bg-gradient-to-r from-brand-surface to-white">
            <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-2">Terms and Conditions</h1>
            <p className="text-brand-slate">Last Updated: <span className="font-semibold text-brand-purple">December 03, 2025</span></p>
          </div>

          <div className="px-8 py-10 space-y-8 text-brand-gray leading-relaxed">
            <section>
              <p className="mb-4">Please read these Terms and Conditions ("Terms", "Terms of Service") carefully before using the <strong>AI ChatWorks</strong> browser extension (the "Service") operated by <strong>AI ChatWorks</strong> ("us", "we", or "our").</p>
              <p className="mb-4">Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.</p>
              <p className="mb-4">By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.</p>
            </section>

            <hr className="border-brand-border" />

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">1. Description of Service</h2>
              <p>AI ChatWorks is a browser extension designed to enhance your experience with AI platforms. Key features include a Prompt Library, Cloud Synchronization, Ghost Text (autocompletion), and a Marketplace for sharing resources.</p>
              <p className="mt-4">The Service acts as an interface and utility layer over third-party AI providers (e.g., OpenAI, Anthropic, Google). We are not affiliated with, endorsed by, or sponsored by these third-party providers.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">2. User Accounts</h2>
              <ul className="list-disc pl-6 space-y-4">
                <li><strong>Registration:</strong> You may need to create an account to access features like Cloud Sync and the Marketplace. You agree to provide accurate and complete information.</li>
                <li><strong>Security:</strong> You are responsible for safeguarding the password and credentials used to access the Service. You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">3. Subscriptions and Payments</h2>
              <ul className="list-disc pl-6 space-y-4">
                <li><strong>Free and Paid Tiers:</strong> The Service may offer both free and paid subscription tiers.</li>
                <li><strong>Billing:</strong> If you choose a paid subscription, you agree to pay the fees indicated. Payments are processed by third-party payment processors.</li>
                <li><strong>No Refunds:</strong> Except where required by law, payments are non-refundable. You may cancel your subscription at any time to prevent future billing, but previous payments will not be refunded.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">4. User-Generated Content and Marketplace</h2>
              <ul className="list-disc pl-6 space-y-4">
                <li><strong>Your Content:</strong> You retain ownership of the prompts, templates, and text you create ("User Content"). We do not claim ownership of your private User Content.</li>
                <li><strong>Marketplace Usage:</strong> The Marketplace allows you to browse and download content to your personal library. Currently, users cannot upload or publish content to the Marketplace.</li>
                <li><strong>Downloaded Content:</strong> Once you download content from the Marketplace, you are free to modify and use it within your personal Prompt Library.</li>
                <li><strong>Responsibility:</strong> You are solely responsible for the content you create or modify in your library. You agree not to use the Service to generate content that is illegal, offensive, or infringing on intellectual property rights.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">5. Intellectual Property</h2>
              <p>The Service (excluding User Content) and its original content, features, and functionality are and will remain the exclusive property of AI ChatWorks and its licensors. The Service is protected by copyright, trademark, and other laws.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">6. Data Backup and Loss</h2>
              <ul className="list-disc pl-6 space-y-4">
                <li><strong>User Responsibility:</strong> You are solely responsible for maintaining backups of your data. The Service allows you to export your prompts and settings to a file via <strong>Settings &gt; Local data &gt; Export</strong>.</li>
                <li><strong>Accidental Deletion:</strong> We are not liable for any loss of data caused by accidental deletion, browser cache clearing, uninstallation of the Extension, or failure to sync.</li>
                <li><strong>Local Data:</strong> Data stored locally on your device (such as chat history) is not backed up to our servers and is permanently lost if your local storage is cleared.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">7. Prohibited Uses</h2>
              <p>You agree not to use the Service:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>In any way that violates any applicable national or international law or regulation.</li>
                <li>To reverse engineer, decompile, or disassemble any aspect of the Extension.</li>
                <li>To attempt to access any service or data you are not authorized to access.</li>
                <li>To disrupt or interfere with the security or performance of the Service.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">8. Disclaimer of Warranties ("As Is")</h2>
              <p>The Service is provided on an "AS IS" and "AS AVAILABLE" basis. We utilize third-party services (such as Supabase and AI Providers) and cannot guarantee their uptime or availability.</p>
              <p className="mt-4">We make no representations or warranties of any kind, express or implied, regarding:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>The accuracy or reliability of AI-generated responses.</li>
                <li>The availability of the Service at any specific time or location.</li>
                <li>That the Service is free of viruses or other harmful components.</li>
              </ul>
              <div className="bg-brand-surface border-l-4 border-brand-purple p-4 mt-6 rounded-r-lg">
                <p className="m-0 text-sm"><strong>Use of the "Ghost Text" and AI features is at your own risk.</strong> You are responsible for verifying the accuracy of any text generated or suggested by the Service.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">9. Limitation of Liability</h2>
              <p>In no event shall AI ChatWorks, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Your access to or use of or inability to access or use the Service;</li>
                <li>Any conduct or content of any third party on the Service;</li>
                <li>Any content obtained from the Service; and</li>
                <li>Unauthorized access, use, or alteration of your transmissions or content.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">10. Termination</h2>
              <p>We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will immediately cease.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">11. Changes to Terms</h2>
              <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will try to provide at least 30 days' notice prior to any new material terms taking effect. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">12. Contact Us</h2>
              <p>If you have any questions about these Terms, please contact us at:</p>
              <p className="mt-4">
                <a href="mailto:info@ai-chatworks.com" className="inline-flex items-center gap-2 px-6 py-2 rounded-lg bg-brand-surface border border-brand-border text-brand-purple font-semibold hover:bg-brand-purple hover:text-white transition-all duration-300">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  info@ai-chatworks.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}