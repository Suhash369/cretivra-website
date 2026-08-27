import RegionalAboutPage from "@/app/[region]/about/page";

export default function GlobalAboutPage() {
  return <RegionalAboutPage params={{ region: "global" }} />;
}
