"use client"

import React from "react"
import { useState, useEffect } from "react"
import { ArrowRight, BarChart3, Clock, ShoppingCart, Users, Utensils, Building, Briefcase, Coffee } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"

const featuredPartners = [
  { name: "Ezeeburrp", logo: "https://www.ezeeburrp.com/wp-content/uploads/2023/03/ezeeburrp-logo.png" },
  { name: "Posist", logo: "https://posist.com/wp-content/uploads/2022/11/posist-logo.svg" },
  { name: "PayPal", logo: "https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_111x69.jpg" },
  { name: "Square", logo: "https://square-brand-assets.square.site/square-logo.svg" },
]

export function HeroSection() {
  const [currentIndustry, setCurrentIndustry] = useState(0)
  const industries = [
    { name: "Retail", icon: ShoppingCart },
    { name: "Restaurant", icon: Utensils },
    { name: "Hospitality", icon: Building },
    { name: "Healthcare", icon: Briefcase },
    { name: "Service", icon: Coffee },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndustry((prev) => (prev + 1) % industries.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [industries.length])

  const handleBookConsultation = () => {
    window.open("https://solvepos.setmore.com/", "_blank")
  }

  return (
    <section className="relative overflow-hidden pt-24 md:pt-32 pb-20 md:pb-32 bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div
        className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-purple-500/20 rounded-full blur-3xl -z-10 animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      {/* Animated dots */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/4 left-1/4 h-2 w-2 rounded-full bg-blue-400/60"
          animate={{
            y: [0, -20, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 h-3 w-3 rounded-full bg-purple-400/60"
          animate={{
            y: [0, -30, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 4, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 h-2 w-2 rounded-full bg-cyan-400/60"
          animate={{
            y: [0, -15, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3.5, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 h-2 w-2 rounded-full bg-blue-400/60"
          animate={{
            y: [0, -25, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 4.5, ease: "easeInOut" }}
        />
      </div>

      <div className="container relative">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left side: Text content */}
          <div className="w-full md:w-1/2 text-center md:text-left md:pr-8 mb-8 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-1.5 text-sm font-medium mb-6 text-blue-300"
            >
              <span>Trusted by 500+ businesses worldwide</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold text-white"
            >
              Find Your Perfect <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                POS Solution
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-[700px] text-blue-100 text-lg md:text-xl mb-8"
            >
              We partner with leading POS companies to help businesses worldwide choose and implement the perfect POS
              systems tailored to your unique needs.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mb-16 justify-center md:justify-start"
            >
              <Button
                size="lg"
                className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 border-0 shadow-lg shadow-blue-500/25"
                onClick={handleBookConsultation}
              >
                Book Paid Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-blue-400/30 text-blue-100 hover:bg-blue-500/10"
              >
                Explore Solutions
              </Button>
            </motion.div>

            {/* Featured Partners */}
            <div className="mt-8">
              <p className="text-sm text-blue-300 mb-2">Trusted by industry leaders:</p>
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-4">
                {featuredPartners.map((partner, index) => (
                  <motion.div
                    key={partner.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-2 border border-white/10 hover:bg-white/20 transition-all duration-300"
                  >
                    <Image
                      src={partner.logo || "/placeholder.svg"}
                      alt={partner.name}
                      width={80}
                      height={40}
                      className="h-8 w-auto object-contain"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right side: Animated graphics and stats */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl blur-xl -z-10"></div>
              <div className="relative z-10 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl overflow-hidden p-8">
                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3, ease: "easeInOut" }}
                  className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                >
                  {industries[currentIndustry].name} POS Solutions
                </motion.div>
                <div className="flex items-center justify-center h-64 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-lg border border-white/5">
                  <motion.div
                    key={currentIndustry}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.5 }}
                    className="w-32 h-32 text-blue-300"
                  >
                    {React.createElement(industries[currentIndustry].icon, { size: 128 })}
                  </motion.div>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <AnimatedStat icon={BarChart3} label="Sales Increase" value="+32%" />
                  <AnimatedStat icon={Clock} label="Faster Checkout" value="-45%" />
                  <AnimatedStat icon={Users} label="Customer Retention" value="+28%" />
                  <AnimatedStat icon={ShoppingCart} label="Inventory Accuracy" value="+40%" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

function AnimatedStat({ icon: Icon, label, value }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/10 hover:bg-white/20 transition-all duration-300"
    >
      <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-300">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-sm font-medium text-blue-200">{label}</p>
        <p className="text-lg font-bold text-blue-100">{value}</p>
      </div>
    </motion.div>
  )
}

