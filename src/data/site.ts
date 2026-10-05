export const SITE = {
  name: "CryoMax Industrial",
  tagline: "Precision Refrigeration & Environmental Control",
  description:
    "CryoMax Industrial designs and manufactures commercial freeze dryers, ultra-low temperature freezers, and environmental test chambers for food processing, pharmaceutical, and laboratory applications worldwide.",
  url: "https://cryomax-industrial.com",
  ogImage: "/og-image.jpg",
  founded: 2008,
  stats: {
    factorySqm: 28000,
    employees: 320,
    exportCountries: 64,
    annualCapacity: 1200,
    certifications: ["ISO 9001", "ISO 13485", "CE", "FDA", "UL", "RoHS"],
  },
  contact: {
    email: "inquiry@cryomax-industrial.com",
    phone: "+86-21-5888-6000",
    whatsapp: "+8613812345678",
    address: "No. 888, Keji Road, Zhangjiang Hi-Tech Park, Shanghai 201203, China",
  },
  social: {
    linkedin: "https://linkedin.com/company/cryomax-industrial",
    youtube: "https://youtube.com/@cryomax-industrial",
  },
} as const;

export const NAV_ITEMS = [
  { label: "Products", href: "/products" },
  { label: "Applications", href: "/applications" },
  { label: "Industries", href: "/industries" },
  { label: "Technology", href: "/technology" },
  { label: "Resources", href: "/resources" },
  { label: "OEM", href: "/oem" },
  { label: "Catalog", href: "/catalog" },
  { label: "Contact", href: "/contact" },
] as const;

export const FOOTER_COLUMNS = [
  {
    title: "Products",
    links: [
      { label: "Freeze Dryers", href: "/products/freeze-dryer" },
      { label: "Ultra-Low Freezers", href: "/products/ultra-low-freezer" },
      { label: "Humidity Chambers", href: "/products/humidity-chamber" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Food Processing", href: "/industries/food-processing" },
      { label: "Pharmaceutical", href: "/industries/pharmaceutical" },
      { label: "Laboratory Research", href: "/industries/laboratory-research" },
      { label: "Biotechnology", href: "/industries/biotech" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Product Catalog", href: "/catalog" },
      { label: "Buying Guides", href: "/resources" },
      { label: "Technical Docs", href: "/resources" },
      { label: "Case Studies", href: "/case-studies" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "OEM Customization", href: "/oem" },
      { label: "Request Quote", href: "/quote" },
      { label: "Technical Support", href: "/contact" },
      { label: "Spare Parts", href: "/contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Factory Tour", href: "/factory" },
      { label: "Certifications", href: "/certificates" },
      { label: "Contact", href: "/contact" },
    ],
  },
] as const;
