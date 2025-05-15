import { Icons } from "@/components/icons";
import GridPattern from "@/components/magicui/grid-pattern";
import { cn } from "@/lib/utils";
import Image from 'next/image'; // Import the Image component


export default function SubSection() {
  return (
   <>
    <section className="relative">
      <div className="py-8 px-4 md:px-16 mx-auto max-w-screen-xl container lg:py-16">
        <div className="flex flex-col md:flex-row items-center">
          {/* Texte */}
          <div className="max-w-screen-lg text-gray-700 sm:text-lg md:w-1/2 mb-8 md:mb-0">
            <h2 className="mb-10 text-4xl tracking-tight font-bold font-saudagar text-perspectives_marron">
              QUI SOMMES-NOUS
            </h2>
            <p className="font-light text-sm mb-4">
              Perspectives est une entreprise à vision globale, structurée autour de quatre pôles
              complémentaires : la finance, l’immobilier haut de gamme, le transport et le commerce
              général. Nous nous adressons à une clientèle exigeante, attachée à la qualité, à la rigueur et
              à la performance. 
            </p>
            <p className="mb-4 text-sm font-light">
              Dans le domaine financier, nous accompagnons particuliers et entreprises dans la gestion,
              l’optimisation et la valorisation de leur patrimoine, en leur proposant des solutions sur
              mesure, pensées pour produire des résultats concrets, sécurisés et durables.

            </p>
            <p className="mb-4 text-sm font-light">
              Notre pôle immobilier se concentre sur la location et la construction d’appartements de
              haut standing. Chaque bien est sélectionné ou conçu avec une attention particulière portée
              aux détails, à l’emplacement et aux finitions.
            </p>
            <p className="mb-4 font-light text-sm">
              Dans le secteur du transport, nous mettons en place une logistique efficace et fiable,
              adaptée aux exigences de rapidité et de sécurité du marché actuel. Nous assurons le
              déplacement des marchandises et équipements dans des conditions optimales, grâce à une
              organisation rigoureuse. Enfin, notre activité de commerce général repose sur la
              distribution d’appareils électroménagers de qualité, durables, performants et adaptés à un
              style de vie élevé.

            </p>
            <p className="mb-4 text-sm font-light">
              Ce qui nous distingue, au-delà de notre offre multisectorielle, ce sont les valeurs que nous
              portons.
              Le respect, d’abord : de nos engagements, de nos partenaires, de nos clients et du temps de
              chacun. 
            </p>
            <p className="mb-4 font-light text-sm">
              Et enfin, la volonté constante de répondre pleinement au niveau d’exigence de notre
              clientèle nous pousse à viser l’excellence dans tout ce que nous faisons. PersPectives, c’est
              une manière différente de voir l’entreprise : plus stratégique, plus sélective, plus engagée.
              Allons loin ensemble.
            </p>
          </div>

          {/* Image section */}
          <div className="md:w-1/2 flex justify-center">
            <Image 
              src="/images/valeur/4.jpg" // Utilise un chemin relatif
              alt="Qui sommes-nous" 
              className="max-w-full h-auto rounded-lg shadow-lg" // Ajoute des styles pour un meilleur rendu
              width={400} // Specify width
              height={300} // Specify height
              style={{ maxWidth: '400px' }} // Ajuste la taille si nécessaire
            />
          </div>
        </div>
      </div>

 
    </section>

   </>
  );
}