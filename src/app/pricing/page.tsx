import RegionalPricingPage from "@/app/[region]/pricing/page";

export default function GlobalPricingPage() {
  return <RegionalPricingPage params={{ region: "global" }} />;
}
