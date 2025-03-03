import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-100 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">SolvePOS</h3>
            <p className="text-sm text-gray-600 mb-4">
              Helping businesses find the perfect POS solution for their unique needs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/solutions" className="text-gray-600 hover:text-gray-900">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-gray-900">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/process" className="text-gray-600 hover:text-gray-900">
                  Our Process
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-gray-600 hover:text-gray-900">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-gray-900">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">FAQ</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/faq#implementation" className="text-gray-600 hover:text-gray-900">
                  Implementation Process
                </Link>
              </li>
              <li>
                <Link href="/faq#integration" className="text-gray-600 hover:text-gray-900">
                  System Integration
                </Link>
              </li>
              <li>
                <Link href="/faq#support" className="text-gray-600 hover:text-gray-900">
                  Training & Support
                </Link>
              </li>
              <li>
                <Link href="/faq#pricing" className="text-gray-600 hover:text-gray-900">
                  Pricing Information
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-gray-900">
                  View All FAQs
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <p className="text-sm text-gray-600 mb-4">Have questions? We're here to help!</p>
            <Link
              href="/contact"
              className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} SolvePOS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

