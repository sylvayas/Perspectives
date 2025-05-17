import React from 'react'
import Image from 'next/image';
import { BorderBeam } from '@/components/magicui/border-beam';

const Multiservices = () => {
  return (
      <>
       <section className="container min-h-[400px] py-4 relative   dark:from-gray-900 dark:to-gray-800">
  
              <div className="relative gap-8 items-center py-6 px-6 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-8">
                  <div className="relative overflow-hidden rounded-tr-[40px] rounded-bl-[40px]  shadow-lg transition-transform duration-300 hover:scale-105">
                      <Image 
                          className="w-full h-full object-cover" 
                          src="/images/finance/analyse financière.jpg" 
                          alt="finance image" 
                          width={800} 
                          height={600} 
                          priority
                      />
                      <BorderBeam className="absolute inset-0" />
                  </div>
                  <div className="mt-6 md:mt-0 flex flex-col justify-center">
                      <h2 className="text-[#8E421C]  text-4xl font-bold mb-4">
                         Dans le domaine financier
                      </h2>
                    <p className="text-lg font-medium tracking-wider mb-6 text-justify text-gray-600 md:text-lg dark:text-gray-300 transition-colors duration-300 leading-5">
                        <span className='text-[#8E421C] text-3xl font-bold'> </span> Nous accompagnons particuliers et entreprises dans la gestion, l&apos;optimisation et la valorisation de leur patrimoine, en leur proposant des solutions sur mesure, pensées pour produire des résultats concrets, sécurisés et durables.
                    </p>
                    </div>
              </div>
  
       
          </section>

           <section className="container min-h-[400px] py-4 relative  dark:from-gray-900 dark:to-gray-800">
  
              <div className="relative gap-8 items-center py-9 px-6 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-8">
               
                <div className="mt-6 md:mt-0 flex flex-col justify-center">
                      <h2 className="text-[#8E421C]  text-4xl font-bold mb-4">
                      Le pôle immobilier
                      </h2>
                    <p className="text-lg font-medium tracking-wider mb-6 text-justify text-gray-600 md:text-lg dark:text-gray-300 transition-colors duration-300 h-32">
                        <span className='text-[#8E421C] text-3xl font-bold'></span> Se concentre sur la location et la construction d&apos;appartements de haut standing.Chaque bien est selectionné ou concu avec une attention particulière portée aux  détails, a l&apos;emplacement et aux finitions
                    </p>
               </div>
                  <div className="relative overflow-hidden rounded-tr-[40px] rounded-bl-[40px] shadow-lg transition-transform duration-300 hover:scale-105">
                      <Image 
                          className="w-full h-full object-cover" 
                          src="/images/Apparts/appart b23/salon 1.0.0.png" 
                          alt="finance image" 
                          width={800} 
                          height={600} 
                          priority
                      />
                      <BorderBeam className="absolute inset-0" />
                  </div>
              </div>
  
       
          </section>

             <section className="container min-h-[400px] py-4 relative  dark:from-gray-900 dark:to-gray-800">
  
              <div className="relative gap-8 items-center py-6 px-6 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-8">
                 <div className="relative overflow-hidden rounded-tr-[40px] rounded-bl-[40px]  shadow-lg transition-transform duration-300 hover:scale-105">
                      <Image 
                          className="w-full h-full object-cover" 
                          src="/images/transport/un homme.jpg" 
                          alt="finance image" 
                          width={800} 
                          height={600} 
                          priority
                      />
                      <BorderBeam className="absolute inset-0" />
                  </div>
                <div className="mt-6 md:mt-0 flex flex-col justify-center">
                     <h2 className="text-[#8E421C] text-4xl font-bold mb-4">
                      Transit et Transport,
                    </h2>
                    <p className="text-lg font-medium tracking-wider mb-6 text-justify text-gray-600 md:text-lg dark:text-gray-300 transition-colors duration-300 leading-loose">
                        <span className='text-[#8E421C] text-3xl font-bold'></span> Nous mettons en place une logistique efficace et fiable,adaptée aux exigences de rapidité et de sécurité du marché actuel. Nous assurons le déplacement des marchandises et équipements dans des conditions optimales, grace a une organisation rigoureuse.
                    </p>
               </div>
              </div>
  
          </section>

           <section className="container min-h-[400px] py-4 relative dark:from-gray-900 dark:to-gray-800">
        <div className="relative flex flex-col gap-8 items-center py-6 px-6 mx-auto max-w-screen-xl sm:py-16 lg:px-8">
            {/* Div pour l'image, centrée */}
            <div className="flex justify-center w-full">
            <div className="relative overflow-hidden rounded-tr-[40px] rounded-bl-[40px]  shadow-lg transition-transform duration-300 hover:scale-105 max-w-full">
                <Image
                className="w-full h-full object-cover"
                src="/images/Appareil électroménagers.png"
                alt="finance image"
                width={600}
                height={500}
                priority
                />
                <BorderBeam className="absolute inset-0" />
            </div>
        </div>

            {/* Div pour le texte, centrée */}
            <div className="flex flex-col items-center text-center">
            <h2 className="text-[#8E421C] text-4xl font-bold mb-4">
            Le commerce général
            </h2>
            <p className="text-lg font-medium tracking-wider text-gray-600 md:text-lg dark:text-gray-300 transition-colors duration-300 leading-loose max-w-2xl">
               Repose sur la distribution d&apos;appareils électroménagers de qualité, durables , performants et adaptés a un style de vie élevé
            </p>
            </div>
        </div>
</section>
      </>
  )
}

export default Multiservices
