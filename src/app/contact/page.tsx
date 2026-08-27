import RegionalContactPage from "@/app/[region]/contact/page";

export default function GlobalContactPage() {
  return <RegionalContactPage params={{ region: "global" }} />;
}
