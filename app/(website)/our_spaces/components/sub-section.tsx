import { Icons } from "@/components/icons";
import GridPattern from "@/components/magicui/grid-pattern";
import { cn } from "@/lib/utils";

export default function SubSection() {
  return (
    <section className=" mb-80 text-black py-16 px-6 relative overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-extralight text-center mb-12 tracking-wide">
        Nos services
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {cardData.map((card, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center text-center p-6 bg-[#F4E0D7] rounded-xl shadow-lg transition-all duration-300 hover:bg-perspectives_marron hover:shadow-xl hover:-translate-y-1"
          >
            <span className="text-4xl mb-4">{card.icon}</span>
            <h3 className="text-lg font-semibold text-black mb-3">{card.title}</h3>
            <p className="text-sm text-black leading-relaxed">{card.description}</p>
          </div>
        ))}
      </div>

      
    </section>
  );
}

const cardData = [
  {
    icon: "🏭", // ou 🧑‍💼 ou 🏢 selon le ton
    title: "Création et accompagnement des entreprises",
    description:
      "Un service professionnel visant à soutenir les entrepreneurs ou porteurs de projets dans le processus de lancement et de développement de leur entreprise.",
  },
  {
    icon: "📈", // pour la croissance/placement — alternative : 💹 ou 🧾
    title: "Conseil et négociation des projets de placement",
    description:
      "Service spécialisé visant à accompagner des particuliers ou des entreprises dans la sélection, l'évaluation et la mise en œuvre de stratégies d'investissement pour optimiser la valorisation de leur patrimoine.",
  },
  {
    icon: "🗂️", // pour les dossiers structurés — alternative : 🧾 ou 📂
    title: "Montage de structuration de dossiers de financement",
    description:
      "Processus de préparation et d'organisation d'un ensemble de documents et d'informations nécessaires pour obtenir un financement auprès d'institutions financières, d'investisseurs ou d'autres partenaires.",
  },
];

const gridSquares = [
  [4, 4], [5, 1], [8, 2], [5, 3], [5, 5],
  [10, 10], [12, 15], [15, 10], [10, 15],
  [15, 10], [10, 15], [15, 10]
];