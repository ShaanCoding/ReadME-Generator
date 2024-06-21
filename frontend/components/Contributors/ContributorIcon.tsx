import React from "react"
import { IIssueType, IPullRequestType } from "@/api/generated"

import ClosedIssueCancelled from "../common/Github/ClosedIssueCancelled"
import ClosedIssueDone from "../common/Github/ClosedIssueDone"
import OpenIssueIcon from "../common/Github/OpenIssueIcon"
import PullRequestCancelled from "../common/Github/PullRequestCancelled"
import PullRequestDraft from "../common/Github/PullRequestDraft"
import PullRequestMerged from "../common/Github/PullRequestMerged"
import PullRequestOpen from "../common/Github/PullRequestOpen"

const ContributorIcon: React.FC<{
  iconType: IPullRequestType | IIssueType
}> = ({ iconType }) => {
  switch (iconType) {
    case IIssueType.OPEN_ISSUE:
      return <OpenIssueIcon />
    case IIssueType.CLOSED_ISSUE_DONE:
      return <ClosedIssueDone />
    case IIssueType.CLOSED_ISSUE_CANCELLED:
      return <ClosedIssueCancelled />
    case IPullRequestType.PULL_REQUEST_OPEN:
      return <PullRequestOpen />
    case IPullRequestType.PULL_REQUEST_MERGED:
      return <PullRequestMerged />
    case IPullRequestType.PULL_REQUEST_CANCELLED:
      return <PullRequestCancelled />
    case IPullRequestType.PULL_REQUEST_DRAFT:
      return <PullRequestDraft />
    default:
      return <PullRequestOpen />
  }
}

export default ContributorIcon
