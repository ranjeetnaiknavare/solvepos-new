import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export const metadata: Metadata = {
  title: "Our Partners | SolvePOS",
  description: "Explore our trusted POS partners and find the perfect solution for your business needs.",
}

const partners = [
  {
    name: "Clover POS",
    logo: "https://www.clover.com/assets/images/public-site/press/clover_primary_gray_rgb.svg",
    industry: "Payment Processing & POS",
  },
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
    industry: "Retail & Restaurant POS",
  },
  {
    name: "Revel Systems",
    logo: "https://revelsystems.com/wp-content/themes/revel/assets/images/revel-logo-2x.png",
    industry: "Restaurant POS",
  },
  { name: "Erply", logo: "https://erply.com/wp-content/uploads/2020/04/erply-logo.svg", industry: "Retail POS" },
  {
    name: "Korona",
    logo: "https://www.koronapos.com/wp-content/uploads/2021/03/korona-logo.svg",
    industry: "Retail POS",
  },
  {
    name: "Tally Solutions",
    logo: "https://tallysolutions.com/wp-content/uploads/2022/08/tally-logo.svg",
    industry: "Accounting & ERP",
  },
  {
    name: "Aloha NCR",
    logo: "https://www.ncr.com/content/dam/ncrcom/content-type/logos/ncr-logo-black.svg",
    industry: "Restaurant POS",
  },
  {
    name: "ItsaCheckmate",
    logo: "https://www.itsacheckmate.com/wp-content/themes/itsacheckmate/images/logo.svg",
    industry: "Restaurant Integration",
  },
  { name: "QueueBuster", logo: "https://www.queuebuster.co/assets/img/logo.svg", industry: "Retail & Restaurant POS" },
  {
    name: "Zebra",
    logo: "https://www.zebra.com/content/dam/zebra_new_ia/en-us/images/logo/zebra-logo-black.svg",
    industry: "Hardware & Mobile Computing",
  },
]

export default function PartnersPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Trusted Partners</h1>
      <p className="text-xl text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
        We've partnered with leading POS providers to offer you the best solutions for your business needs.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <TooltipProvider>
          {partners.map((partner) => (
            <Tooltip key={partner.name}>
              <TooltipTrigger asChild>
                <Link href={`/partners/${partner.name.toLowerCase().replace(/\s+/g, "-")}`} className="group">
                  <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 group-hover:shadow-lg">
                    <div className="h-20 flex items-center justify-center mb-4">
                      <Image
                        src={partner.logo || "/placeholder.svg"}
                        alt={`${partner.name} logo`}
                        width={150}
                        height={80}
                        className="max-h-full w-auto object-contain"
                      />
                    </div>
                    <h3 className="text-center font-semibold group-hover:text-primary transition-colors duration-300">
                      {partner.name}
                    </h3>
                  </div>
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{partner.industry}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </div>
    </div>
  )
}

