import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import CopyButton from "@/components/GenerateTemplate/MainContent/CopyButton"
import DownloadButton from "@/components/GenerateTemplate/MainContent/DownloadButton"
import ReactMarkdownStyled from "@/components/GenerateTemplate/MainContent/Editor/Preview/ReactMarkdownStyled"

const PreviewModalContent: React.FC<{
  markdownTemplate: any
  setModalOpen: any
  folder: string
  templateTitle: string
}> = ({ markdownTemplate, setModalOpen, folder, templateTitle }) => {
  return (
    <>
      <DialogHeader>
        <DialogTitle>{templateTitle}</DialogTitle>
        <DialogDescription className="">
          <ReactMarkdownStyled output={markdownTemplate?.data || ""} />
        </DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <div className="flex w-full justify-between gap-6">
          <div className="flex flex-row gap-6">
            <CopyButton
              copiedText={markdownTemplate?.data || ""}
              onClick={() => {
                setModalOpen(false)
              }}
            />
            <DownloadButton
              downloadText={markdownTemplate?.data || ""}
              fileName={"README.md"}
              onClick={() => {
                setModalOpen(false)
              }}
            />
          </div>

          <Link href={`/generator/${folder}`}>
            <Button>Use Template</Button>
          </Link>
        </div>
      </DialogFooter>
    </>
  )
}

export default PreviewModalContent
