"use client"

import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { ArrowUpRight, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

interface FeatureCardProps {
  title: string
  description: string
  icon: LucideIcon
  features: string[]
  className?: string
  gradient?: string
}

export function FeatureCard({
  title,
  description,
  icon: Icon,
  features,
  className,
  gradient = "from-blue-500 to-purple-600",
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl border bg-white/80 backdrop-blur-sm p-1 shadow-lg transition-all hover:shadow-xl",
        className,
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
      <div
        className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:bg-gradient-to-r group-hover:${gradient} transition-all duration-500`}
      ></div>

      <div className="relative p-6 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-lg">
        <div className={`mb-4 h-12 w-12 overflow-hidden rounded-full p-[2px] bg-gradient-to-br ${gradient}`}>
          <div className="flex h-full w-full items-center justify-center rounded-full bg-white dark:bg-slate-900">
            <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          </div>
        </div>
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <p className="mb-4 text-muted-foreground">{description}</p>

        <div className="mb-6 space-y-2">
          {features.map((feature, j) => (
            <motion.div
              key={j}
              className="flex items-center gap-2"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: j * 0.1 }}
              viewport={{ once: true }}
            >
              <CheckCircle className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm">{feature}</span>
            </motion.div>
          ))}
        </div>

        <Link
          href="#"
          className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors"
        >
          Learn more <ArrowUpRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}

