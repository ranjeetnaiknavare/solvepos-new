"use client"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { SearchCheck, ClipboardCheck, Cog, Laptop, Users, BarChart, ArrowRight } from "lucide-react"

const processSteps = [
  {
    icon: SearchCheck,
    title: "Discovery",
    description:
      "We start by understanding your business needs, workflows, and challenges through a detailed consultation.",
    color: "blue",
  },
  {
    icon: ClipboardCheck,
    title: "Solution Selection",
    description:
      "Our experts carefully select POS solutions from our trusted partners that best match your specific requirements.",
    color: "cyan",
  },
  {
    icon: Cog,
    title: "Customization",
    description:
      "We customize the chosen solution to fit your specific business processes and integrate with your existing systems.",
    color: "purple",
  },
  {
    icon: Laptop,
    title: "Implementation",
    description:
      "Our team manages the seamless installation and configuration of your new POS system with minimal disruption.",
    color: "green",
  },
  {
    icon: Users,
    title: "Training",
    description:
      "We provide comprehensive training to ensure your team can effectively use and maximize the new system.",
    color: "orange",
  },
  {
    icon: BarChart,
    title: "Ongoing Support",
    description:
      "We offer continuous assistance, monitoring, and optimization to ensure your POS system grows with your business.",
    color: "pink",
  },
]

export function Process() {
  return (
    <section className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-dots-pattern opacity-50 dark:opacity-10"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-3 py-1.5 bg-white dark:bg-gray-800 border-primary/20 shadow-sm">
            OUR PROCESS
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400">
            How We Work
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our proven 6-step process ensures you get the perfect POS solution with seamless implementation.
          </p>
        </div>

        <div className="relative">
          {/* Connection line for desktop */}
          <div className="hidden lg:block absolute left-[50%] top-24 bottom-24 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 opacity-30 -translate-x-1/2"></div>

          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <ProcessStep key={index} step={step} index={index} isLast={index === processSteps.length - 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ProcessStep({ step, index, isLast }) {
  const isEven = index % 2 === 0
  const ColorIcon = getColorIcon(step.color)

  return (
    <div className={cn("grid grid-cols-1 lg:grid-cols-2 gap-8 items-center", !isEven && "lg:grid-flow-dense")}>
      {/* Left side content (or right side for odd steps) */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -30 : 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className={cn("flex flex-col justify-center", !isEven && "lg:col-start-2")}
      >
        <div className="flex items-center gap-4 mb-4">
          <ColorIcon className="h-14 w-14 rounded-xl flex-shrink-0">
            <step.icon className="h-6 w-6 text-white" />
          </ColorIcon>
          <div className="flex items-baseline gap-3">
            <div className="flex items-center justify-center h-6 w-6 rounded-full border-2 border-blue-600 dark:border-blue-400 bg-white dark:bg-gray-900 text-xs font-bold text-blue-600 dark:text-blue-400">
              {index + 1}
            </div>
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400">
              {step.title}
            </h3>
          </div>
        </div>

        <p className="text-gray-600 dark:text-gray-300 ml-[4.5rem]">{step.description}</p>
      </motion.div>

      {/* Right side visual (or left side for odd steps) */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? 30 : -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className={cn("flex justify-center", !isEven && "lg:col-start-1 lg:row-start-1")}
      >
        <div className="relative">
          {/* Glass card with visual representation */}
          <div className="glass-card p-6 max-w-md mx-auto">
            <div className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-white/10 dark:border-white/5 text-center">
              <div className="relative h-48 mb-4">
                {/* Use an image that represents this step */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl text-blue-500/20 dark:text-blue-500/30 font-bold">STEP {index + 1}</div>
                </div>

                {/* Icon and flow visualization in the center */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="h-20 w-20 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-blue-500/30 dark:to-purple-500/30 absolute inset-0 blur-xl"></div>
                    <div className="relative z-10 h-16 w-16 rounded-full bg-white dark:bg-gray-800 border border-white/20 dark:border-white/10 flex items-center justify-center shadow-lg">
                      <step.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                    </div>

                    {!isLast && (
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2">
                        <ArrowRight className="h-6 w-6 text-blue-600 dark:text-blue-400 rotate-90" />
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <h4 className="text-lg font-semibold text-white mb-2">{step.title} Phase</h4>
              <p className="text-sm text-white/70">
                {index === 0
                  ? "The journey begins here"
                  : index === processSteps.length - 1
                    ? "Continuous improvement"
                    : `Building on ${processSteps[index - 1].title}`}
              </p>
            </div>
          </div>

          {/* Accent elements */}
          <div
            className={cn("absolute -top-3 -right-3 h-8 w-8 rounded-lg z-10 rotate-12", getAccentClasses(step.color))}
          ></div>

          <div
            className={cn(
              "absolute -bottom-3 -left-3 h-8 w-8 rounded-full z-10",
              getAccentClasses(getNextColor(step.color)),
            )}
          ></div>
        </div>
      </motion.div>
    </div>
  )
}

// Helper functions for styling
function getColorIcon(color) {
  return ({ children, className }) => {
    const classes = cn(
      "flex items-center justify-center",
      className,
      color === "blue" && "bg-gradient-to-br from-blue-500 to-blue-700 shadow-neon-blue",
      color === "cyan" && "bg-gradient-to-br from-cyan-500 to-cyan-700 shadow-neon-cyan",
      color === "purple" && "bg-gradient-to-br from-purple-500 to-purple-700 shadow-neon-purple",
      color === "green" && "bg-gradient-to-br from-green-500 to-green-700 shadow-neon-green",
      color === "orange" && "bg-gradient-to-br from-orange-500 to-orange-700",
      color === "pink" && "bg-gradient-to-br from-pink-500 to-pink-700",
    )

    return <div className={classes}>{children}</div>
  }
}

function getAccentClasses(color) {
  switch (color) {
    case "blue":
      return "bg-gradient-to-r from-blue-500 to-blue-700 shadow-neon-blue"
    case "cyan":
      return "bg-gradient-to-r from-cyan-500 to-cyan-700 shadow-neon-cyan"
    case "purple":
      return "bg-gradient-to-r from-purple-500 to-purple-700 shadow-neon-purple"
    case "green":
      return "bg-gradient-to-r from-green-500 to-green-700 shadow-neon-green"
    case "orange":
      return "bg-gradient-to-r from-orange-500 to-orange-700"
    case "pink":
      return "bg-gradient-to-r from-pink-500 to-pink-700"
    default:
      return "bg-gradient-to-r from-blue-500 to-blue-700 shadow-neon-blue"
  }
}

function getNextColor(currentColor) {
  const colors = ["blue", "cyan", "purple", "green", "orange", "pink"]
  const currentIndex = colors.indexOf(currentColor)
  return colors[(currentIndex + 1) % colors.length]
}

