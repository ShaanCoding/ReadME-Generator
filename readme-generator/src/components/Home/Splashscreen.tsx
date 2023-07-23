import React from "react"
import Image from "next/image"
import Link from "next/link"

const Splashscreen = () => {
  return (
    <div className="my-10 w-full flex items-center justify-between">
      <div className="w-full">
        <h2 className="text-white font-poppins font-semibold text-xl mb-1">
          Welcome to makeread.me
        </h2>
        <h1 className="text-white font-poppins text-8xl font-bold mb-6 leading-[120%]">
          Empowering Project Documentation!
        </h1>
        <p className="text-white font-poppins text-base font-normal mb-10 leading-[175%]">
          Elevate your project presentations with captivating ReadME files. Our
          intuitive ReadME Generator makes creating professional documentation a
          breeze, whether you're a beginner or an experienced developer. Choose
          from our extensive collection of customizable templates and streamline
          your workflow. Experience the simplicity and effectiveness of
          makeread.me - the ultimate tool to enhance your projects.
        </p>
        <Link href={"/generator"}>
          <button className="py-4 px-8 bg-themeGreen rounded-xl hover:bg-opacity-90">
            Start Generating ReadMEs Now!
          </button>
        </Link>
      </div>
      <div className="w-full flex items-center justify-center">
        <img className="h-[496px] w-auto" src="/icons/hero.svg" alt="Hero" />
      </div>
    </div>
  )
}

export default Splashscreen
