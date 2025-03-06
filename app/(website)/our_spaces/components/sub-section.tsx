import { Icons } from "@/components/icons";
import GridPattern from "@/components/magicui/grid-pattern";
import { cn } from "@/lib/utils";

export default function SubSection() {
  return (
    <section className="bg-[#0d1b2a] text-white py-12 px-6 relative">
      <h2 className="text-3xl md:text-4xl font-light text-center mb-8">
       Nos services
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/** Liste des cartes */}
        {cardData.map((card, index) => (
          <div key={index} className="flex flex-col items-center text-center p-6 bg-[#14273e] rounded-lg shadow-lg">
            <span className="text-4xl">{card.icon}</span>
            <h3 className="text-lg font-bold mt-2">{card.title}</h3>
            <p className="text-sm text-gray-300 mt-2">{card.description}</p>
          </div>
        ))}
      </div>
      <GridPattern
        square={gridSquares}
        className={cn(
          "[mask-image:radial-gradient(400px_circle_at_center,black)]",
          " absolute inset-x-0  skew-y-10"
        )}
      />
     
    </section>
    
  );
  
}

const cardData = [
  { icon: "🏢", title: "Finance d'entreprise", description: "Gestion proactive des finances pour maximiser la performance et soutenir l’innovation au sein de l’entreprise." },
  { icon: "💰", title: "Finance personnelle", description: "Planification financière personnalisée pour atteindre vos objectifs et garantir un avenir financier serein." },
  { icon: "📊", title: "Finance de marché", description: "Investissements stratégiques sur les marchés financiers pour maximiser le rendement et gérer les risques." },
  { icon: "🌍", title: "Finance internationale", description: "Gestion des flux financiers internationaux pour stimuler la compétitivité et favoriser la stabilité économique mondiale" },
  { icon: "🏦", title: "Finance bancaire", description: "Gestion des services financiers fournis par les banques, incluant les prêts, l’épargne et les investissements, afin de soutenir l’économie et assurer la stabilité financière." },
  { icon: "📈", title: "Finance d'Investissement", description: "gestion de portefeuilles d'actifs financiers, et la recherche de solutions pour optimiser la rentabilité sur le long terme." },
];

const gridSquares = [
  [4, 4], [5, 1], [8, 2], [5, 3], [5, 5],
  [10, 10], [12, 15], [15, 10], [10, 15],
  [15, 10], [10, 15], [15, 10]
];
