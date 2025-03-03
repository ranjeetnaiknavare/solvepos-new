import type { Metadata } from "next"
import PricingPageClient from "./pageClient"

export const metadata: Metadata = {
  title: "Pricing | SolvePOS",
  description:
    "Flexible pricing options for POS consulting and implementation services tailored to your business needs.",
}

export default async function PricingPage() {
  return <PricingPageClient />
}

