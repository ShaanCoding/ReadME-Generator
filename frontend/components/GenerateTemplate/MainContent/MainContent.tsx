import { useEffect, useState } from "react"
import { IDefaultBlockInput, IFunction } from "@/api/generated"
import { useQuery } from "@tanstack/react-query"

import { api } from "@/lib/apiWrapper"

import CopyButton from "./CopyButton"
import DownloadButton from "./DownloadButton"
import Editor from "./Editor/Editor"
import Preview from "./Editor/Preview/Preview"
import RawText from "./Editor/RawText/RawText"
import MainContentTabs from "./Tabs/MainContentTabs"
import TabContent from "./Tabs/TabContent"
import ToggleViewButton from "./Tabs/ToggleViewButton"
import { compileString } from "./generator"
import { EditModeOne, EditModeThree, EditModeTwo } from "./types"

const MainContent: React.FC<{
  templateId: string
  templateBlocks: IFunction[]
  setTemplateBlocks: React.Dispatch<React.SetStateAction<IFunction[]>>
}> = ({ templateId, templateBlocks, setTemplateBlocks }) => {
  const [macros, setMacros] = useState<string>("")
  const [variables, setVariables] = useState<Record<string, any>>({})
  const [output, setOutput] = useState<string>("")

  const populateTemplateData = useQuery({
    queryKey: ["getV1TemplateTemplateDefaultBlocks", templateId],
    queryFn: async () => {
      let index = await api.template.getV1TemplateTemplateDefaultBlocks(
        templateId
      )

      return index.responseObject as IFunction[]
    },
  })

  useEffect(() => {
    if (populateTemplateData.status === "success") {
      setTemplateBlocks(populateTemplateData.data!)
    }
  }, [populateTemplateData.data, populateTemplateData.status])

  const populateMacrosData = useQuery({
    queryKey: ["postV1TemplateTemplateMacros", templateBlocks],
    queryFn: async () => {
      const blocksMapped: IDefaultBlockInput[] = templateBlocks.map(
        (block: IFunction) => ({
          function: block.function,
          folder: block.folder,
        })
      )

      let request = await api.template.postV1TemplateTemplateMacros(
        blocksMapped
      )

      return request.responseObject as string
    },
    enabled:
      populateTemplateData.data && populateTemplateData.status === "success",
  })

  useEffect(() => {
    if (populateMacrosData.status === "success") {
      setMacros(populateMacrosData.data!)
    }
  }, [populateMacrosData.data, populateMacrosData.status])

  const generateOutput = () => {
    if (macros && templateBlocks && variables) {
      const data = compileString(macros, templateBlocks, variables)
      setOutput(data)
    }
  }

  useEffect(() => {
    const doesFunctionsExist = templateBlocks.every((block) => {
      return macros.includes(block.function)
    })

    if (
      populateTemplateData.isLoading === false &&
      populateMacrosData.isLoading === false &&
      doesFunctionsExist
    ) {
      generateOutput()
    }
  }, [variables, templateBlocks, macros])

  const [numberOfViewsToShow, setNumberOfViewsToShow] = useState<number>(2)
  const [editMode, setEditMode] = useState<
    EditModeOne | EditModeTwo | EditModeThree
  >(EditModeTwo.EDIT_PREVIEW)

  return (
    <div className="flex flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 xl:gap-6 xl:p-6">
        <div className="flex items-center justify-between gap-6">
          <div className="flex items-center justify-center gap-6">
            <ToggleViewButton
              numberOfViewsToShow={numberOfViewsToShow}
              setNumberOfViewsToShow={setNumberOfViewsToShow}
              setEditMode={setEditMode}
            />
            <MainContentTabs
              numberOfViewsToShow={numberOfViewsToShow}
              editMode={editMode}
              setEditMode={setEditMode}
            />
          </div>

          <div className="flex items-center justify-end gap-6">
            <CopyButton copiedText={output} />
            <DownloadButton downloadText={output} fileName={"README.md"} />
          </div>
        </div>

        {/* Content */}
        <TabContent
          numberOfViewsToShow={numberOfViewsToShow}
          editMode={editMode}
          Editor={
            <Editor
              templateBlocks={templateBlocks}
              setTemplateBlocks={setTemplateBlocks}
              variables={variables}
              setVariables={setVariables}
            />
          }
          Preview={<Preview output={output} />}
          RawText={<RawText output={output} />}
        />
      </main>
    </div>
  )
}

export default MainContent
