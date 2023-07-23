"use client"

import { FC } from "react"
import { useGetCategories } from "@/hooks/useGetCategories"

import { Separator } from "@/components/ui/Separator"
import { CategorySelector } from "../CategorySelector"
import SearchBar from "../SearchBar"
import Templates from "../Templates"

interface indexProps {}

const SelectTemplateSidebar: FC<indexProps> = ({}) => {
  const mockTemplates = [
    {
      title: "Read Me",
      content: "A template for creating a Read Me file",
    },
    {
      title: "Code of Conduct",
    },
    {
      title: "Contributing",
    },
    {
      title: "License",
    },
  ]

  const query = useGetCategories()

  return (
    <aside className="py-[25px]">
      <div className="rounded-[15px] bg-primary sticky w-[285px]  ml-[60px] mx-[20px] h-[800px] p-[20px]">
        <SearchBar />
        <Separator className="bg-[#FFF]/10 w-[245px] mb-[15.5px]" />
        <CategorySelector useQuery={query} />
        <Separator className="bg-[#FFF]/10 w-[245px] my-[15px]" />
        <Templates templates={mockTemplates} />
      </div>
    </aside>
  )
}

export default SelectTemplateSidebar
