import type { Metadata } from "next"
import ProcessPageClient from "./pageClient"

export const metadata: Metadata = {
  title: "Our Process | SolvePOS",
  description: "Learn about our streamlined process for implementing the perfect POS solution for your business.",
}

export default async function ProcessPage() {
  return <ProcessPageClient />
}

