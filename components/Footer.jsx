import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-brand-border">
      <div className="max-w-7xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-x-8 gap-y-12">
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
          <p className="text-xs text-brand-slate">© 2025 AI ChatWorks. All rights reserved.</p>
        </div>

        {/* Product Links */}
        <div>
          <h3 className="text-sm font-bold tracking-wider text-brand-dark uppercase mb-6">
            Product
          </h3>
          <ul className="space-y-4">
            <li>
              <Link href="/changelog" className="text-sm text-brand-gray hover:text-brand-purple transition-colors">
                Changelog
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

        {/* Social Links */}
        <div>
          <h3 className="text-sm font-bold tracking-wider text-brand-dark uppercase mb-6">
            Social
          </h3>
          <ul className="space-y-4">
            <li>
              <a 
                href="https://www.facebook.com/groups/1208608001123842/" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-brand-gray hover:text-[#1877F2] transition-colors"
              >
                Facebook
              </a>
            </li>
            <li>
              <a 
                href="https://discord.gg/KhYSWNzJNN" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-brand-gray hover:text-[#5865F2] transition-colors"
              >
                Discord
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
