"use client"
import { motion } from "framer-motion"
import { Zap, Shield, BarChart, Users, Settings, Headphones } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Process transactions at lightning speed, reducing wait times and improving customer satisfaction.",
  },
  {
    icon: Shield,
    title: "Secure Payments",
    description: "State-of-the-art encryption and security measures to protect your business and customers.",
  },
  {
    icon: BarChart,
    title: "Advanced Analytics",
    description: "Gain valuable insights into your business performance with our powerful reporting tools.",
  },
  {
    icon: Users,
    title: "Multi-User Support",
    description: "Manage your team efficiently with role-based access control and permissions.",
  },
  {
    icon: Settings,
    title: "Customizable",
    description: "Tailor the POS system to your specific needs with our flexible configuration options.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Our dedicated support team is always ready to assist you, ensuring smooth operations.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Powerful Features for Your Business
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-purple-600 rounded-full mr-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              </div>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

