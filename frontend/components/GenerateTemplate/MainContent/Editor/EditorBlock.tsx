import { useState } from "react"
import { IFunction } from "@/api/generated"
import { Reorder, motion, useDragControls } from "framer-motion"
import { GripVertical, Trash2Icon } from "lucide-react"
import { Control, FieldValues } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import ShowMinimizeButton from "@/components/common/ShowMinimizeButton"

import InputGenerator from "./Factory/InputGenerator"

const EditorBlock = ({
  block,
  deleteBlock,
  control,
}: {
  block: IFunction
  deleteBlock: () => void
  control: Control<FieldValues, any>
}) => {
  const [isMinimized, setIsMinimized] = useState<boolean>(true)
  const controls = useDragControls()

  const contentVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto" },
  }

  return (
    <Reorder.Item
      value={block}
      key={block.name}
      id={block.name}
      dragListener={false}
      dragControls={controls}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Card
        id="editor-block"
        className={`p-4 transition-transform duration-300${
          isMinimized && "hover:scale-[1.02]"
        }`}
      >
        <CardHeader>
          <div className="flex items-start justify-between gap-6">
            <div className="mb-2 xl:mb-4">
              <CardTitle>{block.name}</CardTitle>
              <CardDescription>{block.description}</CardDescription>
            </div>
            <div className="flex flex-wrap items-center justify-start gap-6">
              <Button
                variant={"outline"}
                className="text-red-500"
                onClick={() => deleteBlock()}
              >
                <Trash2Icon className="mr-2" />
                Delete
              </Button>

              <ShowMinimizeButton
                isMinimized={isMinimized}
                setIsMinimized={setIsMinimized}
              />

              <div
                onPointerDown={(event) => {
                  controls.start(event)
                  event.preventDefault()
                }}
                className="cursor-grab"
              >
                <GripVertical />
              </div>
            </div>
          </div>
        </CardHeader>

        <motion.div
          initial="hidden"
          animate={isMinimized ? "hidden" : "visible"}
          variants={contentVariants}
          transition={{ duration: 0.2 }}
          className="overflow-hidden"
        >
          <CardContent>
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
        </motion.div>
      </Card>
    </Reorder.Item>
  )
}

export default EditorBlock
