import RegionalBlogPage from "@/app/[region]/blog/page";

export default function GlobalBlogPage() {
  return <RegionalBlogPage params={{ region: "global" }} />;
}
