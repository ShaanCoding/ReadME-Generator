import { FC } from "react"
import Link from "next/link"
import { format } from "date-fns"

import { generateTagColor } from "@/lib/generateTagColor"
import { cn } from "@/lib/utils"
import Avatar from "@/components/ui/Avatar"
import { buttonVariants } from "@/components/ui/Button"
import Contributors from "./Contributors"
import { ITemplate } from "@/data/templates"
import { Skeleton } from "@/components/ui/Skeleton"


const TemplateCard: FC<ITemplate> = ({
  id,
  createdAt: created,
  description,
  title,
  authorUrl,
  tags,
  contributors,
  author,
  imageURL,
  featured,
}) => {
  return (
    <Link
      href={`/generator/templates/${id}`}
      className="min-w-[314px] min-h-[376px] max-w-[340px] max-h-[400px] shrink-0 rounded-[30px] bg-primary pt-[25px] pb-[25px] pl-[25px] pr-[30px] text-secondary"
    >
      <div className="flex gap-[25px] mb-[25px]">
        <div>
          <Avatar src={imageURL} alt="" width="107" height="107" />
        </div>

        <div className="">
          <p className="text-[0.6rem] tracking-primary mb-[5px]">
            {format(new Date(created), "MMM dd, yyyy")}
          </p>
          <h3 className="text-[0.8125rem] font-medium tracking-secondary mb-[10px]">
            {title}
          </h3>
          <p className="tracking-primary mb-[20px] text-[0.6rem]">{author}</p>
          <p className="font-medium tracking-primary text-[0.6rem]">
            {authorUrl}
          </p>
        </div>
      </div>
      <div className="gap-[15px] flex flex-col">
        {/* Description */}
        <div className="">
          <h4 className="text-[0.8125rem] font-medium tracking-secondary mb-[5px]">
            Description
          </h4>
          <p className="text-[0.6rem] tracking-primary">{description}</p>
        </div>

        {/* Tags */}
        <div className="">
          <h4 className="text-[0.8125rem] font-medium tracking-secondary mb-[5px]">
            Tags
          </h4>
          <div className="text-[0.6rem] tracking-primary flex flex-wrap gap-1">
          {tags.map((tag, index) => (
              <span
                style={{ backgroundColor: generateTagColor(tag.value) }}
                className={cn(
                  buttonVariants({ variant: "default", size: "sm" })
                )}
                key={index}
              >
                {tag.value}
              </span>
            ))}
          </div>
        </div>

        {/* Contributors */}
        {<Contributors contributors={contributors} />}
      </div>
    </Link>
  )
}

export default TemplateCard

export const CardFallback = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const tags = [1, 2, 3]
  const contributors = [1, 2, 3, 4]
  return (numbers.map((_, index) => {
    return (
      <Skeleton
        className="min-w-[314px] min-h-[376px] max-w-[340px] max-h-[400px] shrink-0 rounded-[30px] bg-primary pt-[25px] pb-[25px] pl-[25px] pr-[30px] "
      >
        <div className="flex gap-[25px] mb-[25px]">
          <div>
            <Skeleton className="w-[107px] h-[107px] rounded-full bg-secondary" />
          </div>

          <div className="">
            <Skeleton className="w-[80px] h-3 mb-[5px] bg-secondary" />
            <Skeleton className="h-4 w-[100px] mb-[10px] bg-secondary" />

            <Skeleton className="h-3 w-[70px] mb-[20px]  bg-secondary" />
            <Skeleton className="h-3 w-full" />

          </div>
        </div>
        <div className="gap-[15px] flex flex-col">
          {/* Description */}
          <div className="">
            <h4 className="text-[0.8125rem] font-medium tracking-secondary mb-[5px]">
              Description
            </h4>
            <Skeleton className="w-full h-10 bg-secondary" />
          </div>

          {/* Tags */}
          <div className="">
            <h4 className="text-[0.8125rem] font-medium tracking-secondary mb-[5px]">
              Tags
            </h4>
            <div className="text-[0.6rem] tracking-primary flex flex-wrap gap-1">
              {tags.map((_, index) => (
                <span

                  key={index}
                >
                  <Skeleton className="w-6 h-2 bg-secondary" />
                </span>
              ))}
            </div>
          </div>

          {/* Contributors */}
          <div className="">
            <h4 className="text-[0.8125rem] font-medium tracking-secondary mb-[5px]">
              Contributors
            </h4>
            <ul className=" flex flex-wrap gap-x-[22px] gap-y-[5px] ">
              {contributors.map((_, index) => (
                <Skeleton key={index} className={"h-4 w-10 bg-secondary"}/>


              ))}
            </ul>
          </div>
        </div>
      </Skeleton>
    )
  })


  )
}