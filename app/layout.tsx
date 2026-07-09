import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Coral arte floral — Flores frescas en CDMX",
  description:
    "Ramos, arreglos, eventos y orquídeas. 60 años llevando flores a domicilio. Pide directo por WhatsApp.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600&family=Inter:wght@400;500&family=Caveat:wght@600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-tinta font-body">{children}</body>
    </html>
  );
}
