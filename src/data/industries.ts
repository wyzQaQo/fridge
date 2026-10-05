export interface Industry {
  slug: string;
  name: string;
  description: string;
  image: string;
  relatedProducts: string[];
}

export const industries: Industry[] = [
  {
    slug: "food-processing",
    name: "Food Processing",
    description:
      "From pet treat freeze drying to coffee lyophilization, our equipment powers the most demanding food production lines worldwide. Batch consistency, hygiene compliance, and throughput optimization are engineered into every system.",
    image: "https://picsum.photos/seed/food-processing-plant/800/500",
    relatedProducts: ["freeze-dryer", "humidity-chamber"],
  },
  {
    slug: "pharmaceutical",
    name: "Pharmaceutical",
    description:
      "GMP-compliant lyophilization and stability testing solutions for API manufacturing, vaccine production, and drug product storage. Full 21 CFR Part 11 data integrity and validation documentation packages available.",
    image: "https://picsum.photos/seed/pharmaceutical-lab/800/500",
    relatedProducts: ["freeze-dryer", "ultra-low-freezer", "humidity-chamber"],
  },
  {
    slug: "laboratory-research",
    name: "Laboratory Research",
    description:
      "Precision environmental control for academic and industrial research laboratories. Sample preservation, accelerated aging studies, and material characterization with research-grade accuracy and repeatability.",
    image: "https://picsum.photos/seed/laboratory-research/800/500",
    relatedProducts: ["ultra-low-freezer", "humidity-chamber"],
  },
  {
    slug: "biotech",
    name: "Biotechnology",
    description:
      "Ultra-low temperature storage for cell lines, biologics, enzymes, and research samples. Validated cold chain solutions that meet the rigorous demands of biotech R&D and manufacturing environments.",
    image: "https://picsum.photos/seed/biotech-lab/800/500",
    relatedProducts: ["ultra-low-freezer", "freeze-dryer"],
  },
];
