/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BaseHttpRequest } from "../core/BaseHttpRequest"
import type { CancelablePromise } from "../core/CancelablePromise"
import type { IDefaultBlockInput } from "../models/IDefaultBlockInput"

export class TemplateService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * @param id
   * @returns any Success
   * @throws ApiError
   */
  public getV1TemplateTemplateDefaultBlocks(id: string): CancelablePromise<{
    success: boolean
    message: string
    responseObject?: Array<{
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
    statusCode: number
  }> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/template/template/{id}/defaultBlocks",
      path: {
        id: id,
      },
    })
  }
  /**
   * @param requestBody
   * @returns any Success
   * @throws ApiError
   */
  public postV1TemplateTemplateMacros(
    requestBody: Array<IDefaultBlockInput>
  ): CancelablePromise<{
    success: boolean
    message: string
    responseObject?: string
    statusCode: number
  }> {
    return this.httpRequest.request({
      method: "POST",
      url: "/v1/template/template/{id}/macros",
      body: requestBody,
      mediaType: "application/json",
    })
  }
  /**
   * @param id
   * @returns any Success
   * @throws ApiError
   */
  public getV1TemplateTemplatePreview(id: string): CancelablePromise<{
    success: boolean
    message: string
    responseObject?: string
    statusCode: number
  }> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/template/template/{id}/preview",
      path: {
        id: id,
      },
    })
  }
}
