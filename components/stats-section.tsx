"use client"

import { useInView } from "react-intersection-observer"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Users, ShoppingCart, Clock, BarChart, ThumbsUp, BarChart3 } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: 500,
    suffix: "+",
    label: "Businesses Served",
    description: "Across retail, hospitality, and service industries",
    color: "blue",
    decimal: false,
  },
  {
    icon: ShoppingCart,
    value: 32.5,
    suffix: "%",
    label: "Average Sales Increase",
    description: "For businesses using our recommended POS solutions",
    color: "cyan",
    decimal: true,
  },
  {
    icon: Clock,
    value: 45,
    suffix: "%",
    label: "Faster Checkout Time",
    description: "Improved customer experience with faster processing",
    color: "purple",
    decimal: false,
  },
  {
    icon: BarChart,
    value: 98.7,
    suffix: "%",
    label: "Customer Satisfaction",
    description: "Based on post-implementation surveys",
    color: "green",
    decimal: true,
  },
  {
    icon: ThumbsUp,
    value: 99.9,
    suffix: "%",
    label: "System Uptime",
    description: "Ensuring reliable business operations",
    color: "orange",
    decimal: true,
  },
  {
    icon: BarChart3,
    value: 40,
    suffix: "%",
    label: "Inventory Accuracy Improvement",
    description: "Better stock management and reduced waste",
    color: "pink",
    decimal: false,
  },
]

export function Stats() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="py-24 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-dots-pattern opacity-50 dark:opacity-10"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-3 py-1.5 bg-white dark:bg-gray-700 border-primary/20 shadow-sm">
            REAL RESULTS
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400">
            Impact by the Numbers
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our solutions have helped businesses achieve remarkable results across industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} inView={inView} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StatCard({ stat, inView, delay }) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return

    const startValue = 0
    const endValue = stat.value
    const duration = 2000
    const startTime = Date.now()

    const timer = setInterval(() => {
      const timePassed = Date.now() - startTime
      const progress = Math.min(timePassed / duration, 1)

      setValue(progress * endValue)

      if (progress === 1) {
        clearInterval(timer)
      }
    }, 20)

    return () => clearInterval(timer)
  }, [inView, stat.value])

  const ColorIcon = getColorIcon(stat.color)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
      transition={{ duration: 0.5, delay }}
      className="glass-card p-6 hover:shadow-lg transition-all duration-300"
    >
      <div className="flex items-center gap-4 mb-6">
        <ColorIcon className="h-14 w-14 rounded-xl">
          <stat.icon className="h-6 w-6 text-white" />
        </ColorIcon>
        <div>
          <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400">
            {stat.decimal ? value.toFixed(1) : Math.floor(value)}
            {stat.suffix}
          </h3>
          <p className="text-lg font-medium">{stat.label}</p>
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-300">{stat.description}</p>
    </motion.div>
  )
}

// Helper functions for styling
function getColorIcon(color) {
  return ({ children, className }) => {
    const classes = `flex items-center justify-center ${className} ${
      color === "blue"
        ? "bg-gradient-to-br from-blue-500 to-blue-700 shadow-neon-blue"
        : color === "cyan"
          ? "bg-gradient-to-br from-cyan-500 to-cyan-700 shadow-neon-cyan"
          : color === "purple"
            ? "bg-gradient-to-br from-purple-500 to-purple-700 shadow-neon-purple"
            : color === "green"
              ? "bg-gradient-to-br from-green-500 to-green-700 shadow-neon-green"
              : color === "orange"
                ? "bg-gradient-to-br from-orange-500 to-orange-700"
                : "bg-gradient-to-br from-pink-500 to-pink-700"
    }`

    return <div className={classes}>{children}</div>
  }
}

