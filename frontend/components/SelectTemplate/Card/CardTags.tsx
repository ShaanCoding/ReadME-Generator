import { ITag } from "@/api/generated"

import { Badge } from "@/components/ui/badge"
import { CardTitle } from "@/components/ui/card"

const CardTags: React.FC<{
  tags: ITag[]
  addCategoryToSidebar?: (value: string) => void
}> = ({ tags, addCategoryToSidebar }) => {
  return (
    <>
      <CardTitle className="pb-2">Tags</CardTitle>
      <div className="flex flex-wrap gap-2 pb-2">
        {tags.map((tag: ITag, index: number) => (
          <Badge
            key={index}
            className={`${
              addCategoryToSidebar ? "cursor-pointer" : "hover:bg-primary"
            }`}
            onClick={() =>
              addCategoryToSidebar && addCategoryToSidebar(tag.url)
            }
          >
            {tag.name}
          </Badge>
        ))}
      </div>
    </>
  )
}

export default CardTags
