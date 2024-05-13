import ContributorBlock from "@/components/Contributors/ContributorSection";
import React from "react";
import { contributionData } from "../../config/contributors";
import { contributorsConfig } from "@/config/contributors";

export default function page() {
  return (
    <main className="flex items-center justify-center">
      <div className="max-w-screen-2xl flex flex-1 flex-col gap-4 p-4 xl:gap-6 xl:p-6">
        <h1 className="text-4xl font-bold">Our Contributors</h1>
        <h2 className="text-lg">
          {contributorsConfig.description}
        </h2>

        <div className="grid gap-6 grid-cols-1">
          <ContributorBlock area="Development" contributors={contributionData.development} />
          <ContributorBlock area="Design" contributors={contributionData.design} />
          <ContributorBlock area="Templates" contributors={contributionData.contributedToTemplate} />
          <ContributorBlock area="Bug report" contributors={contributionData.bugReports} />
        </div>
      </div>
    </main>
  )
}
