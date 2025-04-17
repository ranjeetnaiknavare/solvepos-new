"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react"

export function ModernCta() {
  const [isInView, setIsInView] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.3 }, // Trigger when 30% of the element is visible
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden bg-gradient-to-b from-black to-gray-900">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-bronze-500/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-dots-pattern opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left column - Text */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-gold-500/10 shadow-lg relative overflow-hidden"
              >
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-gold-500/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-bronze-500/20 rounded-full blur-3xl"></div>

                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to Transform Your Business Operations?
                </h2>

                <p className="text-gray-300 mb-8">
                  Schedule a consultation with our POS experts to discover the perfect solution for your business needs.
                </p>

                <div className="space-y-6 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full border border-gold-500/10">
                      <Phone className="h-5 w-5 text-gold-400" />
                    </div>
                    <div>
                      <div className="text-sm text-white/70">Call us at</div>
                      <div className="text-white font-medium">+1 (555) 123-4567</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full border border-gold-500/10">
                      <Mail className="h-5 w-5 text-bronze-400" />
                    </div>
                    <div>
                      <div className="text-sm text-white/70">Email us at</div>
                      <div className="text-white font-medium">info@solvepos.com</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full border border-gold-500/10">
                      <MapPin className="h-5 w-5 text-champagne-400" />
                    </div>
                    <div>
                      <div className="text-sm text-white/70">Visit our office</div>
                      <div className="text-white font-medium">123 Business Ave, Tech City, TC 10111</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    className="bg-gradient-to-r from-gold-500 to-bronze-500 hover:from-gold-600 hover:to-bronze-600 text-black font-medium rounded-lg shadow-lg border-0"
                    onClick={() => window.open("https://solvepos.setmore.com/", "_blank")}
                  >
                    Book Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>

                  <Button
                    variant="outline"
                    className="border-gold-500/20 text-gold-400 hover:bg-gold-500/10 backdrop-blur-sm"
                  >
                    View Pricing
                  </Button>
                </div>
              </motion.div>
            </div>

            {/* Right column - Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden relative border border-gold-500/10"
            >
              <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-gold-500 via-bronze-500 to-champagne-500"></div>

              <div className="p-8">
                <h3 className="text-xl font-bold mb-6 gold-gradient-text">Get in Touch with Us</h3>

                <form className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">First Name</label>
                      <Input
                        placeholder="John"
                        className="rounded-lg border-gray-700 bg-gray-800 focus:ring-gold-500 focus:border-gold-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Last Name</label>
                      <Input
                        placeholder="Doe"
                        className="rounded-lg border-gray-700 bg-gray-800 focus:ring-gold-500 focus:border-gold-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Email</label>
                    <Input
                      type="email"
                      placeholder="john.doe@example.com"
                      className="rounded-lg border-gray-700 bg-gray-800 focus:ring-gold-500 focus:border-gold-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Phone Number</label>
                    <Input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className="rounded-lg border-gray-700 bg-gray-800 focus:ring-gold-500 focus:border-gold-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Business Type</label>
                    <select className="flex h-10 w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:border-gold-500 dark:ring-offset-gray-800 disabled:cursor-not-allowed disabled:opacity-50">
                      <option value="" disabled selected>
                        Select your business type
                      </option>
                      <option value="retail">Retail</option>
                      <option value="restaurant">Restaurant</option>
                      <option value="hospitality">Hospitality</option>
                      <option value="service">Service</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Message</label>
                    <textarea
                      placeholder="Tell us about your business needs..."
                      rows={4}
                      className="flex min-h-[80px] w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-sm ring-offset-background placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:border-gold-500 dark:ring-offset-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
                    ></textarea>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-gold-500 to-bronze-500 hover:from-gold-600 hover:to-bronze-600 text-black font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

