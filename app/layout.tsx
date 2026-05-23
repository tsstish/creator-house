import "./globals.css";
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
      <body>{children}</body>
    </html>
  );
}
