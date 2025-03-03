import type { Metadata } from "next"
import SolutionsServicesPageClient from "./pageClient"

export const metadata: Metadata = {
  title: "Solutions & Services | SolvePOS",
  description: "Explore our comprehensive POS solutions, services, and implementation process for various industries.",
}

export default async function SolutionsServicesPage() {
  return <SolutionsServicesPageClient />
}

