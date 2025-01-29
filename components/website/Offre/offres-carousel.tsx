import * as React from "react";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const offres = [
  {
    id: 1,
    image: "/images/offres/offrePage/Finance.png",
    title: "Finance",
    subdescription: "Montage de structuration de dossiers de financement.",
  },
  {
    id: 2,
    image: "/images/offres/offrePage/Immobilier - Logistique.png",
    title: "Immobilier - Logistique",
    subdescription: "Intermédiationen Achat et Vente, BTP - Construction et Promotion immobilière",
  },
  {
    id: 3,
    image: "/images/offres/offrePage/Transit - Transport.png",
    title: "Transit - Transport",
    subdescription: "Service de dédouanement, Transporteur de marchandises",
  },
  {
    id: 4,
    image: "/images/offres/offrePage/Commerce général.png",
    title: "Commerce général",
    subdescription: "Entrepôts, Hangars, Plateformes Logistique",
  },
];

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
            <div className="p-2">
              <Card className="group/solution_item">
                <CardContent className="flex relative w-full aspect-square items-center justify-center h-[350px] xl:h-[400px]">
                  <CardHeader>
                    <div className="absolute bg-black/20 top-0 left-0 w-full h-full z-[1]"></div>
                    <Image
                      className="object-cover"
                      src={data.image}
                      alt={data.title}
                      fill
                    />
                  </CardHeader>
                  <div className="relative z-10 flex flex-col items-center justify-end h-full p-4 text-center">
                    <CardTitle className="text-white font-saudagar">{data.title}</CardTitle>
                    <CardDescription className="text-white pb-4 px-2">
                      {data.subdescription}
                    </CardDescription>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}