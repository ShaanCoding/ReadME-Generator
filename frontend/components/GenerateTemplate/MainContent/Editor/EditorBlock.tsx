import { useState } from "react"
import { IFunction, IVariable } from "@/api/generated"
import {
  ChevronDownIcon,
  ChevronUpIcon,
  MinusIcon,
  PlusIcon,
  Trash2Icon,
} from "lucide-react"
import { Control, FieldValues } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import InputGenerator from "./Factory/InputGenerator"
import ShowMinimizeButton from "@/components/common/ShowMinimizeButton"

const EditorBlock = ({
  block,
  moveBlockUp,
  moveBlockDown,
  deleteBlock,
  control,
}: {
  block: IFunction
  moveBlockUp: () => void
  moveBlockDown: () => void
  deleteBlock: () => void
  control: Control<FieldValues, any>
}) => {
  const [isMinimized, setIsMinimized] = useState<boolean>(true)

  function getHeight() {
    const card = document
      .getElementById("editor-block")
      ?.getBoundingClientRect()
    const cardHeight = card?.height ?? 0
    return cardHeight + 24
  }
  return (
    <Card
      id="editor-block"
      className={`p-4 transition-transform duration-300 transform ${isMinimized && "hover:scale-[1.02]"
        }
      `}
    >
      <CardHeader>
        <div className="mb-2 xl:mb-4">
          <CardTitle>{block.name}</CardTitle>
          <CardDescription>{block.description}</CardDescription>
        </div>
        <div className="flex flex-wrap items-center justify-start gap-6">
          <Button
            variant={"outline"}
            onClick={() => {
              moveBlockUp()
              setIsMinimized(true)
            }}
          >
            <ChevronUpIcon className="mr-2" />
            Up
          </Button>
          <Button
            variant={"outline"}
            onClick={() => {
              moveBlockDown()
              setIsMinimized(true)
            }}
          >
            <ChevronDownIcon className="mr-2" />
            Down
          </Button>
          <Button
            variant={"outline"}
            className="text-red-500"
            onClick={() => deleteBlock()}
          >
            <Trash2Icon className="mr-2" />
            Delete
          </Button>
          <ShowMinimizeButton isMinimized={isMinimized} setIsMinimized={setIsMinimized} />
        </div>
      </CardHeader>
      <CardContent className={`${isMinimized ? "hidden" : ""}`}>
        {block.variables.map((variables: any, index: number) => {
          return (
            <InputGenerator
              key={variables.name}
              variables={variables}
              control={control}
            />
          )
        })}
      </CardContent>
    </Card>
  )
}

export default EditorBlock
