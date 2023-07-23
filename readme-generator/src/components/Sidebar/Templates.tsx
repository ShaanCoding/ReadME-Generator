import { FC } from "react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion"
import CreateTemplateButton from "./CreateTemplateButton"

interface DrewsTemplateProps {
  templates: {
    title: string
    content?: string
  }[]
}

const DrewsTemplate: FC<DrewsTemplateProps> = ({ templates }) => {
  return (
    <>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-textGray font-medium font-[0.8125rem] mb-[10px]  tracking-primary">
            Drews Template
          </AccordionTrigger>
          <AccordionContent className="">
            <div className="flex flex-col gap-y-[15px]">
              {templates.map((template) => (
                <CreateTemplateButton
                  key={template.title}
                  title={template.title}
                  content={template.content}
                />
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  )
}

export default DrewsTemplate
