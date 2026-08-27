import RegionalServicesPage from "@/app/[region]/services/page";

export default function GlobalServicesPage() {
  return <RegionalServicesPage params={{ region: "global" }} />;
}
