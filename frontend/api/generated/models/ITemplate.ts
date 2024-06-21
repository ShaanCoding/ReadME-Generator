/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ITemplate = {
  title: string
  description: string
  author: {
    name: string
    url: {
      url: string
      _type: ITemplate._type
    }
  }
  contributors: Array<{
    name: string
    url: {
      url: string
      _type:
        | "Facebook"
        | "Instagram"
        | "Twitter"
        | "Github"
        | "LinkedIn"
        | "Other"
    }
  }>
  startupBlocks: Array<string>
  image: string
  dateCreated: string
  lastUpdated: string
  tags: Array<{
    name: string
    url: string
  }>
  featured: boolean
  folder: string
  pageType: ITemplate.pageType
}
export namespace ITemplate {
  export enum _type {
    FACEBOOK = "Facebook",
    INSTAGRAM = "Instagram",
    TWITTER = "Twitter",
    GITHUB = "Github",
    LINKED_IN = "LinkedIn",
    OTHER = "Other",
  }
  export enum pageType {
    NONE = "None",
    READ_ME = "ReadME",
    CODE_OF_CONDUCT = "Code of Conduct",
    PRIVACY_POLICY = "Privacy Policy",
  }
}
