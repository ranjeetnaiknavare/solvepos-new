"use client"

import type { LucideIcon } from "lucide-react"
import { motion } from "framer-motion"

interface StatCardProps {
  value: string
  label: string
  icon: LucideIcon
}

export function StatCard({ value, label, icon: Icon }: StatCardProps) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-1 shadow-lg transition-all hover:shadow-xl group">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-600 transition-all duration-500"></div>

      <div className="relative p-6 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-lg flex flex-col items-center text-center">
        <motion.div
          className="mb-4 h-16 w-16 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors duration-300"
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          <Icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
        </motion.div>
        <motion.div
          className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
        >
          {value}
        </motion.div>
        <p className="text-muted-foreground">{label}</p>
      </div>
    </div>
  )
}

