import TitleSection from '@/components/title-section';
import React from 'react';
import { BorderBeam } from "@/components/magicui/border-beam";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from 'next/image'; // Ajout de l'importation
import ServicesCarousel from '../website/Services/services-carousel';

export default function DescriptionAllSpaces() {
    return (
        <>
        <section className="container min-h-[300px] py-14 relative">
            {/* <TitleSection title={"Nos différents espaces situés à Cocody"} /> */}

            <div className="relative gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                <Image className="w-full h-full mt-6" src="/images/immobilier/maison_immobilier.jpg" alt="finance image" width={900} height={600} />
                <div className="mt-4 md:mt-0">
                    <p className="mb-6 font-light text-gray-500 md:text-lg  dark:text-gray-400 leading-loose">
                         Nous offrons une gamme complète de services dans le domaine de l'immobilier et de la logistique,incluant l'intermédiation 
                        en achat et vente, la location de biens meublés et non meublés, ainsi que la gestion de biens immobiliers.Nos services de
                        conseil dans des projets de construction et la fourniture de matériel de construction sont également a votre disposition.
                        De plus,nous proposons la location de hangars, de plateformes et d'entrepots,garantissant des solutions adaptées a vous
                        besoins logistiques.

                    </p>


                    
                </div>
            </div>
            {/* Répétez le même processus pour les autres balises <img> */}
         
        </section>

         <section id="showcase" className="container px-2 md:px-8 py-14">
                    <h2 className="text-novis_yellow mb-10 text-center font-medium text-2xl md:text-4xl tracking-tight font-saudagar">
                        Nos propriétés
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                        <div className=" rounded-lg shadow-md overflow-hidden">
                        <Image className="w-full h-full " src="/images/immobilier/salon.jpg" alt="" width={800} height={500} />

                        </div>
                        <div className=" rounded-lg shadow-md overflow-hidden">
                        <Image className="w-full h-full " src="/images/immobilier/cuisine.jpg" alt="" width={800} height={500} />

                        </div>
                        <div className=" rounded-lg shadow-md overflow-hidden">
                        <Image className="w-full h-full " src="/images/immobilier/chambre.jpg" alt="" width={800} height={500} />

                        </div>
                        <div className=" rounded-lg shadow-md overflow-hidden">
                        <Image className="w-full h-full " src="/images/immobilier/chambre 2.jpg" alt="" width={800} height={500} />

                        </div>
                        <div className=" rounded-lg shadow-md overflow-hidden">
                        <Image className="w-full h-full " src="/images/immobilier/salon_luxueux.jpg" alt="" width={800} height={600} />

                        </div>
                        <div className=" rounded-lg shadow-md overflow-hidden">
                        <Image className="w-full h-full " src="/images/immobilier/espace.jpg" alt="" width={800} height={500} />

                        </div>
                 </div>
        </section>
        </>
        

        


        
    );
}