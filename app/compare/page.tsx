import { Button } from "@/components/ui/button"
import { CheckCircle, XCircle, Star } from "lucide-react"
import Image from "next/image"

export default function ComparePage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Compare Top POS Systems</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find the perfect POS solution by comparing features, pricing, and customer reviews
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="comparison-table">
            <thead>
              <tr>
                <th className="min-w-[200px]">POS System</th>
                <th className="min-w-[150px] text-center">Rating</th>
                <th className="min-w-[150px] text-center">Starting Price</th>
                <th className="min-w-[150px] text-center">Free Trial</th>
                <th className="min-w-[150px] text-center">Best For</th>
                <th className="min-w-[150px] text-center">Inventory Management</th>
                <th className="min-w-[150px] text-center">Customer Management</th>
                <th className="min-w-[150px] text-center">E-commerce Integration</th>
                <th className="min-w-[150px] text-center">Mobile App</th>
                <th className="min-w-[150px] text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  name: "Clover POS",
                  rating: 4.8,
                  reviews: 245,
                  price: "$59/mo",
                  freeTrial: "14 days",
                  bestFor: "Retail",
                  inventory: true,
                  customer: true,
                  ecommerce: true,
                  mobile: true,
                  image: "Clover",
                },
                {
                  name: "Square for Retail",
                  rating: 4.7,
                  reviews: 189,
                  price: "$69/mo",
                  freeTrial: "30 days",
                  bestFor: "Small Business",
                  inventory: true,
                  customer: true,
                  ecommerce: true,
                  mobile: true,
                  image: "Square",
                },
                {
                  name: "Lightspeed Retail",
                  rating: 4.6,
                  reviews: 156,
                  price: "$79/mo",
                  freeTrial: "14 days",
                  bestFor: "Multi-location",
                  inventory: true,
                  customer: true,
                  ecommerce: true,
                  mobile: true,
                  image: "Lightspeed",
                },
                {
                  name: "Toast POS",
                  rating: 4.5,
                  reviews: 132,
                  price: "$65/mo",
                  freeTrial: "7 days",
                  bestFor: "Restaurants",
                  inventory: true,
                  customer: true,
                  ecommerce: false,
                  mobile: true,
                  image: "Toast",
                },
                {
                  name: "Shopify POS",
                  rating: 4.4,
                  reviews: 178,
                  price: "$89/mo",
                  freeTrial: "14 days",
                  bestFor: "E-commerce",
                  inventory: true,
                  customer: true,
                  ecommerce: true,
                  mobile: true,
                  image: "Shopify",
                },
              ].map((system, index) => (
                <tr key={system.name} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td>
                    <div className="flex items-center">
                      <Image
                        src={`/placeholder.svg?height=40&width=40&text=${system.image}`}
                        alt={system.name}
                        width={40}
                        height={40}
                        className="w-10 h-10 mr-3 rounded"
                      />
                      <div>
                        <div className="font-medium">{system.name}</div>
                        <div className="text-sm text-gray-500">{system.reviews} reviews</div>
                      </div>
                    </div>
                  </td>
                  <td className="text-center">
                    <div className="flex items-center justify-center">
                      <span className="font-medium mr-1">{system.rating}</span>
                      <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    </div>
                  </td>
                  <td className="text-center font-medium">{system.price}</td>
                  <td className="text-center">{system.freeTrial}</td>
                  <td className="text-center">{system.bestFor}</td>
                  <td className="text-center">
                    {system.inventory ? (
                      <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-500 mx-auto" />
                    )}
                  </td>
                  <td className="text-center">
                    {system.customer ? (
                      <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-500 mx-auto" />
                    )}
                  </td>
                  <td className="text-center">
                    {system.ecommerce ? (
                      <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-500 mx-auto" />
                    )}
                  </td>
                  <td className="text-center">
                    {system.mobile ? (
                      <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-500 mx-auto" />
                    )}
                  </td>
                  <td className="text-center">
                    <Button variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50">
                      View Details
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 bg-orange-50 rounded-lg p-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Help Choosing the Right POS System?</h2>
            <p className="text-lg text-gray-700 mb-6">
              Our POS experts can provide personalized recommendations based on your specific business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-orange-600 hover:bg-orange-700">Talk to an Expert</Button>
              <Button variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-100">
                Take Our POS Quiz
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Choose the Right POS System</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Consider Your Business Type</h3>
              <p className="text-gray-700 mb-4">
                Different industries have different POS needs. Retail businesses need strong inventory management,
                restaurants need table management, and service businesses need appointment scheduling.
              </p>
              <p className="text-gray-700">
                Choose a POS system designed specifically for your industry or one that offers customizable features to
                meet your unique requirements.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Evaluate Essential Features</h3>
              <p className="text-gray-700 mb-4">
                Make a list of must-have features for your business. Consider inventory management, customer
                relationship management, reporting capabilities, and payment processing options.
              </p>
              <p className="text-gray-700">
                Also think about integration capabilities with your existing systems like accounting software or
                e-commerce platforms.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Consider Total Cost</h3>
              <p className="text-gray-700 mb-4">
                Look beyond the monthly subscription fee. Consider hardware costs, payment processing fees,
                implementation costs, and potential add-on features.
              </p>
              <p className="text-gray-700">
                A more expensive system might offer better value if it includes features that would cost extra with a
                cheaper alternative.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">POS System Comparison Checklist</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Basic Features</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-2" />
                    <span>User-friendly interface</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-2" />
                    <span>Inventory management</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-2" />
                    <span>Sales reporting and analytics</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-2" />
                    <span>Customer management</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-2" />
                    <span>Employee management</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-2">Advanced Considerations</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-2" />
                    <span>Integration capabilities</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-2" />
                    <span>Mobile accessibility</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-2" />
                    <span>Scalability for business growth</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-2" />
                    <span>Customer support quality</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-2" />
                    <span>Security features and compliance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

