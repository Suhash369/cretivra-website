import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { REGIONS } from "@/lib/regions";

interface GlobalPageWrapperProps {
  children: React.ReactNode;
}

/**
 * Standard wrapper for global root pages ensuring every route
 * consistently includes the Navbar and Footer with global regional context.
 */
export default function GlobalPageWrapper({ children }: GlobalPageWrapperProps) {
  const globalRegion = REGIONS.global;

  return (
    <>
      <Navbar region={globalRegion} />
      <main className="min-h-[calc(100vh-80px)]">{children}</main>
      <Footer region={globalRegion} />
    </>
  );
}
