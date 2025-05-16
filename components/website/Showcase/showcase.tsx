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
       
        {/* Text Section */}
     <div className="w-full ml-24 lg:w-3/4 space-y-6 text-neutral-700 dark:text-neutral-300">
  <p className="text-lg leading-relaxed font-medium tracking-wider">
    <span className="text-3xl leading-relaxed text-[#8E421C] font-bold">Perspectives</span> est une entreprise à vision
    globale, structurée autour de quatre pôles complémentaires : la finance,
    l’immobilier haut de gamme, le transport et le commerce général. Nous nous
    adressons à une clientèle exigeante, attachée à la qualité, à la rigueur et à la
    performance.
  </p>
</div>
      </div>
    </section>
  );
}