"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  href: string
}

interface FloatingNavbarProps {
  logoSrc: string
}

const navItems: NavItem[] = [
  { name: "Solutions & Services", href: "/solutions-services" },
  { name: "Partners", href: "/partners" },
  { name: "Resources", href: "/resources" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
]

export function FloatingNavbar({ logoSrc }: FloatingNavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full backdrop-blur transition-all duration-300",
        isScrolled ? "bg-background/95 border-b shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <div className="relative h-8 w-8 overflow-hidden rounded-full bg-gradient-to-br from-primary to-purple-600 p-[2px]">
            <div className="h-full w-full rounded-full bg-white flex items-center justify-center">
              <Image src={logoSrc || "/placeholder.svg"} alt="Logo" width={24} height={24} className="rounded-full" />
            </div>
          </div>
          <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent font-extrabold hidden sm:inline">
            SolvePOS
          </span>
        </Link>
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="text-sm font-medium relative group">
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center">
          <Button className="rounded-full" onClick={() => window.open("https://solvepos.setmore.com/", "_blank")}>
            Book Discovery Call
          </Button>
        </div>
        <button className="md:hidden text-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b">
          <div className="container py-4 space-y-4">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium py-2 border-b border-border"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-3 pt-2">
              <Button
                className="w-full justify-center"
                onClick={() => window.open("https://solvepos.setmore.com/", "_blank")}
              >
                Book Discovery Call
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

