/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type IVariableSelect = {
  label: string
  name: string
  description?: string
  defaultValue: string
  selectList: Array<{
    label: string
    value: string
  }>
  _type: IVariableSelect._type
}
export namespace IVariableSelect {
  export enum _type {
    SELECT = "select",
  }
}
