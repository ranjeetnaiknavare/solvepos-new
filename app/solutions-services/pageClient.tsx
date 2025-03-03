"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingBag, Utensils, Building, Briefcase } from "lucide-react"

export default function SolutionsServicesPageClient() {
  const solutions = [
    {
      title: "Retail POS",
      icon: ShoppingBag,
      description: "Streamline your retail operations with our powerful POS system.",
    },
    {
      title: "Restaurant POS",
      icon: Utensils,
      description: "Enhance your restaurant's efficiency with our tailored POS solution.",
    },
    {
      title: "Hospitality POS",
      icon: Building,
      description: "Improve guest experiences with our hospitality-focused POS system.",
    },
    {
      title: "Service Industry POS",
      icon: Briefcase,
      description: "Optimize your service-based business with our versatile POS solution.",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Solutions & Services</h1>
      <p className="text-xl text-center mb-12">
        We offer comprehensive POS solutions tailored to various industries, along with expert implementation and
        support services.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {solutions.map((solution, index) => (
          <Card key={index}>
            <CardHeader>
              <solution.icon className="h-8 w-8 mb-2 text-primary" />
              <CardTitle>{solution.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{solution.description}</CardDescription>
              <Button className="mt-4">Learn More</Button>
            </CardContent>
          </Card>
        ))}
      </div>
      {/* Add more sections for services, implementation process, etc. */}
    </div>
  )
}

