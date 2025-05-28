import React from 'react';
import Image from 'next/image';
import { BorderBeam } from '@/components/magicui/border-beam';
import { motion } from 'framer-motion'; // Import Framer Motion

const Multiservices = () => {
  // Animation variants for text
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  // Animation variants for images
  const imageVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <>
      {/* Section 1: Finance */}
      <section className="container min-h-[400px] py-4 relative dark:from-gray-900 dark:to-gray-800">
        <motion.div
          className="relative gap-8 items-center py-6 px-6 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          <motion.div
            className="relative overflow-hidden rounded-tr-[40px] rounded-bl-[40px] shadow-lg transition-transform duration-300 hover:scale-105"
            variants={imageVariants}
          >
            <Image
              className="w-full h-full object-cover"
              src="/images/finance/analyse financière.jpg"
              alt="finance image"
              width={800}
              height={600}
              priority
            />
            <BorderBeam className="absolute inset-0" />
          </motion.div>
          <motion.div
            className="mt-6 md:mt-0 flex flex-col justify-center"
            variants={textVariants}
          >
            <h2 className="text-[#8E421C] text-4xl font-bold mb-4">
              Dans le domaine financier
            </h2>
            <p className="text-lg font-medium tracking-wider mb-6 text-justify text-gray-600 md:text-lg dark:text-gray-300 transition-colors duration-300 leading-loose">
              Nous accompagnons particuliers et entreprises dans la gestion, l&apos;optimisation et la valorisation de leur patrimoine, en leur proposant des solutions sur mesure, pensées pour produire des résultats concrets, sécurisés et durables.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Section 2: Immobilier */}
      <section className="container min-h-[400px] py-4 relative dark:from-gray-900 dark:to-gray-800">
        <motion.div
          className="relative gap-8 items-center py-9 px-6 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          <motion.div
            className="mt-6 md:mt-0 flex flex-col justify-center"
            variants={textVariants}
          >
            <h2 className="text-[#8E421C] text-4xl font-bold mb-4">
              Le pôle immobilier
            </h2>
            <p className="text-lg font-medium tracking-wider mb-16 text-justify text-gray-600 md:text-lg dark:text-gray-300 transition-colors duration-300 h-32 leading-loose">
              Se concentre sur la location et la construction d&apos;appartements de haut standing. Chaque bien est sélectionné ou conçu avec une attention particulière portée aux détails, à l&apos;emplacement et aux finitions.
            </p>
          </motion.div>
          <motion.div
            className="relative overflow-hidden rounded-tr-[40px] rounded-bl-[40px] shadow-lg transition-transform duration-300 hover:scale-105"
            variants={imageVariants}
          >
            <Image
              className="w-full h-full object-cover"
              src="/images/Apparts/appart b23/salon 1.0.0.png"
              alt="immobilier image"
              width={800}
              height={600}
              priority
            />
            <BorderBeam className="absolute inset-0" />
          </motion.div>
        </motion.div>
      </section>

      {/* Section 3: Transport */}
      <section className="container min-h-[400px] py-4 relative dark:from-gray-900 dark:to-gray-800">
        <motion.div
          className="relative gap-8 items-center py-6 px-6 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          <motion.div
            className="relative overflow-hidden rounded-tr-[40px] rounded-bl-[40px] shadow-lg transition-transform duration-300 hover:scale-105"
            variants={imageVariants}
          >
            <Image
              className="w-full h-full object-cover"
              src="/images/transport/un homme.jpg"
              alt="transport image"
              width={800}
              height={600}
              priority
            />
            <BorderBeam className="absolute inset-0" />
          </motion.div>
          <motion.div
            className="mt-6 md:mt-0 flex flex-col justify-center"
            variants={textVariants}
          >
            <h2 className="text-[#8E421C] text-4xl font-bold mb-4">
              Transit et Transport
            </h2>
            <p className="text-lg font-medium tracking-wider mb-6 text-justify text-gray-600 md:text-lg dark:text-gray-300 transition-colors duration-300 leading-loose">
              Nous mettons en place une logistique efficace et fiable, adaptée aux exigences de rapidité et de sécurité du marché actuel. Nous assurons le déplacement des marchandises et équipements dans des conditions optimales, grâce à une organisation rigoureuse.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Section 4: Commerce Général */}
      <section className="container min-h-[400px] py-4 relative dark:from-gray-900 dark:to-gray-800">
        <motion.div
          className="relative flex flex-col gap-8 items-center py-6 px-6 mx-auto max-w-screen-xl sm:py-16 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          <motion.div
            className="flex justify-center w-full"
            variants={imageVariants}
          >
            <div className="relative overflow-hidden rounded-tr-[40px] rounded-bl-[40px] shadow-lg transition-transform duration-300 hover:scale-105 max-w-full">
              <Image
                className="w-full h-full object-cover"
                src="/images/Appareil électroménagers.png"
                alt="commerce image"
                width={600}
                height={500}
                priority
              />
              <BorderBeam className="absolute inset-0" />
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col items-center text-center"
            variants={textVariants}
          >
            <h2 className="text-[#8E421C] text-4xl font-bold mb-4">
              Le commerce général
            </h2>
            <p className="text-lg font-medium tracking-wider text-gray-600 md:text-lg dark:text-gray-300 transition-colors duration-300 leading-loose max-w-2xl">
              Repose sur la distribution d&apos;appareils électroménagers de qualité, durables, performants et adaptés à un style de vie élevé.
            </p>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default Multiservices;