import "@/styles/globals.css"
import { Metadata } from "next"
import PlausibleProvider from "next-plausible"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import Footer from "@/components/Home/Footer"
import { SiteHeader } from "@/components/site-header"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"

import { ReactQueryClientProvider } from "./ReactQueryClientProvider"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "ReadME",
    "ReadME Generator",
    "ReadME Template",
    "Markdown",
    "Template",
    "ReadME.md",
  ],
  robots: "follow, index",
  authors: [{ name: "Shaan Khan", url: "https://twitter.com/ShaanCoding" }],
  creator: "Shaan Khan",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  metadataBase: new URL("https://makeread.me"),
  openGraph: {
    type: "website",
    url: "https://makeread.me/",
    title: siteConfig.name,
    description: siteConfig.description,
    images: "/og-image.png",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: "/og-image.png",
    site: "@ShaanCoding",
    creator: "@ShaanCoding",
  },
  referrer: "no-referrer-when-downgrade",
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head>
          <PlausibleProvider domain="makeread.me" />
        </head>

        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <ReactQueryClientProvider>
            <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
              <div className="relative flex min-h-screen flex-col overflow-hidden">
                <SiteHeader />
                <div className="flex-1">{children}</div>
                <Footer />
              </div>
              <TailwindIndicator />
            </ThemeProvider>
          </ReactQueryClientProvider>
        </body>
      </html>
    </>
  )
}
