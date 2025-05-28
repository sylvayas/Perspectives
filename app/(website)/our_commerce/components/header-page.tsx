"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const images = [
  "/images/Appareil électroménagers.png",
  
];

export default function HeaderPage() {

  return (
    <section className="relative ml-6 p-4">
      <div className="relative h-[400px] max-w-[1400px] rounded-tr-[40px] rounded-bl-[40px] overflow-hidden">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={""}
            fill
            className="absolute inset-0 object-cover h-[400px] "
          />
        ))}

        {/* Titre Centré */}
        <div className="absolute inset-0 flex flex-col items-center  justify-center bg-black/30">
       <div className="mt-44 md:text-center">
           <p className="text-white text-2xl sm:text-3xl md:text-4xl md:mr-[860px] px-4 py-2">
            Votre besoin, notre engagement
          </p>
          <p className="text-white text-2xl sm:text-3xl md:text-3xl md:mr-[860px] px-6 py-2">Tout pour vous, en un seul endroit </p>
       </div>
        </div>

       
      </div>
    </section>
  );
}