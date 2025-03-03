import type React from "react"
import { FloatingNavbar } from "./floating-navbar"
import Link from "next/link"
import Image from "next/image"

const navItems = [
  { name: "Solutions & Services", href: "/solutions-services" },
  { name: "Partners", href: "/partners" },
  { name: "Resources", href: "/resources" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
]

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <FloatingNavbar logoSrc="/placeholder.svg?height=32&width=32" />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}

function Footer() {
  return (
    <footer className="border-t bg-gradient-to-b from-blue-50 to-white py-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-purple-500/5 to-transparent rounded-full blur-3xl -z-10"></div>

      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl mb-4">
              <div className="relative h-10 w-10 overflow-hidden rounded-full bg-gradient-to-br from-primary to-purple-600 p-[2px]">
                <div className="h-full w-full rounded-full bg-white flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=32&width=32"
                    alt="SolvePOS Logo"
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                </div>
              </div>
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent font-extrabold">
                SolvePOS
              </span>
            </Link>
            <p className="text-muted-foreground mb-4">Helping businesses worldwide find the perfect POS solution.</p>
            <div className="flex gap-4">
              {["twitter", "facebook", "instagram", "linkedin"].map((social) => (
                <Link key={social} href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <span className="sr-only">{social}</span>
                  <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center border border-gray-100 shadow-sm hover:shadow hover:border-primary/20 transition-all">
                    <Image
                      src={`/placeholder.svg?height=20&width=20&text=${social}`}
                      alt={social}
                      width={20}
                      height={20}
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-lg">Solutions & Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/solutions-services#retail"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Retail POS
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions-services#restaurant"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Restaurant POS
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions-services#enterprise"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Enterprise Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions-services#setup"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  POS Setup & Integration
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions-services#support"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  24/7 Support
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-lg">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-muted-foreground hover:text-primary transition-colors">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-muted-foreground hover:text-primary transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-lg">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/resources#case-studies"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/resources#whitepapers"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Whitepapers
                </Link>
              </li>
              <li>
                <Link href="/resources#sops" className="text-muted-foreground hover:text-primary transition-colors">
                  SOPs
                </Link>
              </li>
              <li>
                <Link href="/resources#guides" className="text-muted-foreground hover:text-primary transition-colors">
                  Guides
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} SolvePOS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

