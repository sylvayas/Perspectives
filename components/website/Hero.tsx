import React from "react";
import HeroCarousel from "../ui/hero-carousel/hero-carousel";
import { cn } from "@/lib/utils";
import Link from "next/link"; // Assurez-vous d'importer Link
import { CalendarIcon } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

const images = [
  "/images/Projet RAWDA.png",

];

export default function Hero() {
  const item_bar = (
    <div className="w-full h-[2px] scale-x-0 bg-perspectives_orange group-hover/service_item:scale-x-100 group-hover/service_item:bg-white transition-all duration-300"></div>
  );

  const item = (name: string, url: string) => {
    return (
      <Link href={url} className="relative group/service_item">
        <span className="text-xs sm:text-sm">{name}</span>
        {item_bar}
      </Link>
    );
  };

  return (
    <section className="relative p-5  ">
     <div className={cn("h-[60vh] md:h-[418px] xl:h-[518px] relative container px-0 max-w-[1400px] rounded-bl-lg")}>

        <div className="absolute z-[3] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center flex-col gap-8 max-w-5xl w-full">
          <h1 className="text-xl sm:text-4xl md:text-4xl text-white text-center  uppercase">
          Allons loin ensemble
          </h1>

          <div className="flex items-center justify-center text-white text-sm flex-wrap gap-2">
            {item("FINANCE", "/our_spaces")}
            <span className="h-4 w-[2px] bg-white"></span>
            {item("IMMOBILIER", "/our_spaces/open_space")}
            <span className="h-4 w-[2px] bg-white"></span>
            {item("TRANSIT-TRANSPORT", "/private_offices")}
            <span className="h-4 w-[2px] bg-white"></span>
            {item("COMMERCE GÉNÉRAL", "/our_commerce")}
          </div>
{/* 
          <Link
            className={cn(
              buttonVariants(),
              "max-w-52 gap-2 overflow-hidden whitespace-pre",
              "group relative w-full justify-center gap-2 rounded-md transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2"
            )}
            href="/reservation" // Lien vers la page de réservation
          >
            <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40" />
            <div className="flex items-center">
              <span className="ml-1">Réserver</span>
            </div>
            <div className="ml-2 flex items-center gap-1 text-sm md:flex">
              <CalendarIcon className="size-4 text-white transition-all duration-300 group-hover:text-novis_orange" />
            </div>
          </Link> */}
        </div>
        <HeroCarousel images={images} />
      </div>
    </section>
  );
}