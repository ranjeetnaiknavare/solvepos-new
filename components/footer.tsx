import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-black text-white border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">SolvePOS</h3>
            <p className="text-sm text-gray-400 mb-4">
              Helping businesses find the perfect POS solution for their unique needs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/solutions" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/process" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Our Process
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">FAQ</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/faq#implementation" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Implementation Process
                </Link>
              </li>
              <li>
                <Link href="/faq#integration" className="text-gray-400 hover:text-blue-400 transition-colors">
                  System Integration
                </Link>
              </li>
              <li>
                <Link href="/faq#support" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Training & Support
                </Link>
              </li>
              <li>
                <Link href="/faq#pricing" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Pricing Information
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-blue-400 transition-colors">
                  View All FAQs
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Contact Us</h3>
            <p className="text-sm text-gray-400 mb-4">Have questions? We're here to help!</p>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-2 rounded-md transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} SolvePOS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

