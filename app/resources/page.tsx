import ResourcesPageClient from "./pageClient"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Resources | SolvePOS",
  description:
    "Explore our collection of case studies, whitepapers, SOPs, and guides to enhance your POS knowledge and decision-making.",
}

export default async function Resources() {
  return <ResourcesPageClient />
}

