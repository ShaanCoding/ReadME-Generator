import { Button } from "@/components/ui/button"
import { DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Spinner } from "@/components/ui/spinner"

const LoadingModalContent: React.FC<{ setModalOpen: any }> = ({
  setModalOpen,
}) => {
  return (
    <>
      <DialogHeader>
        <DialogTitle>Loading...</DialogTitle>
        <div className="flex flex-col items-center justify-center">
          <Spinner size="large" className="m-6" />
          <h4 className="text-xl font-semibold">Loading Template...</h4>
        </div>
      </DialogHeader>
      <DialogFooter>
        <Button onClick={() => setModalOpen(false)}>Close</Button>
      </DialogFooter>
    </>
  )
}

export default LoadingModalContent
