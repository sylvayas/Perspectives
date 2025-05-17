"use client";

import { Icons } from "@/components/icons";
import NumberTicker from "@/components/magicui/number-ticker";
import Image from "next/image";

export default function HeaderPage() {
  return (
    <>
      <section className="relative w-full  bg-gray-900">
        <div className="px-4 relative h-[360px] p-4 max-w-[1400px] ">
          <div className="relative z-[2] flex flex-col md:flex-row md:gap-x-8 justify-between h-[320px] rounded-tr-[40px] rounded-bl-[40px] py-6 px-4 sm:py-8 lg:px-8">
            <div className="max-w-screen-sm text-white text-center md:text-left flex flex-col justify-center ">
              <h2 className="mb-4 text-xl sm:text-2xl md:text-3xl lg:text-3xl font-extralight tracking-tight animate-fade-in">
                  Confiez vos livraisons de sable, ciment, gravier et autres matériaux à nos équipes expérimentées.
               </h2>
              
            </div>
            <div className="flex flex-col gap-2 md:gap-4 justify-center">
              <div className="flex min-w-56 gap-2 bg-orange-500 rounded-md p-3 text-white transition-all duration-300 hover:bg-orange-600 hover:shadow-lg">
                <Icons.building className="size-5 md:size-6" />
                <p className="font-medium text-sm font-mono tracking-tighter">
                  <NumberTicker className="text-white mr-2" value={13} />Camions de transport
                </p>
              </div>
              <div className="flex min-w-56 gap-2 bg-orange-500 rounded-md p-3 text-white transition-all duration-300 hover:bg-orange-600 hover:shadow-lg">
                <Icons.laptop className="size-5 md:size-6" />
                <p className="font-medium text-sm font-mono tracking-tighter">
                  <NumberTicker className="text-white mr-2" value={200} />Tonnes transportées
                </p>
              </div>
              <div className="flex min-w-56 gap-2 bg-orange-500 rounded-md p-3 text-white transition-all duration-300 hover:bg-orange-600 hover:shadow-lg">
                <Icons.space className="size-5 md:size-6" />
                <p className="font-medium text-sm font-mono tracking-tighter">
                  <NumberTicker className="text-white mr-2" value={40} />Sites desservis
                </p>
              </div>
            </div>
          </div>
          {/* Image Background */}
          <Image
            src="/images/transport/camion_transport.jpg"
            alt="Vue d'un espace de travail moderne"
            fill
            className="absolute inset-0 object-cover w-full h-full rounded-tr-[40px] rounded-bl-[40px]"
            quality={100}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70 " />
        </div>
      </section>

      {/* <section className="relative bg-gray-100">
        <div className="container grid grid-cols-2 gap-4 md:grid-cols-4 py-4 md:py-6">
          {["Conseil", "Accompagnement", "Création de compte", "Prendre rendez-vous"].map((item, index) => (
            <p
              key={index}
              className="font-medium text-xs md:text-sm text-gray-800 text-center transition-colors duration-300 hover:text-orange-500 cursor-pointer animate-fade-in"
            >
              {item}
            </p>
          ))}
        </div>
      </section> */}

      <style jsx>{`
        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </>
  );
}