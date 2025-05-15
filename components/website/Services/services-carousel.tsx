import * as React from "react";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
  CardContent,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { offres } from "@/config/data";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

import { cn } from "@/lib/utils";

export default function SolutionsCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-7xl mx-auto"
    >
      <CarouselContent>
        {offres.map((data, index) => (
          <CarouselItem
            key={index}
            className="sm:basis-1/2 relative lg:basis-1/4 sm:mx-2 lg:mx-1"
          >
            <div className="p-1">
              <Card className="group/solution_item">
                <CardContent className="flex relative w-full aspect-square items-center justify-center h-[350px] xl:h-[400px]">
                  <CardHeader>
                    <div className="absolute bg-black/20 top-0 left-0 w-full h-full z-[1]"></div>
                    <Image
                      className="object-cover"
                      src={data.image}
                      alt={data.image}
                      fill
                    />
                  </CardHeader>
                  <div
                    className="absolute translate-y-1/2 bottom-0 w-full flex flex-col items-center justify-center
                                    gap-2 xl:gap-4 py-4 text-center z-10 group-hover/solution_item:translate-y-1 bg-transparent 
                                    group-hover/solution_item:bg-perspectives_marron transition-all duration-500"
                  >
                    <CardTitle className="text-white font-saudagar">{data.title}</CardTitle>
                    <CardDescription className="text-white pb-24 px-2">
                      {data.subdescription}
                    </CardDescription>
                   
                  </div>
                  
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
