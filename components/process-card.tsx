"use client"

import type { LucideIcon } from "lucide-react"
import { motion } from "framer-motion"

interface ProcessCardProps {
  step: string
  title: string
  description: string
  icon: LucideIcon
}

export function ProcessCard({ step, title, description, icon: Icon }: ProcessCardProps) {
  return (
    <div className="relative">
      <div className="relative border border-gray-200 dark:border-gray-700 rounded-xl p-8 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all z-10 group">
        <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-bold py-1 px-4 rounded-full">
          {step}
        </div>
        <div className="mb-6 flex justify-center">
          <motion.div
            className="h-16 w-16 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
          </motion.div>
        </div>
        <h3 className="text-xl font-bold mb-3 text-center">{title}</h3>
        <p className="text-muted-foreground text-center">{description}</p>
      </div>
    </div>
  )
}

