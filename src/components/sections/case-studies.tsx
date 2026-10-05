import Link from "next/link";
import { ArrowRight, MapPin } from "@phosphor-icons/react/dist/ssr";
import { Card } from "@/components/ui/card";

const cases = [
  {
    country: "United States",
    project: "Pet Treat Production Line",
    scale: "500 kg/batch freeze drying system",
    description:
      "Complete turnkey lyophilization line for a premium pet food manufacturer in California. Integrated with existing packaging and QA systems.",
    image: "https://picsum.photos/seed/pet-food-factory/600/400",
  },
  {
    country: "Germany",
    project: "Pharmaceutical Stability Lab",
    scale: "12x humidity chamber installation",
    description:
      "ICH-compliant stability testing chambers for a leading European pharmaceutical CDMO. Validated per GMP with full documentation package.",
    image: "https://picsum.photos/seed/pharma-stability-lab/600/400",
  },
  {
    country: "Saudi Arabia",
    project: "Vaccine Cold Chain Hub",
    scale: "24x -86 degree C ULT freezers",
    description:
      "National vaccine storage facility equipped with cascade refrigeration systems, CO2 backup, and centralized monitoring across all units.",
    image: "https://picsum.photos/seed/vaccine-storage-facility/600/400",
  },
];

export function CaseStudies() {
  return (
    <section className="py-20 lg:py-28 border-t border-border/20">
      <div className="mx-auto max-w-[1400px] px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-16">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tighter text-foreground">
              Global Deployments
            </h2>
            <p className="mt-3 text-muted-foreground max-w-[56ch] leading-relaxed">
              Our equipment is trusted by food manufacturers, pharmaceutical companies,
              and research institutions across 64 countries.
            </p>
          </div>
          <Link
            href="/case-studies"
            className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors shrink-0"
          >
            View All Cases <ArrowRight weight="bold" className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-4 lg:gap-6">
          {cases.map((c) => (
            <Card
              key={c.project}
              className="overflow-hidden border-border/30 bg-card/30 hover:bg-card/60 hover:border-primary/20 transition-all duration-300"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={c.image}
                  alt={c.project}
                  className="w-full h-full object-cover opacity-60 hover:opacity-80 transition-opacity duration-500"
                />
                <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-md bg-background/80 backdrop-blur-sm border border-border/30 px-2.5 py-1">
                  <MapPin weight="fill" className="h-3 w-3 text-primary" />
                  <span className="text-xs text-foreground">{c.country}</span>
                </div>
              </div>
              <div className="p-4 lg:p-5">
                <h3 className="text-base font-semibold tracking-tight text-foreground">
                  {c.project}
                </h3>
                <p className="mt-1 text-xs text-primary font-medium">{c.scale}</p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {c.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
