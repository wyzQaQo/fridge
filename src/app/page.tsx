export const dynamicParams = false;
import { Hero } from "@/components/sections/hero";
import { ProductCategories } from "@/components/sections/product-categories";
import { Industries } from "@/components/sections/industries-section";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { TechnologyHighlights } from "@/components/sections/technology-highlights";
import { CaseStudies } from "@/components/sections/case-studies";
import { RFQCTA } from "@/components/sections/rfq-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProductCategories />
      <Industries />
      <WhyChooseUs />
      <TechnologyHighlights />
      <CaseStudies />
      <RFQCTA />
    </>
  );
}
