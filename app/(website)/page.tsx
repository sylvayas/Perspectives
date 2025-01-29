import Hero from "@/components/website/Hero";
import Services from "@/components/website/Services/services";
import ShowcasePartenaires from "@/components/website/Partenaires/showcasepartenaires";
import Offres from "@/components/website/Offre/offres";
import About from "@/components/website/About/about";
import Statistiques from "@/components/website/Statistiques/statistiques";

export default async function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Offres />
      <ShowcasePartenaires />
      <About />
      <Statistiques />
    </div>
  );
}
