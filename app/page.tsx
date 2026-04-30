"use client";

import dynamic from "next/dynamic";
import Services from "@/components/Services";

const Hero = dynamic(() => import("@/components/Hero"), {
  ssr: false, // 🔥 THIS FIXES HYDRATION
});

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
    </>
  );
}