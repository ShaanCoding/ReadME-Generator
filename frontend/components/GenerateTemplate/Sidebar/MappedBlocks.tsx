import { Dispatch, SetStateAction, useState } from "react"
import { IFullTemplate, IFunction } from "@/api/generated"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible"
import { ChevronsUpDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import SocialButton from "@/components/common/SocialButton"

import ContextTitle from "../MainContent/Editor/Factory/ContextTitle"

const MappedBlocks: React.FC<{
  blocks: IFullTemplate[]
  templateBlocks: IFunction[]
  setTemplateBlocks: Dispatch<SetStateAction<IFunction[]>>
}> = ({ blocks, templateBlocks, setTemplateBlocks }) => {
  const [open, setOpen] = useState<boolean[]>(
    new Array(blocks.length).fill(true)
  )

  return (
    <>
      {blocks.map((block: IFullTemplate, index: number) => {
        return (
          <Collapsible
            open={open[index]}
            onOpenChange={() => {
              let temp = [...open]
              temp[index] = !temp[index]
              setOpen(temp)
            }}
            key={index}
            className="space-y-2"
          >
            <div className="flex items-start justify-between space-x-4 rounded-md border px-4 py-3">
              <div>
                <h4 className="text-sm font-semibold">{block.title}</h4>
                <p>{block.description}</p>
              </div>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="sm" className="w-9 p-0">
                  <ChevronsUpDown className="size-4" />
                  <span className="sr-only">Toggle</span>
                </Button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="space-y-2">
              <SocialButton
                className="w-full"
                author={block.author}
                key={index}
              />

              {/* Map the components out */}
              <>
                {block.functions.map((func: IFunction, index: number) => {
                  return (
                    <div
                      className="rounded-md border px-4 py-3 text-sm"
                      key={index}
                    >
                      <ContextTitle
                        title={func.name}
                        description={func.description}
                      />
                      <Button
                        onClick={() => {
                          setTemplateBlocks([...templateBlocks, func])
                        }}
                        className="w-full"
                      >
                        Add Block
                      </Button>
                    </div>
                  )
                })}
              </>
            </CollapsibleContent>
          </Collapsible>
        )
      })}
    </>
  )
}

export default MappedBlocks
