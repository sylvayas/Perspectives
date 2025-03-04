import TitleSection from '@/components/title-section';
import React from 'react';
import { BorderBeam } from "@/components/magicui/border-beam";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from 'next/image'; // Ajout de l'importation


export default function descriptiontransport(){
    return (
 <section className="container min-h-[300px] py-14 relative">
            {/* <TitleSection title={"Nos différents espaces situés à Cocody"} /> */}

            <div className="relative gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                <Image className="w-full" src="/images/finance/business-people.jpg" alt="finance image" width={800} height={500} />
                <div className="mt-4 md:mt-0">
                    <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
                        Nous proposons des services financières diversifiés , adaptés aux besoins des particuliers et des entreprises.
                        Notre expertise couvre des domaines tels que la gestion de patrimoine , le conseil en investissement,ainsi que 
                        l'analyse financière et la planification budgétaire.Nous nous engageons a fournir des solutions personnalisés qui
                        maximisest le rendement de vos investissement tout en minimisant les risques associés.Notre équipes d'experts financier 
                        vous accompagne a chaque étapes,vous permettant de prendre des décisions éclairées pour atteindre vos objectifs financier
                        a court terme
                    </p>
                    
                </div>
            </div>

           
            

            {/* Répétez le même processus pour les autres balises <img> */}
        </section>
    );
}