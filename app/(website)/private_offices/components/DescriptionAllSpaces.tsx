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
                            de marchandises et de matières premières.Notre équipes d'experts facilite les formalités douanières, garantissant une circulation
                            rapide et efficace de vos produits a travers les frontières.Grace a notre réseau logistique bien établi,nous assurons un transport 
                            sécurisé et fiable,vous permettant de vous concentrer sur vos activités commerciales sans vous soucier des délais. 

                          </p>
                               
                           </div>
                       </div>                                          

            {/* Si vous avez d'autres images, remplacez-les également par <Image /> ici */}

           
        </section>
    );
}