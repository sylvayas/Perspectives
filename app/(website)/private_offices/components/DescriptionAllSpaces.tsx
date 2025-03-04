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
                           <Image className="w-full" src="/images/immobilier/house.jpg" alt="finance image" width={800} height={500} />
                           <div className="mt-4 md:mt-0">
                               <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
                                   Nous offrons une gamme complète de services dans le domaine de l'immobilier et de la logistique,incluant l'intermédiation 
                                   en achat et vente, la location de biens meublés et non meublés, ainsi que la gestion de biens immobiliers.Nos services de
                                   conseil dans des projets de construction et la fourniture de matériel de construction sont également a votre disposition.
                                   De plus,nous proposons la location de hangars, de plateformes et d'entrepots,garantissant des solutions adaptées a vous
                                   besoins logistiques.
           
           
                               </p>
                               
                           </div>
                       </div>

            {/* Si vous avez d'autres images, remplacez-les également par <Image /> ici */}

            <AnimatedGridPattern
                numSquares={50}
                maxOpacity={0.1}
                duration={2}
                repeatDelay={1}
                className={
                    "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)] inset-x-0 w-full  h-[100%]"
                } />
        </section>
    );
}