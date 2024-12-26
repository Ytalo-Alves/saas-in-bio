import "./globals.css";
import { Red_Hat_Display } from "next/font/google";

const redHetDisplay = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${redHetDisplay.className} bg-BACKGROUND-PRIMARY text-CONTENT-BODY antialiased`}>
        {children}
      </body>
    </html>
  );
}
