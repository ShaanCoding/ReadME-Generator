import Link from "next/link"

import { siteConfig } from "@/config/site"

const Footer = () => {
  return (
    <div
      className="
    mt-20 w-full rounded-t-[30px] bg-gradient-to-t
    from-[#16474A] to-[#16474A40] px-6 pb-6 pt-20 xl:px-[80px]"
    >
      <div className="flex flex-col items-start justify-start lg:flex-row lg:justify-between">
        <div className="pb-6">
          <h1 className="text-xl font-semibold">{siteConfig.footer.title}</h1>
          <p className="text-lg">{siteConfig.footer.description}</p>
        </div>

        <div className="lg:flex lg:gap-6">
          <div className="pb-6">
            <h1 className="text-lg font-semibold">Quick Links</h1>
            {siteConfig.footer.quickLinks.map((quickLink, index) => (
              <QuickLinks key={index} {...quickLink} />
            ))}
          </div>

          <div className="">
            <h1 className="pb-2 text-lg font-semibold">Social Media</h1>
            {siteConfig.footer.socialMedia.map((socialMedia, index) => (
              <SocialMedia key={index} {...socialMedia} />
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <p
        className="font-manrope mb-5 border-t-DEFAULT border-[#404C52] pt-5
      text-center text-base font-normal text-white
      "
      >
        © ShaanCoding 2023 - {new Date().getFullYear()}. All rights reserved.
      </p>
    </div>
  )
}

interface IQuickLinks {
  title: string
  href: string
}

const QuickLinks: React.FC<IQuickLinks> = ({ title, href }) => {
  return (
    <Link href={href}>
      <p className="mb-2 hover:cursor-pointer hover:opacity-90">{title}</p>
    </Link>
  )
}

interface ISocialMedia {
  icon: string
  name: string
  url: string
}

const SocialMedia: React.FC<ISocialMedia> = ({ icon, name, url }) => {
  return (
    <Link href={url}>
      <div className="hover:cursor-pointer hover:opacity-90">
        <div className="mb-3 flex items-center space-x-4">
          <img className="size-[30px]" src={icon} alt={name} />
          <p className="font-poppins text-base font-normal text-white">
            {name}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default Footer
