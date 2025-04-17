"use client"

import Image from "next/image"
import { Star } from "lucide-react"
import { motion } from "framer-motion"

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  company: string
  image: string
}

export function TestimonialCard({ quote, author, role, company, image }: TestimonialCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-1 shadow-lg transition-all hover:shadow-xl">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-600 transition-all duration-500"></div>

      <div className="relative p-6 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-lg flex flex-col h-full">
        <div className="mb-4 text-yellow-500 flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
            >
              <Star key={i} className="w-5 h-5 fill-current" />
            </motion.div>
          ))}
        </div>
        <blockquote className="flex-1 mb-6 text-lg italic">"{quote}"</blockquote>
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 overflow-hidden rounded-full p-[2px] bg-gradient-to-br from-blue-500 to-purple-600">
            <div className="h-full w-full rounded-full overflow-hidden">
              <Image
                src={image || "/placeholder.svg"}
                alt={author}
                width={80}
                height={80}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div>
            <div className="font-semibold">{author}</div>
            <div className="text-sm text-muted-foreground">{role}</div>
            <div className="text-xs text-blue-600 dark:text-blue-400">{company}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

