import { EditModeOne, EditModeThree, EditModeTwo } from "../types"

const generateNumberOfViewClass = (
  numberOfViewsToShow: number,
  editMode: EditModeOne | EditModeTwo | EditModeThree
) => {
  if (numberOfViewsToShow === 2 && editMode === EditModeTwo.RAW) {
    return "grid-cols-1"
  }

  switch (numberOfViewsToShow) {
    case 1:
      return "grid-cols-1"
    case 2:
      return "grid gap-6 items-start justify-center grid-cols-2"
    case 3:
      return "grid gap-6 items-start justify-center grid-cols-3"
    default:
      return "grid-cols-1"
  }
}

export default generateNumberOfViewClass
