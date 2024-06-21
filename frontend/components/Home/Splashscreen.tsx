"use client"

import Link from "next/link"
import { motion } from "framer-motion"

import { siteConfig } from "@/config/site"

import { Button } from "../ui/button"

const Splashscreen = () => {
  return (
    <div className="relative my-12 flex w-full items-center justify-between">
      <div className="lg:flex lg:flex-row-reverse lg:items-center lg:justify-between lg:gap-12">
        <motion.div
          className="pb-12 lg:flex lg:w-1/3 lg:items-start lg:justify-end lg:pb-0 xl:w-1/2"
          viewport={{ once: true, amount: 0.5 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ type: "spring", stiffness: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <img
            className="w-full lg:h-[496px] lg:w-auto"
            src="/icons/hero.svg"
            alt="Hero"
          />
        </motion.div>

        <motion.div
          className="lg:w-2/3 xl:w-1/2"
          viewport={{ once: true, amount: 0.5 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ type: "spring", stiffness: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h2 className="pb-2 text-xl font-semibold">
            {siteConfig.homePage.splashScreen.subtitle}
          </h2>
          <h1 className="pb-6 text-4xl font-bold text-white md:text-6xl 2xl:text-8xl">
            {siteConfig.homePage.splashScreen.title}
          </h1>
          <p className="mb-6">{siteConfig.homePage.splashScreen.description}</p>
          <Link href={siteConfig.homePage.splashScreen.cta.href}>
            <Button className="py-6">
              {siteConfig.homePage.splashScreen.cta.title}
            </Button>
          </Link>
        </motion.div>
      </div>
      <div
        className="absolute left-[10%]
          top-0 z-[-1] size-full translate-x-[-50%] translate-y-[-50%] rounded-[780px] bg-themeGreen opacity-80 blur-[350px]"
      ></div>
    </div>
  )
}

export default Splashscreen
