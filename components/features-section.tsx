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
    <section className="py-20 bg-gradient-to-b from-gray-900 to-slate-800 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs font-medium mb-4 text-blue-300">
            POWERFUL FEATURES
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Enterprise-Grade POS Features</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Our POS solutions come packed with powerful features designed to streamline your operations and boost your
            business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mr-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              </div>
              <p className="text-blue-100">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

