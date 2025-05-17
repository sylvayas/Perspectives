"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const images = [
  "/images/Appareil électroménagers.png",
  
];

export default function HeaderPage() {

  return (
    <section className=" bg-white">
      <div className="relative w-full h-[470px] overflow-hidden bg-white">
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
        <div className="absolute inset-0 flex flex-col items-center  justify-center bg-black/30">
       <div className="mt-44">
           <p className="text-white text-4xl md:text-4xl text-center mr-[860px] px-4 py-2">
            Votre besoin, notre engagement
          </p>
          <p className="text-white text-4xl md:text-4xl text-center mr-[800px] px-4 py-2">Tout pour vous, en un seul endroit !</p>
       </div>
        </div>

       
      </div>
    </section>
  );
}