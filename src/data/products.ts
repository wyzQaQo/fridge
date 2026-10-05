export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductFeature {
  title: string;
  description: string;
}

export interface Product {
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  heroImage: string;
  specs: ProductSpec[];
  features: ProductFeature[];
  applications: string[];
  faqs: { q: string; a: string }[];
}

export const products: Product[] = [
  {
    slug: "freeze-dryer",
    name: "Commercial Freeze Dryer",
    subtitle: "Industrial Lyophilization Systems for Food & Pharmaceutical Production",
    description:
      "CryoMax industrial freeze dryers deliver precision lyophilization for large-scale food processing, pet treat manufacturing, coffee production, and pharmaceutical applications. Engineered with Danfoss and Emerson compressor systems for reliable 24/7 operation.",
    heroImage: "https://picsum.photos/seed/freeze-dryer-industrial/1200/600",
    specs: [
      { label: "Shelf Area", value: "1 - 50 m2" },
      { label: "Shelf Temperature", value: "-55 degree C to +70 degree C" },
      { label: "Condenser Temperature", value: "-75 degree C" },
      { label: "Ultimate Vacuum", value: "less than or equal to 2.7 Pa" },
      { label: "Compressor Brand", value: "Danfoss / Emerson" },
      { label: "Control System", value: "PLC + HMI Touchscreen" },
      { label: "Refrigerant", value: "R404A / R507 (EU & US Compliant)" },
      { label: "Shelf Material", value: "SUS 316L Stainless Steel" },
    ],
    features: [
      {
        title: "Danfoss / Emerson Compressor",
        description:
          "Industry-leading compressor systems ensure stable ultra-low temperatures and energy-efficient operation over extended production cycles.",
      },
      {
        title: "PLC Intelligent Control",
        description:
          "Programmable logic controller with HMI touchscreen enables precise recipe management, real-time monitoring, and data logging for GMP compliance.",
      },
      {
        title: "SIP / CIP Compatible",
        description:
          "Steam-in-place and clean-in-place ready design meets pharmaceutical-grade hygiene requirements with full stainless steel construction.",
      },
      {
        title: "Modular Shelf Design",
        description:
          "Configurable shelf spacing and quantity adapt to diverse product sizes, from bulk food trays to pharmaceutical vials.",
      },
    ],
    applications: [
      "Pet Food Freeze Drying",
      "Coffee Lyophilization",
      "Fruit & Vegetable Processing",
      "Pharmaceutical API Drying",
      "Probiotic Preservation",
      "Floral Preservation",
    ],
    faqs: [
      {
        q: "What is the typical production capacity?",
        a: "Production capacity ranges from 10 kg to 2000 kg per batch depending on model configuration. Our engineering team helps size the right system based on your product type, moisture content, and desired throughput.",
      },
      {
        q: "Which compressor brands do you use?",
        a: "We standardize on Danfoss and Emerson compressors for reliability and global service availability. Customers can specify their preferred brand during RFQ submission.",
      },
      {
        q: "Are your freeze dryers CE and FDA compliant?",
        a: "Yes. All CryoMax freeze dryers are CE certified, and we offer FDA 21 CFR Part 11 compliant control systems for pharmaceutical applications.",
      },
    ],
  },
  {
    slug: "ultra-low-freezer",
    name: "-80 degree C Ultra-Low Temperature Freezer",
    subtitle: "Medical & Laboratory Deep Freezing Equipment",
    description:
      "CryoMax ultra-low temperature freezers provide reliable -80 degree C storage for biological samples, vaccines, enzymes, and pharmaceutical products. Available in upright and chest configurations with advanced cascade refrigeration technology.",
    heroImage: "https://picsum.photos/seed/ultra-low-freezer-lab/1200/600",
    specs: [
      { label: "Temperature Range", value: "-40 degree C to -86 degree C" },
      { label: "Capacity", value: "100L - 830L" },
      { label: "Temperature Uniformity", value: "plus or minus 2 degree C" },
      { label: "Compressor", value: "Cascade Danfoss / Secop" },
      { label: "Insulation", value: "VIP + PU Foam (130mm)" },
      { label: "Controller", value: "Microprocessor PID with RS485" },
      { label: "Alarm System", value: "Audible + Visual + Remote SMS/Email" },
      { label: "Backup System", value: "CO2 / LN2 Backup Optional" },
    ],
    features: [
      {
        title: "Cascade Refrigeration",
        description:
          "Two-stage cascade system with Danfoss/Secop compressors achieves rapid pull-down and stable -86 degree C holding with minimal energy consumption.",
      },
      {
        title: "VIP + PU Insulation",
        description:
          "Vacuum insulation panels combined with polyurethane foam provide superior thermal performance in a thinner wall profile, maximizing internal storage volume.",
      },
      {
        title: "Multi-Level Safety",
        description:
          "Independent temperature monitoring with audible/visual alarms, SMS/email remote alert, and optional CO2/LN2 backup injection for sample protection.",
      },
      {
        title: "Data Logging & Connectivity",
        description:
          "Built-in USB data export and RS485/ethernet connectivity for 21 CFR Part 11 compliant monitoring and laboratory information system integration.",
      },
    ],
    applications: [
      "Vaccine Storage",
      "Biological Sample Preservation",
      "Enzyme & Reagent Storage",
      "Plasma & Blood Product Storage",
      "Cell Line Banking",
      "Clinical Trial Materials",
    ],
    faqs: [
      {
        q: "How long does it take to reach -80 degree C from ambient?",
        a: "Typical pull-down time is 3-5 hours depending on ambient temperature and load. The cascade refrigeration system is optimized for rapid initial cooling and fast door-opening recovery.",
      },
      {
        q: "What backup options are available?",
        a: "We offer CO2 and LN2 backup injection systems that automatically activate if temperature rises above the set alarm threshold. UPS power backup is also available.",
      },
    ],
  },
  {
    slug: "humidity-chamber",
    name: "Constant Temperature & Humidity Chamber",
    subtitle: "Environmental Test Chambers for Stability & Reliability Testing",
    description:
      "CryoMax environmental test chambers deliver precise temperature and humidity control for pharmaceutical stability testing, electronic component reliability, and material aging studies. Programmable multi-step profiles with data logging.",
    heroImage: "https://picsum.photos/seed/humidity-chamber-lab/1200/600",
    specs: [
      { label: "Temperature Range", value: "-40 degree C to +150 degree C" },
      { label: "Humidity Range", value: "20 percent to 98 percent RH" },
      { label: "Temperature Fluctuation", value: "plus or minus 0.5 degree C" },
      { label: "Humidity Fluctuation", value: "plus or minus 2.5 percent RH" },
      { label: "Capacity", value: "80L - 1000L" },
      { label: "Controller", value: "7 inch Touchscreen PLC" },
      { label: "Refrigerant", value: "R449A (Low GWP, EU Compliant)" },
      { label: "Construction", value: "SUS 304 Interior / Powder Coat Exterior" },
    ],
    features: [
      {
        title: "Precision PID Control",
        description:
          "Advanced PID algorithm with PT100 sensors delivers unmatched temperature and humidity stability for ICH-compliant pharmaceutical stability testing.",
      },
      {
        title: "Programmable Profiles",
        description:
          "Store up to 100 multi-step programs with ramp/soak segments. Ideal for accelerated aging, thermal cycling, and custom test protocols.",
      },
      {
        title: "Uniform Air Distribution",
        description:
          "Optimized airflow design ensures temperature uniformity across all shelf positions, validated per IEC 60068 standards.",
      },
      {
        title: "Water Management System",
        description:
          "Automatic water supply with DI water compatibility and condensate management for continuous long-duration testing without interruption.",
      },
    ],
    applications: [
      "Pharmaceutical Stability Testing",
      "Electronic Component Reliability",
      "Material Aging Studies",
      "Food Shelf Life Testing",
      "Automotive Component Testing",
      "Packaging Validation",
    ],
    faqs: [
      {
        q: "What standards do your chambers comply with?",
        a: "Our chambers meet ICH Q1A guidelines for pharmaceutical stability testing, IEC 60068 for environmental testing, and ASTM D4332 for conditioning containers and packages.",
      },
      {
        q: "Can the chamber run continuous long-duration tests?",
        a: "Yes. The automatic water management and robust compressor systems are designed for uninterrupted 365-day operation. All chambers include over-temperature protection and power-failure auto-restart.",
      },
    ],
  },
];
