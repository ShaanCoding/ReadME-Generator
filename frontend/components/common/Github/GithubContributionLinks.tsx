import React from "react"
import Link from "next/link"
import {
  IGithubContributionsList,
  IIssueType,
  IPullRequestType,
} from "@/api/generated"

import ContributionIcon from "../../Contributors/ContributorIcon"

const GithubContributionLinks: React.FC<{
  githubLinks: IGithubContributionsList[]
}> = ({ githubLinks }) => {
  if (githubLinks.length === 0) return null

  return (
    <div>
      <h2 className="mb-2 text-2xl font-semibold">Contributions</h2>
      <div>
        {githubLinks.map((link, key) => {
          return (
            <div key={key} className="mb-2">
              <Link href={link.url}>
                <div className="flex flex-row text-blue-500 hover:underline">
                  <div className="pr-2">
                    <ContributionIcon
                      iconType={link.type as IPullRequestType | IIssueType}
                    />
                  </div>
                  <p>{link.name}</p>
                </div>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default GithubContributionLinks
