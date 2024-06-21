/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type IVariableRadio = {
  label: string
  name: string
  description?: string
  defaultValue: string
  radioList: Array<{
    label: string
    value: string
  }>
  _type: IVariableRadio._type
}
export namespace IVariableRadio {
  export enum _type {
    RADIO = "radio",
  }
}
