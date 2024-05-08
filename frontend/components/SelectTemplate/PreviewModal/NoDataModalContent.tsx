import { Button } from "@/components/ui/button"
import { DialogHeader, DialogFooter, DialogTitle } from "@/components/ui/dialog"

const NoDataModalContent: React.FC<{ setModalOpen: any }> = ({ setModalOpen }) => {
    return (
        <>
            <DialogHeader>
                <DialogTitle>Cannot Find Template Preview</DialogTitle>
                <div className="flex flex-col items-center justify-center">
                    <h4 className="text-xl font-semibold m-6">The template preview could not be found</h4>
                </div>
            </DialogHeader>
            <DialogFooter>
                <Button onClick={() => setModalOpen(false)}>Close</Button>
            </DialogFooter>
        </>
    )
}

export default NoDataModalContent