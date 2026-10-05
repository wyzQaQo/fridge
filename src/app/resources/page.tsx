export const dynamicParams = false;
import type { Metadata } from "next";
import Link from "next/link";
import { FileText, Download, BookOpen } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Resources",
  description: "Download product catalogs, datasheets, buying guides, and technical documentation for CryoMax industrial equipment.",
};

const resources = [
  {
    category: "Product Documentation",
    items: [
      { label: "Freeze Dryer Product Catalog (PDF)", href: "#" },
      { label: "ULT Freezer Datasheet (PDF)", href: "#" },
      { label: "Humidity Chamber Datasheet (PDF)", href: "#" },
    ],
  },
  {
    category: "Buying Guides",
    items: [
      { label: "How to Choose a Commercial Freeze Dryer", href: "#" },
      { label: "ULT Freezer Selection Guide", href: "#" },
      { label: "Capacity Calculation Guide", href: "#" },
    ],
  },
  {
    category: "Technical Resources",
    items: [
      { label: "Refrigerant Compliance Guide (EU & US)", href: "#" },
      { label: "Installation Requirements Checklist", href: "#" },
      { label: "Maintenance & Service Manual", href: "#" },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <div className="pt-24 lg:pt-32 pb-20 lg:pb-28">
      <div className="mx-auto max-w-[1400px] px-4 lg:px-8">
        <div className="mb-12 lg:mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tighter text-foreground">
            Resources
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-[64ch] leading-relaxed">
            Technical documentation, buying guides, and product catalogs to help you evaluate and specify CryoMax equipment.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {resources.map((section) => (
            <div key={section.category} className="rounded-xl border border-border/30 bg-card/30 p-5 lg:p-6">
              <h2 className="text-lg font-semibold tracking-tight text-foreground flex items-center gap-2 mb-4">
                <BookOpen weight="fill" className="h-5 w-5 text-primary" />
                {section.category}
              </h2>
              <ul className="space-y-3">
                {section.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="flex items-start gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <FileText weight="bold" className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-border/30 bg-card/30 p-6 lg:p-8 text-center">
          <Download weight="bold" className="h-8 w-8 text-primary mx-auto mb-3" />
          <h2 className="text-lg font-semibold text-foreground">Need Something Specific?</h2>
          <p className="mt-2 text-sm text-muted-foreground max-w-[48ch] mx-auto">
            Contact our team for CAD drawings, 3D models, and customized documentation packages.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-4 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            Contact Us &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
