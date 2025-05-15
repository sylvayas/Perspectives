import Image from "next/image";
// import { Saudagar } from "@/components/fonts"; // Assuming Saudagar font is defined in your project

export default function Showcase() {
  return (
    <section id="showcase" className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
      {/* <h2
        className={`text-novis_yellow mb-6 text-center font-medium text-3xl sm:text-4xl lg:text-5xl tracking-tight ${Saudagar.className}`}
      >
        À Propos de Perspectives
      </h2> */}
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex-shrink-0">
          <div className="relative w-full aspect-[3/2] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/Entreprise Multiservice.png" // Replace with actual image path
              alt="Perspectives Company"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
        {/* Text Section */}
        <div className="w-full lg:w-1/2 space-y-6 text-neutral-700 dark:text-neutral-300">
          <p className="text-lg leading-relaxed font-medium">
            <span className=" text-base leading-relaxed ">Perspectives</span> est une entreprise à vision
            globale, structurée autour de quatre pôles complémentaires : la finance,
            l’immobilier haut de gamme, le transport et le commerce général. Nous nous
            adressons à une clientèle exigeante, attachée à la qualité, à la rigueur et à la
            performance.
          </p>
          <p className="text-base leading-relaxed">
            Dans le domaine financier, nous accompagnons particuliers et entreprises dans la
            gestion, l’optimisation et la valorisation de leur patrimoine, en leur proposant
            des solutions sur mesure, pensées pour produire des résultats concrets,
            sécurisés et durables.
          </p>
          <p className="text-base leading-relaxed">
            Notre pôle immobilier se concentre sur la location et la construction
            d’appartements de haut standing. Chaque bien est sélectionné ou conçu avec une
            attention particulière portée aux détails, à l’emplacement et aux finitions.
          </p>
          <p className="text-base leading-relaxed">
            Dans le secteur du transport, nous mettons en place une logistique efficace et
            fiable, adaptée aux exigences de rapidité et de sécurité du marché actuel. Nous
            assurons le déplacement des marchandises et équipements dans des conditions
            optimales, grâce à une organisation rigoureuse.
          </p>
          {/* <p className="text-base leading-relaxed">
            Enfin, notre activité de commerce général repose sur la distribution
            d’appareils électroménagers de qualité, durables, performants et adaptés à un
            style de vie élevé.
          </p>
          <p className="text-base leading-relaxed">
            Ce qui nous distingue, au-delà de notre offre multisectorielle, ce sont les
            valeurs que nous portons. <span className="font-semibold">Le respect</span>,
            d’abord : de nos engagements, de nos partenaires, de nos clients et du temps de
            chacun. <span className="font-semibold">La performance</span>, ensuite : nous
            nous engageons à produire des résultats mesurables, à travers des services
            pensés pour être efficaces, pertinents et fiables. Et enfin, la volonté
            constante de répondre pleinement au niveau d’exigence de notre clientèle nous
            pousse à viser l’excellence dans tout ce que nous faisons.
          </p>
          <p className="text-lg font-semibold italic text-novis_yellow">
            PersPectives, c’est une manière différente de voir l’entreprise : plus
            stratégique, plus sélective, plus engagée. Allons loin ensemble.
          </p> */}
        </div>
      </div>
    </section>
  );
}