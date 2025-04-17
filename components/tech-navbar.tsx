"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown, Search, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

export function TechNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-orange-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="text-sm">
              <span className="hidden md:inline">Find the perfect POS solution for your business</span>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <Link href="/contact" className="hover:underline">
                Contact Us
              </Link>
              <Link href="/about" className="hover:underline">
                About Us
              </Link>
              <Link href="/blog" className="hover:underline">
                Blog
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/placeholder.svg?height=40&width=150&text=SolvePOS"
              alt="SolvePOS"
              width={150}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <NavItem href="/solutions" label="Solutions">
              <div className="grid grid-cols-2 gap-4 p-4 w-[500px]">
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">By Industry</h3>
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
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">By Feature</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/features/inventory" className="text-gray-600 hover:text-orange-600">
                        Inventory Management
                      </Link>
                    </li>
                    <li>
                      <Link href="/features/crm" className="text-gray-600 hover:text-orange-600">
                        Customer Management
                      </Link>
                    </li>
                    <li>
                      <Link href="/features/reporting" className="text-gray-600 hover:text-orange-600">
                        Reporting & Analytics
                      </Link>
                    </li>
                    <li>
                      <Link href="/features/payments" className="text-gray-600 hover:text-orange-600">
                        Payment Processing
                      </Link>
                    </li>
                    <li>
                      <Link href="/features/ecommerce" className="text-gray-600 hover:text-orange-600">
                        E-commerce Integration
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </NavItem>

            <NavItem href="/compare" label="Compare">
              <div className="p-4 w-[300px]">
                <h3 className="font-medium text-gray-900 mb-2">Compare POS Systems</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/compare/retail" className="text-gray-600 hover:text-orange-600">
                      Retail POS Comparison
                    </Link>
                  </li>
                  <li>
                    <Link href="/compare/restaurant" className="text-gray-600 hover:text-orange-600">
                      Restaurant POS Comparison
                    </Link>
                  </li>
                  <li>
                    <Link href="/compare/hospitality" className="text-gray-600 hover:text-orange-600">
                      Hospitality POS Comparison
                    </Link>
                  </li>
                  <li>
                    <Link href="/compare/service" className="text-gray-600 hover:text-orange-600">
                      Service POS Comparison
                    </Link>
                  </li>
                  <li>
                    <Link href="/compare/all" className="text-gray-600 hover:text-orange-600">
                      All POS Systems
                    </Link>
                  </li>
                </ul>
              </div>
            </NavItem>

            <Link href="/pricing" className="text-gray-700 hover:text-orange-600">
              Pricing
            </Link>
            <Link href="/reviews" className="text-gray-700 hover:text-orange-600">
              Reviews
            </Link>
            <Link href="/resources" className="text-gray-700 hover:text-orange-600">
              Resources
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <button onClick={() => setSearchOpen(!searchOpen)} className="text-gray-700 hover:text-orange-600">
              <Search className="h-5 w-5" />
            </button>
            <Link href="/account" className="text-gray-700 hover:text-orange-600">
              <User className="h-5 w-5" />
            </Link>
            <Button className="bg-orange-600 hover:bg-orange-700">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-4">
            <button onClick={() => setSearchOpen(!searchOpen)} className="text-gray-700">
              <Search className="h-5 w-5" />
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-700">
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      {searchOpen && (
        <div className="border-t border-gray-200 py-3">
          <div className="container mx-auto px-4">
            <div className="relative">
              <Input type="text" placeholder="Search for POS systems..." className="pr-10 h-10" />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <div className="container mx-auto px-4 py-4">
            <nav className="space-y-4">
              <MobileNavItem
                label="Solutions"
                items={[
                  { label: "Retail POS", href: "/solutions/retail" },
                  { label: "Restaurant POS", href: "/solutions/restaurant" },
                  { label: "Hospitality POS", href: "/solutions/hospitality" },
                  { label: "Service Industry POS", href: "/solutions/service" },
                  { label: "Healthcare POS", href: "/solutions/healthcare" },
                ]}
              />

              <MobileNavItem
                label="Compare"
                items={[
                  { label: "Retail POS Comparison", href: "/compare/retail" },
                  { label: "Restaurant POS Comparison", href: "/compare/restaurant" },
                  { label: "Hospitality POS Comparison", href: "/compare/hospitality" },
                  { label: "Service POS Comparison", href: "/compare/service" },
                  { label: "All POS Systems", href: "/compare/all" },
                ]}
              />

              <Link href="/pricing" className="block py-2 text-gray-700">
                Pricing
              </Link>
              <Link href="/reviews" className="block py-2 text-gray-700">
                Reviews
              </Link>
              <Link href="/resources" className="block py-2 text-gray-700">
                Resources
              </Link>

              <div className="pt-4 border-t border-gray-200">
                <Button className="w-full bg-orange-600 hover:bg-orange-700">Get Started</Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

// Desktop Navigation Item with Dropdown
function NavItem({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button className="flex items-center text-gray-700 hover:text-orange-600" onClick={() => setIsOpen(!isOpen)}>
        {label}
        <ChevronDown className="ml-1 h-4 w-4" />
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 bg-white rounded-md shadow-lg border border-gray-200 z-50">{children}</div>
      )}
    </div>
  )
}

// Mobile Navigation Item with Dropdown
function MobileNavItem({ label, items }: { label: string; items: { label: string; href: string }[] }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <button
        className="flex items-center justify-between w-full py-2 text-gray-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{label}</span>
        <ChevronDown className={cn("h-4 w-4 transition-transform", isOpen && "rotate-180")} />
      </button>

      {isOpen && (
        <div className="pl-4 mt-2 space-y-2 border-l border-gray-200">
          {items.map((item) => (
            <Link key={item.href} href={item.href} className="block py-1 text-gray-600 hover:text-orange-600">
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

