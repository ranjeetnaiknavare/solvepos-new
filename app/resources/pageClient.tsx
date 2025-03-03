"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ResourcesPageClient() {
  const resources = [
    {
      title: "POS Buyer's Guide",
      type: "Guide",
      description: "A comprehensive guide to choosing the right POS system for your business.",
    },
    {
      title: "Retail Success Story",
      type: "Case Study",
      description: "How a multi-store retailer increased sales by 30% with our recommended POS solution.",
    },
    {
      title: "Restaurant POS Checklist",
      type: "Checklist",
      description: "Essential features to look for in a restaurant POS system.",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Resources</h1>
      <p className="text-xl text-center mb-12">
        Explore our collection of guides, case studies, and tools to help you make informed decisions about your POS
        system.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {resources.map((resource, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{resource.title}</CardTitle>
              <CardDescription>{resource.type}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{resource.description}</p>
              <Button>Download</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

