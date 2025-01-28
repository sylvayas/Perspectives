import * as React from "react"
import ServicesCarousel from "./services-carousel"

export default function Services() {
    return (
        <section id="showcase" className="container px-2 md:px-8 py-14">
            <h2 className="text-novis_yellow mb-2 text-center font-medium text-2xl md:text-4xl tracking-tight font-saudagar">
                Nos Services
            </h2>
            <h3 className="mx-auto mb-8 text-balance text-center text-lg font-medium tracking-tight text-foreground/80">
                Nos Services s&apos;adaptent à vos besoins et à votre budget !
            </h3>

            <ServicesCarousel />
        </section>

    )
}
