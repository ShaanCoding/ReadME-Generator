import { readMeGenerator } from "@/api/generated"
import { useQuery } from "@tanstack/react-query"

import { api } from "@/lib/apiWrapper"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

import { Button } from "../../ui/button"
import ErrorModalContent from "./ErrorModalContent"
import LoadingModalContent from "./LoadingModalContent"
import NoDataModalContent from "./NoDataModalContent"
import PreviewModalContent from "./PreviewModalContent"

const PreviewModal: React.FC<{
  folder: string
  templateTitle: string
  modalOpen: boolean
  setModalOpen: any
}> = ({ folder, templateTitle, modalOpen, setModalOpen }) => {
  const markdownTemplate = useQuery({
    queryKey: ["getV1TemplateTemplatePreview", folder],
    queryFn: async () => {
      const request = await api.template.getV1TemplateTemplatePreview(folder)
      return request.responseObject as string
    },
    staleTime: 5 * 1000,
    enabled: modalOpen,
  })

  return (
    <Dialog
      open={modalOpen}
      onOpenChange={setModalOpen}
      modal
      defaultOpen={modalOpen}
    >
      <DialogTrigger asChild>
        <Button variant={"outline"} className="w-full">
          Preview Template
        </Button>
      </DialogTrigger>

      <DialogContent>
        {markdownTemplate.isLoading && !markdownTemplate.isError && (
          <LoadingModalContent setModalOpen={setModalOpen} />
        )}

        {markdownTemplate.isError && (
          <ErrorModalContent setModalOpen={setModalOpen} />
        )}

        {markdownTemplate.isSuccess && !markdownTemplate.data && (
          <NoDataModalContent setModalOpen={setModalOpen} />
        )}

        {markdownTemplate.isSuccess && markdownTemplate.data && (
          <PreviewModalContent
            markdownTemplate={markdownTemplate}
            setModalOpen={setModalOpen}
            folder={folder}
            templateTitle={templateTitle}
          />
        )}
      </DialogContent>
    </Dialog>
  )
}

export default PreviewModal
