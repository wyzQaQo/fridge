import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "@phosphor-icons/react/dist/ssr";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { products } from "@/data/products";
import { cn } from "@/lib/utils";

const product = products.find((p) => p.slug === "freeze-dryer")!;

export const metadata: Metadata = {
  title: "Commercial Freeze Dryer",
  description:
    "Industrial freeze drying systems for food, pet treat, and pharmaceutical production. Danfoss/Emerson compressors, PLC control, CE/FDA certified.",
  keywords: [
    "commercial freeze dryer",
    "industrial freeze dryer machine",
    "food freeze drying equipment",
    "lyophilizer machine",
    "freeze dryer for pet food",
  ],
};

export default function FreezeDryerPage() {
  return (
    <div className="pt-24 lg:pt-32 pb-20 lg:pb-28">
      {/* Hero */}
      <section className="mx-auto max-w-[1400px] px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16 lg:mb-24">
          <div>
            <Badge variant="secondary" className="w-fit text-xs tracking-wider rounded-md border-primary/20 text-primary bg-primary/10 mb-4">
              PRODUCT LINE
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-[1.05] text-foreground">
              Commercial Freeze Dryer
            </h1>
            <p className="mt-2 text-primary font-medium">{product.subtitle}</p>
            <p className="mt-6 text-muted-foreground leading-relaxed">{product.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/quote" className={cn(buttonVariants({ variant: "default", size: "lg" }), "rounded-md gap-2")}>
                Request Quote <ArrowRight weight="bold" className="h-4 w-4" />
              </Link>
              <a href="/resources" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "rounded-md")}>
                Download Datasheet
              </a>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden border border-border/30 aspect-[4/3]">
            <img
              src={product.heroImage}
              alt="Commercial freeze dryer"
              className="w-full h-full object-cover opacity-70"
            />
          </div>
        </div>

        {/* Features */}
        <section className="mb-16 lg:mb-24">
          <h2 className="text-2xl lg:text-3xl font-bold tracking-tighter mb-8">Key Features</h2>
          <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
            {product.features.map((f) => (
              <Card key={f.title} className="border-border/30 bg-card/40 p-5 lg:p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle weight="fill" className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <h3 className="text-base font-semibold text-foreground">{f.title}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                      {f.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Specifications */}
        <section className="mb-16 lg:mb-24">
          <h2 className="text-2xl lg:text-3xl font-bold tracking-tighter mb-8">
            Technical Specifications
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-border/20 rounded-xl overflow-hidden">
            {product.specs.map((spec) => (
              <div key={spec.label} className="bg-card/50 px-4 lg:px-6 py-4">
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">
                  {spec.label}
                </div>
                <div className="text-sm font-medium text-foreground">{spec.value}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Applications */}
        <section className="mb-16 lg:mb-24">
          <h2 className="text-2xl lg:text-3xl font-bold tracking-tighter mb-8">Applications</h2>
          <div className="flex flex-wrap gap-2">
            {product.applications.map((app) => (
              <Badge key={app} variant="secondary" className="rounded-md text-sm px-3 py-1.5">
                {app}
              </Badge>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16 lg:mb-24">
          <h2 className="text-2xl lg:text-3xl font-bold tracking-tighter mb-8">
            Frequently Asked Questions
          </h2>
          <Accordion className="max-w-3xl">
            {product.faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-sm font-medium">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* CTA */}
        <section className="rounded-2xl border border-border/30 bg-card/40 p-8 lg:p-12 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold tracking-tighter">
            Get a Customized Quote
          </h2>
          <p className="mt-3 text-muted-foreground max-w-[48ch] mx-auto leading-relaxed">
            Tell us your production requirements and our engineering team will provide a tailored
            proposal within 24 hours.
          </p>
          <div className="mt-6">
            <Link href="/quote" className={cn(buttonVariants({ variant: "default", size: "lg" }), "rounded-md")}>Request Quote</Link>
          </div>
        </section>
      </section>
    </div>
  );
}
