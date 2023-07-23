import React from "react"
import Image from "next/image"
import Link from "next/link"

const socialMediaLists: ISocialMedia[] = [
  {
    name: "Github",
    url: "https://github.com/ShaanCoding/",
    icon: "/icons/home/social/github.svg",
  },
  {
    name: "LinkedIn",
    icon: "/icons/home/social/linkedin.svg",
    url: "https://www.linkedin.com/in/shaancoding/",
  },
  {
    name: "Twitter",
    icon: "/icons/home/social/twitter.svg",
    url: "https://twitter.com/ShaanCoding",
  },
]

const quickLinks: IQuickLinks[] = [
  {
    name: "Editor Page",
    url: "/editor",
  },
  {
    name: "List of Templates",
    url: "/templates",
  },
  {
    name: "Contact Us",
    url: "/contact",
  },
  {
    name: "Technical Writing Tips",
    url: "/tips",
  },
]

const Footer = () => {
  return (
    <div
      className="
    bg-gradient-to-t from-[#16474A] to-[#16474A40]
    
    w-full mt-20 pt-20 px-[90px] rounded-t-[30px]"
    >
      <div className="w-full flex items-center justify-between mb-[78px]">
        <div className="w-1/3">
          <h1 className="text-white font-poppins text-xl font-bold mb-[30px]">
            ReadMe Generator
          </h1>
          <p className="text-white font-inter text-base font-normal leading[213%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            fermentum orci sapien. Fusce sed lacus eget orci tempus tincidunt.
            Nullam orci quam sollicitudin sit amet.
          </p>
        </div>

        <div className="w-2/3 flex items-center justify-end">
          <div className="mr-[200px]">
            <h1 className="text-white font-poppins text-lg font-[500] tracking-[0.4px] uppercase mb-5">
              Quick Links
            </h1>

            <ul className="list-disc list-inside">
              {quickLinks.map((quickLink, index) => (
                <QuickLinks key={index} {...quickLink} />
              ))}
            </ul>
          </div>

          <div className="">
            <h1 className="text-white font-poppins text-lg font-[500] tracking-[0.4px] uppercase mb-5">
              Social Media
            </h1>

            <div className="flex flex-col">
              {socialMediaLists.map((socialMedia, index) => (
                <SocialMedia key={index} {...socialMedia} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <p
        className="text-center text-white font-manrope text-base font-normal
      border-t-[1px] border-[#404C52] pt-5 mb-5
      "
      >
        © ShaanCoding 2023 - {new Date().getFullYear()}. All rights reserved.
      </p>
    </div>
  )
}

interface IQuickLinks {
  name: string
  url: string
}

const QuickLinks: React.FC<IQuickLinks> = ({ name, url }) => {
  return (
    <li className="text-white font-poppins text-base font-normal mb-3">
      <Link className="hover:opacity-90" href={url}>
        {name}
      </Link>
    </li>
  )
}

interface ISocialMedia {
  icon: string
  name: string
  url: string
}

const SocialMedia: React.FC<ISocialMedia> = ({ icon, name, url }) => {
  return (
    <Link className="hover:opacity-90" href={url}>
      <div className="flex items-center space-x-4 mb-3">
        <img className="w-[30px] h-[30px]" src={icon} alt={name} />
        <p className="text-white font-poppins text-base font-normal">{name}</p>
      </div>
    </Link>
  )
}

export default Footer
