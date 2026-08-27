import RegionalPressPage from "@/app/[region]/press/page";

export default function GlobalPressPage() {
  return <RegionalPressPage params={{ region: "global" }} />;
}
