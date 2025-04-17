import type React from "react"
import { Inter } from "next/font/google"
import { ModernNavbar } from "@/components/modern-navbar"
import { ModernFooter } from "@/components/modern-footer"
import { FloatingChatBubble } from "@/components/FloatingChatBubble"
import { ThemeProvider } from "@/components/theme-provider"
import "@/app/globals.css"

// Use the Inter font
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata = {
  title: "SolvePOS - Find & Compare the Best POS Systems",
  description:
    "Compare top POS systems, read reviews, and get expert advice to find the right solution for your business needs.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="bg-white text-gray-900 min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="light">
          <ModernNavbar />
          <main>{children}</main>
          <ModernFooter />
          <FloatingChatBubble />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'