import type { Metadata } from "next";
import Link from "next/link";
import { Snowflake, Thermometer, Drop } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";

const iconMap: Record<string, React.ComponentType<{ className?: string; weight?: "fill" }>> = {
  "freeze-dryer": Snowflake,
  "ultra-low-freezer": Thermometer,
  "humidity-chamber": Drop,
};

export const metadata: Metadata = {
  title: "Applications",
  description:
    "Explore how CryoMax equipment solves production challenges across food processing, pharmaceutical, laboratory, and biotech applications.",
};

const applications = [
  {
    title: "Pet Food Freeze Drying",
    description:
      "High-capacity lyophilization for premium pet treat manufacturing. Consistent batch quality with programmable recipes for different protein types and moisture targets.",
    image: "https://picsum.photos/seed/pet-food-freeze-drying/800/500",
    product: "freeze-dryer",
    href: "/applications/pet-food-freeze-drying",
  },
  {
    title: "Coffee Lyophilization",
    description:
      "Preserve volatile aromatic compounds with precision freeze drying cycles. Large-batch capacity for commercial coffee brands producing instant and specialty freeze-dried coffee.",
    image: "https://picsum.photos/seed/coffee-freeze-drying/800/500",
    product: "freeze-dryer",
    href: "/applications/coffee-lyophilization",
  },
  {
    title: "Vaccine Cold Storage",
    description:
      "Ultra-low temperature storage at -86 degree C for vaccine distribution and long-term preservation. Cascade refrigeration with CO2 backup and remote monitoring.",
    image: "https://picsum.photos/seed/vaccine-cold-storage/800/500",
    product: "ultra-low-freezer",
    href: "/applications/vaccine-storage",
  },
  {
    title: "Biological Sample Preservation",
    description:
      "Stable -80 degree C storage for cell lines, tissue samples, enzymes, and biological reagents. Validated temperature uniformity across all shelf positions.",
    image: "https://picsum.photos/seed/biological-sample-storage/800/500",
    product: "ultra-low-freezer",
    href: "/applications/biological-sample-storage",
  },
  {
    title: "Pharmaceutical Stability Testing",
    description:
      "ICH-compliant stability chambers for drug product shelf-life studies. Precision temperature and humidity control with full data logging and 21 CFR Part 11 compliance.",
    image: "https://picsum.photos/seed/pharma-stability-testing/800/500",
    product: "humidity-chamber",
    href: "/applications/pharma-stability-testing",
  },
  {
    title: "Electronic Component Reliability",
    description:
      "Environmental stress testing for electronic components and assemblies. Multi-step thermal cycling and humidity profiles per JEDEC and IEC standards.",
    image: "https://picsum.photos/seed/electronic-reliability-test/800/500",
    product: "humidity-chamber",
    href: "/applications/electronic-reliability",
  },
];

export default function ApplicationsPage() {
  return (
    <div className="pt-24 lg:pt-32 pb-20 lg:pb-28">
      <div className="mx-auto max-w-[1400px] px-4 lg:px-8">
        <div className="mb-12 lg:mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tighter text-foreground">
            Applications
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-[64ch] leading-relaxed">
            Discover how our equipment solves real production challenges. Each application page
            details the specific configuration, capacity, and compliance requirements for your industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {applications.map((app) => {
            const Icon = iconMap[app.product] || Snowflake;
            const productName = products.find((p) => p.slug === app.product)?.name || "";
            return (
              <Link
                key={app.href}
                href={app.href}
                className="group rounded-xl border border-border/30 bg-card/30 hover:bg-card/60 hover:border-primary/20 transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={app.image}
                    alt={app.title}
                    className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                  <div className="absolute top-3 left-3 flex h-8 w-8 items-center justify-center rounded-md bg-background/70 backdrop-blur-sm border border-border/20">
                    <Icon weight="fill" className="h-4 w-4 text-primary" />
                  </div>
                </div>
                <div className="p-4 lg:p-5">
                  <h3 className="text-base font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors">
                    {app.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {app.description}
                  </p>
                  <p className="mt-3 text-xs text-primary font-medium">{productName}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
