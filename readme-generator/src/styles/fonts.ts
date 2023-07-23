import { Inter, Manrope, Plus_Jakarta_Sans, Poppins } from "next/font/google"

export const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: "500",
  display: "swap",
})

export const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: "500",
  display: "swap",
})

export const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: "500",
  display: "swap",
})

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: "500",
  display: "swap",
})
