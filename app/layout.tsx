import "./globals.css";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  weight: ["600", "700"],
});
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
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
      <body className={playfair.className}>
        {children}
      </body>
    </html>
  );
}
