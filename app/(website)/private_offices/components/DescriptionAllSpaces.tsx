import React from 'react';
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from 'next/image'; // Ajout de l'importation
import { transport } from '@/config/data';

export default function DescriptionAllSpaces() {
    return (
        <section className="container min-h-[300px] py-14 relative">
             <div className="relative gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                           <Image className="w-full" src="/images/perspective/camion_transport.jpg" alt="finance image" width={800} height={500} />
                           <div className="mt-4 md:mt-0">
                                <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
                            
                                    Dans le secteur du transit et du transport,nous proposons des services essentiels tels que le dédouanement,le transport
                                    de marchandises et de matières premières.Notre équipes d'experts facilite les formalités douanières, garantissant une circulation
                                    rapide et efficace de vos produits a travers les frontières.Grace a notre réseau logistique bien établi,nous assurons un transport 
                                    sécurisé et fiable,vous permettant de vous concentrer sur vos activités commerciales sans vous soucier des délais
                                </p>        
                          </div>
              </div>   
              
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                <h2 className="mb-4 text-xl md:text-4xl font-saudagar tracking-tight">
                Avantages
                </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-6 lg:mb-16">
                {avantages.map((avantage: any, key: number) => (
                <div key={key} className="items-center flex flex-col bg-gray-50 rounded-lg shadow">
                    <img
                    className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                    src={avantage.image}
                    alt={avantage.image}
                    />
                    <div className="p-5">
                    <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {avantage.title}
                    </h3>
                    <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                        {avantage.detail}
                    </p>
                    </div>
                </div>
                ))}
            </div>
            </div>
                                               

           

           
        </section>

        

    );
}

const avantages = [
    {
      title: "Transport maritime",
      description: "le mode de transport qui utilise des navires, des bateaux et autres embarcations pour déplacer des marchandises ou des passagers par voie d'eau. Ce type de transport est essentiel pour le commerce international et le transport de grandes quantités de marchandises, en particulier sur de longues distances.",
      image: "/images/transport/transport_maritime.png",
    },
    {
      title: "Transport aérien",
      description:
        "Le transport aérien fait référence à l'utilisation d'avions pour déplacer des passagers et des marchandises d'un endroit à un autre à travers l'air. Il est l'un des moyens de transport les plus rapides et les plus efficaces pour parcourir de longues distances, reliant des villes, des pays et même des continents.",
      image: "/images/coworking/Bureaux privés/Bureau confiance/valeur ajoutée.png",
    },
    {
      title: "Transport fluvial",
      description: "Le transport fluvial fait référence au mode de transport utilisant des voies navigables intérieures, telles que les rivières, les canaux et les lacs, pour déplacer des marchandises ou des passagers à l'aide de bateaux ou de barges. Il est souvent utilisé pour des trajets relativement courts à moyens et est essentiel pour certaines régions où les infrastructures routières ou ferroviaires sont limitées. ",
      image:
        "/images/coworking/Bureaux privés/Bureau détermination/notoriété.png",
    },
    {
      title: "transport terrestre",
      description: "Le transport terrestre désigne tous les modes de transport qui utilisent des voies terrestres, telles que les routes, les autoroutes, les chemins de fer ou même des pistes non pavées, pour déplacer des personnes ou des marchandises. Ce mode de transport est très utilisé au niveau local, régional et national et constitue un élément clé de l'infrastructure logistique dans de nombreuses régions du monde.",
      image:
        "/images/immobilier/house.jpg"
    },
  ]