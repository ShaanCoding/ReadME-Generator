import { EditModeOne, EditModeThree, EditModeTwo } from "../types"
import TabContentMotionDiv from "./TabContentMotionDiv"
import editModeBooleans from "./editModeBooleans"
import generateNumberOfViewClass from "./generateNumberOfViewClass"

const TabContent: React.FC<{
  numberOfViewsToShow: number
  editMode: EditModeOne | EditModeTwo | EditModeThree
  Editor: React.ReactNode
  Preview: React.ReactNode
  RawText: React.ReactNode
}> = ({ numberOfViewsToShow, editMode, Editor, Preview, RawText }) => {
  const numberOfViewClass = generateNumberOfViewClass(
    numberOfViewsToShow,
    editMode
  )
  const { showEditor, showPreview, showRawText } = editModeBooleans(editMode)

  return (
    <div className={numberOfViewClass}>
      <TabContentMotionDiv show={showEditor}>{Editor}</TabContentMotionDiv>
      <TabContentMotionDiv show={showPreview}>{Preview}</TabContentMotionDiv>
      <TabContentMotionDiv show={showRawText}>{RawText}</TabContentMotionDiv>
    </div>
  )
}

export default TabContent
