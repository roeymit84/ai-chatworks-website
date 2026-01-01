// DESTINATION: /components/Footer.jsx

import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-brand-border">
      <div className="max-w-7xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-12">
        {/* Brand Section */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <Image 
              src="/images/AI_ChatWorks.svg" 
              alt="AI ChatWorks" 
              width={32} 
              height={32}
              className="w-8 h-8"
            />
            <span className="font-bold text-xl">AI ChatWorks</span>
          </div>
          <p className="text-brand-slate text-sm max-w-xs leading-relaxed mb-6">
            The smart productivity layer for modern AI workflows. Stay organized, save time, 
            and master your prompts across ChatGPT, Claude, and Gemini.
          </p>
          
          {/* Social Icons */}
          <div className="flex items-center gap-4 mb-6">
            <a 
              href="https://discord.gg/KhYSWNzJNN" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-gray hover:text-[#5865F2] transition-colors"
              aria-label="Discord"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.772-.6083 1.1588a18.2532 18.2532 0 00-5.4968 0C9.083 3.663 8.8495 3.2659 8.6385 2.8916a.0738.0738 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.069.069 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419z"/>
              </svg>
            </a>
            <a 
              href="https://www.facebook.com/groups/1208608001123842/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-gray hover:text-[#1877F2] transition-colors"
              aria-label="Facebook"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
              </svg>
            </a>
            <a 
              href="https://x.com/aichatworks" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-gray hover:text-black transition-colors"
              aria-label="X (Twitter)"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
          
          <p className="text-xs text-brand-slate">© 2026 AI ChatWorks. All rights reserved.</p>
        </div>

        {/* Product Links */}
        <div>
          <h3 className="text-sm font-bold tracking-wider text-brand-dark uppercase mb-6">
            Product
          </h3>
          <ul className="space-y-4">
            <li>
              <Link href="/#pricing" className="text-sm text-brand-gray hover:text-brand-purple transition-colors">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/changelog" className="text-sm text-brand-gray hover:text-brand-purple transition-colors">
                Changelog
              </Link>
            </li>
            <li>
              <Link href="/roadmap" className="text-sm text-brand-gray hover:text-brand-purple transition-colors">
                Roadmap
              </Link>
            </li>
            <li>
              <Link href="/#faq" className="text-sm text-brand-gray hover:text-brand-purple transition-colors">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources Links */}
        <div>
          <h3 className="text-sm font-bold tracking-wider text-brand-dark uppercase mb-6">
            Resources
          </h3>
          <ul className="space-y-4">
            <li>
              <Link href="/privacy" className="text-sm text-brand-gray hover:text-brand-purple transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-sm text-brand-gray hover:text-brand-purple transition-colors">
                Terms and Conditions
              </Link>
            </li>
            <li>
              <Link href="/knowledge-base" className="text-sm text-brand-gray hover:text-brand-purple transition-colors">
                Knowledge Base
              </Link>
            </li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-sm font-bold tracking-wider text-brand-dark uppercase mb-6">
            Company
          </h3>
          <ul className="space-y-4">
            <li>
              <Link href="/about" className="text-sm text-brand-gray hover:text-brand-purple transition-colors">
                About us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-sm text-brand-gray hover:text-brand-purple transition-colors">
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
