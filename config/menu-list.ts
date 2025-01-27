import { LucideIcon } from "lucide-react";
import { Icons } from "@/components/icons";

type Submenu = {
  href: string;
  label: string;
  active: boolean;
};

type Menu = {
  href: string;
  label: string;
  active: boolean;
  icon: LucideIcon;
  submenus: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

// Fonction pour créer un menu
function createMenu(href: string, label: string, icon: LucideIcon, submenus: Submenu[], pathname: string): Menu {
  return {
    href,
    label,
    active: pathname.includes(href),
    icon,
    submenus
  };
}

// Fonction principale pour obtenir la liste des menus
export function getMenuList(pathname: string): Group[] {
  const menus = [
    {
      groupLabel: "",
      href: "/",
      label: "Accueil",
      icon: Icons.home,
      submenus: []
    },
    {
      groupLabel: "Services",
      href: "/services",
      label: "Nos Services",
      icon: Icons.library,
      submenus: [
        { href: "/services/patrimoine_financier", label: "Patrimoine Financier", active: pathname === "/services/patrimoine_financier" },
        { href: "/services/immobilier", label: "Immobilier", active: pathname === "/services/immobilier" },
        { href: "/services/transport", label: "Transport", active: pathname === "/services/transport" },
        { href: "/services/equipement_maison", label: "Équipement de Maison", active: pathname === "/services/equipement_maison" },
      ]
    },
    {
      groupLabel: "Ressources",
      href: "/resources",
      label: "Ressources",
      icon: Icons.library,
      submenus: [
        { href: "/resources/documents", label: "Documents à Télécharger", active: pathname === "/resources/documents" },
        { href: "/resources/faq", label: "FAQ", active: pathname === "/resources/faq" },
      ]
    },
    {
      groupLabel: "Actualités",
      href: "/news",
      label: "Actualités",
      icon: Icons.calendar,
      submenus: []
    },
    {
      groupLabel: "",
      href: "/about",
      label: "À Propos",
      icon: Icons.about,
      submenus: []
    },
    {
      groupLabel: "",
      href: "/contact_us",
      label: "Contact",
      icon: Icons.phone,
      submenus: []
    },
  ];

  return menus.map(({ groupLabel, href, label, icon, submenus }) => ({
    groupLabel,
    menus: [createMenu(href, label, icon, submenus, pathname)]
  }));
}