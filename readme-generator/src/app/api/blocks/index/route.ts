import { NextResponse } from "next/server"

/*
    Loads a specific templates index (base template)
*/
export async function GET(request: Request) {
  return
}

/*
export default async function useGetSpecificTemplateIndex(folderUrl: string) {
  const index = await fetch(`/templates/${folderUrl}/index.njk`).then((res) =>
    res.text()
  );

  if (!index) {
    return [];
  }

  const output = index
    .replaceAll("{{", "")
    .replaceAll("}}", "")
    .replaceAll("()", "")
    .replaceAll("\r", "")
    .trim()
    .split("\n")
    .map((str) => str.replace(/\s/g, ""));
  return output;
}
*/
