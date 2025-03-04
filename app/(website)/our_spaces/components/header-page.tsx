import { Icons } from "@/components/icons";
import NumberTicker from "@/components/magicui/number-ticker";
import Image from "next/image";
// import imgback from "@/public/images/perspective/coworking (1).jpg"

export default function HeaderPage() {

    return (
        <>
            <section className="relative ">
                <div className="container px-0 relative max-w-[1400px]">
                   
                    {/* image background */}
                    {/* <Image
                        fill
                        src={imgback}
                        alt="img back"
                        placeholder={"blurDataURL" in imgback ? "blur" : undefined}
                        className=" object-cover"
                    /> */}
                </div>
            </section >
            <section className="relative">
                <div className="container grid grid-cols-2 gap-4 md:grid-cols-4 py-2 md:py-4 bg-gray-200">
                    <p className="font-medium text-xs md:text-sm">Conseil </p>
                    <p className="font-medium text-xs md:text-sm">Accompagnement </p>
                    <p className="font-medium text-xs md:text-sm">Création de compte</p>
                    <p className="font-medium text-xs md:text-sm">Prendre rendez-vous</p>
                </div>
            </section>
        </>
    );
}
