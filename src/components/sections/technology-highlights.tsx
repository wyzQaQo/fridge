import Link from "next/link";
import { ArrowRight, Wrench, Gauge, Fan, Cpu } from "@phosphor-icons/react/dist/ssr";

const technologies = [
  {
    icon: Wrench,
    title: "Danfoss & Emerson Compressors",
    description:
      "Industry-standard compressor systems from global market leaders ensure long-term reliability and worldwide service support.",
    href: "/technology/compressor-brands",
  },
  {
    icon: Gauge,
    title: "Vacuum System Engineering",
    description:
      "Precision vacuum pump configurations with intelligent control for consistent sublimation rates and energy efficiency.",
    href: "/technology/vacuum-system",
  },
  {
    icon: Cpu,
    title: "PLC Intelligent Control",
    description:
      "Programmable logic controllers with HMI touchscreen for recipe management, real-time monitoring, and data logging.",
    href: "/technology/control-system-plc",
  },
  {
    icon: Fan,
    title: "Cascade Refrigeration",
    description:
      "Two-stage cascade systems achieving stable -86 degree C with rapid pull-down and minimal temperature fluctuation.",
    href: "/technology/refrigeration-system",
  },
];

export function TechnologyHighlights() {
  return (
    <section className="py-20 lg:py-28 border-t border-border/20">
      <div className="mx-auto max-w-[1400px] px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-16">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tighter text-foreground">
              Engineering Excellence
            </h2>
            <p className="mt-3 text-muted-foreground max-w-[56ch] leading-relaxed">
              Every CryoMax system is built on proven component platforms from world-class
              manufacturers. Our technology pages give your engineering team the detail they need.
            </p>
          </div>
          <Link
            href="/technology"
            className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors shrink-0"
          >
            Explore Technology <ArrowRight weight="bold" className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {technologies.map((tech) => (
            <Link
              key={tech.href}
              href={tech.href}
              className="group rounded-xl border border-border/30 bg-card/30 hover:bg-card/60 hover:border-primary/20 transition-all duration-300 p-5 lg:p-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20 mb-4 group-hover:bg-primary/15 transition-colors">
                <tech.icon weight="fill" className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors">
                {tech.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {tech.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
