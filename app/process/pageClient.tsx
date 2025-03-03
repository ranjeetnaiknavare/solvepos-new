"use client"

import { motion } from "framer-motion"
import { PhoneCall, Search, Cog, Laptop, Users, BarChart, ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

const processSteps = [
  {
    title: "Initial Consultation",
    description: "We start with a thorough discussion to understand your business needs and goals.",
    icon: PhoneCall,
    color: "#4CAF50",
  },
  {
    title: "Solution Research",
    description: "Our experts research and identify the best POS solutions tailored to your requirements.",
    icon: Search,
    color: "#2196F3",
  },
  {
    title: "Customization",
    description: "We customize the chosen solution to fit your specific business processes and workflows.",
    icon: Cog,
    color: "#FF9800",
  },
  {
    title: "Implementation",
    description: "Our team handles the seamless installation and setup of your new POS system.",
    icon: Laptop,
    color: "#9C27B0",
  },
  {
    title: "Training",
    description: "We provide comprehensive training to ensure your team can effectively use the new system.",
    icon: Users,
    color: "#E91E63",
  },
  {
    title: "Ongoing Support",
    description: "Our support doesn't end at implementation. We offer continuous assistance and updates.",
    icon: BarChart,
    color: "#00BCD4",
  },
]

const ProcessStep = ({ step, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col items-center text-center mb-12"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-24 h-24 rounded-full bg-white shadow-lg flex items-center justify-center mb-4"
        style={{ backgroundColor: step.color }}
      >
        <step.icon className="w-12 h-12 text-white" />
      </motion.div>
      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
      <p className="text-gray-600 max-w-md">{step.description}</p>
    </motion.div>
  )
}

const ProcessFlow = () => {
  return (
    <svg className="w-full h-20 my-8" viewBox="0 0 800 100">
      <motion.path
        d="M0,50 C200,100 600,0 800,50"
        fill="none"
        stroke="#4CAF50"
        strokeWidth="4"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <motion.circle
          key={i}
          cx={160 * i + 40}
          cy="50"
          r="8"
          fill="#4CAF50"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5 + i * 0.2 }}
        />
      ))}
    </svg>
  )
}

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-200 py-4">
      <button className="flex justify-between items-center w-full text-left" onClick={() => setIsOpen(!isOpen)}>
        <span className="font-medium">{question}</span>
        {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </button>
      {isOpen && <p className="mt-2 text-gray-600">{answer}</p>}
    </div>
  )
}

export default function ProcessPageClient() {
  const handleBookDiscoveryCall = () => {
    window.open("https://solvepos.setmore.com/", "_blank")
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-8 text-center"
      >
        Our Process
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-xl text-muted-foreground mb-12 text-center max-w-3xl mx-auto"
      >
        At SolvePOS, we follow a comprehensive, client-focused process to ensure you get the perfect POS solution for
        your business. Here's how we work:
      </motion.p>

      <ProcessFlow />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {processSteps.map((step, index) => (
          <ProcessStep key={step.title} step={step} index={index} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="mt-16"
      >
        <h2 className="text-3xl font-semibold mb-6 text-center">Frequently Asked Questions</h2>
        <div className="max-w-2xl mx-auto">
          <FAQItem
            question="How long does the entire process typically take?"
            answer="The duration can vary depending on the complexity of your business and chosen solution. Generally, it takes 2-4 weeks from initial consultation to full implementation."
          />
          <FAQItem
            question="Can you integrate with my existing systems?"
            answer="Yes, we specialize in integrating POS systems with various existing business infrastructures, including accounting software, CRM systems, and inventory management tools."
          />
          <FAQItem
            question="What kind of ongoing support do you provide?"
            answer="We offer 24/7 technical support, regular system updates, and periodic check-ins to ensure your POS system continues to meet your evolving business needs."
          />
          <FAQItem
            question="Is training included in the process?"
            answer="We provide comprehensive training for you and your staff as part of our implementation process, ensuring everyone is comfortable with the new system."
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.4 }}
        className="mt-16"
      >
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-6">
            <h3 className="text-2xl font-semibold mb-2">What Our Clients Say</h3>
            <p className="text-lg mb-4">
              "SolvePOS guided us through every step of the process, from selecting the perfect POS system to seamless
              implementation. Their ongoing support has been invaluable to our business growth."
            </p>
            <p className="font-medium">- Sarah Johnson, Owner of Cafe Bliss</p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.6 }}
        className="mt-16 text-center"
      >
        <h2 className="text-3xl font-semibold mb-4">Ready to Transform Your Business?</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Let's discuss how our proven process can help you find and implement the perfect POS solution for your unique
          business needs.
        </p>
        <Button size="lg" className="rounded-full text-lg px-8 py-6" onClick={handleBookDiscoveryCall}>
          Book a Paid Discovery Call
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.8 }}
        className="mt-16 text-center"
      >
        <p className="text-muted-foreground">
          Have more questions? Check out our{" "}
          <Link href="/faq" className="text-primary hover:underline">
            FAQ page
          </Link>{" "}
          or{" "}
          <Link href="/contact" className="text-primary hover:underline">
            contact us
          </Link>{" "}
          for more information.
        </p>
      </motion.div>
    </div>
  )
}

