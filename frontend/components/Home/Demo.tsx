"use client"

import Image from "next/image"
import { motion } from "framer-motion"

import { siteConfig } from "@/config/site"

const Demo = () => {
  return (
    <div className="relative my-24 w-full">
      <div className="mb-12 text-center">
        <h2 className="font-semibold text-themeGreen">How the app works</h2>
        <h1 className="text-6xl font-bold text-white">Preview</h1>
      </div>
      <motion.div
        className="flex w-full items-center justify-center"
        viewport={{ once: true, amount: 0.5 }}
        initial={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
      >
        <Image
          className="h-full rounded-[36px] border-[6px] border-white/15 shadow-2xl shadow-black lg:w-3/4"
          width={1920}
          height={1080}
          src={siteConfig.homePage.demo}
          alt="Demo"
        />
      </motion.div>
      <div
        className="absolute left-[50%]
          top-3/4 z-[-1] size-[75%] translate-x-[-50%] translate-y-[-50%] rounded-[780px] bg-themeGreen opacity-80 blur-[350px]"
      ></div>
    </div>
  )
}

export default Demo
