import { useEffect } from "react"
import { IFunction } from "@/api/generated"
import { Reorder } from "framer-motion"
import { FormProvider, SubmitHandler, useForm } from "react-hook-form"

import EditorBlock from "./EditorBlock"

const Editor = ({
  templateBlocks,
  setTemplateBlocks,
  setVariables,
}: {
  templateBlocks: IFunction[]
  setTemplateBlocks: React.Dispatch<React.SetStateAction<IFunction[]>>
  variables: Record<string, any>
  setVariables: React.Dispatch<React.SetStateAction<Record<string, any>>>
}) => {
  const methods = useForm()
  const { control, handleSubmit, watch } = methods

  const onSubmit: SubmitHandler<any> = (data) => {
    setVariables(data)
  }

  useEffect(() => {
    const subscription = watch(() => handleSubmit(onSubmit)())
    return () => subscription.unsubscribe()
  }, [handleSubmit, watch])

  const deleteBlock = (index: number) => {
    const newBlocks = [...templateBlocks]
    newBlocks.splice(index, 1)
    setTemplateBlocks(newBlocks)
  }

  return (
    <div className="grid grid-cols-1 gap-6 p-6 xl:w-full">
      <FormProvider {...methods}>
        <form
          onChange={handleSubmit(onSubmit)}
          onSubmit={(e) => e.preventDefault()}
        >
          <Reorder.Group
            className="grid grid-cols-1 gap-6"
            axis="y"
            onReorder={setTemplateBlocks}
            values={templateBlocks}
          >
            {templateBlocks.map((block: IFunction, index: number) => (
              <EditorBlock
                block={block}
                deleteBlock={() => deleteBlock(index)}
                key={block.name}
                control={control}
              />
            ))}
          </Reorder.Group>
        </form>
      </FormProvider>
    </div>
  )
}

export default Editor
