import React, { Dispatch, SetStateAction, useEffect, useState } from "react"
import {
  IFullTemplate,
  IPageType,
  ITemplate,
  readMeGenerator,
} from "@/api/generated"
import { useQuery } from "@tanstack/react-query"
import { useDebounce } from "use-debounce"

import { api } from "@/lib/apiWrapper"
import { Input } from "@/components/ui/input"
import {
  MultiSelector,
  MultiSelectorContent,
  MultiSelectorInput,
  MultiSelectorItem,
  MultiSelectorList,
  MultiSelectorTrigger,
} from "@/components/ui/multiselect"

interface IOption {
  label: string
  value: string
}

const SelectTemplateSideBar: React.FC<{
  setTemplateBlocks: Dispatch<SetStateAction<ITemplate[]>>
  pageType: IPageType
  multiSelectValue: string[]
  setMultiSelectValue: Dispatch<SetStateAction<string[]>>
}> = ({
  pageType,
  setTemplateBlocks,
  multiSelectValue,
  setMultiSelectValue,
}) => {
  const [search, setSearch] = useState<string>("")
  const [searchDebounced] = useDebounce<string>(search, 500)

  const [multiSelectList, setMultiSelectList] = useState<IOption[]>([])

  const templateMaps = useQuery({
    queryKey: ["getV1Template", searchDebounced, multiSelectValue, pageType],
    queryFn: async () => {
      let request = await api.sidebar.getV1SidebarAll(
        searchDebounced,
        multiSelectValue,
        pageType
      )

      return request.responseObject as IFullTemplate[]
    },
    staleTime: 5 * 1000,
  })

  const sidebarOptions = useQuery({
    queryKey: ["getV1TemplateGetAllSidebar", search],
    queryFn: async () => {
      let request = await api.sidebar.getV1SidebarAllOptions()

      return request.responseObject as IOption[]
    },
    staleTime: 5 * 1000,
  })

  // We need 3 filters
  // 1. Search blocks which does by title, description
  // Multiselect for tags
  // Page type for the page type i.e. 'ReadME', 'Code of Conduct', 'Privacy Policy'

  useEffect(() => {
    if (sidebarOptions.status === "success") {
      setMultiSelectList(sidebarOptions.data!)
    }
  }, [sidebarOptions.status, sidebarOptions.data])

  useEffect(() => {
    if (templateMaps.status === "success") {
      setTemplateBlocks(templateMaps.data!)
    }
  }, [templateMaps.status, templateMaps.data])

  return (
    <div className="mb-4 hidden rounded-br-lg border bg-muted/40 md:block xl:mb-6">
      <nav className="my-6 grid items-start gap-6 px-2 text-sm font-medium lg:px-4">
        <Input
          placeholder="Search blocks"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <MultiSelectorComponent
          values={multiSelectValue}
          onValuesChange={setMultiSelectValue}
          options={multiSelectList}
        />
      </nav>

      {/* Upgrade to pro prompt */}
      {/* <UpgradePrompt /> */}
    </div>
  )
}

const MultiSelectorComponent: React.FC<{
  values: string[]
  onValuesChange: Dispatch<SetStateAction<string[]>>
  options: IOption[]
}> = ({ values, onValuesChange, options }) => {
  return (
    <MultiSelector values={values} onValuesChange={onValuesChange} loop={false}>
      <MultiSelectorTrigger>
        <MultiSelectorInput placeholder="Select your template" />
      </MultiSelectorTrigger>
      <MultiSelectorContent>
        <MultiSelectorList>
          {options.map((option: IOption, i: number) => (
            <MultiSelectorItem key={i} value={option.value}>
              {option.label}
            </MultiSelectorItem>
          ))}
        </MultiSelectorList>
      </MultiSelectorContent>
    </MultiSelector>
  )
}

export default SelectTemplateSideBar
