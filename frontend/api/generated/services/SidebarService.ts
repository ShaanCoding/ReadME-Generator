/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BaseHttpRequest } from "../core/BaseHttpRequest"
import type { CancelablePromise } from "../core/CancelablePromise"

export class SidebarService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * @param search
   * @param filter
   * @param pageType
   * @returns any Success
   * @throws ApiError
   */
  public getV1SidebarAll(
    search?: string,
    filter?: Array<string>,
    pageType?: string
  ): CancelablePromise<{
    success: boolean
    message: string
    responseObject?: Array<{
      title: string
      description: string
      author: {
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
      pageType: "None" | "ReadME" | "Code of Conduct" | "Privacy Policy"
    }>
    statusCode: number
  }> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/sidebar/all",
      query: {
        search: search,
        filter: filter,
        pageType: pageType,
      },
    })
  }
  /**
   * @returns any Success
   * @throws ApiError
   */
  public getV1SidebarAllOptions(): CancelablePromise<{
    success: boolean
    message: string
    responseObject?: Array<{
      label: string
      value: string
    }>
    statusCode: number
  }> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/sidebar/all/options",
    })
  }
  /**
   * @param search
   * @param filter
   * @returns any Success
   * @throws ApiError
   */
  public getV1SidebarTemplate(
    search?: string,
    filter?: Array<string>
  ): CancelablePromise<{
    success: boolean
    message: string
    responseObject?: Array<{
      title: string
      description: string
      author: {
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
      pageType: "None" | "ReadME" | "Code of Conduct" | "Privacy Policy"
      functions: Array<{
        name: string
        description: string
        function: string
        variables: Array<
          | {
              label: string
              name: string
              description?: string
              defaultValue: string
              _type: "input"
            }
          | {
              label: string
              name: string
              description?: string
              defaultValue: string
              _type: "textArea"
            }
          | {
              label: string
              name: string
              description?: string
              defaultValue: boolean
              _type: "checkBox"
            }
          | {
              label: string
              name: string
              description?: string
              defaultValue: Array<Record<string, any>>
              listSchema: Array<{
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
              _type: "list"
            }
          | {
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
              _type: "object"
            }
          | {
              label: string
              name: string
              description?: string
              defaultValue: string
              selectList: Array<{
                label: string
                value: string
              }>
              _type: "select"
            }
          | {
              label: string
              name: string
              description?: string
              defaultValue: string
              radioList: Array<{
                label: string
                value: string
              }>
              _type: "radio"
            }
        >
        folder: string
      }>
    }>
    statusCode: number
  }> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/sidebar/template/",
      query: {
        search: search,
        filter: filter,
      },
    })
  }
  /**
   * @returns any Success
   * @throws ApiError
   */
  public getV1SidebarTemplateOptions(): CancelablePromise<{
    success: boolean
    message: string
    responseObject?: Array<{
      label: string
      value: string
    }>
    statusCode: number
  }> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/sidebar/template/options",
    })
  }
}
