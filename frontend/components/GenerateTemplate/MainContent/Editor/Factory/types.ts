import {
  IVariable,
  IVariableCheckBox,
  IVariableInput,
  IVariableList,
  IVariableObject,
  IVariableRadio,
  IVariableSelect,
  IVariableTextArea,
} from "@/api/generated"
import { Control } from "react-hook-form"

export interface IInputFieldProps {
  variables: IVariableInput
  control: Control
}

export interface ITextFieldProps {
  variables: IVariableTextArea
  control: Control
}

export interface ICheckBoxFieldProps {
  variables: IVariableCheckBox
  control: Control
}

export interface IListFieldProps {
  variables: IVariableList
  control: Control
}

export interface IObjectFieldProps {
  variables: IVariableObject
  control: Control
}

export interface ISelectFieldProps {
  variables: IVariableSelect
  control: Control
}

export interface IRadioFieldProps {
  variables: IVariableRadio
  control: Control
}
