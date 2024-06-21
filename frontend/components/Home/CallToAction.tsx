"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

import { siteConfig } from "@/config/site"

import { Button } from "../ui/button"

const CallToAction = () => {
  return (
    <motion.div
      className="relative my-12 w-full select-text"
      initial={{ x: -200, opacity: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      whileInView={{ opacity: 1, x: 0 }}
    >
      <div className="absolute inset-y-0 flex flex-col items-start justify-center sm:left-12 sm:w-3/5 lg:left-24">
        <h1 className="mb-6 text-lg font-bold text-white sm:text-xl md:text-2xl lg:mb-12 lg:text-3xl 2xl:text-6xl">
          {siteConfig.homePage.callToAction.title}
        </h1>

        <Link href={siteConfig.homePage.callToAction.url.href}>
          <Button>{siteConfig.homePage.callToAction.url.title}</Button>
        </Link>
      </div>

      <div className="hidden h-auto w-full sm:block">
        <Image
          className="pointer-events-none h-auto w-full select-none"
          src="/icons/home/CallToAction.svg"
          width={100}
          height={100}
          layout="responsive"
          alt="Call To Action - Background"
        />
        <div
          className="absolute left-full
          top-full z-[-2] size-[75%] -translate-x-full -translate-y-full rounded-[780px] bg-themeGreen opacity-80 blur-[350px]"
        ></div>
      </div>
    </motion.div>
  )
}

export default CallToAction
