"use client"

import { IContributor } from "@/data/templates"
import { FC, useEffect, useState } from "react"
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai"


export interface ContributorProps {
  contributors: IContributor[]
}

const socials: { [key: string]: JSX.Element } = {
  github: <AiFillGithub className="mr-2 w-4 h-4" />,
  twitter: <AiFillTwitterCircle className="mr-2 w-4 h-4" />,
  linkedin: <AiFillLinkedin className="mr-2 w-4 h-4" />,
  instagram: <AiFillInstagram className="mr-2 w-4 h-4" />,
}

const Contributors: FC<ContributorProps> = ({ contributors }) => {
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => {
    setIsMounted(true)
  }, [])
  if (!isMounted) return null

  return (
    <div className="">
      <h4 className="text-[0.8125rem] font-medium tracking-secondary mb-[5px]">
        Contributors
      </h4>
      <ul className=" flex flex-wrap gap-x-[22px] gap-y-[5px]">
        {contributors.map((contributor, index) => (
          <li key={index} className={"text-[0.6rem] tracking-primary"}>
            <a
              href={contributor.url}
              className="flex items-center justify-center"
            >
              {contributor.social in socials
                ? socials[contributor.social]
                : null}
              {contributor.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Contributors
