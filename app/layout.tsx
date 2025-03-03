import type React from "react"
import { FloatingChatBubble } from "@/components/FloatingChatBubble"
import { Layout } from "@/components/layout"
import { LeadCapturePopup } from "@/components/LeadCapturePopup"
import { ThemeProvider } from "@/components/theme-provider"
import "@/app/globals.css"
import "@/styles/animations.css"

export const metadata = {
  title: "SolvePOS - Find Your Perfect POS Solution",
  description:
    "We partner with leading POS companies to help businesses worldwide choose and implement the perfect POS systems tailored to your unique needs.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Layout>
            {children}
            <FloatingChatBubble />
            <LeadCapturePopup />
          </Layout>
        </ThemeProvider>
      </body>
    </html>
  )
}

import "./globals.css"



import './globals.css'