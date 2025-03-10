"use client";

import { Icons } from "@/components/icons";
import NumberTicker from "@/components/magicui/number-ticker";
import { Section } from "@react-email/components";
import Image from 'next/image';
import { useState, useEffect } from "react";


const images=[
    "/images/commerce_géneral/fer_a_repasser.jpg",
    "/images/commerce_géneral/frigo2.jpg",
    "/images/commerce_géneral/gasinière.jpg",
    "/images/commerce_géneral/frigo.jpg",  
]


export default function HeaderPage() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval);
    }, []);
  
    return (
      
        <section className="p-4 bg-white">
          <div className="relative w-full h-screen overflow-hidden  bg-white">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            width={800} 
            height={600} 
            className={`absolute w-full h-screen object-fit  transition-opacity duration-1000 blur-sm  bg-black/50 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`} 
          />
        ))}
  
        {/* Titre Centré */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-5xl font-extralight italic  px-4 py-2 rounded-md">
          Votre besoin, notre engagement – Tout pour vous, en un seul endroit !
          </h1>
        </div>
  
        {/* Indicateurs */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-white" : "bg-white"
              }`}
            />
          ))}
        </div>
      </div>
        </section>
    
    );
}