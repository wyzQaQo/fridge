export const dynamicParams = false;
import type { Metadata } from "next";
import { Download } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { catalogPages } from "@/data/catalog-pages";

export const metadata: Metadata = {
  title: "Product Catalog — Arsenbo 2026",
  description:
    "Browse the complete Arsenbo 2026 product catalog featuring freeze dryers, ultra-low temperature freezers, and environmental test chambers. 53-page comprehensive equipment guide.",
};

export default function CatalogPage() {
  return (
    <div className="pt-24 lg:pt-32 pb-20 lg:pb-28">
      <div className="mx-auto max-w-[1400px] px-4 lg:px-8">
        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
              <Download weight="fill" className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold tracking-tighter text-foreground">
                Product Catalog 2026
              </h1>
              <p className="text-sm text-primary font-medium mt-1">Arsenbo Equipment Line</p>
            </div>
          </div>
          <p className="text-lg text-muted-foreground max-w-[64ch] leading-relaxed mt-4">
            Browse our complete product catalog with detailed specifications, application guides,
            and technical diagrams. All equipment is available for OEM customization with your choice
            of international compressor brands and control systems.
          </p>

          {/* Quick Links */}
          <div className="flex flex-wrap gap-3 mt-6">
            <Link
              href="/oem"
              className="text-xs px-3 py-1.5 rounded-md border border-primary/20 text-primary bg-primary/10 hover:bg-primary/15 transition-colors"
            >
              OEM &amp; Customization →
            </Link>
            <Link
              href="/quote"
              className="text-xs px-3 py-1.5 rounded-md border border-border text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
            >
              Request Quote →
            </Link>
          </div>
        </div>

        {/* Catalog Gallery */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 lg:gap-6 space-y-4 lg:space-y-6">
          {catalogPages.map((page) => {
            const img = page.images[0];
            if (!img) return null;
            return (
              <div
                key={page.pageNumber}
                className="break-inside-avoid rounded-xl overflow-hidden border border-border/30 bg-card/30 hover:border-primary/20 transition-all duration-300 group"
              >
                <div className="relative">
                  <img
                    src={`/catalog/arsenbo/${img.filename}`}
                    alt={`Catalog page ${page.pageNumber}`}
                    loading="lazy"
                    className="w-full h-auto"
                  />
                  <div className="absolute top-2 right-2 rounded-md bg-background/80 backdrop-blur-sm border border-border/30 px-2 py-0.5">
                    <span className="text-[10px] text-muted-foreground tabular-nums">
                      {page.pageNumber} / {catalogPages.length}
                    </span>
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
