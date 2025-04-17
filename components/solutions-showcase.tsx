"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ShoppingCart,
  Utensils,
  Building,
  Briefcase,
  CheckCircle,
  ArrowRight,
  CreditCard,
  Smartphone,
  BarChart,
  ShieldCheck,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface SolutionType {
  id: string
  title: string
  icon: React.ElementType
  description: string
  features: string[]
  image: string
  color: string
  stats: {
    label: string
    value: string
  }[]
}

const solutions: SolutionType[] = [
  {
    id: "retail",
    title: "Retail POS",
    icon: ShoppingCart,
    description:
      "Streamline retail operations with our powerful point-of-sale solutions designed specifically for retail businesses of all sizes.",
    features: [
      "Inventory management with real-time tracking",
      "Customer loyalty programs and CRM integration",
      "Multi-location and multi-register support",
      "Advanced reporting and analytics",
      "Seamless e-commerce integration",
      "Flexible payment processing options",
    ],
    image: "/placeholder.svg?height=600&width=800&text=Retail+POS+Dashboard",
    color: "gold",
    stats: [
      { label: "Average Sales Increase", value: "32%" },
      { label: "Inventory Accuracy", value: "98%" },
      { label: "Transaction Speed", value: "2.3s" },
    ],
  },
  {
    id: "restaurant",
    title: "Restaurant POS",
    icon: Utensils,
    description:
      "Optimize your restaurant operations with our specialized POS system designed for cafes, bars, and restaurants of all sizes.",
    features: [
      "Table management and floor planning",
      "Order management with kitchen display integration",
      "Menu customization and modifiers",
      "Reservation and waitlist management",
      "Staff scheduling and performance tracking",
      "Online ordering and delivery integration",
    ],
    image: "/placeholder.svg?height=600&width=800&text=Restaurant+POS+Interface",
    color: "bronze",
    stats: [
      { label: "Table Turnover Increase", value: "24%" },
      { label: "Order Accuracy", value: "99.5%" },
      { label: "Avg. Processing Time", value: "1.8s" },
    ],
  },
  {
    id: "hospitality",
    title: "Hospitality POS",
    icon: Building,
    description:
      "Enhance guest experiences with our hospitality-focused POS system for hotels, resorts, and other accommodation providers.",
    features: [
      "Front desk and check-in/out management",
      "Room booking and reservation handling",
      "Housekeeping and maintenance tracking",
      "Guest profile management with preferences",
      "Amenity and service billing",
      "Integration with property management systems",
    ],
    image: "/placeholder.svg?height=600&width=800&text=Hospitality+Management+System",
    color: "champagne",
    stats: [
      { label: "Check-in Time Reduction", value: "40%" },
      { label: "Guest Satisfaction", value: "94%" },
      { label: "Revenue per Available Room", value: "+18%" },
    ],
  },
  {
    id: "service",
    title: "Service Industry POS",
    icon: Briefcase,
    description:
      "Optimize appointment scheduling, service delivery, and client management with our service industry POS solutions.",
    features: [
      "Appointment scheduling with automated reminders",
      "Service package and membership management",
      "Employee scheduling and commission tracking",
      "Client relationship management",
      "Integrated payment processing",
      "Mobile point-of-sale capabilities",
    ],
    image: "/placeholder.svg?height=600&width=800&text=Service+Industry+Dashboard",
    color: "gold",
    stats: [
      { label: "Booking Efficiency", value: "+45%" },
      { label: "Client Retention", value: "38%" },
      { label: "Staff Productivity", value: "+27%" },
    ],
  },
]

export function SolutionsShowcase() {
  const [activeSolution, setActiveSolution] = useState(solutions[0].id)
  const [isHovering, setIsHovering] = useState(false)

  const solution = solutions.find((s) => s.id === activeSolution) || solutions[0]

  const handleTabChange = (id: string) => {
    setActiveSolution(id)
    setIsHovering(false)
  }

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-dots-pattern opacity-20"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-bronze-500/5 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-3 py-1.5 bg-white border-gold-200 shadow-sm">
            COMPREHENSIVE SOLUTIONS
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gold-gradient-text">Tailored POS Solutions</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            From retail to hospitality, we have the perfect POS system for your business needs.
          </p>
        </div>

        {/* Solution Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 md:mb-16">
          {solutions.map((s) => {
            const isActive = activeSolution === s.id
            const ColorComponent = s.color === "gold" ? GoldBadge : s.color === "bronze" ? BronzeBadge : ChampagneBadge

            return (
              <button
                key={s.id}
                onClick={() => handleTabChange(s.id)}
                className={cn(
                  "relative px-5 py-3 rounded-xl transition-all duration-300 group",
                  isActive
                    ? "bg-white shadow-lg border border-gold-200"
                    : "hover:bg-white/60 hover:border hover:border-gold-100",
                )}
              >
                <div className="flex items-center gap-3">
                  <ColorComponent
                    className={cn(
                      "flex items-center justify-center w-10 h-10 rounded-lg",
                      !isActive && "opacity-70 group-hover:opacity-100",
                    )}
                  >
                    <s.icon className="h-5 w-5 text-white" />
                  </ColorComponent>
                  <span className={cn("font-medium", isActive ? "text-gray-900" : "text-gray-600")}>{s.title}</span>
                </div>
                {isActive && (
                  <motion.div
                    layoutId="activeBorder"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gold-500 to-bronze-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>
            )
          })}
        </div>

        {/* Solution Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Solution Details */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-4 gold-gradient-text">{solution.title}</h3>
                <p className="text-gray-700 mb-6">{solution.description}</p>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  {solution.stats.map((stat, i) => (
                    <div key={i} className="bg-white rounded-xl p-4 border border-gold-200 shadow-md">
                      <div className="text-2xl font-bold gold-gradient-text">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <h4 className="text-lg font-semibold mb-4 text-gray-900">Key Features</h4>
                <div className="space-y-3 mb-8">
                  {solution.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-gold-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button className="bg-gradient-to-r from-gold-500 to-bronze-500 hover:from-gold-600 hover:to-bronze-600 text-black font-medium rounded-lg shadow-lg shadow-gold-600/20 hover:shadow-xl hover:shadow-gold-600/30 transition-all duration-300">
                  Learn More About {solution.title}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Solution Image/Demo */}
          <div className="hidden lg:block relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="relative"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div className="glass-card p-2 shadow-xl border border-gold-200">
                  <div className="relative rounded-lg overflow-hidden">
                    <Image
                      src={solution.image || "/placeholder.svg"}
                      alt={solution.title}
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover"
                    />

                    {/* Floating feature highlights that appear on hover */}
                    <AnimatePresence>
                      {isHovering && (
                        <>
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            className="absolute top-4 left-4 glass-card p-3 rounded-lg max-w-[180px] border border-gold-200"
                          >
                            <div className="flex items-center gap-2 mb-1">
                              <CreditCard className="h-4 w-4 text-gold-600" />
                              <span className="text-sm font-medium text-gray-900">Payment Processing</span>
                            </div>
                            <p className="text-xs text-gray-700">
                              Accept all payment types with fast, secure processing
                            </p>
                          </motion.div>

                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.3, delay: 0.2 }}
                            className="absolute top-4 right-4 glass-card p-3 rounded-lg max-w-[180px] border border-gold-200"
                          >
                            <div className="flex items-center gap-2 mb-1">
                              <BarChart className="h-4 w-4 text-bronze-600" />
                              <span className="text-sm font-medium text-gray-900">Advanced Analytics</span>
                            </div>
                            <p className="text-xs text-gray-700">Real-time insights to optimize your business</p>
                          </motion.div>

                          <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3, delay: 0.3 }}
                            className="absolute bottom-4 left-4 glass-card p-3 rounded-lg max-w-[180px] border border-gold-200"
                          >
                            <div className="flex items-center gap-2 mb-1">
                              <Smartphone className="h-4 w-4 text-champagne-600" />
                              <span className="text-sm font-medium text-gray-900">Mobile Access</span>
                            </div>
                            <p className="text-xs text-gray-700">Manage your business from anywhere, anytime</p>
                          </motion.div>

                          <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3, delay: 0.4 }}
                            className="absolute bottom-4 right-4 glass-card p-3 rounded-lg max-w-[180px] border border-gold-200"
                          >
                            <div className="flex items-center gap-2 mb-1">
                              <ShieldCheck className="h-4 w-4 text-gold-600" />
                              <span className="text-sm font-medium text-gray-900">Enterprise Security</span>
                            </div>
                            <p className="text-xs text-gray-700">Bank-level encryption and data protection</p>
                          </motion.div>
                        </>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Floating accent elements */}
                <div className="absolute -top-6 -right-6 h-12 w-12 rounded-lg bg-gradient-to-r from-gold-500 to-bronze-500 shadow-neon-gold z-10 rotate-12"></div>
                <div className="absolute -bottom-6 -left-6 h-12 w-12 rounded-full bg-gradient-to-r from-bronze-500 to-champagne-500 shadow-neon-bronze z-10"></div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

// Helper components for colored badges
function GoldBadge({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("bg-gradient-to-br from-gold-400 to-gold-600 shadow-neon-gold", className)}>{children}</div>
}

function BronzeBadge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("bg-gradient-to-br from-bronze-400 to-bronze-600 shadow-neon-bronze", className)}>
      {children}
    </div>
  )
}

function ChampagneBadge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("bg-gradient-to-br from-champagne-400 to-champagne-600 shadow-neon-champagne", className)}>
      {children}
    </div>
  )
}

