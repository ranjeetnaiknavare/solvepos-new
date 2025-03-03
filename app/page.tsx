"use client"

import { useEffect } from "react"
import {
  ArrowRight,
  CheckCircle,
  Globe,
  Headphones,
  ShieldCheck,
  Zap,
  BarChart3,
  Layers,
  Star,
  Laptop,
  BarChart,
  Award,
  ThumbsUp,
  FileText,
  BookOpen,
  FileCheck,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { HeroSection } from "@/components/hero-section"
import { FeatureCard } from "@/components/feature-card"
import { ProcessCard } from "@/components/process-card"
import { TestimonialCard } from "@/components/testimonial-card"
import { StatCard } from "@/components/stat-card"
import { ClientSideWrapper } from "@/components/client-side-wrapper"
import Image from "next/image"
import "../styles/animations.css"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const partners = [
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
  { name: "Zakya", logo: "https://zakya.com/assets/images/zakya-logo.svg", industry: "Retail POS" },
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
    industry: "Retail POS",
  },
  {
    name: "Clover",
    logo: "https://www.clover.com/assets/images/public-site/press/clover_primary_gray_rgb.svg",
    industry: "Restaurant POS",
  },
  {
    name: "Revel Systems",
    logo: "https://revelsystems.com/wp-content/themes/revel/assets/images/revel-logo-2x.png",
    industry: "Retail POS",
  },
  { name: "Erply", logo: "https://erply.com/wp-content/uploads/2020/04/erply-logo.svg", industry: "Retail POS" },
  {
    name: "Korona",
    logo: "https://www.koronapos.com/wp-content/uploads/2021/03/korona-logo.svg",
    industry: "Restaurant POS",
  },
  {
    name: "Tally Solutions",
    logo: "https://tallysolutions.com/wp-content/uploads/2022/08/tally-logo.svg",
    industry: "Accounting Software",
  },
  {
    name: "Aloha NCR",
    logo: "https://www.ncr.com/content/dam/ncrcom/content-type/logos/ncr-logo-black.svg",
    industry: "Restaurant POS",
  },
  {
    name: "ItsaCheckmate",
    logo: "https://www.itsacheckmate.com/wp-content/themes/itsacheckmate/images/logo.svg",
    industry: "Restaurant POS",
  },
  { name: "QueueBuster", logo: "https://www.queuebuster.co/assets/img/logo.svg", industry: "Queue Management" },
  {
    name: "Zebra",
    logo: "https://www.zebra.com/content/dam/zebra_new_ia/en-us/images/logo/zebra-logo-black.svg",
    industry: "Hardware",
  },
]

export default function Home() {
  // Add HubSpot script
  useEffect(() => {
    const script = document.createElement("script")
    script.id = "hs-script-loader"
    script.async = true
    script.defer = true
    script.src = "//js.hs-scripts.com/47279655.js"
    document.body.appendChild(script)

    return () => {
      if (document.getElementById("hs-script-loader")) {
        document.body.removeChild(script)
      }
    }
  }, [])

  const navItems = [
    { name: "Solutions", href: "#solutions" },
    { name: "Partners", href: "#partners" },
    { name: "Process", href: "#process" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <>
      <HeroSection />

      {/* Partners Section */}
      <section id="partners" className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50/50 -z-10"></div>
        <div className="container relative">
          <div className="text-center mb-12">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium mb-4 text-primary">
              TRUSTED PARTNERS
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Backed by Industry Leaders
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              We've partnered with the best POS companies to bring you a wide range of solutions for every business
              need.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
            <TooltipProvider>
              {partners.map((partner, i) => (
                <motion.div
                  key={partner.name}
                  className="group relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Tooltip>
                    <TooltipTrigger>
                      <div className="relative bg-white rounded-lg p-6 shadow-sm border border-gray-100 group-hover:shadow-md group-hover:border-primary/20 transition-all duration-300">
                        <Image
                          src={partner.logo || "/placeholder.svg"}
                          alt={partner.name}
                          width={120}
                          height={60}
                          className="h-12 w-auto object-contain"
                        />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{partner.industry}</p>
                    </TooltipContent>
                  </Tooltip>
                </motion.div>
              ))}
            </TooltipProvider>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white -z-10"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl -z-10"></div>

        <div className="container relative">
          <div className="text-center mb-12">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium mb-4 text-primary">
              OUR SOLUTIONS
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent animate-gradient-x">
              Comprehensive POS Solutions
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              From retail to restaurants, we have the perfect POS system for your business needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              title="Retail POS"
              description="Streamline checkout, manage inventory, and boost sales with our retail POS solutions."
              icon={ShieldCheck}
              gradient="from-blue-500 to-primary"
              features={["Inventory management", "Customer loyalty", "Multi-location support"]}
            />
            <FeatureCard
              title="Restaurant POS"
              description="Optimize table management, orders, and kitchen operations for smoother service."
              icon={Globe}
              gradient="from-purple-500 to-pink-500"
              features={["Table management", "Kitchen display", "Online ordering"]}
            />
            <FeatureCard
              title="Enterprise Solutions"
              description="Scale your business with multi-location POS systems and centralized management."
              icon={Layers}
              gradient="from-primary to-blue-600"
              features={["Centralized reporting", "Advanced analytics", "Custom integrations"]}
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50/50 -z-10"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-3xl -z-10"></div>

        <div className="container relative">
          <div className="text-center mb-12">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium mb-4 text-primary">
              OUR PROCESS
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent animate-gradient-x">
              How It Works
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Our simple process helps you find and implement the perfect POS solution for your business.
            </p>
          </div>

          <div className="relative">
            {/* Connection line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-purple-600 hidden md:block"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              <ProcessCard
                step="01"
                title="Consultation"
                description="We understand your business needs and requirements through a detailed consultation."
                icon={Headphones}
              />
              <ProcessCard
                step="02"
                title="Solution Matching"
                description="Our experts match you with the perfect POS solutions from our trusted partners."
                icon={Zap}
              />
              <ProcessCard
                step="03"
                title="Implementation"
                description="We help you implement and integrate your new POS system seamlessly into your business."
                icon={CheckCircle}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Showcase Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              Our Services
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
              Comprehensive POS Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We offer a wide range of services to ensure your POS system works seamlessly with your business
              operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={Laptop}
              title="POS Setup & Integration"
              description="Expert installation and seamless integration with your existing systems."
            />
            <ServiceCard
              icon={ShieldCheck}
              title="Secure Payment Processing"
              description="Ensure safe and efficient transactions with our secure payment solutions."
            />
            <ServiceCard
              icon={Headphones}
              title="24/7 Support"
              description="Round-the-clock assistance to keep your business running smoothly."
            />
            <ServiceCard
              icon={BarChart}
              title="Analytics & Reporting"
              description="Gain valuable insights with our advanced reporting tools."
            />
            <ServiceCard
              icon={Award}
              title="Custom Solutions"
              description="Tailored POS systems designed to meet your specific business needs."
            />
            <ServiceCard
              icon={ThumbsUp}
              title="Training & Onboarding"
              description="Comprehensive training to ensure your team can maximize system efficiency."
            />
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-4">Why Choose SolvePOS?</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="text-lg py-2 px-4">Industry Expertise</Badge>
              <Badge className="text-lg py-2 px-4">Cutting-edge Technology</Badge>
              <Badge className="text-lg py-2 px-4">Scalable Solutions</Badge>
              <Badge className="text-lg py-2 px-4">Dedicated Support</Badge>
              <Badge className="text-lg py-2 px-4">Competitive Pricing</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <ClientSideWrapper>
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white -z-10"></div>
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl -z-10"></div>

          <div className="container relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium mb-4 text-primary">
                  WHY CHOOSE US
                </div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent animate-gradient-x">
                  Why Choose SolvePOS?
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  We're committed to helping businesses find cost-effective, efficient POS solutions that drive growth
                  and streamline operations.
                </p>
                <div className="space-y-4">
                  {[
                    "Expert guidance from industry specialists",
                    "Access to exclusive partner discounts",
                    "Ongoing support and training",
                    "Custom solutions for your specific needs",
                    "Global implementation capabilities",
                    "Flexible pricing tailored to your business",
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-lg hover:bg-primary/5 transition-colors">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle className="h-4 w-4 text-primary" />
                      </div>
                      <span className="font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
                <Button className="mt-8 gap-2 rounded-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300">
                  Book Paid Discovery Call <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="relative">
                <div className="absolute -z-10 h-full w-full bg-gradient-to-br from-primary/20 to-purple-500/20 blur-3xl"></div>
                <div className="relative bg-white p-2 rounded-xl shadow-xl border border-white/50 rotate-3 hover:rotate-0 transition-all duration-500 animate-float">
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    alt="POS System in action"
                    width={600}
                    height={600}
                    className="rounded-lg"
                  />
                </div>
                <div
                  className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg -rotate-6 hover:rotate-0 transition-all duration-500 z-10 animate-float"
                  style={{ animationDelay: "0.5s" }}
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-600">
                      <Star className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Customer Satisfaction</p>
                      <p className="text-xl font-bold text-green-600">98%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ClientSideWrapper>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50/50 -z-10"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-3xl -z-10"></div>

        <div className="container relative">
          <div className="text-center mb-12">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium mb-4 text-primary">
              TESTIMONIALS
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent animate-gradient-x">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Hear from businesses that have transformed their operations with our POS solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="SolvePOS helped us find a POS system that increased our checkout speed by 40% and improved inventory accuracy."
              author="Sarah Johnson"
              role="Retail Store Owner"
              image="/placeholder.svg?height=80&width=80"
              company="Fashion Boutique"
            />
            <TestimonialCard
              quote="The restaurant POS system recommended by SolvePOS has revolutionized how we manage orders and table service."
              author="Michael Chen"
              role="Restaurant Manager"
              image="/placeholder.svg?height=80&width=80"
              company="Fusion Bistro"
            />
            <TestimonialCard
              quote="Their expertise in enterprise POS solutions helped us seamlessly connect our 12 locations under one system."
              author="David Williams"
              role="Operations Director"
              image="/placeholder.svg?height=80&width=80"
              company="Retail Chain Inc."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ClientSideWrapper>
        <section id="contact" className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 -z-10"></div>
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center opacity-10 mix-blend-overlay -z-10"></div>
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent -z-10"></div>

          <div className="container relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6 text-white animate-shine">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-white/80 text-lg mb-8 max-w-md">
                  Get in touch with our POS experts today and discover how we can help your business thrive with the
                  right POS solution.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="xl"
                    variant="secondary"
                    className="gap-2 rounded-full hover:bg-white hover:text-primary transition-all duration-300"
                  >
                    Book Paid Discovery Call <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button
                    size="xl"
                    variant="outline"
                    className="bg-transparent text-white border-white/20 hover:bg-white/10 rounded-full"
                  >
                    View Case Studies
                  </Button>
                </div>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-2xl">
                <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  Get Your Free Consultation
                </h3>
                <form className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label htmlFor="first-name" className="text-sm font-medium">
                        First Name
                      </label>
                      <Input
                        id="first-name"
                        className="rounded-lg border-gray-200 focus:border-primary focus:ring-primary/20"
                        placeholder="John"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="last-name" className="text-sm font-medium">
                        Last Name
                      </label>
                      <Input
                        id="last-name"
                        className="rounded-lg border-gray-200 focus:border-primary focus:ring-primary/20"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      className="rounded-lg border-gray-200 focus:border-primary focus:ring-primary/20"
                      placeholder="john.doe@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      className="rounded-lg border-gray-200 focus:border-primary focus:ring-primary/20"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="business-type" className="text-sm font-medium">
                      Business Type
                    </label>
                    <select
                      id="business-type"
                      defaultValue=""
                      className="flex h-10 w-full rounded-lg border border-gray-200 bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="" disabled>
                        Select your business type
                      </option>
                      <option value="retail">Retail</option>
                      <option value="restaurant">Restaurant</option>
                      <option value="hospitality">Hospitality</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[100px] w-full rounded-lg border border-gray-200 bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Tell us about your business needs..."
                    />
                  </div>
                  <Button
                    type="button"
                    className="w-full rounded-lg bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
                  >
                    Book Consultation
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </ClientSideWrapper>

      {/* Stats Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white -z-10"></div>

        <div className="container relative">
          <div className="text-center mb-12">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium mb-4 text-primary">
              OUR IMPACT
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent animate-gradient-x">
              Driving Business Success
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Our solutions have helped businesses across industries achieve remarkable results.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard value="500+" label="Businesses Served" icon={Globe} />
            <StatCard value="32%" label="Average Sales Increase" icon={BarChart3} />
            <StatCard value="45%" label="Faster Checkout Time" icon={Zap} />
            <StatCard value="98%" label="Customer Satisfaction" icon={Star} />
          </div>
        </div>
      </section>

      {/* Resources Preview Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              Resources
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
              Insights and Knowledge Hub
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our collection of case studies, whitepapers, and guides to enhance your POS knowledge and
              decision-making.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ResourceCard
              icon={FileText}
              title="Case Study: Retail Chain Transformation"
              description="Learn how a multi-location retail chain increased efficiency by 40% with our POS solution."
              link="/resources/case-studies/retail-chain-transformation"
            />
            <ResourceCard
              icon={BookOpen}
              title="Whitepaper: Future of POS Technology"
              description="Dive into the emerging trends and technologies shaping the future of point-of-sale systems."
              link="/resources/whitepapers/future-of-pos-technology"
            />
            <ResourceCard
              icon={FileCheck}
              title="SOP: Implementing a New POS System"
              description="Step-by-step guide for seamlessly integrating a new POS system into your business operations."
              link="/resources/sops/implementing-new-pos-system"
            />
          </div>

          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/resources">
                View All Resources <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

function ServiceCard({ icon: Icon, title, description }) {
  return (
    <Card>
      <CardHeader>
        <Icon className="w-10 h-10 text-primary mb-2" />
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  )
}

function ResourceCard({ icon: Icon, title, description, link }) {
  return (
    <Card>
      <CardHeader>
        <Icon className="w-10 h-10 text-primary mb-2" />
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Link href={link} className="text-primary group-hover:underline flex items-center">
          Read More <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  )
}

