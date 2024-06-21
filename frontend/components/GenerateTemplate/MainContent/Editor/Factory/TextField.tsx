import { Controller } from "react-hook-form"

import { AutosizeTextarea } from "@/components/ui/autosize-textarea"

import ContextTitle from "./ContextTitle"
import { ITextFieldProps } from "./types"

const TextField: React.FC<ITextFieldProps> = ({ variables, control }) => {
  return (
    <Controller
      control={control}
      name={variables.name}
      defaultValue={variables.defaultValue as string}
      render={({ field }) => (
        <div className="w-full pb-4">
          <ContextTitle
            title={variables.label}
            description={variables.description}
          />
          <AutosizeTextarea {...field} name={variables.name} minHeight={100} />
        </div>
      )}
    />
  )
}

export default TextField
