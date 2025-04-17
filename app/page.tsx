"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, ShoppingCart, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HeroShowcase } from "@/components/hero-showcase"
import { SolutionsShowcase } from "@/components/solutions-showcase"
import { EnhancedProcess } from "@/components/enhanced-process"
import { Testimonials } from "@/components/testimonials"
import { Stats } from "@/components/stats-section"
import { ModernCta } from "@/components/modern-cta"

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("")
  const featuredRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: featuredRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Using our new HeroShowcase */}
      <HeroShowcase />

      {/* Trusted Brands - Using Partners component with animation */}
      <section className="py-12 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8">
            <motion.h2
              className="text-2xl font-semibold text-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Trusted by Leading POS Providers
            </motion.h2>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {["Clover", "Square", "Lightspeed", "Toast", "Shopify"].map((brand, index) => (
              <motion.div
                key={brand}
                className="grayscale hover:grayscale-0 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Image
                  src={`/placeholder.svg?height=60&width=120&text=${brand}`}
                  alt={brand}
                  width={120}
                  height={60}
                  className="h-12 w-auto object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section with 3D card effect */}
      <section className="py-16 bg-white relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex justify-between items-center mb-10">
            <motion.h2
              className="text-2xl md:text-3xl font-bold text-gray-900"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Browse by Industry
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link href="/categories" className="text-orange-600 hover:text-orange-700 flex items-center">
                View All <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { name: "Retail", icon: ShoppingCart, count: 45 },
              { name: "Restaurant", icon: ShoppingCart, count: 38 },
              { name: "Hospitality", icon: ShoppingCart, count: 24 },
              { name: "Healthcare", icon: ShoppingCart, count: 19 },
              { name: "Service", icon: ShoppingCart, count: 31 },
            ].map((category, index) => (
              <motion.div
                key={category.name}
                className="perspective-500"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  href={`/category/${category.name.toLowerCase()}`}
                  className="group block h-full transform-style-3d hover:rotate-y-10 hover:rotate-x-10 transition-transform duration-300"
                >
                  <div className="flex flex-col items-center p-6 border border-gray-200 rounded-lg bg-white shadow-sm group-hover:shadow-xl transition-all duration-300 h-full transform-style-3d">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <category.icon className="h-8 w-8 text-orange-600" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">{category.name}</h3>
                    <p className="text-sm text-gray-500">{category.count} solutions</p>

                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-xs text-orange-600 flex items-center">
                        Explore <ArrowRight className="ml-1 h-3 w-3" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products with parallax effect */}
      <section ref={featuredRef} className="py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,#f97316_0.5px,transparent_0.5px)] [background-size:24px_24px]"
          style={{ opacity, scale }}
        ></motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex justify-between items-center mb-10">
            <motion.h2
              className="text-2xl md:text-3xl font-bold text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Top Rated POS Solutions
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link href="/products" className="text-orange-600 hover:text-orange-700 flex items-center">
                View All <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>
          </div>

          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="bg-white border border-gray-200 p-1 rounded-lg">
              <TabsTrigger
                value="all"
                className="rounded-md data-[state=active]:bg-orange-50 data-[state=active]:text-orange-600"
              >
                All
              </TabsTrigger>
              <TabsTrigger
                value="retail"
                className="rounded-md data-[state=active]:bg-orange-50 data-[state=active]:text-orange-600"
              >
                Retail
              </TabsTrigger>
              <TabsTrigger
                value="restaurant"
                className="rounded-md data-[state=active]:bg-orange-50 data-[state=active]:text-orange-600"
              >
                Restaurant
              </TabsTrigger>
              <TabsTrigger
                value="hospitality"
                className="rounded-md data-[state=active]:bg-orange-50 data-[state=active]:text-orange-600"
              >
                Hospitality
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {[
                  { name: "Clover POS", rating: 4.8, reviews: 245, image: "Clover", price: "$59/mo" },
                  { name: "Square for Retail", rating: 4.7, reviews: 189, image: "Square", price: "$69/mo" },
                  { name: "Lightspeed Retail", rating: 4.6, reviews: 156, image: "Lightspeed", price: "$79/mo" },
                  { name: "Toast POS", rating: 4.5, reviews: 132, image: "Toast", price: "$65/mo" },
                ].map((product, index) => (
                  <motion.div
                    key={product.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <Link
                      href={`/product/${product.name.toLowerCase().replace(/\s+/g, "-")}`}
                      className="group block bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                    >
                      <div className="p-4 border-b border-gray-100 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <Image
                          src={`/placeholder.svg?height=200&width=300&text=${product.image}`}
                          alt={product.name}
                          width={300}
                          height={200}
                          alt={product.name}
                          width={300}
                          height={200}
                          className="w-full h-48 object-contain group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4">
                        <div className="flex items-center mb-2">
                          <div className="flex items-center mr-2">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-600">({product.reviews})</span>
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-1 group-hover:text-orange-600 transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-orange-600 font-medium mb-3">Starting at {product.price}</p>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline" className="bg-gray-100 text-xs text-gray-700">
                            Inventory
                          </Badge>
                          <Badge variant="outline" className="bg-gray-100 text-xs text-gray-700">
                            CRM
                          </Badge>
                          <Badge variant="outline" className="bg-gray-100 text-xs text-gray-700">
                            Analytics
                          </Badge>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="retail" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {/* Similar product cards for retail category */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                    <div className="p-4 border-b border-gray-100">
                      <Image
                        src="/placeholder.svg?height=200&width=300&text=Retail+POS"
                        alt="Retail POS"
                        width={300}
                        height={200}
                        className="w-full h-48 object-contain hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex items-center mb-2">
                        <div className="flex items-center mr-2">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">(178)</span>
                      </div>
                      <h3 className="text-lg font-medium text-gray-900 mb-1">Shopify POS</h3>
                      <p className="text-orange-600 font-medium mb-3">Starting at $89/mo</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="bg-gray-100 text-xs text-gray-700">
                          Inventory
                        </Badge>
                        <Badge variant="outline" className="bg-gray-100 text-xs text-gray-700">
                          E-commerce
                        </Badge>
                        <Badge variant="outline" className="bg-gray-100 text-xs text-gray-700">
                          Analytics
                        </Badge>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </TabsContent>

            {/* Other tabs content */}
          </Tabs>
        </div>
      </section>

      {/* Solutions Showcase - Using modified SolutionsShowcase component */}
      <SolutionsShowcase />

      {/* Stats Section - Using Stats component */}
      <Stats />

      {/* Comparison Section with animated entrance */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Compare Top POS Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find the perfect POS system by comparing features, pricing, and customer reviews
            </p>
          </motion.div>

          <motion.div
            className="overflow-x-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-4 border border-gray-200 text-left min-w-[200px]">POS System</th>
                  <th className="p-4 border border-gray-200 text-center min-w-[150px]">Rating</th>
                  <th className="p-4 border border-gray-200 text-center min-w-[150px]">Starting Price</th>
                  <th className="p-4 border border-gray-200 text-center min-w-[150px]">Best For</th>
                  <th className="p-4 border border-gray-200 text-center min-w-[150px]">Free Trial</th>
                  <th className="p-4 border border-gray-200 text-center min-w-[150px]">Action</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Clover POS", rating: 4.8, price: "$59/mo", bestFor: "Retail", freeTrial: "14 days" },
                  {
                    name: "Square for Retail",
                    rating: 4.7,
                    price: "$69/mo",
                    bestFor: "Small Business",
                    freeTrial: "30 days",
                  },
                  {
                    name: "Lightspeed Retail",
                    rating: 4.6,
                    price: "$79/mo",
                    bestFor: "Multi-location",
                    freeTrial: "14 days",
                  },
                  { name: "Toast POS", rating: 4.5, price: "$65/mo", bestFor: "Restaurants", freeTrial: "7 days" },
                ].map((system, index) => (
                  <motion.tr
                    key={system.name}
                    className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <td className="p-4 border border-gray-200">
                      <div className="flex items-center">
                        <Image
                          src={`/placeholder.svg?height=40&width=40&text=${system.name.charAt(0)}`}
                          alt={system.name}
                          width={40}
                          height={40}
                          className="w-10 h-10 mr-3 rounded"
                        />
                        <span className="font-medium">{system.name}</span>
                      </div>
                    </td>
                    <td className="p-4 border border-gray-200 text-center">
                      <div className="flex items-center justify-center">
                        <span className="font-medium mr-1">{system.rating}</span>
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      </div>
                    </td>
                    <td className="p-4 border border-gray-200 text-center font-medium">{system.price}</td>
                    <td className="p-4 border border-gray-200 text-center">{system.bestFor}</td>
                    <td className="p-4 border border-gray-200 text-center">{system.freeTrial}</td>
                    <td className="p-4 border border-gray-200 text-center">
                      <Button variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50">
                        Compare
                      </Button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Button className="bg-orange-600 hover:bg-orange-700">View Full Comparison</Button>
          </motion.div>
        </div>
      </section>

      {/* Process Section - Using Process component */}
      <EnhancedProcess />

      {/* Testimonials - Using Testimonials component */}
      <Testimonials />

      {/* CTA Section - Using ModernCta component */}
      <ModernCta />
    </div>
  )
}

