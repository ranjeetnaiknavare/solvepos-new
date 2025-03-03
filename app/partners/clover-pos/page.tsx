import type { Metadata } from "next"
import CloverPOSPage from "./pageClient"

export const metadata: Metadata = {
  title: "Clover POS | SolvePOS Partner",
  description:
    "Discover Clover POS, a versatile point-of-sale solution for businesses of all sizes. Learn about its features, pricing, and how it can streamline your operations.",
  keywords:
    "Clover POS, point of sale, payment processing, inventory management, employee management, customer loyalty",
}

export default async function CloverPOS() {
  return <CloverPOSPage />
}

