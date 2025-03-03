import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ShoppingBag, Utensils, Building, Briefcase, Coffee } from "lucide-react"

export const metadata: Metadata = {
  title: "POS Solutions | SolvePOS",
  description:
    "Discover our comprehensive POS solutions for various industries including retail, restaurants, hospitality, and more.",
}

const solutions = [
  {
    title: "Retail POS",
    description: "Streamline your retail operations with our powerful POS system.",
    icon: ShoppingBag,
    features: ["Inventory management", "Customer loyalty programs", "Multi-store capabilities"],
  },
  {
    title: "Restaurant POS",
    description: "Enhance your restaurant's efficiency with our tailored POS solution.",
    icon: Utensils,
    features: ["Table management", "Menu customization", "Kitchen display system"],
  },
  {
    title: "Hospitality POS",
    description: "Improve guest experiences with our hospitality-focused POS system.",
    icon: Building,
    features: ["Room management", "Booking integration", "Amenity tracking"],
  },
  {
    title: "Service Industry POS",
    description: "Optimize your service-based business with our versatile POS solution.",
    icon: Briefcase,
    features: ["Appointment scheduling", "Service packages", "Employee management"],
  },
  {
    title: "Cafe POS",
    description: "Boost your cafe's performance with our specialized POS system.",
    icon: Coffee,
    features: ["Quick order processing", "Loyalty programs", "Inventory tracking"],
  },
]

export default function SolutionsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Our POS Solutions</h1>
      <p className="text-xl text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
        We offer tailored POS solutions for various industries, designed to streamline operations and boost your
        business performance.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {solutions.map((solution) => (
          <Card key={solution.title}>
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <solution.icon className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>{solution.title}</CardTitle>
              <CardDescription>{solution.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                {solution.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

