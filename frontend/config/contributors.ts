import { IContributor } from "@/api/generated"

export type ContributorsConfig = typeof contributorsConfig

export const contributorsConfig = {
  description:
    "The development of makeread.me could not have been possible without the help of our contributors. Here's a little thanks to the people that have helped along the way!",
}

const shaancoding: IContributor = {
  name: "Shaan Khan",
  image: "https://avatars.githubusercontent.com/u/22236218?v=4",
  title: "Software Engineer at Nine",
  description: "Face the Tech Debt, Build the Future.",
  url: [
    {
      _type: "Twitter",
      url: "https://twitter.com/ShaanCoding",
    },
    {
      _type: "Github",
      url: "https://www.github.com/shaancoding",
    },
    {
      _type: "Other",
      url: "https://blog.shaankhan.dev/",
    },
    {
      _type: "LinkedIn",
      url: "https://www.linkedin.com/in/shaancoding/",
    },
  ],
  contributions: [],
}

const mathPow: IContributor = {
  name: "Mathys Deshaies",
  image: "https://avatars.githubusercontent.com/u/75903735?v=4",
  title: "Full Stack Developer",
  description:
    "Hello! I'm Mathys, a developer passionate about all aspects of computer science and management. My professional background and skills have been built around several areas, including technology, design, finance, and entrepreneurship.",
  url: [
    {
      _type: "LinkedIn",
      url: "https://www.linkedin.com/in/mathys-deshaies/",
    },
    {
      _type: "Github",
      url: "https://github.com/MathPow",
    },
  ],
  contributions: [
    {
      name: "Add file IO error handling in controllers & minor refactor #96",
      url: "https://github.com/ShaanCoding/makeread.me/pull/96",
      type: "ClosedIssueDone",
    },
    {
      name: "fix: buttons break after 4 buttons #95",
      url: "https://github.com/ShaanCoding/makeread.me/pull/95",
      type: "PullRequestMerged",
    },
    {
      name: `"Page Type" buttons break easily #94`,
      url: "https://github.com/ShaanCoding/makeread.me/issues/94",
      type: "ClosedIssueDone",
    },
    {
      name: "Cannot add blocks from the current template #92",
      url: "https://github.com/ShaanCoding/makeread.me/issues/92",
      type: "ClosedIssueDone",
    },
    {
      name: `The "installation" block doesn't break in markdown preview #91`,
      url: "https://github.com/ShaanCoding/makeread.me/issues/91",
      type: "ClosedIssueDone",
    },
    {
      name: "[MattPow] Card Transition, Framer Motion #81",
      url: "https://github.com/ShaanCoding/makeread.me/pull/81",
      type: "PullRequestMerged",
    },
    {
      name: "Fix/button layout template generator #73",
      url: "https://github.com/ShaanCoding/makeread.me/pull/73",
      type: "PullRequestCancelled",
    },
    {
      name: "feat: contributors page on the web site #72",
      url: "https://github.com/ShaanCoding/makeread.me/issues/72",
      type: "OpenIssue",
    },
    {
      name: "feat: redesign the template Page #69",
      url: "https://github.com/ShaanCoding/makeread.me/issues/69",
      type: "ClosedIssueDone",
    },
    {
      name: "Feature/add contextual help tooltips #67",
      url: "https://github.com/ShaanCoding/makeread.me/pull/67",
      type: "PullRequestMerged",
    },
    {
      name: "Fix: change clone by fork #60",
      url: "https://github.com/ShaanCoding/makeread.me/pull/60",
      type: "PullRequestCancelled",
    },
    {
      name: "Feature / Transition between two card swapping position in template #58",
      url: "https://github.com/ShaanCoding/makeread.me/pull/58",
      type: "PullRequestMerged",
    },
    {
      name: "Fix layout of editorBlock to be more responsive #44",
      url: "https://github.com/ShaanCoding/makeread.me/pull/44",
      type: "PullRequestMerged",
    },
    {
      name: "How can we start helping? #43",
      url: "https://github.com/ShaanCoding/makeread.me/issues/43",
      type: "ClosedIssueDone",
    },
  ],
}

const aminBeigi: IContributor = {
  name: "Amin Beigi",
  image: "https://avatars.githubusercontent.com/u/39206588?v=4",
  title: "Software Engineer",
  description: `"An idiot admires complexity, a genius admires simplicity." - Terry A. Davis`,
  url: [
    {
      _type: "Other",
      url: "https://aminbeigi.com/",
    },
  ],
  contributions: [
    {
      name: "Add file IO error handling in controllers & minor refactor #96",
      url: "https://github.com/ShaanCoding/makeread.me/pull/96",
      type: "PullRequestMerged",
    },
    {
      name: "[aminbeigi] Replace FS with MongoDB #106",
      url: "https://github.com/ShaanCoding/makeread.me/pull/106",
      type: "PullRequestMerged",
    },
  ],
}

const bobrandy13: IContributor = {
  name: "Kevin Huang",
  image: "https://avatars.githubusercontent.com/u/91509842?v=4",
  title: "Student",
  description: "Hello. Looking for job.",
  url: [],
  contributions: [
    {
      name: "[Bobrandy13] Created Contributions Page #83",
      url: "https://github.com/ShaanCoding/makeread.me/pull/83",
      type: "PullRequestMerged",
    },
  ],
}

const development = [shaancoding, mathPow, aminBeigi, bobrandy13]

const design = [shaancoding]

const contributedToTemplate = [shaancoding]

const bugReports = [shaancoding, mathPow]

export const contributionData = {
  development: development,
  design: design,
  contributedToTemplate: contributedToTemplate,
  bugReports: bugReports,
}
