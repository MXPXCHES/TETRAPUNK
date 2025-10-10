import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const pixellari = localFont({
  src: "../../public/fonts/Pixellari.woff2",
  variable: "--font-pixellari",
});

const kubasta = localFont({
  src: "../../public/fonts/Kubasta.woff2",
  variable: "--font-kubasta",
});

export const metadata: Metadata = {
  title: "TETRAPUNK",
  description: "Buscando tesoros en la basura 🦝",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pixellari.variable} ${kubasta.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
