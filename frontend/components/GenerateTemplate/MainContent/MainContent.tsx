import { useEffect, useState } from "react"
import { IFunction, readMeGenerator } from "@/api/generated"

import CopyButton from "./CopyButton"
import DownloadButton from "./DownloadButton"
import Editor from "./Editor/Editor"
import Preview from "./Preview"
import { compileString } from "./generator"

const MainContent: React.FC<{
  templateId: string
  templateBlocks: IFunction[]
  setTemplateBlocks: React.Dispatch<React.SetStateAction<IFunction[]>>
}> = ({ templateId, templateBlocks, setTemplateBlocks }) => {
  const [macros, setMacros] = useState<string>("")
  const [variables, setVariables] = useState<Record<string, any>>({})
  const [output, setOutput] = useState<string>("")

  const PopulateTemplateData = async () => {
    // For now lets hardcode the templateId -> Should grab from the URL

    let index = await new readMeGenerator().template.getV1TemplateIndex(
      templateId
    )

    if (index.success && index.responseObject) {
      const data: IFunction[] = index.responseObject
      setTemplateBlocks(data)
    }
  }

  const PopulateMacrosData = async () => {
    const request = await new readMeGenerator().template.getV1TemplateMacros(
      templateId
    )

    if (request.success && request.responseObject) {
      const data: string = request.responseObject
      setMacros(data)
    }
  }

  useEffect(() => {
    PopulateTemplateData()
    PopulateMacrosData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const generateOutput = () => {
    if (macros && templateBlocks && variables) {
      const data = compileString(macros, templateBlocks, variables)
      setOutput(data)
    }
  }

  useEffect(() => {
    generateOutput()
  }, [variables, templateBlocks, macros])

  return (
    <div className="flex flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 xl:gap-6 xl:p-6">
        {/* Sub-navbar */}
        <div className="flex items-center justify-end gap-6">
          <CopyButton copiedText={output} />
          <DownloadButton downloadText={output} fileName={"README.md"} />
        </div>

        {/* Content */}
        <div className="rounded-lg border border-dashed shadow-sm xl:flex xl:flex-1 xl:items-start xl:justify-center">
          {/* Place Content Here */}
          <Editor
            templateBlocks={templateBlocks}
            setTemplateBlocks={setTemplateBlocks}
            variables={variables}
            setVariables={setVariables}
          />

          <Preview output={output} />
        </div>
      </main>
    </div>
  )
}

export default MainContent
