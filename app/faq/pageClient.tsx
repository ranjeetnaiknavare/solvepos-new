"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

const faqs = [
  {
    question: "What types of businesses do you serve?",
    answer:
      "We serve a wide range of businesses, including retail stores, restaurants, cafes, bars, hotels, and service-based businesses. Our POS solutions are customizable to fit the unique needs of various industries.",
  },
  {
    question: "How long does it take to implement a new POS system?",
    answer:
      "The implementation time can vary depending on the complexity of your business and the chosen solution. Typically, it takes 2-4 weeks from initial consultation to full implementation. We work efficiently to minimize disruption to your business operations.",
  },
  {
    question: "Can you integrate with my existing software and hardware?",
    answer:
      "Yes, we specialize in integrating POS systems with various existing business infrastructures. This includes accounting software, CRM systems, inventory management tools, and compatible hardware. We'll assess your current setup during the consultation phase.",
  },
  {
    question: "What kind of training and support do you provide?",
    answer:
      "We offer comprehensive training for you and your staff as part of our implementation process. This ensures everyone is comfortable with the new system. Additionally, we provide ongoing support, including 24/7 technical assistance, regular system updates, and periodic check-ins.",
  },
  {
    question: "How much does a POS system cost?",
    answer:
      "The cost of a POS system varies depending on your business needs, the complexity of the solution, and the hardware required. We offer flexible pricing options and can provide a customized quote after understanding your specific requirements during a consultation.",
  },
  {
    question: "Do you offer cloud-based POS solutions?",
    answer:
      "Yes, we offer both cloud-based and on-premise POS solutions. Cloud-based systems offer the advantage of accessibility from anywhere, automatic updates, and often lower upfront costs. We can help you determine which option is best for your business during our consultation.",
  },
  {
    question: "How secure are your POS systems?",
    answer:
      "Security is a top priority for us. Our POS systems use industry-standard encryption and security protocols to protect your data and transactions. We ensure compliance with PCI DSS (Payment Card Industry Data Security Standard) and regularly update our systems to address new security challenges.",
  },
  {
    question: "Can I try the POS system before committing?",
    answer:
      "Yes, we offer demos of our POS systems. During a consultation, we can arrange a demonstration tailored to your business needs. This allows you to see the system in action and ask specific questions about how it would work in your environment.",
  },
]

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-200 py-4">
      <button className="flex justify-between items-center w-full text-left" onClick={() => setIsOpen(!isOpen)}>
        <span className="font-medium text-lg">{question}</span>
        {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </button>
      {isOpen && <p className="mt-2 text-gray-600">{answer}</p>}
    </div>
  )
}

export default function FAQPageClient() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-8 text-center"
      >
        Frequently Asked Questions
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-xl text-muted-foreground mb-12 text-center max-w-3xl mx-auto"
      >
        Find answers to common questions about our POS solutions and services. If you don't see your question here, feel
        free to contact us.
      </motion.p>

      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <FAQItem question={faq.question} answer={faq.answer} />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mt-16 text-center"
      >
        <h2 className="text-2xl font-semibold mb-4">Still have questions?</h2>
        <p className="text-muted-foreground mb-8">
          We're here to help. Contact us for more information or to schedule a consultation.
        </p>
        <Button
          size="lg"
          className="rounded-full"
          onClick={() => window.open("https://solvepos.setmore.com/", "_blank")}
        >
          Book a Free Consultation
        </Button>
      </motion.div>
    </div>
  )
}

