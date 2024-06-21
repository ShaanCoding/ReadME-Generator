"use client"

import { IFullTemplate, ITemplate, readMeGenerator } from "@/api/generated"
import { useQuery } from "@tanstack/react-query"
import { motion } from "framer-motion"

import { api } from "@/lib/apiWrapper"
import Card from "@/components/SelectTemplate/Card"

const TopThreeTemplates = () => {
  const templateMaps = useQuery({
    queryKey: ["getV1Template"],
    queryFn: async () => {
      let request = await api.sidebar.getV1SidebarAll()

      return request.responseObject?.slice(0, 3) as IFullTemplate[]
    },
    staleTime: 5 * 1000,
  })

  if (templateMaps.data && templateMaps.isSuccess) {
    return (
      <div>
        <div className="mb-12 text-center">
          <h2 className="font-semibold text-themeGreen">Try them out!</h2>
          <h1 className="text-6xl font-bold text-white">Featured Templates</h1>
        </div>
        <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {templateMaps.data?.map((template: ITemplate, index: number) => (
            <motion.div
              initial={{ y: index % 2 === 0 ? 200 : -200, opacity: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              whileInView={{ opacity: 1, y: 0 }}
              key={index}
            >
              <Card cardData={template} key={index} />
            </motion.div>
          ))}
        </div>
      </div>
    )
  } else {
    return <></>
  }
}

export default TopThreeTemplates
