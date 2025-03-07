"use client";

import { Icons } from "@/components/icons";
import NumberTicker from "@/components/magicui/number-ticker";
import { Section } from "@react-email/components";
import Image from "next/image";
import { useState, useEffect } from "react";


const images=[
    "/images/immobilier/fer_a_repasser.jpg",
    "images/immobilier/chambre.jpg",
    "images/immobilier/cuisine.jpg",
    "images/immobilier/chambre 2.jpg",
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
      <section className="p-2">
        <div className="relative w-full h-screen overflow-hidden">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-1000  bg-black/50 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
  
        {/* Titre Centré */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-3xl font-bold bg-black/50 px-4 py-2 rounded-md">
            Mon Titre Ici
          </h1>
        </div>
  
        {/* Indicateurs */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-white" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
      </section>
    );
}