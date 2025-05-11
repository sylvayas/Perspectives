"use client";
import { SiteBanner } from "@/components/site-banner";
import SiteHeader from "@/components/navigation/site-header";
import Footer from "@/components/footer";
import Faqs from "@/components/Faqs/faqs";
import { useEffect, useState } from "react";

interface WebSiteLayoutProps {
  children: React.ReactNode;
}

export default function WebSiteLayout({ children }: WebSiteLayoutProps) {


  return (
    <>
      <SiteBanner />
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <Faqs />
      <Footer />
    </>
  );
}