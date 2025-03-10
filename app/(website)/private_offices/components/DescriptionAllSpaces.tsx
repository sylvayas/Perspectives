import React from 'react';
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from 'next/image'; // Ajout de l'importation


export default function DescriptionAllSpaces() {
    return (
        <section className="container min-h-[300px] py-14 relative">
             <div className="relative gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                           <Image className="w-full" src="/images/perspective/camion_transport.jpg" alt="finance image" width={800} height={500} />
                           <div className="mt-4 md:mt-0">
                                <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
                            
                                    Dans le secteur du transit et du transport,nous proposons des services essentiels tels que le dédouanement,le transport
                                    de marchandises et de matières premières.Notre équipes d&apos;experts facilite les formalités douanières, garantissant une circulation
                                    rapide et efficace de vos produits a travers les frontières.Grace a notre réseau logistique bien établi,nous assurons un transport 
                                    sécurisé et fiable,vous permettant de vous concentrer sur vos activités commerciales sans vous soucier des délais.
                                </p>        
                          </div>
              </div>   
              
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                <h2 className="mb-4 text-xl md:text-4xl font-saudagar tracking-tight">
                    Nos services
                </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-6 lg:mb-8 h-full">
                {avantages.map((avantage,index) => (
                <div key={index} className="items-center flex flex-col bg-gray-50 rounded-lg shadow ">
                    <img
                    className="w-full h-50 object-cover rounded-lg sm:rounded-none sm:rounded-l-lg"
                    src={avantage.image}
                    alt={avantage.image}
                    />
                    <div className="p-5">
                    <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {avantage.title}
                    </h3>
                    <p className="mt-3 mb-2 font-light text-gray-500 dark:text-gray-400">
                        {avantage.description}
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
      description: "Ce type de transport est essentiel pour le commerce international et le transport de grandes quantités de marchandises, en particulier sur de longues distances.",
      image: "/images/transport/transport_maritime.jpg",
    },
    {
      title: "Transport aérien",
      description:
        "Le transport aérien fait référence à l'utilisation d'avions pour déplacer des passagers et des marchandises d'un endroit à un autre à travers l'air.",
      image: "/images/transport/transport_aérien.jpg",
    },
    {
      title: "transport terrestre",
      description: "Le transport terrestre désigne tous les modes de transport qui utilisent des voies terrestres, telles que les routes, les autoroutes, les chemins de fer ou même des pistes non pavées, pour déplacer des personnes ou des marchandises.",
      image:
        "/images/transport/transport_terrestre.jpg"
    },
    {
        title: "Transport ferroviaire",
        description: "Le transport ferroviaire est un mode de transport qui utilise des trains circulant sur des voies ferrées pour transporter des passagers et des marchandises. ",
        image:
          "/images/transport/transport_ferroviaire.jpg ",
      },
  ]