"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { countries } from "@/lib/countries"

const businessTypes = [
  "Retail POS",
  "Restaurant POS",
  "Service Industry POS",
  "Hospitality POS",
  "Cafe POS",
  "Warehouse POS",
  "Other",
]

export function LeadCapturePopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState(countries[0])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 5000) // Show popup after 5 seconds

    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted")
    setIsOpen(false)
  }

  const handleCountryChange = (value: string) => {
    const country = countries.find((c) => c.code === value)
    if (country) {
      setSelectedCountry(country)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full relative">
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          <X size={24} />
        </button>
        <h2 className="text-2xl font-bold mb-4">Submit Your Interest</h2>
        <p className="mb-4">
          Let us know you're interested, and we'll provide a tailored POS solution for your business.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input placeholder="Full Name*" required />
          </div>
          <div>
            <Input type="email" placeholder="Email*" required />
          </div>
          <div>
            <Select onValueChange={handleCountryChange} defaultValue={selectedCountry.code}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Country*" />
              </SelectTrigger>
              <SelectContent>
                {countries.map((country) => (
                  <SelectItem key={country.code} value={country.code}>
                    {country.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex space-x-2">
            <div className="w-1/4">
              <Input value={selectedCountry.dialCode} readOnly />
            </div>
            <div className="flex-1">
              <Input type="tel" placeholder="Phone Number*" required />
            </div>
          </div>
          <div>
            <Select required>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Business Type*" />
              </SelectTrigger>
              <SelectContent>
                {businessTypes.map((type) => (
                  <SelectItem key={type} value={type.toLowerCase().replace(/\s+/g, "-")}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button type="submit" className="w-full">
            Request POS Information
          </Button>
        </form>
      </div>
    </div>
  )
}

