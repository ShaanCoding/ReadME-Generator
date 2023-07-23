"use client"

import { FC } from "react"
import { AiFillPlusCircle } from "react-icons/ai"

import { Button } from "../ui/Button"
import { Separator } from "../ui/Separator"

interface CreateTemplateButtonProps {
  title: string
  content?: string
}

const CreateTemplateButton: FC<CreateTemplateButtonProps> = ({
  title,
  content,
}) => {
  const handleClick = () => {}

  return (
    <div
      className={`w-full    ${
        content ? "bg-tertiary rounded-[9px]  p-[10px]" : "[&_button]:ml-[10px]"
      }`}
    >
      <button
        onClick={handleClick}
        className="inline-flex items-center w-full  font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring mb-[10px] disabled:pointer-events-none disabled:opacity-50 text-[0.8125rem] "
      >
        <AiFillPlusCircle
          className={`w-4 h-4 ${content && "text-themeGreen"} `}
        />
        <Separator orientation="vertical" className="mx-2 h-[10px]" />
        {title}
      </button>
      <p className="text-[0.625rem] text-secondary">{content}</p>
    </div>
  )
}

export default CreateTemplateButton
