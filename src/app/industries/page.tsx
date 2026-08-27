import RegionalIndustriesPage from "@/app/[region]/industries/page";

export default function GlobalIndustriesPage() {
  return <RegionalIndustriesPage params={{ region: "global" }} />;
}
