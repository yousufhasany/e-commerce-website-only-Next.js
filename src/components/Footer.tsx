'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Twitter, Facebook, Instagram, Github } from 'lucide-react'

export default function Footer() {
  const [showLogoInBox, setShowLogoInBox] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY
      const maxScroll = documentHeight - windowHeight
      const progress = scrollTop / maxScroll
      
      // Show logo in footer box when scroll reaches 95% or more
      setShowLogoInBox(progress >= 0.95)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <footer className="bg-gray-100 mt-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold mb-4">SHOP.SAKU</h2>
            <p className="text-gray-600 text-sm mb-4">
              We have clothes that suit your style and which you're proud to wear. From women to men.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4 uppercase tracking-wide text-sm">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-600 hover:text-gray-900 text-sm">About</Link></li>
              <li><Link href="/features" className="text-gray-600 hover:text-gray-900 text-sm">Features</Link></li>
              <li><Link href="/works" className="text-gray-600 hover:text-gray-900 text-sm">Works</Link></li>
              <li><Link href="/career" className="text-gray-600 hover:text-gray-900 text-sm">Career</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-semibold mb-4 uppercase tracking-wide text-sm">Help</h3>
            <ul className="space-y-2">
              <li><Link href="/support" className="text-gray-600 hover:text-gray-900 text-sm">Customer Support</Link></li>
              <li><Link href="/delivery" className="text-gray-600 hover:text-gray-900 text-sm">Delivery Details</Link></li>
              <li><Link href="/terms" className="text-gray-600 hover:text-gray-900 text-sm">Terms & Conditions</Link></li>
              <li><Link href="/privacy" className="text-gray-600 hover:text-gray-900 text-sm">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* FAQ */}
          <div>
            <h3 className="font-semibold mb-4 uppercase tracking-wide text-sm">FAQ</h3>
            <ul className="space-y-2">
              <li><Link href="/account" className="text-gray-600 hover:text-gray-900 text-sm">Account</Link></li>
              <li><Link href="/deliveries" className="text-gray-600 hover:text-gray-900 text-sm">Manage Deliveries</Link></li>
              <li><Link href="/orders" className="text-gray-600 hover:text-gray-900 text-sm">Orders</Link></li>
              <li><Link href="/payments" className="text-gray-600 hover:text-gray-900 text-sm">Payments</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4 uppercase tracking-wide text-sm">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/ebooks" className="text-gray-600 hover:text-gray-900 text-sm">Free eBooks</Link></li>
              <li><Link href="/tutorial" className="text-gray-600 hover:text-gray-900 text-sm">Development Tutorial</Link></li>
              <li><Link href="/blog" className="text-gray-600 hover:text-gray-900 text-sm">How to - Blog</Link></li>
              <li><Link href="/playlist" className="text-gray-600 hover:text-gray-900 text-sm">Youtube Playlist</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-300 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm mb-4 md:mb-0">
            Shop.Saku © 2000-2023, All Rights Reserved
          </p>
          <div className="flex space-x-2">
            <div className="w-12 h-8 bg-white rounded flex items-center justify-center border border-gray-200">
              <span className="text-xs font-semibold">VISA</span>
            </div>
            <div className="w-12 h-8 bg-white rounded flex items-center justify-center border border-gray-200">
              <span className="text-xs font-semibold">MC</span>
            </div>
            <div className="w-12 h-8 bg-white rounded flex items-center justify-center border border-gray-200">
              <span className="text-xs font-semibold">PAY</span>
            </div>
            <div className="w-12 h-8 bg-white rounded flex items-center justify-center border border-gray-200">
              <span className="text-xs font-semibold">APPLE</span>
            </div>
            <div className="w-12 h-8 bg-white rounded flex items-center justify-center border border-gray-200">
              <span className="text-xs font-semibold">G</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Empty SHOP.SAKU Box at bottom - logo lands here when scrolling */}
      <div className="flex justify-center pb-8 pt-4">
        <div className="bg-black text-white px-8 py-4 text-3xl font-bold border-4 border-white shadow-2xl min-w-[280px] min-h-[72px] flex items-center justify-center">
          <span 
            className="transition-opacity duration-300"
            style={{ opacity: showLogoInBox ? 1 : 0 }}
          >
            SHOP.SAKU
          </span>
        </div>
      </div>
    </footer>
  )
}
