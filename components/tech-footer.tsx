import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function TechFooter() {
  return (
    <footer className="bg-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/placeholder.svg?height=40&width=150&text=SolvePOS"
                alt="SolvePOS"
                width={150}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-gray-600 mb-6">
              SolvePOS helps businesses find the perfect point-of-sale solution by comparing features, pricing, and
              customer reviews from top POS providers.
            </p>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-gray-500 hover:text-orange-600">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-orange-600">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-orange-600">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-orange-600">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <div className="space-y-2">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-orange-600 mr-2" />
                <span className="text-gray-600">info@solvepos.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-orange-600 mr-2" />
                <span className="text-gray-600">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-orange-600 mr-2" />
                <span className="text-gray-600">123 Business Ave, Tech City, TC 10111</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/solutions/retail" className="text-gray-600 hover:text-orange-600">
                  Retail POS
                </Link>
              </li>
              <li>
                <Link href="/solutions/restaurant" className="text-gray-600 hover:text-orange-600">
                  Restaurant POS
                </Link>
              </li>
              <li>
                <Link href="/solutions/hospitality" className="text-gray-600 hover:text-orange-600">
                  Hospitality POS
                </Link>
              </li>
              <li>
                <Link href="/solutions/service" className="text-gray-600 hover:text-orange-600">
                  Service Industry POS
                </Link>
              </li>
              <li>
                <Link href="/solutions/healthcare" className="text-gray-600 hover:text-orange-600">
                  Healthcare POS
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-gray-600 hover:text-orange-600">
                  View All Solutions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-orange-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-gray-600 hover:text-orange-600">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-600 hover:text-orange-600">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-orange-600">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-orange-600">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/press" className="text-gray-600 hover:text-orange-600">
                  Press
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/resources/guides" className="text-gray-600 hover:text-orange-600">
                  Buyer's Guides
                </Link>
              </li>
              <li>
                <Link href="/resources/comparisons" className="text-gray-600 hover:text-orange-600">
                  POS Comparisons
                </Link>
              </li>
              <li>
                <Link href="/resources/checklists" className="text-gray-600 hover:text-orange-600">
                  Checklists
                </Link>
              </li>
              <li>
                <Link href="/resources/case-studies" className="text-gray-600 hover:text-orange-600">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-orange-600">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/glossary" className="text-gray-600 hover:text-orange-600">
                  POS Glossary
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-200 pt-8 pb-8">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Subscribe to Our Newsletter</h3>
            <p className="text-gray-600 mb-4">
              Get the latest POS news, tips, and exclusive offers delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input type="email" placeholder="Your email address" className="flex-grow" />
              <Button className="bg-orange-600 hover:bg-orange-700 whitespace-nowrap">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} SolvePOS. All rights reserved.
          </div>
          <div className="flex flex-wrap gap-4 text-sm">
            <Link href="/terms" className="text-gray-500 hover:text-orange-600">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-gray-500 hover:text-orange-600">
              Privacy Policy
            </Link>
            <Link href="/cookies" className="text-gray-500 hover:text-orange-600">
              Cookie Policy
            </Link>
            <Link href="/sitemap" className="text-gray-500 hover:text-orange-600">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

