import type { Metadata } from "next";
import { Inter, Inconsolata } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const inconsolata = Inconsolata({
  subsets: ["latin"],
  variable: "--font-code",
});

export const metadata: Metadata = {
  title: "Matheus Tiburcio | My Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`scroll-smooth antialiased ${inconsolata.variable}`}
      lang="en"
    >
      <body className={inter.className}>{children}</body>
    </html>
  );
}
