import React from "react"
import { MinusIcon, PlusIcon } from "lucide-react"

import { Button } from "../ui/button"

const ShowMinimizeButton: React.FC<{
  isMinimized: boolean
  setIsMinimized: React.Dispatch<React.SetStateAction<boolean>>
}> = ({ isMinimized, setIsMinimized }) => {
  return (
    <Button variant={"outline"} onClick={() => setIsMinimized(!isMinimized)}>
      {isMinimized ? (
        <>
          <PlusIcon className="mr-2" />
          Show
        </>
      ) : (
        <>
          <MinusIcon className="mr-2" />
          Hide
        </>
      )}
    </Button>
  )
}

export default ShowMinimizeButton
