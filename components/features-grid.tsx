"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import {
  CreditCard,
  BarChart3,
  Layers,
  ShieldCheck,
  Smartphone,
  Database,
  Users,
  Cloud,
  Wand2,
  ChevronsUpDown,
  Globe,
  Zap,
} from "lucide-react"
import { Button } from "./ui/button"

const features = [
  {
    icon: CreditCard,
    title: "Payment Processing",
    description: "Fast, secure payment processing with support for cards, mobile payments, and contactless.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Gain insights with real-time reporting and visualization of sales, inventory, and customer data.",
  },
  {
    icon: Layers,
    title: "Inventory Management",
    description: "Track stock levels, set reorder points, and manage suppliers with powerful inventory tools.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    description: "Bank-level security with end-to-end encryption and PCI DSS compliance for all transactions.",
  },
  {
    icon: Smartphone,
    title: "Mobile Access",
    description: "Manage your business from anywhere with mobile apps for iOS and Android devices.",
  },
  {
    icon: Database,
    title: "Data Backup",
    description: "Automatic cloud backups ensure your business data is always safe and accessible.",
  },
  {
    icon: Users,
    title: "Staff Management",
    description: "Track employee hours, manage permissions, and monitor performance all in one system.",
  },
  {
    icon: Cloud,
    title: "Cloud-Based",
    description: "Access your POS system from anywhere with cloud-based architecture for maximum flexibility.",
  },
  {
    icon: Wand2,
    title: "Customization",
    description: "Tailor the POS to your specific needs with customizable fields, layouts, and workflows.",
  },
  {
    icon: ChevronsUpDown,
    title: "Scalability",
    description: "Grow your business without limitations with scalable solutions that expand with you.",
  },
  {
    icon: Globe,
    title: "Multi-Location",
    description: "Seamlessly manage multiple stores or locations from a centralized dashboard.",
  },
  {
    icon: Zap,
    title: "Automation",
    description: "Save time with automated processes for inventory, ordering, and customer communications.",
  },
]

export function Features() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-dots-pattern opacity-50 dark:opacity-10"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-3 py-1.5 bg-white dark:bg-gray-800 border-primary/20 shadow-sm">
            POWERFUL FEATURES
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400">
            Enterprise-Grade Capabilities
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our POS solutions come packed with powerful features designed to streamline your operations and drive
            growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="glass-card p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 dark:from-blue-600 dark:to-cyan-600 flex items-center justify-center shadow-neon-blue">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-lg border-0 shadow-lg shadow-blue-600/20 hover:shadow-xl hover:shadow-blue-600/30 transition-all duration-300"
          >
            Explore All Features
          </Button>
        </div>
      </div>
    </section>
  )
}

