/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from "./core/BaseHttpRequest"
import { FetchHttpRequest } from "./core/FetchHttpRequest"
import type { OpenAPIConfig } from "./core/OpenAPI"
import { HealthCheckService } from "./services/HealthCheckService"
import { SidebarService } from "./services/SidebarService"
import { TemplateService } from "./services/TemplateService"

type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest
export class readMeGenerator {
  public readonly healthCheck: HealthCheckService
  public readonly sidebar: SidebarService
  public readonly template: TemplateService
  public readonly request: BaseHttpRequest
  constructor(
    config?: Partial<OpenAPIConfig>,
    HttpRequest: HttpRequestConstructor = FetchHttpRequest
  ) {
    this.request = new HttpRequest({
      BASE: config?.BASE ?? "https://api.makeread.me",
      VERSION: config?.VERSION ?? "1.0.0",
      WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
      CREDENTIALS: config?.CREDENTIALS ?? "include",
      TOKEN: config?.TOKEN,
      USERNAME: config?.USERNAME,
      PASSWORD: config?.PASSWORD,
      HEADERS: config?.HEADERS,
      ENCODE_PATH: config?.ENCODE_PATH,
    })
    this.healthCheck = new HealthCheckService(this.request)
    this.sidebar = new SidebarService(this.request)
    this.template = new TemplateService(this.request)
  }
}
