import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Wrench, Gauge, Fan, Cpu, Shield } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Technology",
  description: "Explore the engineering components behind CryoMax industrial equipment: Danfoss compressors, Emerson refrigeration, PLC control, and vacuum systems.",
};

const technologies = [
  {
    icon: Wrench,
    title: "Compressor Systems",
    description:
      "Danfoss and Emerson compressors form the heart of every CryoMax system. We select and configure compressor platforms based on your specific temperature range, capacity, and duty cycle requirements.",
    specs: ["Danfoss Optyma/ Maneurop", "Emerson Copeland Scroll", "Cascade configuration for ULT", "Global service network"],
    href: "/technology/compressor-brands",
  },
  {
    icon: Fan,
    title: "Refrigeration Cycle Design",
    description:
      "Our cascade and single-stage refrigeration systems are optimized for each application. From -86 degree C ultra-low freezing to multi-zone environmental chambers, each system is engineered for stability and efficiency.",
    specs: ["Single-stage & cascade", "R404A / R507 / R449A", "EU F-Gas compliant options", "Hot gas defrost available"],
    href: "/technology/refrigeration-system",
  },
  {
    icon: Gauge,
    title: "Vacuum System Engineering",
    description:
      "Precision vacuum is critical for lyophilization. Our vacuum systems incorporate rotary vane and dry screw pumps with intelligent control for consistent sublimation rates and energy-efficient operation.",
    specs: ["Rotary vane & dry screw", "Ultimate vacuum ≤ 2.7 Pa", "Automatic vacuum control", "Oil mist filtration"],
    href: "/technology/vacuum-system",
  },
  {
    icon: Cpu,
    title: "PLC Control & Automation",
    description:
      "Programmable logic controllers with HMI touchscreen interfaces enable precise recipe management, real-time monitoring, data logging, and remote access for GMP-compliant operation.",
    specs: ["Siemens / Mitsubishi PLC", "7-10 inch HMI touchscreen", "100+ program storage", "RS485 / Ethernet / WiFi"],
    href: "/technology/control-system-plc",
  },
  {
    icon: Shield,
    title: "Compliance & Certification",
    description:
      "Every CryoMax system can be configured to meet regional and industry-specific compliance requirements with full documentation packages.",
    specs: ["CE (EU)", "FDA 21 CFR Part 11", "UL (North America)", "ISO 9001 / ISO 13485"],
    href: "/technology/compliance",
  },
];

export default function TechnologyPage() {
  return (
    <div className="pt-24 lg:pt-32 pb-20 lg:pb-28">
      <div className="mx-auto max-w-[1400px] px-4 lg:px-8">
        <div className="mb-12 lg:mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tighter text-foreground">
            Technology
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-[64ch] leading-relaxed">
            Every CryoMax system is built on proven component platforms from world-class manufacturers.
            Our technology pages provide the engineering detail that your technical team needs to evaluate
            and specify equipment.
          </p>
        </div>

        <div className="space-y-6 lg:space-y-8">
          {technologies.map((tech, i) => (
            <div
              key={tech.href}
              className="group rounded-xl border border-border/30 bg-card/30 hover:bg-card/60 hover:border-primary/20 transition-all duration-300"
            >
              <div className="grid lg:grid-cols-[auto_1fr_auto] gap-6 p-5 lg:p-8 items-start">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20 group-hover:bg-primary/15 transition-colors shrink-0">
                  <tech.icon weight="fill" className="h-6 w-6" />
                </div>
                <div>
                  <Link href={tech.href} className="text-xl font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors">
                    {tech.title}
                  </Link>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{tech.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {tech.specs.map((spec) => (
                      <span key={spec} className="text-xs px-2 py-1 rounded-sm bg-secondary text-muted-foreground">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  href={tech.href}
                  className="hidden lg:flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors shrink-0 pt-1"
                >
                  Details <ArrowRight weight="bold" className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
