import Link from "next/link";
import { ArrowRight, Cube } from "@phosphor-icons/react/dist/ssr";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden pt-16 lg:pt-[72px]">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] rounded-full bg-primary/8 blur-[100px]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-4 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Column */}
          <div className="flex flex-col gap-6 lg:gap-8">
            <Badge variant="secondary" className="w-fit text-xs tracking-wider rounded-md border-primary/20 text-primary bg-primary/10">
              INDUSTRIAL REFRIGERATION SYSTEMS
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.05] text-foreground">
              Precision Freeze Drying
              <br />
              <span className="text-primary">& Ultra-Low Temperature</span>
              <br />
              Equipment
            </h1>

            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-[48ch]">
              Engineered for food processing, pharmaceutical production, and laboratory research.
              Danfoss and Emerson compressor systems with PLC intelligent control. CE, FDA, and UL certified.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link href="/quote" className={cn(buttonVariants({ variant: "default", size: "lg" }), "rounded-md gap-2")}>
                Request Quote <ArrowRight weight="bold" className="h-4 w-4" />
              </Link>
              <Link href="/products" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "rounded-md")}>
                Explore Products
              </Link>
            </div>

            {/* Quick stats */}
            <div className="flex flex-wrap gap-6 pt-4 border-t border-border/50">
              {[
                { value: "64+", label: "Export Countries" },
                { value: "16yr", label: "Manufacturing" },
                { value: "ISO 9001", label: "Certified" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-lg font-bold text-foreground tracking-tight">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Column */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden border border-border/30 bg-card/50 aspect-[4/3]">
              <img
                src="https://picsum.photos/seed/cryogenic-equipment/800/600"
                alt="CryoMax industrial freeze drying equipment"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/60 via-transparent to-transparent" />

              {/* Floating spec cards */}
              <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                {[
                  { label: "Temp Range", value: "-86 degree C" },
                  { label: "Capacity", value: "Up to 2000 kg" },
                  { label: "Compressor", value: "Danfoss" },
                ].map((spec) => (
                  <div
                    key={spec.label}
                    className="flex-1 rounded-lg bg-background/80 backdrop-blur-sm border border-border/30 px-3 py-2"
                  >
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{spec.label}</div>
                    <div className="text-sm font-semibold text-foreground">{spec.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full border border-primary/20 bg-primary/5 flex items-center justify-center">
              <Cube weight="fill" className="h-8 w-8 text-primary/40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
