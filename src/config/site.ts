// ─────────────────────────────────────────────────────────────
// Edit this file to rebrand the site: name, tagline, nav, links.
// Every page pulls from here — you shouldn't need to touch
// individual page files just to change wording in the nav/footer.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "Atlas Scientific Computing ",
  shortTagline: "AI · Bioinformatics · Discovery",
  tagline: "AI infrastructure for target discovery, protein and enzyme design, and engineered biology.",
  description:
    "Atlas Scientific Computing builds AI platforms and computational pipelines for disease target and biomarker discovery, protein and enzyme design, cell factory engineering, and drug discovery.",
  email: {
    research: "research@genafold.ca",
    commercial: "partnerships@genafold.ca",
    support: "support@genafold.ca",
  },
  github: "https://github.com/genafold",
};

export type NavChild = { label: string; href: string };
export type NavItem = { label: string; href: string; children?: NavChild[] };

// Nav renders only the top-level label/href (flat, no dropdowns).
// The Footer uses the full tree, including children, for its column links.
export const nav: NavItem[] = [
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Mission", href: "/about#mission" },
      { label: "Vision", href: "/about#vision" },
      { label: "Scientific Expertise", href: "/about#expertise" },
      { label: "Publications", href: "/about/publications" },
      { label: "Collaborators", href: "/about/collaborators" },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      { label: "Overview", href: "/solutions" },
      { label: "Disease Target & Biomarker Discovery", href: "/solutions/disease-target-biomarker-discovery" },
      { label: "Protein & Enzyme Design", href: "/solutions/protein-enzyme-design" },
      { label: "Cell Factory Engineering", href: "/solutions/cell-factory-engineering" },
      { label: "Variant & Mutation-Effect Prediction", href: "/solutions/variant-mutation-effect-prediction" },
      { label: "Virtual Screening & Lead Optimization", href: "/solutions/virtual-screening-lead-optimization" },
      { label: "Cloud & Compute Infrastructure", href: "/solutions/cloud-compute-infrastructure" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Overview", href: "/services" },
      { label: "Consulting", href: "/services/consulting" },
      { label: "Training", href: "/services/training" },
      { label: "Pipeline Development", href: "/services/pipeline-development" },
      { label: "Custom AI", href: "/services/custom-ai" },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
  },
];
