/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type IContributor = {
  name: string
  image: string
  title: string
  description: string
  url: Array<{
    _type:
      | "Facebook"
      | "Instagram"
      | "Twitter"
      | "Github"
      | "LinkedIn"
      | "Other"
    url: string
  }>
  contributions: Array<{
    name: string
    url: string
    type:
      | "OpenIssue"
      | "ClosedIssueDone"
      | "ClosedIssueCancelled"
      | "PullRequestOpen"
      | "PullRequestMerged"
      | "PullRequestCancelled"
      | "PullRequestDraft"
  }>
}
