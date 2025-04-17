"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    quote:
      "SolvePOS helped us find a POS system that increased our checkout speed by 40% and improved inventory accuracy significantly. The implementation was smooth and the ongoing support has been exceptional.",
    author: "Sarah Johnson",
    title: "Owner",
    company: "Urban Retail Boutique",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    quote:
      "The restaurant POS system recommended by SolvePOS has revolutionized how we manage orders and table service. Our staff training time has been cut in half, and customer satisfaction scores are up by 30%.",
    author: "Michael Chen",
    title: "General Manager",
    company: "Fusion Bistro",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    quote:
      "As a multi-location hotel chain, we needed a robust hospitality POS solution. SolvePOS delivered a system that seamlessly integrates with our property management software and has improved guest check-in times by 45%.",
    author: "Jessica Williams",
    title: "Operations Director",
    company: "Skyline Hotels",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    quote:
      "Our service business requires unique scheduling and client management capabilities. SolvePOS found us the perfect solution that has helped us grow our client base by 25% in just six months.",
    author: "David Rodriguez",
    title: "CEO",
    company: "Elite Spa & Wellness",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  // Control autoplay
  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [autoplay])

  const nextTestimonial = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-dots-pattern opacity-50 dark:opacity-10"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-3 py-1.5 bg-white dark:bg-gray-800 border-primary/20 shadow-sm">
            TESTIMONIALS
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover how businesses like yours have transformed with our POS solutions.
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Decorative elements */}
          <div className="absolute -top-6 -left-6 h-24 w-24 text-blue-500/20 dark:text-blue-400/20">
            <Quote className="h-full w-full" />
          </div>
          <div className="absolute -bottom-6 -right-6 h-24 w-24 text-blue-500/20 dark:text-blue-400/20 transform rotate-180">
            <Quote className="h-full w-full" />
          </div>

          {/* Testimonial carousel */}
          <div className="relative overflow-hidden rounded-2xl">
            <div className="glass-card shadow-xl">
              <div className="p-8 md:p-12">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                  >
                    <div className="flex justify-center mb-8">
                      {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                        <Star key={i} className="h-6 w-6 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>

                    <blockquote className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-200 mb-8">
                      "{testimonials[current].quote}"
                    </blockquote>

                    <div className="flex flex-col items-center">
                      <div className="h-16 w-16 rounded-full overflow-hidden mb-4 border-2 border-blue-500 p-1">
                        <Image
                          src={testimonials[current].avatar || "/placeholder.svg"}
                          alt={testimonials[current].author}
                          width={80}
                          height={80}
                          className="rounded-full"
                        />
                      </div>
                      <h4 className="text-lg font-semibold">{testimonials[current].author}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {testimonials[current].title}, {testimonials[current].company}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors z-20"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5 text-gray-700 dark:text-gray-200" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors z-20"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5 text-gray-700 dark:text-gray-200" />
            </button>
          </div>

          {/* Indicator dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setAutoplay(false)
                  setCurrent(i)
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current ? "w-8 bg-blue-600 dark:bg-blue-400" : "w-2 bg-gray-300 dark:bg-gray-600"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

