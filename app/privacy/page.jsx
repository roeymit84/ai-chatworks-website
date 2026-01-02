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
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 text-brand-dark animate-fade-in">Privacy Policy</h1>
          <p className="text-brand-slate text-lg mb-8 animate-fade-in">Last updated: December 2024</p>

          <div className="prose prose-lg max-w-none animate-fade-in">
            <div className="bg-white rounded-2xl border border-brand-border p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-brand-dark">Introduction</h2>
              <p className="text-brand-gray leading-relaxed mb-4">
                At AI ChatWorks, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information when you use our Chrome extension and services.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-brand-border p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-brand-dark">Information We Collect</h2>
              <h3 className="text-xl font-semibold mb-3 text-brand-dark">Local Storage Data</h3>
              <p className="text-brand-gray leading-relaxed mb-4">
                AI ChatWorks stores all your data locally on your device using Chrome's secure storage API (chrome.storage.local). This includes:
              </p>
              <ul className="list-disc pl-6 text-brand-gray space-y-2 mb-4">
                <li>Your saved prompts and prompt library</li>
                <li>Folder organization and tags</li>
                <li>Extension settings and preferences</li>
                <li>Usage statistics (stored locally only)</li>
              </ul>
              <p className="text-brand-gray leading-relaxed">
                <strong>Important:</strong> None of this data is transmitted to our servers or any third party. Everything stays on your device.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-brand-border p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-brand-dark">How We Use Your Information</h2>
              <p className="text-brand-gray leading-relaxed mb-4">
                Since all data is stored locally on your device:
              </p>
              <ul className="list-disc pl-6 text-brand-gray space-y-2">
                <li>We do not access, collect, or transmit your prompts or personal data</li>
                <li>We do not track your usage patterns</li>
                <li>We do not share any information with third parties</li>
                <li>We do not use your data for advertising or marketing purposes</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-brand-border p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-brand-dark">Data Security</h2>
              <p className="text-brand-gray leading-relaxed mb-4">
                Your data security is paramount:
              </p>
              <ul className="list-disc pl-6 text-brand-gray space-y-2">
                <li>All data is stored using Chrome's secure storage API</li>
                <li>Data is encrypted by Chrome's built-in security measures</li>
                <li>Only you have access to your data through your Chrome profile</li>
                <li>We recommend using Chrome's sync feature to backup your data across devices</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-brand-border p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-brand-dark">Third-Party Services</h2>
              <p className="text-brand-gray leading-relaxed mb-4">
                AI ChatWorks operates on the following platforms:
              </p>
              <ul className="list-disc pl-6 text-brand-gray space-y-2 mb-4">
                <li><strong>ChatGPT (OpenAI)</strong> - We do not transmit any data to OpenAI beyond what you directly input</li>
                <li><strong>Claude (Anthropic)</strong> - Same as above, no additional data transmission</li>
                <li><strong>Gemini (Google)</strong> - Same as above, no additional data transmission</li>
              </ul>
              <p className="text-brand-gray leading-relaxed">
                The extension simply enhances your experience on these platforms without intercepting or transmitting your conversations.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-brand-border p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-brand-dark">Your Rights</h2>
              <p className="text-brand-gray leading-relaxed mb-4">
                You have complete control over your data:
              </p>
              <ul className="list-disc pl-6 text-brand-gray space-y-2">
                <li><strong>Access:</strong> All your data is accessible through the extension interface</li>
                <li><strong>Export:</strong> Use the Import/Export feature to download all your data</li>
                <li><strong>Delete:</strong> Use the Data Management feature to delete all stored data</li>
                <li><strong>Uninstall:</strong> Removing the extension deletes all local data</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-brand-border p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-brand-dark">Cookies and Tracking</h2>
              <p className="text-brand-gray leading-relaxed">
                AI ChatWorks does not use cookies, tracking pixels, or any analytics tools. We do not track your browsing activity or collect usage statistics.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-brand-border p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-brand-dark">Children's Privacy</h2>
              <p className="text-brand-gray leading-relaxed">
                AI ChatWorks does not knowingly collect information from children under 13. Our service is intended for general audiences and does not target children.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-brand-border p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-brand-dark">Changes to This Policy</h2>
              <p className="text-brand-gray leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
              </p>
            </div>

            <div className="bg-purple-50 rounded-2xl border border-purple-200 p-8">
              <h2 className="text-2xl font-bold mb-4 text-purple-900">Contact Us</h2>
              <p className="text-purple-800 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy, please contact us:
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