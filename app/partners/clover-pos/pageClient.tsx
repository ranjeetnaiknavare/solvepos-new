"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function CloverPOSPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Clover POS</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">About Clover POS</h2>
          <p className="text-lg mb-4">
            Clover POS is a versatile point-of-sale solution designed for businesses of all sizes. It offers a range of
            hardware options and a powerful software platform to streamline your operations.
          </p>
          <Button>Request a Demo</Button>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Key Features</CardTitle>
            <CardDescription>What makes Clover POS stand out</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {[
                "Intuitive interface",
                "Customizable apps",
                "Integrated payments",
                "Real-time reporting",
                "Employee management",
              ].map((feature, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                  {feature}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
      {/* Add more sections as needed */}
    </div>
  )
}

