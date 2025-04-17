"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, ArrowRight, Star, ShoppingCart, BarChart, Shield, Zap } from "lucide-react"
import Image from "next/image"

export function HeroShowcase() {
  const [searchQuery, setSearchQuery] = useState("")
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const slides = [
    {
      title: "Retail POS",
      image: "/placeholder.svg?height=600&width=800&text=Retail+POS+Dashboard",
      color: "from-blue-600 to-purple-600",
      stats: [
        { label: "Sales Increase", value: "+32%" },
        { label: "Inventory Accuracy", value: "98%" },
        { label: "Customer Retention", value: "+28%" },
      ],
    },
    {
      title: "Restaurant POS",
      image: "/placeholder.svg?height=600&width=800&text=Restaurant+POS+Dashboard",
      color: "from-orange-600 to-red-600",
      stats: [
        { label: "Table Turnover", value: "+24%" },
        { label: "Order Accuracy", value: "99.5%" },
        { label: "Revenue Growth", value: "+18%" },
      ],
    },
    {
      title: "Hospitality POS",
      image: "/placeholder.svg?height=600&width=800&text=Hospitality+POS+Dashboard",
      color: "from-green-600 to-teal-600",
      stats: [
        { label: "Check-in Time", value: "-40%" },
        { label: "Guest Satisfaction", value: "96%" },
        { label: "Occupancy Rate", value: "+22%" },
      ],
    },
  ]

  // Auto-rotate slides
  useEffect(() => {
    if (isHovering) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isHovering, slides.length])

  // Parallax effect
  useEffect(() => {
    if (!containerRef.current) return

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = containerRef.current!.getBoundingClientRect()
      const x = (e.clientX - left) / width - 0.5
      const y = (e.clientY - top) / height - 0.5

      const elements = containerRef.current!.querySelectorAll(".parallax-element")
      elements.forEach((el) => {
        const speed = Number.parseFloat(el.getAttribute("data-speed") || "1")
        const htmlEl = el as HTMLElement
        htmlEl.style.transform = `translate(${-x * 20 * speed}px, ${-y * 20 * speed}px)`
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-20">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-orange-100 rounded-full opacity-30 blur-3xl transform translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-100 rounded-full opacity-30 blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>
      </div>

      {/* Animated dots */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-gray-300"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 2 + Math.random() * 3,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-sm font-medium mb-6 text-orange-600"
            >
              <span className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-orange-600 mr-2 animate-pulse"></span>
                Trusted by 500+ businesses worldwide
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              Find Your Perfect <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                POS Solution
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-600 mb-8 max-w-lg"
            >
              Compare top POS systems, read reviews, and get expert advice to find the right solution for your business
              needs.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative mb-8"
            >
              <div className="flex">
                <div className="relative flex-grow">
                  <Input
                    type="text"
                    placeholder="Search for POS systems..."
                    className="pr-10 h-12 rounded-l-md border-r-0"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
                <Button className="h-12 rounded-l-none bg-orange-600 hover:bg-orange-700">Search</Button>
              </div>

              <motion.div
                className="absolute -bottom-4 left-0 right-0 flex justify-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <div className="text-xs text-gray-500 bg-white px-2 rounded-full shadow-sm">
                  Popular: Retail POS, Restaurant POS, Inventory Management
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <Button
                size="lg"
                className="rounded-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 border-0 shadow-lg shadow-orange-500/25"
              >
                Compare POS Systems <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-orange-200 text-orange-600 hover:bg-orange-50"
              >
                Talk to an Expert
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-6"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white overflow-hidden"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                  >
                    <Image
                      src={`/placeholder.svg?height=32&width=32&text=User${i}`}
                      alt={`User ${i}`}
                      width={32}
                      height={32}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
              <div className="text-sm text-gray-600">
                <span className="font-semibold text-orange-600">500+</span> businesses found their perfect POS solution
              </div>
            </motion.div>
          </div>

          {/* Right column - Interactive showcase */}
          <div
            ref={containerRef}
            className="relative"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative z-10 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200"
            >
              {/* Slide indicators */}
              <div className="absolute top-4 left-0 right-0 z-20 flex justify-center gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    className={`h-2 rounded-full transition-all ${
                      currentSlide === index ? "w-8 bg-orange-600" : "w-2 bg-gray-300"
                    }`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>

              {/* Slides */}
              <div className="relative h-[400px] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <div className="relative h-full">
                      <Image
                        src={slides[currentSlide].image || "/placeholder.svg"}
                        alt={slides[currentSlide].title}
                        fill
                        className="object-cover"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                        <h3 className="text-2xl font-bold text-white mb-2">{slides[currentSlide].title}</h3>

                        <div className="grid grid-cols-3 gap-2">
                          {slides[currentSlide].stats.map((stat, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.3 + i * 0.1 }}
                              className="bg-white/20 backdrop-blur-sm rounded-lg p-2 text-center"
                            >
                              <div className="text-xl font-bold text-white">{stat.value}</div>
                              <div className="text-xs text-white/80">{stat.label}</div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Features */}
              <div className="grid grid-cols-3 divide-x divide-gray-200 bg-white">
                {[
                  { icon: ShoppingCart, label: "Inventory Management" },
                  { icon: BarChart, label: "Advanced Analytics" },
                  { icon: Shield, label: "Secure Payments" },
                ].map((feature, i) => (
                  <div key={i} className="p-4 flex flex-col items-center text-center">
                    <div
                      className={`w-10 h-10 rounded-full bg-gradient-to-r ${slides[currentSlide].color} flex items-center justify-center mb-2 parallax-element`}
                      data-speed={1 + i * 0.5}
                    >
                      <feature.icon className="h-5 w-5 text-white" />
                    </div>
                    <div className="text-sm font-medium text-gray-700">{feature.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Decorative elements */}
            <motion.div
              className={`absolute -top-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-r ${slides[currentSlide].color} opacity-20 blur-xl parallax-element`}
              data-speed="2"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
            />

            <motion.div
              className={`absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-gradient-to-r ${slides[currentSlide].color} opacity-20 blur-xl parallax-element`}
              data-speed="1.5"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
            />

            {/* Floating badges */}
            <motion.div
              className="absolute top-10 -right-4 bg-white rounded-lg shadow-lg p-3 z-20 parallax-element"
              data-speed="3"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
            >
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span className="text-sm font-medium">4.9/5 Rating</span>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-4 left-10 bg-white rounded-lg shadow-lg p-3 z-20 parallax-element"
              data-speed="2.5"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
            >
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-orange-500" />
                <span className="text-sm font-medium">Fast Implementation</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

