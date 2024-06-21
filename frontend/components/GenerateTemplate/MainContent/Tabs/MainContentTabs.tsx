import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { EditModeOne, EditModeThree, EditModeTwo } from "../types"

const MainContentTabs: React.FC<{
  numberOfViewsToShow: number
  editMode: EditModeOne | EditModeTwo | EditModeThree
  setEditMode: React.Dispatch<
    React.SetStateAction<EditModeOne | EditModeTwo | EditModeThree>
  >
}> = ({ numberOfViewsToShow, editMode, setEditMode }) => {
  if (numberOfViewsToShow === 3) return <></>

  let EditMode: typeof EditModeOne | typeof EditModeTwo | typeof EditModeThree

  switch (numberOfViewsToShow) {
    case 1:
      EditMode = EditModeOne
      break
    case 2:
      EditMode = EditModeTwo
      break
    default:
      EditMode = EditModeOne
      break
  }

  return (
    <Tabs value={editMode as string}>
      <TabsList>
        {Object.keys(EditMode).map((page: string, index: number) => (
          <TabsTrigger
            onClick={() => setEditMode((EditMode as any)[page])}
            value={(EditMode as any)[page]}
            key={index}
          >
            {(EditMode as any)[page]}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  )
}

export default MainContentTabs
