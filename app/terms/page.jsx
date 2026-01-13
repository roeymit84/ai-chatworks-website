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
            <p className="text-brand-slate">Last Updated: <span className="font-semibold text-brand-purple">January 01, 2026</span></p>
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
              <p className="mb-4">AI ChatWorks is a browser extension designed to enhance your experience with AI platforms. Key features include a Prompt Library, Cloud Synchronization, Conversation Timeline Navigation, and a Marketplace for downloading prompt templates.</p>
              <p>The Service acts as an interface and utility layer over third-party AI providers (e.g., ChatGPT, Claude, Gemini). We are not affiliated with, endorsed by, or sponsored by these third-party providers.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">2. User Accounts</h2>
              <ul className="list-disc pl-6 space-y-4">
                <li><strong>Registration:</strong> You may create an account to access features like Cloud Sync and the Marketplace. You must be at least 16 years old to create an account. You agree to provide accurate and complete information during registration.</li>
                <li><strong>Security:</strong> You are responsible for safeguarding the password and credentials used to access the Service. You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.</li>
                <li><strong>Account Types:</strong> The Service offers different account tiers (Basic, Starter, and Pro) with varying limits on prompts, folders, and features. You may upgrade or downgrade your account at any time.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">3. Subscriptions and Payments</h2>
              <ul className="list-disc pl-6 space-y-4">
                <li><strong>Free and Paid Tiers:</strong> The Service offers both free (Basic tier) and paid subscription tiers (Starter, Pro) with different feature limits.</li>
                <li><strong>Billing:</strong> If you choose a paid subscription, you agree to pay the fees indicated. Payments are processed securely by third-party payment processors (e.g., Stripe or LemonSqueezy). We do not store your credit card details.</li>
                <li><strong>Cancellation:</strong> You may cancel your subscription at any time through Settings. Upon cancellation, you will retain access to paid features until the end of your current billing period.</li>
                <li><strong>No Refunds:</strong> Except where required by law, payments are non-refundable. You may cancel your subscription to prevent future billing, but previous payments will not be refunded.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">4. Beta Program</h2>
              <ul className="list-disc pl-6 space-y-4">
                <li><strong>Beta Access:</strong> During the beta period, certain users may be granted early access to features, tiers, or functionality that are under development ("Beta Features"). Beta access may be granted at our discretion and may be revoked at any time.</li>
                <li><strong>No Guarantees:</strong> Beta Features are provided "AS IS" without warranties of any kind. They may contain bugs, errors, or incomplete functionality. We do not guarantee that Beta Features will be included in the final release or will function in the same manner.</li>
                <li><strong>Data and Continuity:</strong> Data created or stored using Beta Features may be subject to:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Loss or corruption during the beta period;</li>
                    <li>Migration or conversion when transitioning to stable releases;</li>
                    <li>Complete removal if the feature is discontinued.</li>
                  </ul>
                </li>
                <li><strong>Feedback and Reporting:</strong> By participating in the beta program, you agree to provide feedback, bug reports, and suggestions to help improve the Service. We may use your feedback without compensation or attribution.</li>
                <li><strong>Beta End Notification:</strong> We will provide reasonable notice before ending beta access. Upon beta termination:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Beta-only features may be removed or restricted;</li>
                    <li>Your account may be migrated to the appropriate standard tier (e.g., Starter, Pro, Premium);</li>
                    <li>Data may be retained or deleted based on the feature's final implementation.</li>
                  </ul>
                </li>
                <li><strong>No Obligation:</strong> Participation in the beta program does not entitle you to:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Permanent access to Beta Features;</li>
                    <li>Free or discounted access to paid tiers after beta ends;</li>
                    <li>Compensation for testing or feedback provided.</li>
                  </ul>
                </li>
                <li><strong>Acceptance of Risks:</strong> By using Beta Features, you acknowledge and accept the risks of data loss, service interruptions, and feature changes inherent in pre-release software.</li>
                <li><strong>Service Discontinuation:</strong> We reserve the right to discontinue the Service entirelywithout transitioning to a paid production release.<br>If we decide to terminate the platform, we will provide at least **30 days' written notice** via email to yourregistered email address.<br></> During this notice period, you will have the opportunity to export your data via Settings > Cloud Data > Export Data. Upon termination, all cloud data will be permanently deleted in accordance with our data retention policy. <br>
No compensation, refund, or alternative service will be provided.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">5. User-Generated Content and Marketplace</h2>
              <ul className="list-disc pl-6 space-y-4">
                <li><strong>Your Content:</strong> You retain full ownership of the prompts, templates, and text you create ("User Content"). We do not claim ownership of your private User Content.</li>
                <li><strong>Marketplace Usage:</strong> The Marketplace allows you to browse and download prompt templates to your personal library. Currently, users cannot upload or publish content to the Marketplace.</li>
                <li><strong>Downloaded Content:</strong> Once you download content from the Marketplace, you are free to modify and use it within your personal Prompt Library.</li>
                <li><strong>Responsibility:</strong> You are solely responsible for the content you create or modify in your library. You agree not to use the Service to generate content that is illegal, offensive, harassing, or infringing on intellectual property rights.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">6. Intellectual Property</h2>
              <p className="mb-4">The Service (excluding User Content) and its original content, features, and functionality are and will remain the exclusive property of AI ChatWorks and its licensors. The Service is protected by copyright, trademark, and other intellectual property laws.</p>
              <p>You may not copy, modify, distribute, sell, or lease any part of the Service or its software without our express written permission.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">7. Data Privacy and Storage</h2>
              <ul className="list-disc pl-6 space-y-4">
                <li><strong>Local-First Architecture:</strong> Your conversation history with AI providers (e.g., ChatGPT, Claude, Gemini) is stored <strong>locally on your device only</strong> and is never synced to our servers.</li>
                <li><strong>Cloud Sync:</strong> If you enable Cloud Sync, your prompts, folders, settings, and marketplace downloads are securely stored on our servers (Supabase) and synchronized across your devices.</li>
                <li><strong>Browser History Access:</strong> The Extension requires access to your browser history to enable the Conversation Timeline feature. This access is <strong>limited exclusively to AI chat platform URLs</strong> (ChatGPT, Claude, Gemini) and is used only to organize your conversations chronologically. We do not access, store, or sync your general browsing history. History data remains in your browser and is read-only.</li>
                <li><strong>Privacy Policy:</strong> For detailed information about how we collect, use, and protect your data, please review our Privacy Policy.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">8. Data Backup and Loss</h2>
              <ul className="list-disc pl-6 space-y-4">
                <li><strong>User Responsibility:</strong> You are solely responsible for maintaining backups of your data. The Service allows you to export your prompts and settings via <strong>Settings &gt; Cloud Data &gt; Export Data</strong>.</li>
                <li><strong>Cloud Backup:</strong> If you use Cloud Sync, your prompts and folders are backed up on our servers. However, we are not liable for any loss of data due to service interruptions, technical failures, or third-party provider issues.</li>
                <li><strong>Local Data:</strong> Data stored locally on your device (such as chat history) is <strong>not backed up to our servers</strong> and is permanently lost if your browser cache is cleared, the Extension is uninstalled, or your device is reset.</li>
                <li><strong>Accidental Deletion:</strong> We are not liable for any loss of data caused by accidental deletion, failure to sync, or user error.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">9. Account Deletion and Data Retention</h2>
              <ul className="list-disc pl-6 space-y-4">
                <li><strong>Deletion Request:</strong> You may request deletion of your account and all associated cloud data at any time via <strong>Settings &gt; Cloud Data &gt; Delete Account</strong>, or by contacting our support team.</li>
                <li><strong>Immediate Processing:</strong> Upon confirmation, your account and all cloud data will be <strong>permanently deleted</strong> from our databases within <strong>24 hours</strong>. This deletion is immediate and irreversible—there are no backups or restoration options once the deletion is confirmed.</li>
                <li><strong>Local Data:</strong> Deleting your account does not delete local data stored on your device. To remove local data, uninstall the Extension or clear your browser's local storage.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">10. Prohibited Uses</h2>
              <p className="mb-2">You agree not to use the Service:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>In any way that violates any applicable national or international law or regulation.</li>
                <li>To reverse engineer, decompile, or disassemble any aspect of the Extension.</li>
                <li>To attempt to access any service, data, or account you are not authorized to access.</li>
                <li>To disrupt or interfere with the security, integrity, or performance of the Service.</li>
                <li>To transmit viruses, malware, or any other malicious code.</li>
                <li>To harass, abuse, or harm another person or impersonate any person or entity.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">11. Disclaimer of Warranties ("As Is")</h2>
              <p className="mb-4">The Service is provided on an "AS IS" and "AS AVAILABLE" basis. We utilize third-party services (such as Supabase for backend infrastructure and third-party AI providers) and cannot guarantee their uptime or availability.</p>
              <p className="mb-2">We make no representations or warranties of any kind, express or implied, regarding:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>The accuracy or reliability of AI-generated responses from third-party providers.</li>
                <li>The availability of the Service at any specific time or location.</li>
                <li>That the Service is free of viruses, bugs, or other harmful components.</li>
                <li>The completeness or accuracy of content downloaded from the Marketplace.</li>
              </ul>
              <div className="bg-brand-surface border-l-4 border-brand-purple p-4 mt-6 rounded-r-lg">
                <p className="m-0 text-sm"><strong>Use of AI features is at your own risk.</strong> You are responsible for verifying the accuracy of any text generated or suggested by AI providers through the Service.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">12. Limitation of Liability</h2>
              <p className="mb-4">In no event shall AI ChatWorks, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Your access to or use of or inability to access or use the Service;</li>
                <li>Any conduct or content of any third party on the Service or third-party AI providers;</li>
                <li>Any content obtained from the Service or Marketplace;</li>
                <li>Unauthorized access, use, or alteration of your transmissions or content;</li>
                <li>Interruptions or errors in the Service caused by third-party providers (e.g., Supabase, AI platforms).</li>
              </ul>
              <p>To the maximum extent permitted by law, our total liability to you for all claims arising out of or related to the Service shall not exceed the amount you paid us in the 12 months prior to the claim, or $100, whichever is greater.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">13. Termination</h2>
              <p className="mb-4">We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms.</p>
              <p className="mb-2">Upon termination:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Your right to use the Service will immediately cease.</li>
                <li>Your cloud data may be deleted in accordance with our data retention policy.</li>
                <li>You will not be entitled to any refund of fees already paid.</li>
              </ul>
              <p className="mt-4">You may terminate your account at any time by deleting your account through Settings or contacting support.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">14. Changes to Terms</h2>
              <p className="mb-2">We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will try to provide at least 30 days' notice prior to any new material terms taking effect by:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Posting the updated Terms on this page and updating the "Last Updated" date;</li>
                <li>Sending an email notification to your registered email address (if applicable);</li>
                <li>Displaying a notice within the Extension.</li>
              </ul>
              <p className="mt-4">By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you must stop using the Service.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">15. Governing Law</h2>
              <p className="mb-4">These Terms shall be governed and construed in accordance with applicable international laws and consumer protection regulations.</p>
              <p>Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">16. Contact Us</h2>
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
