"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronRight, Search } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export function Hero3D() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  // Handle mouse movement for 3D effect
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current || isMobile) return

      const rect = heroRef.current.getBoundingClientRect()
      const x = (e.clientX - rect.left - rect.width / 2) / 25
      const y = (e.clientY - rect.top - rect.height / 2) / 25

      setMousePosition({ x, y: -y }) // Invert y for correct tilt direction
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", handleResize)
    }
  }, [isMobile])

  return (
    <section className="bg-white pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side: Text content */}
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Find the Perfect <span className="text-orange-600">POS Solution</span> for Your Business
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Compare top POS systems, read reviews, and get expert advice to find the right solution for your business
              needs.
            </p>

            <div className="relative mb-8">
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
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              <Badge variant="outline" className="bg-gray-100 text-gray-700 hover:bg-gray-200">
                Retail POS
              </Badge>
              <Badge variant="outline" className="bg-gray-100 text-gray-700 hover:bg-gray-200">
                Restaurant POS
              </Badge>
              <Badge variant="outline" className="bg-gray-100 text-gray-700 hover:bg-gray-200">
                Hospitality POS
              </Badge>
              <Badge variant="outline" className="bg-gray-100 text-gray-700 hover:bg-gray-200">
                Inventory Management
              </Badge>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=32&width=32&text=User${i}`}
                      alt={`User ${i}`}
                      width={32}
                      height={32}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="text-sm text-gray-600">
                <span className="font-semibold text-orange-600">500+</span> businesses found their perfect POS solution
              </div>
            </div>
          </div>

          {/* Right side: 3D interactive display */}
          <div className="hidden lg:block">
            <motion.div
              ref={heroRef}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{
                perspective: "1000px",
                transformStyle: "preserve-3d",
              }}
              className="relative"
            >
              <motion.div
                style={{
                  transform: `rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg)`,
                }}
                className="relative z-20 rounded-2xl overflow-hidden border-2 border-gray-200 shadow-2xl transition-transform duration-200"
              >
                <div className="bg-white p-8">
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-orange-500/20 rounded-full blur-3xl"></div>
                  <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-orange-500/20 rounded-full blur-3xl"></div>

                  <div className="relative bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-red-500"></div>
                        <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                        <div className="h-3 w-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="text-xs text-gray-600">SolvePOS Dashboard</div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="bg-white/80 rounded-lg p-4 border border-gray-200">
                        <h4 className="text-sm font-medium text-gray-700 mb-2">Today's Sales</h4>
                        <div className="text-2xl font-bold text-orange-600">$12,549</div>
                        <div className="text-xs text-green-600 mt-1 flex items-center">
                          <ChevronRight className="h-3 w-3 rotate-90" />
                          +18.2% from yesterday
                        </div>
                      </div>
                      <div className="bg-white/80 rounded-lg p-4 border border-gray-200">
                        <h4 className="text-sm font-medium text-gray-700 mb-2">Transactions</h4>
                        <div className="text-2xl font-bold text-orange-600">284</div>
                        <div className="text-xs text-green-600 mt-1 flex items-center">
                          <ChevronRight className="h-3 w-3 rotate-90" />
                          +12.5% from yesterday
                        </div>
                      </div>
                    </div>

                    <div className="relative h-32 bg-white/80 rounded-lg p-4 border border-gray-200 mb-4">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Revenue Trend</h4>
                      <div className="absolute bottom-4 left-4 right-4 h-16">
                        <div className="h-full flex items-end">
                          {[35, 48, 32, 50, 35, 60, 40, 45, 58, 75, 62, 80].map((height, i) => (
                            <div key={i} className="w-full h-full flex items-end justify-center px-1">
                              <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: `${height}%` }}
                                transition={{ duration: 1, delay: 0.5 + i * 0.05 }}
                                className="w-full rounded-sm bg-gradient-to-t from-orange-600 to-orange-400"
                              ></motion.div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <Button size="sm" className="bg-orange-600 hover:bg-orange-700 text-white rounded-md text-xs">
                        View Details
                      </Button>

                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-white rounded-full overflow-hidden border border-gray-200">
                          <Image src="/placeholder.svg?height=32&width=32" alt="User" width={32} height={32} />
                        </div>
                        <div className="w-8 h-8 bg-white rounded-full overflow-hidden border border-gray-200">
                          <Image src="/placeholder.svg?height=32&width=32" alt="User" width={32} height={32} />
                        </div>
                        <div className="w-8 h-8 bg-white rounded-full overflow-hidden border border-gray-200 flex items-center justify-center text-xs text-gray-700">
                          +3
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating accent elements */}
              <motion.div
                className="absolute top-10 -right-6 h-16 w-16 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 shadow-lg z-10"
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              ></motion.div>

              <motion.div
                className="absolute -bottom-2 left-10 h-10 w-10 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 shadow-lg z-10"
                animate={{
                  y: [0, 10, 0],
                  x: [0, -5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  delay: 1,
                }}
              ></motion.div>

              <motion.div
                className="absolute top-1/2 -left-8 h-20 w-6 rounded-full bg-gradient-to-b from-orange-500 to-orange-600 shadow-lg z-10 opacity-80"
                animate={{
                  height: [80, 40, 80],
                  y: [0, 20, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  delay: 2,
                }}
              ></motion.div>
            </motion.div>
          </div>

          {/* Mobile 3D display (simplified) */}
          <div className="lg:hidden">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative mx-auto max-w-sm"
            >
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-md">
                <div className="relative bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-red-500"></div>
                      <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-xs text-gray-600">SolvePOS Dashboard</div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div className="bg-white/80 rounded-lg p-3 border border-gray-200">
                      <h4 className="text-xs font-medium text-gray-700 mb-1">Today's Sales</h4>
                      <div className="text-lg font-bold text-orange-600">$12,549</div>
                      <div className="text-[10px] text-green-600 mt-1 flex items-center">
                        <ChevronRight className="h-2 w-2 rotate-90" />
                        +18.2% from yesterday
                      </div>
                    </div>
                    <div className="bg-white/80 rounded-lg p-3 border border-gray-200">
                      <h4 className="text-xs font-medium text-gray-700 mb-1">Transactions</h4>
                      <div className="text-lg font-bold text-orange-600">284</div>
                      <div className="text-[10px] text-green-600 mt-1 flex items-center">
                        <ChevronRight className="h-2 w-2 rotate-90" />
                        +12.5% from yesterday
                      </div>
                    </div>
                  </div>

                  <div className="relative h-20 bg-white/80 rounded-lg p-3 border border-gray-200 mb-3">
                    <h4 className="text-xs font-medium text-gray-700 mb-1">Revenue Trend</h4>
                    <div className="absolute bottom-3 left-3 right-3 h-10">
                      <div className="h-full flex items-end">
                        {[35, 48, 32, 50, 35, 60, 40, 45, 58, 75, 62, 80].map((height, i) => (
                          <div key={i} className="w-full h-full flex items-end justify-center px-[2px]">
                            <motion.div
                              initial={{ height: 0 }}
                              animate={{ height: `${height}%` }}
                              transition={{ duration: 1, delay: 0.5 + i * 0.05 }}
                              className="w-full rounded-sm bg-gradient-to-t from-orange-600 to-orange-400"
                            ></motion.div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

