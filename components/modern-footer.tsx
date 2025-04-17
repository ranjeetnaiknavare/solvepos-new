"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, Facebook, Twitter, Linkedin, Instagram, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ModernFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-gray-50 text-gray-900 border-t border-gold-200">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-12">
          {/* Logo and Social Links */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="relative h-10 w-10 overflow-hidden rounded-lg bg-gradient-to-br from-gold-500 to-bronze-500 p-[2px]">
                <div className="h-full w-full rounded-lg bg-white flex items-center justify-center">
                  <Image src="/placeholder.svg?height=24&width=24" alt="SolvePOS" width={24} height={24} />
                </div>
              </div>
              <div className="font-bold text-xl">
                <span className="text-gray-900">Solve</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-600 to-bronze-600">POS</span>
              </div>
            </Link>

            <p className="text-gray-600 mb-6">
              We connect businesses with the perfect POS solutions to streamline operations and drive growth.
            </p>

            <div className="flex gap-4">
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-white flex items-center justify-center hover:bg-gold-50 transition-colors duration-300 border border-gold-200"
              >
                <Facebook className="h-5 w-5 text-gold-600 hover:text-gold-700 transition-colors" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-white flex items-center justify-center hover:bg-gold-50 transition-colors duration-300 border border-gold-200"
              >
                <Twitter className="h-5 w-5 text-gold-600 hover:text-gold-700 transition-colors" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-white flex items-center justify-center hover:bg-gold-50 transition-colors duration-300 border border-gold-200"
              >
                <Linkedin className="h-5 w-5 text-gold-600 hover:text-gold-700 transition-colors" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-white flex items-center justify-center hover:bg-gold-50 transition-colors duration-300 border border-gold-200"
              >
                <Instagram className="h-5 w-5 text-gold-600 hover:text-gold-700 transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gold-700">Solutions</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/solutions/retail"
                  className="text-gray-600 hover:text-gold-700 transition-colors inline-flex items-center"
                >
                  Retail POS
                  <ArrowUpRight className="ml-1 h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/restaurant"
                  className="text-gray-600 hover:text-gold-700 transition-colors inline-flex items-center"
                >
                  Restaurant POS
                  <ArrowUpRight className="ml-1 h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/hospitality"
                  className="text-gray-600 hover:text-gold-700 transition-colors inline-flex items-center"
                >
                  Hospitality POS
                  <ArrowUpRight className="ml-1 h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/service"
                  className="text-gray-600 hover:text-gold-700 transition-colors inline-flex items-center"
                >
                  Service Industry POS
                  <ArrowUpRight className="ml-1 h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gold-700">Company</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-gold-700 transition-colors inline-flex items-center"
                >
                  About Us
                  <ArrowUpRight className="ml-1 h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link
                  href="/partners"
                  className="text-gray-600 hover:text-gold-700 transition-colors inline-flex items-center"
                >
                  Partners
                  <ArrowUpRight className="ml-1 h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-gray-600 hover:text-gold-700 transition-colors inline-flex items-center"
                >
                  Careers
                  <ArrowUpRight className="ml-1 h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-gold-700 transition-colors inline-flex items-center"
                >
                  Contact
                  <ArrowUpRight className="ml-1 h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gold-700">Resources</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/blog"
                  className="text-gray-600 hover:text-gold-700 transition-colors inline-flex items-center"
                >
                  Blog
                  <ArrowUpRight className="ml-1 h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/case-studies"
                  className="text-gray-600 hover:text-gold-700 transition-colors inline-flex items-center"
                >
                  Case Studies
                  <ArrowUpRight className="ml-1 h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-600 hover:text-gold-700 transition-colors inline-flex items-center"
                >
                  FAQ
                  <ArrowUpRight className="ml-1 h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/guides"
                  className="text-gray-600 hover:text-gold-700 transition-colors inline-flex items-center"
                >
                  Guides
                  <ArrowUpRight className="ml-1 h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gold-700">Stay Updated</h3>
            <p className="text-gray-600 mb-4 text-sm">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex h-10 w-full rounded-lg border border-gold-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
              />
              <Button
                className="rounded-lg bg-gradient-to-r from-gold-500 to-bronze-500 hover:from-gold-600 hover:to-bronze-600 text-black font-medium"
                size="sm"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gold-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} SolvePOS. All rights reserved.
            </div>

            <div className="flex gap-6">
              <Link href="/terms" className="text-gray-500 hover:text-gold-700 text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-gray-500 hover:text-gold-700 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/cookies" className="text-gray-500 hover:text-gold-700 text-sm transition-colors">
                Cookies Policy
              </Link>
            </div>

            <button
              onClick={scrollToTop}
              className="hidden md:flex h-10 w-10 rounded-full bg-white items-center justify-center hover:bg-gold-50 transition-colors duration-300 group border border-gold-200"
            >
              <ArrowUp className="h-5 w-5 text-gold-600 group-hover:text-gold-700 transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

