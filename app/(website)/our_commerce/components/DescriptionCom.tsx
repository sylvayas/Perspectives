"use client";

import { useState } from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";

interface Product {
  id: string;
  title: string;
  description: {
    intro: string;
    features: string[];
    callToAction: string;
  };
  src: string;
}

// Données des produits
const allProducts: Product[] = [
  {
    id: "1",
    title: "Gazinière 4 Feux – UltraPro",
    description: {
      intro: "Cuisinez comme un chef avec la gazinière UltraPro à 4 feux, conçue pour une performance optimale et une durabilité exceptionnelle.",
      features: [
        "4 brûleurs puissants pour une cuisson rapide",
        "Four intégré avec grille réglable",
        "Finition en acier inoxydable",
        "Allumage automatique",
      ],
     
      callToAction: "Commandez maintenant et profitez d'une livraison rapide à Abidjan !",
    },
    src: "/images/four4feu.jpg",
  },
  {
    id: "2",
    title: "Gazinière 6 Feux – MasterChef",
    description: {
      intro: "La gazinière MasterChef 6 feux est idéale pour les grandes familles ou les professionnels, offrant une puissance et une polyvalence incomparables.",
      features: [
        "6 brûleurs pour une cuisson simultanée",
        "Four spacieux avec éclairage interne",
        "Revêtement antiadhésif facile à nettoyer",
        "Sécurité gaz intégrée",
      ],
    
      callToAction: "Commandez dès aujourd'hui pour une cuisine performante !",
    },
    src: "/images/four6feu.jpg",
  },
  {
    id: "3",
    title: "Télévision LED 43'' – SmartVision",
    description: {
      intro: "Profitez d'une expérience visuelle immersive avec la télévision LED SmartVision 43 pouces, parfaite pour vos soirées cinéma.",
      features: [
        "Écran Full HD 43 pouces",
        "Connectivité Wi-Fi et Smart TV intégrée",
        "Ports HDMI et USB multiples",
        "Son stéréo clair",
      ],
     
      callToAction: "Commandez maintenant pour une livraison rapide !",
    },
    src: "/images/tv43.jpg",
  },
  {
    id: "4",
    title: "Télévision LED 55'' – UltraHD",
    description: {
      intro: "La télévision UltraHD 55 pouces offre une qualité d'image 4K exceptionnelle pour un divertissement sans compromis.",
      features: [
        "Résolution 4K Ultra HD",
        "Applications de streaming préinstallées",
        "Design élégant et fin",
        "Télécommande intelligente",
      ],
  
      callToAction: "Passez au niveau supérieur avec UltraHD !",
    },
    src: "/images/tv55.jpg",
  },
  {
    id: "5",
    title: "Chauffe-eau Électrique 50L – AquaComfort",
    description: {
      intro: "L'AquaComfort 50L garantit une eau chaude constante pour votre confort quotidien, avec une efficacité énergétique optimale.",
      features: [
        "Capacité de 50 litres",
        "Régulation thermostatique",
        "Installation facile",
        "Résistance anticorrosion",
      ],
 
      callToAction: "Commandez pour un confort optimal !",
    },
    src: "/images/chauffe.jpg",
  },
  {
    id: "6",
    title: "Micro-ondes 25L – QuickHeat",
    description: {
      intro: "Le micro-ondes QuickHeat 25L est parfait pour réchauffer, décongeler ou cuire rapidement vos plats préférés.",
      features: [
        "Capacité de 25 litres",
        "5 niveaux de puissance",
        "Fonction décongélation rapide",
        "Commandes digitales",
      ],
  
      callToAction: "Simplifiez votre cuisine avec QuickHeat !",
    },
    src: "/images/four.webp",
  },
];

export default function ProductGallery() {
  const [selectedImage, setSelectedImage] = useState<Product | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentProducts, setCurrentProducts] = useState<Product[]>([]);

  const openLightbox = (image: Product, index: number, products: Product[]): void => {
    setSelectedImage(image);
    setCurrentIndex(index);
    setCurrentProducts(products);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setCurrentProducts([]);
  };

  const goToPrevious = () => {
    const newIndex = (currentIndex - 1 + currentProducts.length) % currentProducts.length;
    setSelectedImage(currentProducts[newIndex]);
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % currentProducts.length;
    setSelectedImage(currentProducts[newIndex]);
    setCurrentIndex(newIndex);
  };

  const getProductLink = () => "/products/details"; // Lien générique pour la boutique

  return (
    <div className="flex flex-col mb-12  min-h-screen">
      <div className="container px-4 py-12 md:px-6 md:py-24 flex-grow">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nos Produits</h1>
          <p className="text-muted-foreground md:text-xl max-w-[800px]">
            Découvrez notre sélection de gazinières, télévisions, chauffe-eau et micro-ondes de qualité.
          </p>
        </div>

        <Tabs defaultValue="gasCookers" className="mt-8">
          <TabsList className="grid grid-cols-1 w-full">
            <TabsTrigger value="gasCookers">Tout nos produits</TabsTrigger>
          </TabsList>
          <TabsContent value="gasCookers" className="mt-6">
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {allProducts.map((product, index) => (
                <div
                  key={product.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => openLightbox(product, index, allProducts)}
                  onKeyDown={(e) => e.key === "Enter" && openLightbox(product, index, allProducts)}
                  className="overflow-hidden rounded-lg shadow-md cursor-pointer group"
                  aria-label={`Ouvrir les détails de ${product.title}`}
                >
                  <div className="relative aspect-square min-h-[200px]">
                    <Image
                      src={product.src || "/placeholder.svg"}
                      alt={product.title}
                      fill
                      sizes="100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-3 text-white">
                        <h3 className="font-medium text-sm">{product.title}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            className="absolute top-4 right-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70"
            onClick={closeLightbox}
            aria-label="Fermer le lightbox"
          >
            <X className="h-6 w-6" />
          </button>
          <button
            className="absolute left-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70"
            onClick={goToPrevious}
            aria-label="Image précédente"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <div className="relative w-full max-w-4xl h-[80vh] flex flex-col md:flex-row gap-4">
            <div className="relative w-full md:w-1/2 h-[40vh] md:h-full">
              <Image
                src={selectedImage.src || "/placeholder.svg"}
                alt={selectedImage.title}
                fill
                className="object-contain"
              />
            </div>
            <div className="w-full md:w-1/2 bg-black/70 p-6 text-white overflow-y-auto">
              <h3 className="font-bold text-xl mb-2">{selectedImage.title}</h3>
              <div className="text-sm space-y-4">
                <p>{selectedImage.description.intro}</p>
                <div>
                  <h4 className="font-semibold">Caractéristiques</h4>
                  <ul className="list-disc pl-5">
                    {selectedImage.description.features.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                
                <p>{selectedImage.description.callToAction}</p>
              </div>
             
            </div>
          </div>
          <button
            className="absolute right-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70"
            onClick={goToNext}
            aria-label="Image suivante"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </div>
  );
}