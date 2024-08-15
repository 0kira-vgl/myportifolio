import type { Metadata } from "next";
import { Inter, Inconsolata } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

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
      <body className={inter.className}>
        <ThemeProvider attribute="class" enableSystem defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
