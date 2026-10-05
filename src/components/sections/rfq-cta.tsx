import Link from "next/link";
import { ArrowRight, FileText, Envelope } from "@phosphor-icons/react/dist/ssr";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function RFQCTA() {
  return (
    <section className="py-20 lg:py-28 border-t border-border/20">
      <div className="mx-auto max-w-[1400px] px-4 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-border/30 bg-card/50">
          {/* Background pattern */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-primary/3 blur-[80px]" />
          </div>

          <div className="relative grid lg:grid-cols-2 gap-8 lg:gap-12 items-center p-8 lg:p-16">
            {/* Left: CTA Copy */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tighter text-foreground">
                Ready to discuss your requirements?
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed max-w-[48ch]">
                Our engineering team will review your specifications and provide a customized
                proposal within 24 hours. Include your capacity requirements, target application,
                and any compliance needs.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/quote" className={cn(buttonVariants({ variant: "default", size: "lg" }), "rounded-md gap-2")}>
                  Request a Quote <ArrowRight weight="bold" className="h-4 w-4" />
                </Link>
                <a href="mailto:inquiry@cryomax-industrial.com" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "rounded-md gap-2")}>
                  <Envelope weight="bold" className="h-4 w-4" /> Email Inquiry
                </a>
              </div>
            </div>

            {/* Right: Resource Links */}
            <div className="lg:border-l lg:border-border/30 lg:pl-12">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                Helpful Resources
              </h3>
              <div className="space-y-3">
                {[
                  { label: "Freeze Dryer Buying Guide", href: "/resources/buying-guide-freeze-dryer" },
                  { label: "How to Choose a ULT Freezer", href: "/resources/how-to-choose-80c-freezer" },
                  { label: "Capacity Calculation Guide", href: "/resources/capacity-calculation-guide" },
                  { label: "Download Product Catalog (PDF)", href: "/resources" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
                  >
                    <FileText weight="bold" className="h-4 w-4 text-primary shrink-0" />
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
