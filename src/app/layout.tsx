import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppFAB } from "@/components/layout/whatsapp-fab";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "CryoMax Industrial - Commercial Freeze Dryers & Ultra-Low Temperature Equipment",
    template: "%s | CryoMax Industrial",
  },
  description:
    "CryoMax Industrial manufactures commercial freeze dryers, -80 degree C ultra-low temperature freezers, and environmental test chambers for food, pharmaceutical, and laboratory applications worldwide.",
  keywords: [
    "commercial freeze dryer",
    "industrial freeze dryer",
    "ultra low temperature freezer",
    "humidity chamber",
    "lyophilizer",
    "environmental test chamber",
    "food freeze drying equipment",
  ],
  metadataBase: new URL("https://cryomax-industrial.com"),
  openGraph: {
    type: "website",
    siteName: "CryoMax Industrial",
    title: "CryoMax Industrial - Precision Refrigeration Equipment",
    description:
      "Commercial freeze dryers, ultra-low temperature freezers, and environmental test chambers for global industrial applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="dark h-full antialiased"
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFAB />
      </body>
    </html>
  );
}
