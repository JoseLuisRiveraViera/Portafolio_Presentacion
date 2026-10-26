import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { SitePreferencesProvider } from "@/components/site-preferences";
import { getLocale } from "@/lib/server-locale";
import { messages } from "@/lib/messages";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return messages[locale].metadata;
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  return (
    // Browser extensions may inject attributes such as data-mbtss-nonce here.
    // Keep the exception at the document root; descendants still report mismatches.
    <html lang={locale} className="scroll-smooth" suppressHydrationWarning>
      <body className={`${manrope.variable} ${manrope.className} antialiased`}>
        <SitePreferencesProvider locale={locale}>{children}</SitePreferencesProvider>
      </body>
    </html>
  );
}
