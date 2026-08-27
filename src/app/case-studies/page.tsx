import RegionalCaseStudiesPage from "@/app/[region]/case-studies/page";

export default function GlobalCaseStudiesPage() {
  return <RegionalCaseStudiesPage params={{ region: "global" }} />;
}
