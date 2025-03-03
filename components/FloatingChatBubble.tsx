"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X } from "lucide-react"

export const FloatingChatBubble = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 5000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-4 right-4 z-50"
        >
          {isOpen ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white p-4 rounded-lg shadow-lg max-w-sm"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              >
                <X size={20} />
              </button>
              <h4 className="text-lg font-semibold mb-2">Need help choosing a POS?</h4>
              <p className="text-sm text-gray-600 mb-4">
                Our experts are here to guide you to the perfect solution for your business.
              </p>
              <button
                onClick={() => window.open("https://solvepos.setmore.com/", "_blank")}
                className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                Schedule a Free Consultation
              </button>
            </motion.div>
          ) : (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(true)}
              className="bg-primary text-white p-3 rounded-full shadow-lg"
            >
              <MessageCircle size={24} />
            </motion.button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

