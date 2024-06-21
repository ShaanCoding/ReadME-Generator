/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BaseHttpRequest } from "../core/BaseHttpRequest"
import type { CancelablePromise } from "../core/CancelablePromise"

export class HealthCheckService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * @returns any Success
   * @throws ApiError
   */
  public getV1HealthCheck(): CancelablePromise<{
    success: boolean
    message: string
    responseObject?: any
    statusCode: number
  }> {
    return this.httpRequest.request({
      method: "GET",
      url: "/v1/health-check",
    })
  }
}
