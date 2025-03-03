import type { Metadata } from "next"
import ContactPageClient from "./pageClient"

export const metadata: Metadata = {
  title: "Contact Us | SolvePOS",
  description:
    "Get in touch with SolvePOS for all your POS solution needs. We're here to help you find the perfect system for your business.",
}

export default function ContactPage() {
  return <ContactPageClient />
}

