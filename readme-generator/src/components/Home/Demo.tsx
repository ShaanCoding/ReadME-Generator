import React from "react"
import Image from "next/image"

const Demo = () => {
  return (
    <div className="w-full flex items-center justify-center my-24">
      <div className="h-[700px] w-full grid grid-cols-2 gap-4 relative">
        <h2 className="text-white opacity-20 font-jakarta text-8xl font-extrabold tracking-[-3px]">
          Documentation
        </h2>
        <h2 className="text-white opacity-20 font-jakarta text-8xl font-extrabold tracking-[-3px] text-right">
          ReadME Generator
        </h2>
        <h2 className="text-white opacity-20 font-jakarta text-8xl font-extrabold tracking-[-3px]">
          Badges
        </h2>
        <h2 className="text-white opacity-20 font-jakarta text-8xl font-extrabold tracking-[-3px] text-right">
          ReadME Generator
        </h2>
        <h2 className="text-white opacity-20 font-jakarta text-8xl font-extrabold tracking-[-3px]">
          Badges
        </h2>
        <h2 className="text-white opacity-20 font-jakarta text-8xl font-extrabold tracking-[-3px] text-right">
          Templates
        </h2>
        <h2 className="text-white opacity-20 font-jakarta text-8xl font-extrabold tracking-[-3px]">
          Badges
        </h2>
        <h2 className="text-white opacity-20 font-jakarta text-8xl font-extrabold tracking-[-3px] text-right">
          ReadME Generator
        </h2>
        <h2 className="text-white opacity-20 font-jakarta text-8xl font-extrabold tracking-[-3px]">
          Badges
        </h2>
        <h2 className="text-white opacity-20 font-jakarta text-8xl font-extrabold tracking-[-3px] text-right">
          ReadME Generator
        </h2>
        <div
          className="absolute bg-themeGreen
          left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]
          w-[780px] h-[729px] rounded-[780px] opacity-50 blur-[367px] z-[-1]"
        ></div>
        <div className="w-full absolute inset-0 pointer-events-none select-none">
          <img className="w-full h-full" src="/Demo.svg" alt="Demo" />
        </div>
      </div>
    </div>
  )
}

export default Demo
