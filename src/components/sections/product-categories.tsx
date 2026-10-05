import Link from "next/link";
import { ArrowRight, Snowflake, Thermometer, Drop } from "@phosphor-icons/react/dist/ssr";
import { Card } from "@/components/ui/card";
import { products } from "@/data/products";

const productIcons = {
  "freeze-dryer": Snowflake,
  "ultra-low-freezer": Thermometer,
  "humidity-chamber": Drop,
} as const;

export function ProductCategories() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-4 lg:px-8">
        <div className="mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tighter text-foreground">
            Product Categories
          </h2>
          <p className="mt-3 text-muted-foreground max-w-[56ch] leading-relaxed">
            Three core product lines covering the full spectrum of industrial refrigeration and environmental control.
            Each system is custom-configured to your production requirements.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-3 gap-4 lg:gap-6">
          {products.map((product, i) => {
            const Icon = productIcons[product.slug as keyof typeof productIcons] || Snowflake;
            return (
              <Link key={product.slug} href={`/products/${product.slug}`} className="group">
                <Card
                  className={`relative overflow-hidden border-border/30 bg-card/50 hover:bg-card/80 hover:border-primary/30 transition-all duration-300 h-full ${
                    i === 0 ? "md:row-span-2 md:col-span-2" : ""
                  }`}
                >
                  {/* Image area */}
                  <div className={`relative overflow-hidden ${i === 0 ? "h-48 lg:h-56" : "h-40"}`}>
                    <img
                      src={product.heroImage}
                      alt={product.name}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                    <div className="absolute top-3 left-3 flex h-8 w-8 items-center justify-center rounded-md bg-background/70 backdrop-blur-sm border border-border/20">
                      <Icon weight="fill" className="h-4 w-4 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 lg:p-6">
                    <h3 className="text-lg lg:text-xl font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      {product.subtitle}
                    </p>

                    {/* Specs preview */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {product.specs.slice(0, 3).map((spec) => (
                        <span
                          key={spec.label}
                          className="text-[11px] px-2 py-0.5 rounded-sm bg-secondary text-muted-foreground"
                        >
                          {spec.value}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      View Details <ArrowRight weight="bold" className="h-3.5 w-3.5" />
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
