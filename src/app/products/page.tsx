export const dynamicParams = false;
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Card } from "@/components/ui/card";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Commercial freeze dryers, ultra-low temperature freezers, and environmental test chambers for industrial applications.",
};

export default function ProductsPage() {
  return (
    <div className="pt-24 lg:pt-32 pb-20 lg:pb-28">
      <div className="mx-auto max-w-[1400px] px-4 lg:px-8">
        <div className="mb-12 lg:mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tighter text-foreground">
            Product Line
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-[64ch] leading-relaxed">
            Three core product families covering the complete spectrum of industrial refrigeration,
            lyophilization, and environmental control. Each system is engineered to order with your
            choice of compressor brand, control system, and compliance certification.
          </p>
        </div>

        <div className="space-y-12 lg:space-y-20">
          {products.map((product, i) => (
            <div
              key={product.slug}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                i % 2 === 1 ? "lg:[direction:rtl]" : ""
              }`}
            >
              {/* Image */}
              <div className={i % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                <div className="relative rounded-2xl overflow-hidden border border-border/30 aspect-[4/3]">
                  <img
                    src={product.heroImage}
                    alt={product.name}
                    className="w-full h-full object-cover opacity-70"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-background/40 via-transparent to-transparent" />
                </div>
              </div>

              {/* Content */}
              <div className={i % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                <h2 className="text-2xl lg:text-3xl font-bold tracking-tighter text-foreground">
                  {product.name}
                </h2>
                <p className="mt-2 text-sm text-primary font-medium">{product.subtitle}</p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  {product.description}
                </p>

                {/* Key Specs */}
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {product.specs.slice(0, 4).map((spec) => (
                    <div key={spec.label} className="rounded-lg bg-secondary/50 px-3 py-2">
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                        {spec.label}
                      </div>
                      <div className="text-sm font-medium text-foreground">{spec.value}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href={`/products/${product.slug}`}
                    className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    View Details <ArrowRight weight="bold" className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/quote"
                    className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
                  >
                    Request Quote
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
