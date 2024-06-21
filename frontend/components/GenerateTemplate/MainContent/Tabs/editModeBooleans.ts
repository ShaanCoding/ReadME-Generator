import { EditModeOne, EditModeThree, EditModeTwo } from "../types"

const editModeBooleans = (
  editMode: EditModeOne | EditModeTwo | EditModeThree
) => {
  let showEditor: boolean = false
  let showPreview: boolean = false
  let showRawText: boolean = false

  if (editMode === EditModeOne.EDIT) {
    showEditor = true
  }

  if (editMode === EditModeOne.PREVIEW) {
    showPreview = true
  }

  if (editMode === EditModeOne.RAW) {
    showRawText = true
  }

  if (editMode === EditModeTwo.EDIT_PREVIEW) {
    showEditor = true
    showPreview = true
  }

  if (editMode === EditModeThree.ALL) {
    showEditor = true
    showPreview = true
    showRawText = true
  }

  return { showEditor, showPreview, showRawText }
}

export default editModeBooleans
