export interface ITemplate {
  id: number;
  title: string;
  description: string;
  tags: Tag[];
  featured: boolean;
  author: string;
  authorUrl: string;
  contributors: IContributor[];
  imageURL?: string;
  createdAt: Date;
}
export interface Tag{
  value: string;
  label: string;
}
export interface IContributor {
  name: string;
  url: string;
  social: string;
}

export const templates: ITemplate[] = [
  {
    id: 1,
    title: "Shaans Default Template",
    author: "ShaanCoding",
    authorUrl: "http://github.com/ShaanCoding",
    description: "The industry standard",
    imageURL: "https://via.placeholder.com/150",
    createdAt: new Date("2021-05-20T00:00:00.000Z"),
    tags: [
      { value: "readme", label: "Read Me" },
      { value: "industry", label: "Industry" },
    ],
    featured: false,
    contributors: [
      {
        name: "ShaanCoding",
        url: "http://shaancoding.github.io",
        social: "github",
      },
      { name: "qtKite", url: "http://github.com/qtKite", social: "github" },
    ],
  },
  {
    id: 2,
    title: "Best ReadME Template",
    author: "Othneil Drew",
    authorUrl: "http://github.com/othneildrew",
    description: "This is a template",
    imageURL: "https://via.placeholder.com/150",
    createdAt: new Date("2021-05-20T00:00:00.000Z"),
    tags: [
      { value: "readme", label: "Read Me" },
      { value: "default", label: "Default" },
    ],
    featured: true,
    contributors: [
      {
        name: "ShaanCoding",
        url: "http://shaancoding.github.io",
        social: "github",
      },
    ],
  },
  {
    id: 3,
    title: "Shaans Default Template",
    author: "ShaanCoding",
    authorUrl: "http://github.com/ShaanCoding",
    description: "The industry standard",
    imageURL: "https://via.placeholder.com/150",
    createdAt: new Date("2021-05-20T00:00:00.000Z"),
    tags: [
      { value: "readme", label: "Read Me" },
      { value: "industry", label: "Industry" },
    ],
    featured: false,
    contributors: [
      {
        name: "ShaanCoding",
        url: "http://shaancoding.github.io",
        social: "github",
      },
      { name: "qtKite", url: "http://github.com/qtKite", social: "github" },
    ],
  },
  {
    id: 4,
    title: "Shaans Default Template",
    author: "ShaanCoding",
    authorUrl: "http://github.com/ShaanCoding",
    description: "The industry standard",
    imageURL: "https://via.placeholder.com/150",
    createdAt: new Date("2021-05-20T00:00:00.000Z"),
    tags: [
      { value: "readme", label: "Read Me" },
      { value: "industry", label: "Industry" },
    ],
    featured: false,
    contributors: [
      {
        name: "ShaanCoding",
        url: "http://shaancoding.github.io",
        social: "github",
      },
      { name: "qtKite", url: "http://github.com/qtKite", social: "github" },
    ],
  },
  {
    id: 5,
    title: "Shaans Default Template",
    author: "ShaanCoding",
    authorUrl: "http://github.com/ShaanCoding",
    description: "The industry standard",
    imageURL: "https://via.placeholder.com/150",
    createdAt: new Date("2021-05-20T00:00:00.000Z"),
    tags: [
      { value: "readme", label: "Read Me" },
      { value: "industry", label: "Industry" },
    ],
    featured: false,
    contributors: [
      {
        name: "ShaanCoding",
        url: "http://shaancoding.github.io",
        social: "github",
      },
      { name: "qtKite", url: "http://github.com/qtKite", social: "github" },
    ],
  },
  {
    id: 6,
    title: "Shaans Default Template",
    author: "ShaanCoding",
    authorUrl: "http://github.com/ShaanCoding",
    description: "The industry standard",
    imageURL: "https://via.placeholder.com/150",
    createdAt: new Date("2021-05-20T00:00:00.000Z"),
    tags: [
      { value: "readme", label: "Read Me" },
      { value: "industry", label: "Industry" },
    ],
    featured: false,
    contributors: [
      {
        name: "ShaanCoding",
        url: "http://shaancoding.github.io",
        social: "github",
      },
      { name: "qtKite", url: "http://github.com/qtKite", social: "github" },
    ],
  },
];
