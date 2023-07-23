"use client"

import { FC } from "react"
import Link from "next/link"

import { Separator } from "@/components/ui/Separator"
import { Button } from "./ui/Button"
import Coin from "/public/icons/coin.svg"
import Copy from "/public/icons/copy.svg"
import Download from "/public/icons/download.svg"
import Settings from "/public/icons/settings.svg"
import Logo from "/public/logo.svg"

interface GeneratorNavbarProps {}

const GeneratorNavbar: FC<GeneratorNavbarProps> = ({}) => {
  return (
    <div className="bg-primary py-[25px] px-[80px] flex items-center">
      <Link href={"/"} className="flex items-center gap-3">
        <Logo />
        ReadME Generator
      </Link>
      <div className="ml-auto flex items-center gap-[30px]  ">
        <Button className="gap-[15.6px]">
          <Coin />
          Ko-Fi
        </Button>
        <Button className="gap-[15.6px]">
          <Copy />
          Copy
        </Button>
        <Button className="gap-[0.94rem]">
          <Download />
          Download
        </Button>

        <Separator orientation="vertical" className="ml-5 h-8" />

        <Button variant={"icon"} size={"icon"}>
          <Settings />
        </Button>
      </div>
    </div>
  )
}

export default GeneratorNavbar
