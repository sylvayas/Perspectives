import Link from "next/link";
import Image from "next/image";
// import { Saudagar } from "@/components/fonts"; // Assuming Saudagar font is defined

// Interface pour les documents
interface Document {
  id: number;
  title: string;
  description: string;
  category: string;
  previewImage: string;
  pdfPath: string;
}

// Données fictives pour les documents
const documents: Document[] = [
  {
    id: 1,
    title: "Brochure Finance",
    description: "Découvrez nos solutions de gestion patrimoniale et de financement sur mesure.",
    category: "Finance",
    previewImage: "/images/Projet RAWDA.png",
    pdfPath: "/images/RAWDA - Présentation Numérique.pdf",
  },

];

export default function DocumentsPage() {
  return (
    <section className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
      {/* En-tête */}
      <div className="text-center mb-12">
        {/* <h1
          className={`text-novis_yellow text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight ${Saudagar.className}`}
        >
          Nos Documents Téléchargeables
        </h1> */}
        <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
          Téléchargez nos brochures détaillées pour découvrir nos services exclusifs en finance, immobilier, transport et commerce.
        </p>
      </div>

      {/* Grille de cartes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 ml-[420px] w-full lg:grid-cols-3 gap-6">
        {documents.map((doc) => (
          <div
            key={doc.id}
            className="bg-white dark:bg-neutral-800 rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105"
          >
            <Image
              src={doc.previewImage}
              alt={`Aperçu de ${doc.title}`}
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200">
                {doc.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                {doc.description}
              </p>
              <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-500">
                Catégorie : {doc.category}
              </p>
              <Link
                href={doc.pdfPath}
                download
                target="_blank"
                className="mt-4 inline-block bg-novis_yellow text-neutral-900 font-medium py-2 px-4 rounded-lg hover:bg-yellow-400 transition-colors"
              >
                Télécharger le PDF
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Call-to-action */}
      <div className="text-center mt-12">
        <p className="text-lg text-neutral-600 dark:text-neutral-400">
          Besoin d’informations supplémentaires ?{" "}
          <Link
            href="/contact"
            className="text-novis_yellow hover:underline"
          >
            Contactez-nous
          </Link>
        </p>
      </div>
    </section>
  );
}