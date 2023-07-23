import { NextResponse } from "next/server"
import { templates } from "@/data/templates"

/*
  GETS all templates from the templates folder
  - reads all templates
  - filters by template
  - searches by query
  - sorts by name or date
*/
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  let templatesResponse = templates
  const search = searchParams.get("search")
  const sort = searchParams.get("sort")
  const filter = searchParams.get("filter")
  if (search) {
    /* check for spaces  */
    if (search.includes("-")) {
      const searchSplit = search.split("-")
      templatesResponse = templatesResponse.filter((template) =>
        template.title
          .toLowerCase()
          .includes(searchSplit.map((word) => word.toLowerCase()).join(" "))
      )
    } else {
      templatesResponse = templatesResponse.filter((template) =>
        template.title.toLowerCase().includes(search.toLowerCase())
      )
    }
  }
  if (sort) {
    templatesResponse = templatesResponse.sort((a, b) => {
      if (sort === "name") {
        return a.title.localeCompare(b.title)
      }
      if (sort === "date") {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      }
      return 0
    })
  }
  if (filter) {
    templatesResponse = templatesResponse.filter((template) =>
      template.tags.some((tag) => tag.value === filter)
    )
  }

  return NextResponse.json(templatesResponse, {
    status: 200,
  })
}
