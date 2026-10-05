import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Factory, Pill, Flask, Dna } from "@phosphor-icons/react/dist/ssr";
import { Card } from "@/components/ui/card";
import { industries } from "@/data/industries";
import { products } from "@/data/products";

const industryIcons: Record<string, React.ComponentType<{ className?: string; weight?: "fill" }>> = {
  "food-processing": Factory,
  pharmaceutical: Pill,
  "laboratory-research": Flask,
  biotech: Dna,
};

export const metadata: Metadata = {
  title: "Industries",
  description: "CryoMax equipment serves food processing, pharmaceutical, laboratory research, and biotechnology industries in 64 countries worldwide.",
};

export default function IndustriesPage() {
  return (
    <div className="pt-24 lg:pt-32 pb-20 lg:pb-28">
      <div className="mx-auto max-w-[1400px] px-4 lg:px-8">
        <div className="mb-12 lg:mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tighter text-foreground">
            Industries
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-[64ch] leading-relaxed">
            Our industrial refrigeration and environmental control solutions serve diverse industries with specialized equipment configurations and compliance packages.
          </p>
        </div>

        <div className="space-y-12 lg:space-y-20">
          {industries.map((industry, i) => {
            const Icon = industryIcons[industry.slug] || Factory;
            const relatedProductNames = industry.relatedProducts
              .map((slug) => products.find((p) => p.slug === slug)?.name)
              .filter(Boolean);
            return (
              <div
                key={industry.slug}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  i % 2 === 1 ? "lg:[direction:rtl]" : ""
                }`}
              >
                <div className={i % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                  <div className="relative rounded-2xl overflow-hidden border border-border/30 aspect-[4/3]">
                    <img
                      src={industry.image}
                      alt={industry.name}
                      className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-background/40 via-transparent to-transparent" />
                  </div>
                </div>
                <div className={i % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                  <div className="flex items-center gap-3 mb-3">
                    <Icon weight="fill" className="h-6 w-6 text-primary" />
                    <h2 className="text-2xl lg:text-3xl font-bold tracking-tighter text-foreground">
                      {industry.name}
                    </h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{industry.description}</p>
                  {relatedProductNames.length > 0 && (
                    <div className="mt-4">
                      <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Related Equipment</p>
                      <div className="flex flex-wrap gap-2">
                        {relatedProductNames.map((name) => (
                          <span key={name} className="text-xs px-2.5 py-1 rounded-sm bg-primary/10 text-primary">
                            {name}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  <div className="mt-6">
                    <Link
                      href={`/industries/${industry.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      View Industry Details <ArrowRight weight="bold" className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
