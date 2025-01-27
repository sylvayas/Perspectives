"use client"; // Ajoutez cette ligne au début du fichier

import React, { forwardRef, useRef } from "react";
import TitleSection from '@/components/title-section';
import { Icons } from "@/components/icons";
import { BorderBeam } from "@/components/magicui/border-beam";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import Image from 'next/image';

const Circle = forwardRef<HTMLDivElement, { className?: string; children?: React.ReactNode }>(({ className, children }, ref) => {
    return (
        <div
            ref={ref}
            className={cn(
                "z-10 font-extrabold flex size-12 items-center justify-center rounded-full border-2 border-border bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
                className,
            )}
        >
            {children}
        </div>
    );
});

Circle.displayName = "Circle";

export function AnimatedBeamMultipleOutputDemo({ className }: { className?: string; }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const divRefs = Array.from({ length: 5 }, () => useRef<HTMLDivElement>(null));

    return (
        <div
            className={cn(
                "relative hidden sm:flex w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-10 md:shadow-xl",
                className,
            )}
            ref={containerRef}
        >
            <div className="flex size-full flex-row items-stretch justify-between gap-10 max-w-lg">
                <div className="flex flex-col justify-center">
                    <div ref={divRefs[4]}>
                        <Icons.logo className="size-20" />
                    </div>
                </div>
                <div className="flex flex-col justify-center gap-2">
                    {['R', 'D', 'P', 'C', 'R'].map((letter, index) => (
                        <div key={index} ref={divRefs[index]} className="flex items-center bg-white p-[1px]">
                            <Circle>{letter}</Circle>
                            <span className="font-medium">{["espect", "iscipline", "erformance", "ollaboration", "esponsabilité"][index]}</span>
                        </div>
                    ))}
                    <p className="mt-4 text-sm">Respect, Discipline et Performance : les piliers de notre démarche.</p>
                </div>
            </div>
            {divRefs.map((divRef, index) => (
                <AnimatedBeam
                    key={index}
                    containerRef={containerRef}
                    fromRef={divRef}
                    toRef={divRefs[4]}
                    gradientStartColor={'#ce6109'}
                    gradientStopColor={'#046167'}
                />
            ))}
            <BorderBeam borderWidth={2.5} colorFrom='#ce6109' colorTo='#046167' size={250} duration={12} delay={9} />
        </div>
    );
}

export default function Valeurs() {
    return (
        <section className="container min-h-[300px] py-14 relative">
            <div className="relative md:gap-8 items-center px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 lg:px-6">
                <div className="mb-4 md:mt-0 flex flex-col items-start">
                    <h2 className="mb-1 text-2xl md:text-4xl tracking-tight font-saudagar text-perspectives_marron">LES VALEURS</h2>
                    <h3 className="mb-4 text-xl text-black">QUI GUIDENT NOTRE ENTREPRISE</h3>
                    <div className="flex justify-center mb-4">
                        <Image 
                            src="/images/valeur/3.jpg" 
                            alt="Valeurs de l'entreprise" 
                            className="max-w-full h-auto" 
                            width={600} 
                            height={400} 
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-center">
                    <ul className="list-disc pl-5">
                        <li className="mb-2"><span className="font-semibold">Respect</span></li>
                        <li className="mb-2"><span className="font-semibold">Discipline</span></li>
                        <li className="mb-2"><span className="font-semibold">Performance</span></li>
                        <li className="mb-2"><span className="font-semibold">Collaboration</span></li>
                        <li className="mb-2"><span className="font-semibold">Responsabilité</span></li>
                    </ul>
                    <p className="mt-4 text-sm">Respect, Discipline et Performance : les piliers de notre démarche.</p>
                </div>
            </div>
        </section>
    );
}