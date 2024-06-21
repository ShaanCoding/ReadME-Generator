import { IContributor } from "@/api/generated"

import ContributorBlock from "./ContributorBlock"

const ContributorSection: React.FC<{
  area: string
  contributors: IContributor[]
}> = ({ area, contributors }) => {
  return (
    <section className="grid gap-6">
      <h1 className="text-2xl font-bold">{area}</h1>
      {contributors.map((contribution: IContributor, index: number) => (
        <ContributorBlock contribution={contribution} isFirst={index === 0} />
      ))}
    </section>
  )
}

export default ContributorSection
