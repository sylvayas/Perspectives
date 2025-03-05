import { Icons } from "@/components/icons";
import GridPattern from "@/components/magicui/grid-pattern";
import { cn } from "@/lib/utils";

export default function SubSection() {
  return (
    <section className="relative mb-14">
      <h2 className="my-4 text-center sm:text-lg md:text-xl lg:text-2xl tracking-tight font-semibold">
      coucou
      </h2>
      
        <div className="container flex flex-wrap justify-around py-8 md:py-4 bg-black text-white">
        je suis tania 
        </div>
     
     
      <GridPattern
        squares={[
          [4, 4],
          [5, 1],
          [8, 2],
          [5, 3],
          [5, 5],
          [10, 10],
          [12, 15],
          [15, 10],
          [10, 15],
          [15, 10],
          [10, 15],
          [15, 10],
        ]}
        className={cn(
          "[mask-image:radial-gradient(400px_circle_at_center,black)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
        )}

        
      />
    </section>
  );
}
