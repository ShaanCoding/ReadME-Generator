/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type IUser = {
  name: string
  url: {
    url: string
    _type: IUser._type
  }
}
export namespace IUser {
  export enum _type {
    FACEBOOK = "Facebook",
    INSTAGRAM = "Instagram",
    TWITTER = "Twitter",
    GITHUB = "Github",
    LINKED_IN = "LinkedIn",
    OTHER = "Other",
  }
}
