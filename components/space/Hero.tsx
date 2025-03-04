import React from 'react';
import HeroCarousel from '../ui/hero-carousel/hero-carousel';
import { cn } from '@/lib/utils';
import Link from 'next/link'; // Assurez-vous d'importer Link de Next.js
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
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
        <section className="relative max-w-[1400px] mx-auto">
            <div className={cn("h-[80vh] md:h-[570px] relative container px-0")}>
                <img src="/images/perspective/immobilier.jpg " alt=""  className='w-full h-full object-cover backdrop-blur-1'/>
            </div>
            <Card className="w-full md:w-[300px] h-fit md:absolute z-10 top-auto left-auto right-16 bottom-3">
                <CardHeader>
                    <CardTitle>
                        <div className="relative mr-6 flex items-center space-x-2">
                            <Icons.logo_rogner className="w-24 lg:w-28" />
                        </div>
                    </CardTitle>
                </CardHeader>
                <CardContent className='grid grid-cols-1 gap-4 divide-y'>
                   
                </CardContent>
                <CardFooter>
                    <Link href="/reservation" className="w-full">
                        <Button className='w-full'>Réserver mon espace</Button>
                    </Link>
                </CardFooter>
            </Card>
        </section>
    );
}