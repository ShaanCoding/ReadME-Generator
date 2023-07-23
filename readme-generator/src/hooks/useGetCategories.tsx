import { useEffect } from "react"
import { Category } from "@/app/api/blocks/navbar/route"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export const useGetCategories = () => {
  //   const params = useSearchParams()
  //   const searchQuery = params.get("search")
  //   const filterTags = params.get("category")

  const query = useQuery({
    queryKey: ["templates"],
    queryFn: async () => {
      const { data } = await axios.get(`/api/blocks/navbar`)

      return data as Category[]
    },
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  })

  useEffect(() => {
    query.refetch()
  }, [])

  return query
}
