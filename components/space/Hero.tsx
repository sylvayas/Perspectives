import React from 'react';
import HeroCarousel from '../ui/hero-carousel/hero-carousel';
import { cn } from '@/lib/utils';
import Link from 'next/link'; // Assurez-vous d'importer Link de Next.js
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import NumberTicker from "@/components/magicui/number-ticker";

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function Hero(
    { space }: { space: any }
) {
    return (
       <>
       <section className="relative ">
                       <div className="container px-0 relative max-w-[1400px]">
                           <div className="relative z-[2] flex flex-col md:flex-row md:gap-x-8 justify-between bg-black/30 py-8 px-4 sm:py-16 lg:px-8">
                               <div className="max-w-screen-sm text-white text-center md:text-left">
                                   <h2 className="mb-4 text-xl sm:text-2xl font-saudagar md:text-3xl lg:text-4xl tracking-tight font-semibold">
                                   Des biens d'exception pour des vies exceptionnelles.</h2>
                                   <p className="mb-8 font-light text-xs sm:text-sm">Bienvenue au sein des espaces de Perspectives à Cocody : location de bureaux privés et espaces événementiels dans des bâtiments neufs, propre et moderne.</p>
                               </div>
                               <div className=" flex flex-col gap-2 md:gap-4">
                                   <div className="flex min-w-64 gap-2 bg-perspectives_orange rounded-sm p-2 text-white">
                                       <Icons.building className="size-4 md:size-6" />
                                       <p className="font-medium text-sm font-mono whitespace-pre-wrap tracking-tighter "><NumberTicker className="text-white mr-2" value={13} />Espaces de travail</p>
                                   </div>
                                   <div className="flex min-w-64 gap-2 bg-perspectives_orange rounded-sm p-2 text-white">
                                       <Icons.laptop className="size-4 md:size-6" />
                                       <p className="font-medium text-sm font-mono whitespace-pre-wrap tracking-tighter "><NumberTicker className="text-white mr-2" value={200} />Postes équipés</p>
                                   </div>
                                   <div className="flex min-w-64 gap-2 bg-perspectives_orange rounded-sm p-2 text-white">
                                       <Icons.space className="size-4 md:size-6" />
                                       <p className="font-medium text-sm font-mono whitespace-pre-wrap tracking-tighter "><NumberTicker className="text-white mr-2" value={40} />Salles de réunion</p>
                                   </div>
                               </div>
                           </div>
                           {/* image background */}
                             {/* image background */}
                          
                        
                   </div>
             </section >
       
                  
                   
        </>
    );
}