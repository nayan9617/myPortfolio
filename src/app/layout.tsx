import type { Metadata } from "next";
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nayanpatidar.vercel.app"),
  title: "Nayan Patidar — CS @ IIT Jodhpur",
  description:
    "CS undergrad at IIT Jodhpur — builder of full-stack systems that ship and scale.",
  openGraph: {
    title: "Nayan Patidar — CS @ IIT Jodhpur",
    description:
      "CS undergrad at IIT Jodhpur — builder of full-stack systems that ship and scale.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nayan Patidar — CS @ IIT Jodhpur",
    description:
      "CS undergrad at IIT Jodhpur — builder of full-stack systems that ship and scale.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-bedrock">
      <body
        className={`${fraunces.variable} ${inter.variable} ${ibmPlexMono.variable} font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
