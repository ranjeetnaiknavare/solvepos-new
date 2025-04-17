"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const partners = [
  {
    name: "Clover POS",
    logo: "https://www.clover.com/assets/images/public-site/press/clover_primary_gray_rgb.svg",
    industry: "Payment Processing & POS",
  },
  {
    name: "Ezeeburrp",
    logo: "https://www.ezeeburrp.com/wp-content/uploads/2023/03/ezeeburrp-logo.png",
    industry: "Restaurant POS",
  },
  {
    name: "Vasyerp",
    logo: "https://vasyerp.com/wp-content/uploads/2023/03/vasy-logo-1.png",
    industry: "Enterprise Resource Planning",
  },
  {
    name: "Posist",
    logo: "https://posist.com/wp-content/uploads/2022/11/posist-logo.svg",
    industry: "Restaurant Management",
  },
  {
    name: "Rancelab",
    logo: "https://www.rancelab.com/wp-content/uploads/2019/09/rancelab-logo.png",
    industry: "Retail POS",
  },
  {
    name: "Petpooja",
    logo: "https://www.petpooja.com/wp-content/uploads/2023/03/petpooja-logo.svg",
    industry: "Restaurant Management",
  },
  {
    name: "Ginesys",
    logo: "https://www.ginesys.in/wp-content/uploads/2022/03/ginesys-logo.png",
    industry: "Retail Management",
  },
  {
    name: "Zakya",
    logo: "https://zakya.com/assets/images/zakya-logo.svg",
    industry: "Retail POS",
  },
  {
    name: "PayPal",
    logo: "https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_111x69.jpg",
    industry: "Payment Processing",
  },
  {
    name: "Square",
    logo: "https://square-brand-assets.square.site/square-logo.svg",
    industry: "Payment Processing & POS",
  },
  {
    name: "Lightspeed",
    logo: "https://www.lightspeedhq.com/wp-content/uploads/2021/06/lightspeed-logo.svg",
    industry: "Retail & Restaurant POS",
  },
  {
    name: "eHopper",
    logo: "https://ehopper.com/wp-content/themes/ehopper/assets/images/logo.svg",
    industry: "Retail & Restaurant POS",
  },
]

export function Partners() {
  const [hoveredPartner, setHoveredPartner] = useState<string | null>(null)

  return (
    <section className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-dots-pattern opacity-50 dark:opacity-10"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-3 py-1.5 bg-white dark:bg-gray-800 border-primary/20 shadow-sm">
            TRUSTED PARTNERS
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400">
            Our Network of Top Providers
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We've partnered with the industry's leading POS providers to ensure you get the perfect solution for your
            business.
          </p>
        </div>

        <TooltipProvider>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredPartner(partner.name)}
                onMouseLeave={() => setHoveredPartner(null)}
                className="relative group"
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div
                      className={`relative bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center h-24 ${
                        hoveredPartner === partner.name
                          ? "border-blue-300 dark:border-blue-600 shadow-lg transform scale-105"
                          : ""
                      }`}
                    >
                      <Image
                        src={partner.logo || "/placeholder.svg?height=60&width=160"}
                        alt={partner.name}
                        width={160}
                        height={60}
                        className="max-h-12 w-auto object-contain"
                      />

                      {hoveredPartner === partner.name && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-blue-500 border border-white dark:border-gray-800"
                        />
                      )}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <div className="text-center">
                      <p className="font-semibold">{partner.name}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{partner.industry}</p>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </motion.div>
            ))}
          </div>
        </TooltipProvider>

        <div className="mt-16 text-center">
          <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-lg border-0 shadow-lg shadow-blue-600/20 hover:shadow-xl hover:shadow-blue-600/30 transition-all duration-300">
            View All Partners
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

