import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from "react"
import { IFullTemplate, IFunction } from "@/api/generated"
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

import MappedBlocks from "./MappedBlocks"

interface IOption {
  label: string
  value: string
}

const GeneratorSideBar: React.FC<{
  templateId: string
  templateBlocks: IFunction[]
  setTemplateBlocks: Dispatch<SetStateAction<IFunction[]>>
}> = ({ templateId, templateBlocks, setTemplateBlocks }) => {
  const [inputValue, setInputValue] = useState<string>("")
  const [debouncedInputValue] = useDebounce<string>(inputValue, 500)

  const [multiSelectValue, setMultiSelectValue] = useState<string[]>([])

  const sidebarOptions = useQuery({
    queryKey: ["getV1SidebarTemplateOptions"],
    queryFn: async () => {
      let request = await api.sidebar.getV1SidebarTemplateOptions()

      return request.responseObject as IOption[]
    },
    staleTime: 5 * 1000,
  })

  useEffect(() => {
    if (sidebarOptions.status === "success") {
      const templateOption: IOption | undefined = sidebarOptions.data?.find(
        (option: IOption) => option.value === templateId
      )

      if (templateOption) {
        setMultiSelectValue([templateOption.value])
      }
    }
  }, [sidebarOptions.status, sidebarOptions.data])

  const sidebarResults = useQuery({
    queryKey: ["getV1SidebarTemplate", debouncedInputValue, multiSelectValue],
    queryFn: async () => {
      let request = await api.sidebar.getV1SidebarTemplate(
        debouncedInputValue,
        multiSelectValue
      )

      return request.responseObject as IFullTemplate[]
    },
    staleTime: 5 * 1000,
    enabled: sidebarOptions.status === "success" && !!sidebarOptions.data,
  })

  const sidebarResultsOmittedSelectedBlocks = useMemo(() => {
    return sidebarResults.data?.map((template: IFullTemplate) => {
      return {
        ...template,
        functions: template.functions.filter(
          (block: IFunction) =>
            !templateBlocks.some(
              (selectedBlock: IFunction) =>
                selectedBlock.function === block.function &&
                selectedBlock.folder === block.folder
            )
        ),
      }
    })
  }, [sidebarResults.data, templateBlocks])

  return (
    <div className="mb-4 hidden rounded-br-lg border bg-muted/40 md:block xl:mb-6">
      <nav className="my-6 grid items-start gap-6 px-2 text-sm font-medium lg:px-4">
        <Input
          placeholder="Search blocks"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <MultiSelectorComponent
          values={multiSelectValue}
          onValuesChange={setMultiSelectValue}
          options={sidebarOptions.data ?? []}
        />
        <MappedBlocks
          blocks={sidebarResultsOmittedSelectedBlocks ?? []}
          templateBlocks={templateBlocks}
          setTemplateBlocks={setTemplateBlocks}
        />
      </nav>

      {sidebarOptions.data?.length === 0 && (
        <div className="py-3 text-center">
          <h4 className="text-xl font-semibold">No blocks found</h4>
        </div>
      )}

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

export default GeneratorSideBar
