"use client";

import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getMenuList } from "@/config/menu-list";

export default function Footer() {
  const pathname = usePathname();
  const menuList = getMenuList(pathname);

  return (
    <footer className="bg-[#2D2421] text-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Logo and Description Section */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-1/3 gap-4">
            <Icons.logo_white className="w-16 h-16" />
            <p className="text-sm max-w-xs lg:max-w-none">
              Des solutions innovantes pour accompagner votre réussite dans tous vos projets, quels que soient vos ambitions.
            </p>
            {/* Social Media Icons */}
            <div className="flex gap-3">
              {[
                {
                  href: "https://www.facebook.com/profile.php?id=61562775252547",
                  icon: <Icons.facebook className="w-5 h-5" />,
                },
                {
                  href: "https://www.linkedin.com/company/perspectivesinternational",
                  icon: <Icons.linkedIn className="w-5 h-5" />,
                },
                {
                  href: "https://www.instagram.com/perspectives_ci",
                  icon: <Icons.instagram className="w-5 h-5" />,
                },
                { href: "", icon: <Icons.twitter className="w-5 h-5" /> },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-full text-novis_green text-black ring-1 ring-novis_yellow bg-[#F4E0D7] flex justify-center items-center hover:bg-novis_yellow transition"
                  aria-label={`Visit our ${social.href.split(".")[1]} page`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Menu and Info Sections */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Menu Section 1 */}
            <div>
              <h3 className="text-lg font-semibold uppercase">{menuList[1].menus[0].label}</h3>
              <div className="mt-4 flex flex-col gap-2">
                {menuList[1].menus[0].submenus.slice(1).map((item) => (
                  <Link
                    key={item.label}
                    href={item.href || "#"}
                    className="text-sm hover:font-semibold transition-all duration-200"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Menu Section 2 */}
            <div>
              <h3 className="text-lg font-semibold uppercase">{menuList[2].menus[0].label}</h3>
              <div className="mt-4 flex flex-col gap-2">
                {menuList[2].menus[0].submenus.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href || "#"}
                    className="text-sm hover:font-semibold transition-all duration-200"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* News Section */}
            <div>
              <h3 className="text-lg font-semibold uppercase">Actualité</h3>
              <div className="mt-4 flex flex-col gap-2">
                {menuList[4].menus[0].href && (
                  <Link
                    href={menuList[4].menus[0].href}
                    className="text-sm hover:font-semibold font-bold transition-all duration-200"
                  >
                    {menuList[4].menus[0].label}
                  </Link>
                )}
                {menuList[5].menus[0].href && (
                  <Link
                    href={menuList[5].menus[0].href}
                    className="text-sm hover:font-semibold transition-all duration-200"
                  >
                    {menuList[5].menus[0].label}
                  </Link>
                )}
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-lg font-semibold uppercase">Informations</h3>
              <div className="mt-4 flex flex-col gap-2 text-sm">
                <p>Marcory Zone 4, Immeuble Diamond Ivoire</p>
                <p>Abidjan, Côte d&apos;Ivoire</p>
                <p>Contact: +225 07-07-13-70-50</p>
                <p>Email: info@perspectivesci.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}