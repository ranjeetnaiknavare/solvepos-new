import type { Metadata } from "next"
import FAQPageClient from "./pageClient"

export const metadata: Metadata = {
  title: "Frequently Asked Questions | SolvePOS",
  description: "Find answers to common questions about SolvePOS and our POS solutions.",
}

export default function FAQPage() {
  return <FAQPageClient />
}

