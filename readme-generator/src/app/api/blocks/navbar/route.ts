import { NextResponse } from "next/server"

export type Category = {
  value: string
  label: string
}

/*
    GET all the dropdown options for the navbar
*/
export async function GET(request: Request) {
  return [
    {
      value: "readme",
      label: "Read ME",
    },
    {
      value: "codeofconduct",
      label: "Code of conduct",
    },
    {
      value: "industry",
      label: "Industry",
    },
  ]
}

/*
import { IReadME } from "./useGetBlocks";

export default async function useGetNames(): Promise<string[]> {
  let allBlocks;

  const allReadME = await fetch("/templates/folders.json").then((res) =>
    res.json()
  );

  allBlocks = await Promise.all(
    allReadME.map(async (readme: string) => {
      const blocks = await fetch(`/templates/${readme}/blocks.json`).then(
        (res) => res.json()
      );

      return blocks;
    })
  ).then((blocks) => blocks.flat());

  return allBlocks.map((readme: IReadME) => {
    return readme.name;
  });
}
*/
