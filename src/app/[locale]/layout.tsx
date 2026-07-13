import type { Metadata } from "next";
import { Inter, Inconsolata } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { getMessages } from "next-intl/server";
import { LocaleSwitchProvider } from "@/providers/localeSwitchProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const inconsolata = Inconsolata({
  subsets: ["latin"],
  variable: "--font-code",
});

export const metadata: Metadata = {
  title: "Matheus Tiburcio | My Portfolio",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();

  return (
    <html
      className={`scroll-pt-24 scroll-smooth antialiased ${inconsolata.variable}`}
      lang={locale}
      suppressHydrationWarning
    >
      <body className={inter.className}>
        <ThemeProvider attribute="class" enableSystem defaultTheme="system">
          <LocaleSwitchProvider
            initialLocale={locale as "en" | "pt"}
            initialMessages={messages}
          >
            {children}
          </LocaleSwitchProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
