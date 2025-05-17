"use client";

import React from 'react';
import HeroCarousel from '../ui/hero-carousel/hero-carousel';
import { cn } from '@/lib/utils';
import Link from 'next/link'; // Assurez-vous d'importer Link de Next.js
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import NumberTicker from "@/components/magicui/number-ticker";
import { useState, useEffect } from "react";
import Image from "next/image";

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const images=[
    "/images/immobilier/1.jpg",
 
   
    
]

export default function Hero(){
 const [currentIndex, setCurrentIndex] = useState(0);
 
     useEffect(() => {
       const interval = setInterval(() => {
         setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
       }, 3000);
       return () => clearInterval(interval);
     }, []);
   
     return (
       
   <section className="relative p-2">
  <div className="container px-0 relative max-w-[1400px] h-[480px] rounded-tr-[40px] rounded-bl-[40px]">
    {/* Image de fond */}
    {images.map((image, index) => (
      <Image
        key={index}
        src={image}
        alt={""}
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
        className={`absolute inset-0 transition-opacity duration-1000 rounded-tr-[40px] rounded-bl-[40px]  ${
          index === currentIndex ? "opacity-100" : "opacity-0"
        }`}
      />
    ))}

    {/* Conteneur du texte */}
    <div className="relative z-[2] flex flex-col md:flex-row md:gap-x-8 justify-between bg-black/30 h-[480px] rounded-tr-[40px] rounded-bl-[40px] py-8 px-4 sm:py-16 lg:px-8">
      <div className="max-w-screen-sm text-white text-center md:text-left rounded-tr-[40px] rounded-bl-[40px]">
       
        {/* Ajout d'un paragraphe pour correspondre au style du second code */}
        <p className="mb-8 mt-24 font-extralight text-2xl sm:text-xl text-justify">
         Nous proposons une gamme complète de services en immobilier et logistique : intermédiation pour l’achat et la vente, location de biens meublés ou non, gestion immobilière, conseil en projets de construction, et fourniture de matériel. Nos solutions incluent également la location de hangars, plateformes, et entrepôts, adaptées à vos besoins logistiques.
        </p>
      </div>
    </div>
  </div>

 
</section>
     );
}