"use client"

import React from "react"

import { useRef, useState } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  PhoneCall,
  Search,
  Cog,
  Laptop,
  Users,
  BarChart,
  ArrowRight,
  CheckCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react"
import Image from "next/image"

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description: "We start with a thorough consultation to understand your business needs, workflows, and challenges.",
    icon: PhoneCall,
    color: "from-blue-500 to-indigo-600",
    image: "/placeholder.svg?height=400&width=600&text=Discovery+Phase",
    features: ["In-depth business analysis", "Workflow assessment", "Pain point identification", "Budget planning"],
  },
  {
    step: "02",
    title: "Solution Selection",
    description:
      "Our experts carefully select POS solutions from our trusted partners that best match your specific requirements.",
    icon: Search,
    color: "from-cyan-500 to-blue-600",
    image: "/placeholder.svg?height=400&width=600&text=Solution+Selection",
    features: ["Vendor comparison", "Feature matching", "ROI calculation", "Demo coordination"],
  },
  {
    step: "03",
    title: "Customization",
    description:
      "We customize the chosen solution to fit your specific business processes and integrate with your existing systems.",
    icon: Cog,
    color: "from-purple-500 to-pink-600",
    image: "/placeholder.svg?height=400&width=600&text=Customization+Phase",
    features: ["System configuration", "Integration planning", "Workflow optimization", "Custom feature development"],
  },
  {
    step: "04",
    title: "Implementation",
    description:
      "Our team manages the seamless installation and configuration of your new POS system with minimal disruption.",
    icon: Laptop,
    color: "from-green-500 to-emerald-600",
    image: "/placeholder.svg?height=400&width=600&text=Implementation+Phase",
    features: ["Data migration", "Hardware setup", "Software installation", "System testing"],
  },
  {
    step: "05",
    title: "Training",
    description:
      "We provide comprehensive training to ensure your team can effectively use and maximize the new system.",
    icon: Users,
    color: "from-orange-500 to-amber-600",
    image: "/placeholder.svg?height=400&width=600&text=Training+Phase",
    features: ["Staff training sessions", "Admin dashboard training", "Documentation provision", "Knowledge transfer"],
  },
  {
    step: "06",
    title: "Ongoing Support",
    description:
      "We offer continuous assistance, monitoring, and optimization to ensure your POS system grows with your business.",
    icon: BarChart,
    color: "from-red-500 to-rose-600",
    image: "/placeholder.svg?height=400&width=600&text=Ongoing+Support",
    features: [
      "24/7 technical support",
      "Regular system updates",
      "Performance optimization",
      "Business growth consulting",
    ],
  },
]

export function EnhancedProcess() {
  const [activeStep, setActiveStep] = useState(0)
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index)
  }

  return (
    <section ref={containerRef} className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>

      <motion.div
        className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px]"
        style={{ opacity, scale }}
      ></motion.div>

      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-orange-100 rounded-full opacity-20 blur-3xl transform translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-100 rounded-full opacity-20 blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>

      {/* Animated dots */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-2 w-2 rounded-full bg-orange-500/30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 3 + Math.random() * 2,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="outline" className="mb-4 px-3 py-1.5 bg-white border-orange-200 shadow-sm">
            OUR PROCESS
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
            How We Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven 6-step process ensures you get the perfect POS solution with seamless implementation.
          </p>
        </motion.div>

        {/* Process Steps Navigation */}
        <div className="flex justify-center mb-16 overflow-x-auto pb-4 hide-scrollbar">
          <div className="flex space-x-2 md:space-x-4">
            {processSteps.map((step, index) => (
              <motion.button
                key={index}
                className={cn(
                  "relative px-4 py-2 rounded-full transition-all duration-300 min-w-[120px]",
                  activeStep === index
                    ? "bg-white shadow-lg border border-orange-200"
                    : "hover:bg-white/60 hover:shadow",
                )}
                onClick={() => setActiveStep(index)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                <div className="flex flex-col items-center">
                  <div
                    className={cn(
                      "text-xs font-semibold mb-1 rounded-full w-5 h-5 flex items-center justify-center",
                      `bg-gradient-to-r ${step.color} text-white`,
                    )}
                  >
                    {index + 1}
                  </div>
                  <span className={cn("text-sm font-medium", activeStep === index ? "text-gray-900" : "text-gray-600")}>
                    {step.title}
                  </span>
                </div>

                {activeStep === index && (
                  <motion.div
                    layoutId="activeProcessStep"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Active Step Content */}
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              {/* Left: Content */}
              <div className="order-2 lg:order-1">
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className={cn(
                      "flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-white",
                      `bg-gradient-to-br ${processSteps[activeStep].color} shadow-lg`,
                    )}
                  >
                    {React.createElement(processSteps[activeStep].icon, { className: "h-7 w-7" })}
                  </div>
                  <div>
                    <div className="text-sm text-orange-600 font-semibold mb-1">
                      STEP {processSteps[activeStep].step}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700">
                      {processSteps[activeStep].title}
                    </h3>
                  </div>
                </div>

                <p className="text-lg text-gray-600 mb-8">{processSteps[activeStep].description}</p>

                <div className="bg-white rounded-xl border border-gray-100 shadow-md p-6 mb-8 transform hover:scale-105 transition-transform duration-300">
                  <h4 className="text-lg font-semibold mb-4 text-gray-900">Key Activities</h4>
                  <ul className="space-y-3">
                    {processSteps[activeStep].features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: idx * 0.1 }}
                      >
                        <CheckCircle className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-full shadow-lg"
                    onClick={() => window.open("https://solvepos.setmore.com/", "_blank")}
                  >
                    Start Your Journey <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-full border-orange-200 text-orange-600 hover:bg-orange-50"
                    onClick={() => setActiveStep((activeStep + 1) % processSteps.length)}
                  >
                    Next Step
                  </Button>
                </div>
              </div>

              {/* Right: Visual */}
              <div className="order-1 lg:order-2">
                <div className="relative">
                  <motion.div
                    className="relative z-10 rounded-2xl overflow-hidden border-2 border-white shadow-2xl"
                    whileHover={{
                      rotateY: 5,
                      rotateX: -5,
                      scale: 1.02,
                      transition: { duration: 0.5 },
                    }}
                    style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
                  >
                    <div className="relative h-[300px] md:h-[400px]">
                      <Image
                        src={processSteps[activeStep].image || "/placeholder.svg"}
                        alt={processSteps[activeStep].title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="text-white text-xl font-bold mb-2">{processSteps[activeStep].title} Phase</div>
                        <div className="flex items-center">
                          <div className={cn("h-2 rounded-full bg-white w-full overflow-hidden")}>
                            <motion.div
                              className={cn(
                                "h-full rounded-full",
                                `bg-gradient-to-r ${processSteps[activeStep].color}`,
                              )}
                              initial={{ width: "0%" }}
                              animate={{ width: "100%" }}
                              transition={{ duration: 1.5 }}
                            />
                          </div>
                          <div className="ml-3 text-white font-medium">
                            {activeStep + 1}/{processSteps.length}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Decorative elements */}
                  <motion.div
                    className={cn(
                      "absolute -top-6 -right-6 h-16 w-16 rounded-full z-0",
                      `bg-gradient-to-br ${processSteps[activeStep].color}`,
                    )}
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 10, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    }}
                  />

                  <motion.div
                    className={cn(
                      "absolute -bottom-4 -left-4 h-12 w-12 rounded-full z-0",
                      `bg-gradient-to-br ${processSteps[activeStep].color}`,
                    )}
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
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Process Timeline */}
        <motion.div
          className="max-w-4xl mx-auto mt-24 mb-16 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 via-red-500 to-orange-500 transform -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className={cn(
                  "relative flex items-center md:items-start",
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse",
                )}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="hidden md:block w-1/2"></div>

                <div className="absolute left-0 md:left-1/2 top-0 transform md:-translate-x-1/2 hidden md:block">
                  <div
                    className={cn(
                      "w-10 h-10 rounded-full border-4 border-white flex items-center justify-center text-white text-sm font-bold",
                      `bg-gradient-to-br ${step.color}`,
                    )}
                  >
                    {index + 1}
                  </div>
                </div>

                <div className="md:w-1/2 md:px-8">
                  <div
                    className={cn(
                      "bg-white rounded-xl p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300",
                      index % 2 === 0 ? "md:ml-8" : "md:mr-8",
                    )}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={cn(
                          "md:hidden w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold",
                          `bg-gradient-to-br ${step.color}`,
                        )}
                      >
                        {index + 1}
                      </div>
                      <h3 className="text-xl font-bold">{step.title}</h3>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          className="max-w-3xl mx-auto mt-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Frequently Asked Questions</h3>
            <p className="text-gray-600">Get answers to common questions about our process and implementation</p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "How long does the entire process typically take?",
                answer:
                  "The duration can vary depending on the complexity of your business and chosen solution. Generally, it takes 2-4 weeks from initial consultation to full implementation.",
              },
              {
                question: "Can you integrate with my existing systems?",
                answer:
                  "Yes, we specialize in integrating POS systems with various existing business infrastructures, including accounting software, CRM systems, and inventory management tools.",
              },
              {
                question: "What kind of ongoing support do you provide?",
                answer:
                  "We offer 24/7 technical support, regular system updates, and periodic check-ins to ensure your POS system continues to meet your evolving business needs.",
              },
              {
                question: "Is training included in the process?",
                answer:
                  "Yes, comprehensive training for you and your staff is included as part of our implementation process, ensuring everyone is comfortable with the new system.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <button
                  className="flex justify-between items-center w-full px-6 py-4 text-left"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  {expandedFAQ === index ? (
                    <ChevronUp className="h-5 w-5 text-orange-600" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  )}
                </button>

                <AnimatePresence>
                  {expandedFAQ === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="max-w-3xl mx-auto mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business?</h3>
            <p className="text-white/90 mb-6">
              Let's discuss how our proven process can help you find and implement the perfect POS solution.
            </p>
            <Button
              size="lg"
              className="bg-white text-orange-600 hover:bg-gray-100 rounded-full"
              onClick={() => window.open("https://solvepos.setmore.com/", "_blank")}
            >
              Book a Discovery Call
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

