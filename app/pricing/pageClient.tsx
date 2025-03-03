"use client"

import type React from "react"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PricingPageClient() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Flexible Pricing for Your POS Needs</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          We offer customized pricing based on your specific requirements. Our focus is on providing value through
          expert consulting and seamless implementation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-2xl font-semibold mb-4">Our Pricing Approach</h2>
          <ul className="space-y-4">
            <PricingPoint>Tailored solutions for each client</PricingPoint>
            <PricingPoint>Pricing based on configuration and inventory volume</PricingPoint>
            <PricingPoint>Hardware and software licensing costs passed directly to you</PricingPoint>
            <PricingPoint>We charge for consulting and implementation services only</PricingPoint>
            <PricingPoint>Pricing starts from $299 and can go up to $5000 or more</PricingPoint>
            <PricingPoint>Final cost depends on required services and resources</PricingPoint>
          </ul>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-2xl font-semibold mb-4">What's Included</h2>
          <ul className="space-y-4">
            <PricingPoint>Expert POS system selection guidance</PricingPoint>
            <PricingPoint>Customized implementation strategy</PricingPoint>
            <PricingPoint>Integration with existing systems</PricingPoint>
            <PricingPoint>Staff training and onboarding</PricingPoint>
            <PricingPoint>Post-implementation support</PricingPoint>
            <PricingPoint>Ongoing consultation for system optimization</PricingPoint>
          </ul>
        </div>
      </div>

      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">How It Works</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
          We believe in transparency and providing solutions that fit your specific needs and budget. Here's our
          process:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProcessStep number={1} title="Paid Discovery Call">
            We start with a paid consultation to understand your business needs and POS requirements in depth.
          </ProcessStep>
          <ProcessStep number={2} title="Custom Quote">
            Based on your needs, we provide a detailed quote outlining all costs and services.
          </ProcessStep>
          <ProcessStep number={3} title="Implementation">
            Once approved, we proceed with the implementation, ensuring a smooth transition to your new POS system.
          </ProcessStep>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
          Book a paid discovery call today to discuss your business needs and receive a custom quote tailored to your
          requirements.
        </p>
        <Button size="lg" onClick={() => window.open("https://solvepos.setmore.com/", "_blank")}>
          Book a Paid Discovery Call
        </Button>
      </div>
    </div>
  )
}

function PricingPoint({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start">
      <CheckCircle className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" />
      <span>{children}</span>
    </li>
  )
}

function ProcessStep({ number, title, children }: { number: number; title: string; children: React.ReactNode }) {
  return (
    <div className="text-left">
      <div className="flex items-center mb-2">
        <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold mr-2">
          {number}
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-muted-foreground">{children}</p>
    </div>
  )
}

