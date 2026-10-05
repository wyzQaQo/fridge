"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { SITE } from "@/data/site";

const stats = [
  { value: SITE.stats.factorySqm, suffix: " m2", label: "Factory Area" },
  { value: SITE.stats.employees, suffix: "+", label: "Engineers & Staff" },
  { value: SITE.stats.exportCountries, suffix: "", label: "Export Countries" },
  { value: SITE.stats.annualCapacity, suffix: "+", label: "Units/Year Capacity" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <span ref={ref} className="tabular-nums">
      {inView ? (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {value.toLocaleString()}
          {suffix}
        </motion.span>
      ) : (
        <span className="opacity-0">0{suffix}</span>
      )}
    </span>
  );
}

export function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 border-t border-border/20">
      <div className="mx-auto max-w-[1400px] px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image + Badges */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-border/30 aspect-[4/3]">
              <img
                src="https://picsum.photos/seed/factory-production-line/800/600"
                alt="CryoMax factory production line"
                className="w-full h-full object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/40 via-transparent to-transparent" />
            </div>
            {/* Certification badges */}
            <div className="absolute -bottom-4 -right-4 flex flex-wrap gap-2">
              {SITE.stats.certifications.map((cert) => (
                <span
                  key={cert}
                  className="rounded-md bg-background border border-primary/20 px-3 py-1.5 text-xs font-semibold text-primary tracking-wider"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tighter text-foreground">
              Why Choose CryoMax
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              With over 16 years of specialized manufacturing experience, CryoMax delivers
              industrial-grade refrigeration equipment that meets the most demanding production
              and compliance requirements.
            </p>

            {/* Stats Grid */}
            <div className="mt-10 grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl lg:text-4xl font-bold text-foreground tracking-tighter">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
