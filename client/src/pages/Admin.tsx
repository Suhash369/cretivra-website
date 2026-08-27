import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AdminPortal from "@/components/ui/AdminPortal";
import { REGIONS } from "@/lib/regions";

export default function Admin() {
  const reg = REGIONS.global;

  return (
    <>
      <Navbar region={reg} />
      <main>
        <AdminPortal />
      </main>
      <Footer region={reg} />
    </>
  );
}
