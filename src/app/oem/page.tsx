export const dynamicParams = false;
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Wrench, Shield, Package, Gear, CheckCircle } from "@phosphor-icons/react/dist/ssr";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "OEM & Customization",
  description:
    "Custom-engineered freeze dryers, ULT freezers, and environmental chambers with your choice of Danfoss, Secop, Embraco, Copeland, and other international compressor brands. Full OEM service from design to delivery.",
};

const compressorBrands = [
  {
    name: "Danfoss",
    logo: "🇩🇰",
    country: "Denmark",
    description:
      "Global leader in refrigeration compressors. Danfoss Optyma and Maneurop reciprocating compressors offer industry-leading reliability with worldwide service network coverage. Standard on all CryoMax freeze dryer products.",
    models: ["Optyma Plus", "Maneurop MT/MTZ", "Danfoss Scroll"],
    bestFor: "Freeze Dryers, Medium-Low Temp Applications",
  },
  {
    name: "Secop",
    logo: "🇩🇪",
    country: "Germany",
    description:
      "Formerly Danfoss Compressors division, Secop specializes in hermetic compressors for commercial and medical refrigeration. Exceptional efficiency for ultra-low temperature cascade systems.",
    models: ["DL/SC Series", "TLV ULT Cascade", "BD Micro Compressors"],
    bestFor: "Ultra-Low Freezers (-86°C), Laboratory Equipment",
  },
  {
    name: "Embraco",
    logo: "🇧🇷",
    country: "Brazil (Nidec Global)",
    description:
      "World's largest hermetic compressor manufacturer. Embraco compressors deliver excellent cost-performance ratio with strong presence in food service and pharmaceutical cold chain markets.",
    models: ["EM/EMX Series", "NEU/NJ Series", "VEG/VEM Variable Speed"],
    bestFor: "Medium-Temp Chambers, Commercial Refrigeration",
  },
  {
    name: "Copeland (Emerson)",
    logo: "🇺🇸",
    country: "United States",
    description:
      "Copeland Scroll compressors from Emerson are the gold standard for industrial refrigeration. Patented scroll technology delivers superior efficiency, reliability, and quiet operation for demanding continuous-duty applications.",
    models: ["Copeland Scroll ZB/ZS", "Copeland Stream", "Copeland Discus"],
    bestFor: "Large Industrial Freeze Dryers, Heavy-Duty Applications",
  },
  {
    name: "Tecumseh",
    logo: "🇺🇸",
    country: "United States",
    description:
      "Legacy compressor brand with comprehensive product line covering fractional to 6HP applications. Cost-effective option with solid reliability and global parts availability.",
    models: ["AE/AJ Series", "CAJ/TAJ Series", "FH2 Series"],
    bestFor: "Small to Medium Chambers, Budget-Conscious Projects",
  },
  {
    name: "Bitzer",
    logo: "🇩🇪",
    country: "Germany",
    description:
      "Premium German engineering for large industrial refrigeration. Bitzer ECOLINE reciprocating and screw compressors are specified for the largest freeze drying installations requiring maximum capacity and durability.",
    models: ["ECOLINE Recip", "CSH Screw", "OS Series"],
    bestFor: "Large-Scale Industrial Projects, 24/7 Production Lines",
  },
];

const oemCapabilities = [
  {
    icon: Gear,
    title: "Compressor Selection",
    description:
      "Choose from 6+ international brands — Danfoss, Secop, Embraco, Copeland, Tecumseh, Bitzer, and more. We configure the optimal compressor match for your temperature range and duty cycle.",
  },
  {
    icon: Shield,
    title: "Compliance Customization",
    description:
      "Region-specific certifications included: CE (EU), FDA 21 CFR Part 11 (US), UL (North America), EAC (Russia/Eurasia), SASO (Saudi Arabia), INMETRO (Brazil), NRCS (South Africa).",
  },
  {
    icon: Package,
    title: "Full OEM Service",
    description:
      "From private-label branding and custom color/finish to electrical configuration (110V/220V/380V/480V, 50Hz/60Hz) and language-localized control interfaces. We handle the complete OEM process.",
  },
  {
    icon: Wrench,
    title: "After-Sales Support",
    description:
      "Worldwide spare parts availability through our compressor partners' global service networks. Technical documentation in your language. Remote diagnostic support available.",
  },
];

const oemProcess = [
  { step: "01", title: "Requirements Review", desc: "Share your specifications: capacity, temperature range, target application, compliance requirements, and budget." },
  { step: "02", title: "Component Selection", desc: "Our engineers select and propose the optimal compressor, control system, and accessory configuration." },
  { step: "03", title: "Design Approval", desc: "Review 3D layout drawings and technical datasheet. Approve final specifications and branding requirements." },
  { step: "04", title: "Production & QC", desc: "Dedicated production line with in-process quality checks. Full FAT (Factory Acceptance Testing) before shipment." },
  { step: "05", title: "Shipping & Commissioning", desc: "Global logistics with full insurance. Remote or on-site commissioning support available." },
];

export default function OEMPage() {
  return (
    <div className="pt-24 lg:pt-32 pb-20 lg:pb-28">
      <div className="mx-auto max-w-[1400px] px-4 lg:px-8">
        {/* Hero */}
        <div className="mb-16 lg:mb-24">
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tighter text-foreground">
            OEM &amp; Customization
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-[64ch] leading-relaxed">
            Every CryoMax system can be custom-engineered to your exact specifications.
            Choose your compressor brand, control system, compliance certifications, and branding.
            We deliver turn-key OEM solutions from design to commissioning.
          </p>
          <div className="mt-6">
            <Link href="/quote" className={cn(buttonVariants({ variant: "default", size: "lg" }), "rounded-md gap-2")}>
              Start Your OEM Project <ArrowRight weight="bold" className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* OEM Process */}
        <section className="mb-16 lg:mb-24">
          <h2 className="text-2xl lg:text-3xl font-bold tracking-tighter mb-8">OEM Process</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {oemProcess.map((step) => (
              <div key={step.step} className="rounded-xl border border-border/30 bg-card/30 p-5 relative">
                <div className="text-3xl font-bold text-primary/20 tabular-nums">{step.step}</div>
                <h3 className="mt-2 text-base font-semibold text-foreground">{step.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* OEM Capabilities */}
        <section className="mb-16 lg:mb-24">
          <h2 className="text-2xl lg:text-3xl font-bold tracking-tighter mb-8">Customization Capabilities</h2>
          <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
            {oemCapabilities.map((cap) => (
              <div key={cap.title} className="rounded-xl border border-border/30 bg-card/30 p-5 lg:p-6">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20">
                    <cap.icon weight="fill" className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground">{cap.title}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{cap.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Compressor Brands */}
        <section className="mb-16 lg:mb-24">
          <h2 className="text-2xl lg:text-3xl font-bold tracking-tighter mb-3">
            International Compressor Brands
          </h2>
          <p className="text-muted-foreground mb-8 max-w-[56ch] leading-relaxed">
            Every CryoMax system is built on world-class compressor platforms. You specify the brand — we engineer the integration.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {compressorBrands.map((brand) => (
              <div
                key={brand.name}
                className="rounded-xl border border-border/30 bg-card/30 hover:bg-card/60 hover:border-primary/20 transition-all duration-300 p-5 lg:p-6"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg">{brand.logo}</span>
                  <h3 className="text-lg font-semibold text-foreground">{brand.name}</h3>
                  <span className="text-[10px] text-muted-foreground ml-auto">{brand.country}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  {brand.description}
                </p>
                <div className="space-y-1.5">
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Key Models</p>
                  <div className="flex flex-wrap gap-1.5">
                    {brand.models.map((m) => (
                      <span key={m} className="text-[11px] px-2 py-0.5 rounded-sm bg-secondary text-muted-foreground">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-border/20">
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Best For</p>
                  <p className="text-xs text-primary font-medium mt-0.5">{brand.bestFor}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Additional Brands Callout */}
        <section className="mb-16 lg:mb-24 rounded-2xl border border-border/30 bg-card/40 p-6 lg:p-10">
          <div className="flex items-start gap-4">
            <CheckCircle weight="fill" className="h-6 w-6 text-primary mt-1 shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-foreground">Don't See Your Preferred Brand?</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                We can also integrate Panasonic, LG, Hitachi, Sanyo, Cubigel, Huayi, and other regional brands
                based on your target market and service preferences. Contact our engineering team to discuss
                your specific requirements.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Panasonic", "LG", "Hitachi", "Sanyo", "Cubigel", "Huayi", "Donper", "Wanbao"].map((b) => (
                  <span key={b} className="text-[11px] px-2.5 py-1 rounded-sm border border-border/30 text-muted-foreground">
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-2xl border border-border/30 bg-card/40 p-8 lg:p-12 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold tracking-tighter">
            Ready to start your OEM project?
          </h2>
          <p className="mt-3 text-muted-foreground max-w-[48ch] mx-auto leading-relaxed">
            Tell us your requirements and preferred compressor brand. Our engineering team will provide
            a detailed proposal within 24 hours.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <Link href="/quote" className={cn(buttonVariants({ variant: "default", size: "lg" }), "rounded-md gap-2")}>
              Request OEM Quote <ArrowRight weight="bold" className="h-4 w-4" />
            </Link>
            <Link href="/catalog" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "rounded-md")}>
              View Product Catalog
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
