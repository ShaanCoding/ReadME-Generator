/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type IVariableObject = {
  label: string
  name: string
  description?: string
  defaultValue: Record<string, any>
  objectSchema: Array<{
    label: string
    name: string
    _type:
      | "input"
      | "textArea"
      | "checkBox"
      | "list"
      | "object"
      | "select"
      | "radio"
    description?: string
  }>
  _type: IVariableObject._type
}
export namespace IVariableObject {
  export enum _type {
    OBJECT = "object",
  }
}
