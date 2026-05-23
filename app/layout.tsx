import "./globals.css";
import { Inter, Cormorant_Garamond } from "next/font/google";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  variable: "--font-display",
});

export const metadata = {
  title: "Creator House",
  description: "Professional Creator Profile",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} ${cormorant.variable}`}>
        {children}
      </body>
    </html>
  );
}
