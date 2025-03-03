import type { Metadata } from "next"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Cog, Wrench, Link, Users, Headphones, ShoppingCart, PhoneCall, Package } from "lucide-react"

export const metadata: Metadata = {
  title: "Our Services | SolvePOS",
  description:
    "Explore our comprehensive range of POS services, from setup and maintenance to integration and support.",
}

const services = [
  {
    title: "POS Setup",
    description: "Efficient installation and configuration of POS systems by our experienced team.",
    icon: Cog,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "POS Maintenance",
    description: "Regular upkeep and support services to keep your POS systems running smoothly.",
    icon: Wrench,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "POS Integration",
    description: "Seamless integration of POS systems with your existing business infrastructure.",
    icon: Link,
    image: "/placeholder.svg?height=200&width=300&text=POS+terminal+used+in+a+busy+restaurant",
  },
  {
    title: "Consultation Services",
    description: "Professional consultation to help you choose the right POS setup for your business needs.",
    icon: Users,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Training and Support",
    description:
      "Comprehensive training programs and expert support for maximizing the potential of your POS solutions.",
    icon: Headphones,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "POS Hardware Purchase",
    description:
      "Selecting the right POS hardware ensures smooth business operations, from processing payments to managing inventory.",
    icon: ShoppingCart,
    image: "/placeholder.svg?height=200&width=300&text=POS+terminal+at+a+retail+store+checkout",
  },
  {
    title: "24/7 Technical Support",
    description:
      "Our dedicated team is available around the clock to resolve any technical issues, ensuring your POS system runs smoothly without interruptions.",
    icon: PhoneCall,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Comprehensive Services",
    description:
      "We offer POS solutions, from hardware and software setup to ongoing support, integration and optimal performance for your business.",
    icon: Package,
    image: "/placeholder.svg?height=200&width=300&text=POS+terminal+in+a+cozy+cafe",
  },
]

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Services</h1>
      <p className="text-xl text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
        We offer a comprehensive range of POS services to ensure your business runs smoothly and efficiently.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service) => (
          <Card key={service.title} className="flex flex-col">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription className="mb-4">{service.description}</CardDescription>
              <div className="relative h-48 w-full rounded-md overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

