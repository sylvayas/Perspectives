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
    "/images/immobilier/Soleil 1.0.2.png",
    "/images/immobilier/3.jpg",
   
    
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
       
   <section className="relative">
  <div className="container px-0 relative max-w-[1400px] h-[460px]">
    {/* Image de fond */}
    {images.map((image, index) => (
      <Image
        key={index}
        src={image}
        alt={`Slide ${index + 1}`}
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
        className={`absolute inset-0 transition-opacity duration-1000  ${
          index === currentIndex ? "opacity-100" : "opacity-0"
        }`}
      />
    ))}

    {/* Conteneur du texte */}
    <div className="relative z-[2] flex flex-col md:flex-row md:gap-x-8 justify-between bg-black/30 h-[460px] py-8 px-4 sm:py-16 lg:px-8">
      <div className="max-w-screen-sm text-white text-center md:text-left">
        <h1 className="mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-tight font-semibold mt-20">
          Trouvez bien plus qu&apos;une maison, trouvez votre chez-vous.
        </h1>
        {/* Ajout d'un paragraphe pour correspondre au style du second code */}
        <p className="mb-8 font-light text-xs sm:text-sm">
          Découvrez des espaces qui répondent à vos besoins et à vos rêves.
        </p>
      </div>
    </div>
  </div>

  {/* Indicateurs (conservés, mais optionnels si vous voulez les retirer) */}
  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
    {images.map((_, index) => (
      <div
        key={index}
        className={`w-3 h-3 rounded-full ${
          index === currentIndex ? "bg-white" : "bg-white/50"
        }`}
      />
    ))}
  </div>
</section>
     );
}