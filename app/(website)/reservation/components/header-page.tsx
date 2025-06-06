import { Icons } from "@/components/icons";
import NumberTicker from "@/components/magicui/number-ticker";
import Image from "next/image";
import imgback from "@/public/images/perspective/coworking (1).jpg"

export default function HeaderPage() {

    return (
        <>
            <section className="relative ">
                <div className="container px-0 relative max-w-[1400px]">
                    <div className="relative z-[2] flex flex-col md:flex-row md:gap-x-8 justify-between bg-black/30 py-8 px-4 sm:py-16 lg:px-8">
                        <div className="max-w-screen-sm text-white text-center md:text-left">
                            <h2 className="mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-tight font-semibold">
                                Réservez maintenant vos appartements et salles de conférence en toute simplicité</h2>
                        </div>
                      
                    </div>
                    {/* image background */}
                    <Image
                        fill
                        src={imgback}
                        alt="img back"
                        placeholder={"blurDataURL" in imgback ? "blur" : undefined}
                        className=" object-cover"
                    />
                </div>
            </section >
         
        </>
    );
}
