"use client"

import { FC } from "react"
import * as AvatarRadix from "@radix-ui/react-avatar"

interface AvatarProps {
  src?: string
  alt?: string
  width?: string
  height?: string
}

const Avatar: FC<AvatarProps> = ({ src, alt, width = "45", height = "45" }) => {
  return (
    <AvatarRadix.Root
      className={`h-[${height}px] w-[${width}px] inline-flex select-none items-center justify-center overflow-hidden rounded-full align-middle`}
    >
      {src ? (
        <>
          <AvatarRadix.Image
            className="h-full w-full rounded-[inherit] object-cover"
            src={src}
            alt={alt}
          />
          <AvatarRadix.Fallback
            className="text-violet11 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium"
            delayMs={600}
          >
            {alt}
          </AvatarRadix.Fallback>
        </>
      ) : (
        <>
          <AvatarRadix.Image
            className="h-full w-full rounded-[inherit] object-cover"
            src="/placeholder_image.png"
            alt="placeholder image"
          />
          <AvatarRadix.Fallback
            className="text-violet11 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium"
            delayMs={600}
          >
            placeholder image
          </AvatarRadix.Fallback>
        </>
      )}
    </AvatarRadix.Root>
  )
}

export default Avatar
