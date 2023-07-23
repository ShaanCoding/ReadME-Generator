import { NextResponse } from "next/server"

/*
  GET all blocks from all templates
  filteredByTemplate: string | null = null,
  searchedByQuery: string | null = null'

  Returns all blocks from the template (this includes the JSON structure / template)
*/
export async function GET(request: Request) {
  return
}

/*
export interface IReadME {
  name: string;
  author: string;
  authorUrl: string;
  description: string;
  image: string;
  folder: string;
  date: string;
  tags: string[];
  featured: boolean;
  contributors: IContributor[];
  functions: IFunction[];
}

export interface IContributor {
  name: string;
  url: string;
}

export interface IFunction {
  name: string;
  description: string;
  function: string;
  variables: IVariable[];
}

export interface IVariable {
  name: string;
  label: string;
  defaultValue: string | string[] | boolean;
  type: EBlockType;
}

export enum EBlockType {
  TEXT = "text",
  BOOLEAN = "boolean",
  ARRAY = "array",
}

export default async function useGetBlocks(
  filteredByTemplate: string | null = null,
  searchedByQuery: string | null = null
): Promise<IReadME[]> {
  // Import all blocks from the templates folder
  // Unless filtered and/or searched
  // Should read macros for function definitions
  //  {% macro projectHeader() %}

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

  if (filteredByTemplate) {
    // Filter by template
    allBlocks = allBlocks.filter((readme: IReadME) => {
      return readme.name.toLowerCase() === filteredByTemplate.toLowerCase();
    });
  }

  if (searchedByQuery) {
    // Filter by code block name blocks.function.name only show blocks that match and hide other blocks

    allBlocks = allBlocks.filter((readme: IReadME) => {
      // Filter by function and if none match remove the parent block
      const functions = readme.functions.filter((func: IFunction) => {
        return func.name.toLowerCase().includes(searchedByQuery.toLowerCase());
      });

      if (functions.length > 0) {
        readme.functions = functions;
        return true;
      }

      return false;
    });
  }

  console.log(JSON.stringify(allBlocks));

  return allBlocks;
}
*/
