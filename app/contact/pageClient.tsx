"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Clock, Send, ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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

export default function ContactPageClient() {
  const [selectedCountry, setSelectedCountry] = useState(countries[0])

  const handleCountryChange = (value: string) => {
    const country = countries.find((c) => c.code === value)
    if (country) {
      setSelectedCountry(country)
    }
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
        Get in Touch
      </h1>
      <p className="text-xl text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
        We're here to help you find the perfect POS solution for your business. Reach out to us and let's start a
        conversation.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">Send Us a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="first-name" className="text-sm font-medium text-gray-700">
                    First Name*
                  </label>
                  <Input id="first-name" placeholder="John" required />
                </div>
                <div>
                  <label htmlFor="last-name" className="text-sm font-medium text-gray-700">
                    Last Name*
                  </label>
                  <Input id="last-name" placeholder="Doe" required />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email*
                  </label>
                  <Input id="email" type="email" placeholder="john.doe@example.com" required />
                </div>
                <div>
                  <label htmlFor="company" className="text-sm font-medium text-gray-700">
                    Company Name
                  </label>
                  <Input id="company" placeholder="Your Company Name" />
                </div>
              </div>
              <div>
                <label htmlFor="country" className="text-sm font-medium text-gray-700">
                  Country*
                </label>
                <Select onValueChange={handleCountryChange} defaultValue={selectedCountry.code}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Country" />
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
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label htmlFor="country-code" className="text-sm font-medium text-gray-700">
                    Country Code
                  </label>
                  <Input id="country-code" value={selectedCountry.dialCode} readOnly />
                </div>
                <div className="col-span-2">
                  <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                    Phone Number*
                  </label>
                  <Input id="phone" type="tel" placeholder="(555) 000-0000" required />
                </div>
              </div>
              <div>
                <label htmlFor="business-type" className="text-sm font-medium text-gray-700">
                  Business Type*
                </label>
                <Select required>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select your business type" />
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
              <div>
                <label htmlFor="message" className="text-sm font-medium text-gray-700">
                  Message*
                </label>
                <Textarea id="message" placeholder="How can we help you?" required className="min-h-[100px]" />
              </div>
              <Button type="submit" className="w-full">
                Send Message <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span>info@solvepos.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span>123 POS Street, Tech City, 12345</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold">Business Hours</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-primary" />
                <span>Monday - Friday: 9:00 AM - 6:00 PM</span>
              </div>
              <div className="pl-8">Saturday: 10:00 AM - 4:00 PM</div>
              <div className="pl-8">Sunday: Closed</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-primary to-purple-600 text-white">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Ready to Get Started?</h3>
              <p className="mb-4">
                Book a discovery call with our POS experts and find the perfect solution for your business.
              </p>
              <Button
                variant="secondary"
                className="w-full"
                onClick={() => window.open("https://solvepos.setmore.com/", "_blank")}
              >
                Book a Discovery Call <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

