import { Columns2, Columns3, Square } from "lucide-react"

import { Button } from "@/components/ui/button"

import { EditModeOne, EditModeThree, EditModeTwo } from "../types"

const ToggleViewButton: React.FC<{
  numberOfViewsToShow: number
  setNumberOfViewsToShow: React.Dispatch<React.SetStateAction<number>>
  setEditMode: React.Dispatch<
    React.SetStateAction<EditModeOne | EditModeTwo | EditModeThree>
  >
}> = ({ numberOfViewsToShow, setNumberOfViewsToShow, setEditMode }) => {
  const alternateNumberOfViewsToShow = () => {
    switch (numberOfViewsToShow) {
      case 3:
        setEditMode(EditModeOne.EDIT)
        setNumberOfViewsToShow(1)
        break
      case 1:
        setEditMode(EditModeTwo.EDIT_PREVIEW)
        setNumberOfViewsToShow(2)
        break
      case 2:
        setEditMode(EditModeThree.ALL)
        setNumberOfViewsToShow(3)
        break
    }
  }

  return (
    <Button variant={"outline"} onClick={alternateNumberOfViewsToShow}>
      {numberOfViewsToShow === 1 && <Square className="mr-2 size-4" />}
      {numberOfViewsToShow === 2 && <Columns2 className="mr-2 size-4" />}
      {numberOfViewsToShow === 3 && <Columns3 className="mr-2 size-4" />}
      Toggle View
    </Button>
  )
}

export default ToggleViewButton
