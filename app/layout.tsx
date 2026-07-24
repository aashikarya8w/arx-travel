import type { Metadata } from "next";
import { Inter, Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

// 1. Configure Next.js Google Font instances
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

// 2. SEO & Site Metadata
export const metadata: Metadata = {
  title: "ARX Travels - Journey Beyond Limits",
  description:
    "Bespoke domestic and international travel experiences curated by global experts.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${inter.variable} ${playfair.variable} ${poppins.variable}`}
    >
      <head>
        {/* Material Symbols Outlined Icon Font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=block"
        />
      </head>
      <body className="bg-surface text-on-background font-sans overflow-x-hidden antialiased">
        {children}
      </body>
    </html>
  );
}