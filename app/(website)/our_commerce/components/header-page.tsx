"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const images = [
  "/images/Appareil électroménagers.png",
  
];

export default function HeaderPage() {

  return (
    <section className="p-4 bg-white">
      <div className="relative w-full h-[500px] overflow-hidden bg-white">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={""}
            fill
            className="absolute inset-0 object-cover"
          />
        ))}

        {/* Titre Centré */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <h1 className="text-white text-3xl md:text-5xl font-extralight italic text-center px-4 py-2">
            Votre besoin, notre engagement – Tout pour vous, en un seul endroit !
          </h1>
        </div>

       
      </div>
    </section>
  );
}