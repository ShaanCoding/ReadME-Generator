import { useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { ITemplate } from "@/data/templates"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export const useGetTemplates = () => {
  const params = useSearchParams()
  const searchQuery = params.get("search")
  const filterTags = params.get("category")

  const query = useQuery({
    queryKey: ["templates"],
    queryFn: async () => {
      const { data } = await axios.get(
        `/api/templates?${searchQuery ? `search=${searchQuery}` : ""}${
          !filterTags === null ? `&filter=${filterTags}` : ""
        }`
      )

      return data as ITemplate[]
    },
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  })

  useEffect(() => {
    query.refetch()
  }, [searchQuery, filterTags])

  return query
}
