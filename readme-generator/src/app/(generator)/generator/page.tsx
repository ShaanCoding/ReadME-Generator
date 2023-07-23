"use client"
import TemplateCard, { CardFallback } from "@/components/TemplateCard"
import { useGetTemplates } from "@/hooks/useGetTemplates"



const Page = () => {
  const { data, isLoading, isFetching } = useGetTemplates()

  return (
    <main>
      <div className="gap-[21px] flex flex-wrap  pr-[37px] pt-[25px]">
        {isLoading || isFetching ? <CardFallback /> : data?.map((item, index) => (
          <TemplateCard
            
            id={item.id}
            imageURL={item.imageURL}
            createdAt={item.createdAt}
            description={item.description}
            key={index}
            tags={item.tags}
            title={item.title}
            author={item.author}
            authorUrl={item.authorUrl}
            contributors={item.contributors}
            featured={item.featured}
          />
        ))}
      </div>
    </main>
  )
}

export default Page
