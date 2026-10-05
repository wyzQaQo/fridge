import Link from "next/link";
import { ArrowRight, Factory, Flask, Pill, Dna } from "@phosphor-icons/react/dist/ssr";
import { Card } from "@/components/ui/card";
import { industries } from "@/data/industries";

const industryIcons: Record<string, React.ComponentType<{ className?: string; weight?: "fill" }>> = {
  "food-processing": Factory,
  pharmaceutical: Pill,
  "laboratory-research": Flask,
  biotech: Dna,
};

export function Industries() {
  return (
    <section className="py-20 lg:py-28 border-t border-border/20">
      <div className="mx-auto max-w-[1400px] px-4 lg:px-8">
        <div className="mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tighter text-foreground">
            Industries We Serve
          </h2>
          <p className="mt-3 text-muted-foreground max-w-[56ch] leading-relaxed">
            Our equipment is deployed across food processing, pharmaceutical manufacturing,
            laboratory research, and biotechnology facilities in 64 countries.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {industries.map((industry) => {
            const Icon = industryIcons[industry.slug] || Factory;
            return (
              <Link key={industry.slug} href={`/industries/${industry.slug}`} className="group">
                <Card className="relative overflow-hidden border-border/30 bg-card/50 hover:bg-card/80 hover:border-primary/30 transition-all duration-300 h-full">
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={industry.image}
                      alt={industry.name}
                      className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                    <div className="absolute top-3 left-3 flex h-8 w-8 items-center justify-center rounded-md bg-background/70 backdrop-blur-sm border border-border/20">
                      <Icon weight="fill" className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                  <div className="p-4 lg:p-5">
                    <h3 className="text-base font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors">
                      {industry.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      {industry.description}
                    </p>
                    <div className="mt-3 flex items-center gap-1 text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      Explore <ArrowRight weight="bold" className="h-3 w-3" />
                    </div>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
