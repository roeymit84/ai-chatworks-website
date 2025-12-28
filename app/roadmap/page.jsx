// DESTINATION: /app/roadmap/page.jsx

'use client'

import { useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function RoadmapPage() {
  useEffect(() => {
    // Load Focusmap script
    const script = document.createElement('script')
    script.src = 'https://focusmap.pro/embed-widget.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <>
      <Navbar />
      
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-brand-dark">Product Roadmap</h1>
            <p className="text-xl text-brand-slate max-w-3xl mx-auto">
              See what we're working on and vote for features you'd like to see next. Your feedback shapes the future of AI ChatWorks.
            </p>
          </div>

          {/* Focusmap Roadmap Embed */}
          <div className="animate-fade-in">
            <div data-focusmap-roadmap="17477820-e898-499b-aad7-3813231f2c8d"></div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
