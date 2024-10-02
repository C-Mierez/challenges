import CategoriesList from "@/components/categoriesList";
import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Migrado Libre",
  description: "La tienda de Don Miguel, libre de amarillos",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="grid min-h-screen grid-rows-[auto,1fr,auto] px-4">
        <header className="text-xl font-bold leading-[3rem]">
          Migrado Libre
        </header>
        <main className="relative grid grid-cols-[1fr,4fr] gap-4 py-8">
          <CategoriesList />
          {children}
        </main>
        <footer className="text-center leading-[3rem] opacity-70">
          © {new Date().getFullYear()} Don Miguel
        </footer>
      </body>
    </html>
  );
}
