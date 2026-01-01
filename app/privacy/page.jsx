import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'Privacy Policy - AI ChatWorks',
  description: 'Our commitment to your privacy and data protection.',
}

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto bg-white shadow-xl shadow-brand-dark/5 rounded-2xl border border-brand-border overflow-hidden animate-fade-in">
          <div className="px-8 py-10 border-b border-brand-border bg-gradient-to-r from-brand-surface to-white">
            <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-2">Privacy Policy</h1>
            <p className="text-brand-slate">Last Updated: <span className="font-semibold text-brand-purple">December 03, 2025</span></p>
          </div>

          <div className="px-8 py-10 space-y-8 text-brand-gray leading-relaxed">
            <section>
              <p className="mb-4">At <strong>AI ChatWorks</strong> ("we," "us," or "our"), we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use the AI ChatWorks browser extension (the "Extension").</p>
              <p>By installing and using the Extension, you agree to the collection and use of information in accordance with this policy.</p>
            </section>

            <hr className="border-brand-border" />

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">1. Information We Collect</h2>
              <p>We prioritize a <strong>Local-First</strong> architecture. Most of your sensitive data, such as your actual conversation history with AI providers, remains on your device. However, to provide features like Cloud Sync, Marketplace, and Account Management, we collect specific types of data.</p>
              
              <h3 className="text-xl font-semibold text-brand-dark mt-6 mb-2">1.1. Personal Information</h3>
              <p>When you create an account or sign in (via Supabase Auth), we may collect:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>Email Address:</strong> Used for authentication, account management, and important service notifications.</li>
                <li><strong>User ID:</strong> A unique identifier assigned to your account.</li>
              </ul>

              <h3 className="text-xl font-semibold text-brand-dark mt-6 mb-2">1.2. User Content (Cloud Data)</h3>
              <p>To enable synchronization across devices, the following data is encrypted and stored on our secure servers (Supabase):</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>Prompts & Templates:</strong> The custom prompts you save in your Prompt Library.</li>
                <li><strong>Folders:</strong> The names and organization of your folders.</li>
                <li><strong>Marketplace Data:</strong> Content you explicitly downloaded from the Marketplace.</li>
                <li><strong>Tags & Metadata:</strong> Any tags or organizational metadata you add to your prompts.</li>
              </ul>

              <h3 className="text-xl font-semibold text-brand-dark mt-6 mb-2">1.3. User Content (Local Data)</h3>
              <p>The following data is <strong>stored locally on your device</strong>:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>Chat Content:</strong> The actual text of your conversations with AI providers (e.g., ChatGPT, Claude). This data is <strong>never</strong> shared with us or synced to our servers, regardless of whether you have a cloud account. It remains strictly private on your device.</li>
                <li><strong>Ghost Text Drafts:</strong> Temporary text generated during the ghost text/autocompletion process.</li>
              </ul>
              <div className="bg-brand-surface border-l-4 border-brand-purple p-4 mt-4 rounded-r-lg">
                <p className="m-0 text-sm italic">If you do not create a cloud account (or are not signed in), <strong>all</strong> operations are processed and saved exclusively on your local computer. We do not sync any data to the cloud unless you explicitly choose to sign in.</p>
              </div>

              <h3 className="text-xl font-semibold text-brand-dark mt-6 mb-2">1.4. Usage Data & Analytics</h3>
              <p>We may anonymously collect usage data to improve the Extension, such as:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Frequency of feature usage (e.g., "Prompt Library used 5 times").</li>
                <li>Performance metrics (e.g., load times, error rates).</li>
              </ul>
              <p className="mt-2 text-sm">This data is aggregated and cannot be used to identify you personally.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">2. How We Use Your Information</h2>
              <p>We use the collected data for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>To Provide Service:</strong> Authenticating users and syncing your prompts/settings/folders across your devices.</li>
                <li><strong>To Improve the Extension:</strong> Analyzing usage patterns to identify popular features and fix bugs.</li>
                <li><strong>To Communicate:</strong> Sending updates regarding your account or critical security notices.</li>
                <li><strong>Marketplace Functionality:</strong> Enabling you to browse and download prompts or templates from the Marketplace.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">3. Data Storage and Security</h2>
              <h3 className="text-xl font-semibold text-brand-dark mb-2">3.1. Storage</h3>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>Cloud Data:</strong> We use <strong>Supabase</strong>, a secure and industry-standard backend-as-a-service provider, to store your synced data.</li>
                <li><strong>Local Data:</strong> Your chat history and temporary drafts are stored in your browser's local storage (IndexedDB / chrome.storage).</li>
              </ul>
              <h3 className="text-xl font-semibold text-brand-dark mt-6 mb-2">3.2. Security</h3>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>Access Control:</strong> We implement strict access controls. Your private prompts and settings are accessible only by you (via your authenticated account).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">4. Third-Party Sharing</h2>
              <p>We do <strong>not</strong> sell, trade, or rent your personal identification information to others. We only share data with trusted third-party service providers necessary to operate the Extension:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>Supabase:</strong> For authentication and database hosting.</li>
                <li><strong>Payment Processors:</strong> If you subscribe to a paid plan, payment is processed by a third-party provider (e.g., Stripe or LemonSqueezy). We do not store your credit card details.</li>
              </ul>
              <p className="mt-4">We may disclose your information if required by law or in response to valid requests by public authorities.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">5. User Rights</h2>
              <p>You have the following rights regarding your data:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>Access:</strong> You can view your synced data directly within the Extension.</li>
                <li><strong>Correction:</strong> You can update your settings and prompts at any time.</li>
                <li><strong>Deletion:</strong> You can request the deletion of your account and all associated cloud data by using the account delete option within Settings (Cloud Data tab &gt; Delete Account), or by contacting support. Local data can be deleted by uninstalling the Extension.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">6. Data Retention</h2>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>Account Data:</strong> We retain your account data as long as your account is active.</li>
                <li><strong>Deleted Accounts:</strong> Upon request for deletion, your data is removed from our live databases within 24 hours.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">7. Changes to This Privacy Policy</h2>
              <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">8. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at:</p>
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
