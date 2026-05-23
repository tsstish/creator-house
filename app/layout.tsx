import "./globals.css";
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
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
