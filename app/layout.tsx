import type { Metadata } from "next";
import "./globals.css"; // Importation des styles globaux
import { cn } from "@/lib/utils"; // Fonction utilitaire pour gérer les classes CSS

export const metadata: Metadata = {
  title: "Perspectives",
  description: "Perspectives",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Book+Antique&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={cn(
        `relative flex min-h-screen w-full flex-col justify-center 
        overflow-x-hidden scroll-smooth bg-background antialiased
        `
      )}>
        {children}
      </body>
    </html>
  );
}