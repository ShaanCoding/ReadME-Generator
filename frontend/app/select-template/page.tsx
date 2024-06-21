"use client"

import { useState } from "react"
import Link from "next/link"
import { IPageType, ITemplate } from "@/api/generated"
import { FilePlus2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Card from "@/components/SelectTemplate/Card"
import SelectTemplateSideBar from "@/components/SelectTemplate/Sidebar/Sidebar"

export default function IndexPage() {
  const [template, setTemplates] = useState<ITemplate[]>([])
  const [pageType, setPageType] = useState<IPageType>(IPageType.NONE)
  const [multiSelectValue, setMultiSelectValue] = useState<string[]>([])

  const addCategoryToSidebar = (value: string) => {
    setMultiSelectValue([...multiSelectValue, value])
  }

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <SelectTemplateSideBar
        setTemplateBlocks={setTemplates}
        pageType={pageType}
        multiSelectValue={multiSelectValue}
        setMultiSelectValue={setMultiSelectValue}
      />

      <div className="flex flex-col">
        <main className="flex flex-1 flex-col gap-4 p-4 xl:gap-6 xl:p-6">
          <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
            <div className="flex gap-6 xl:items-center xl:justify-center">
              <Link href="/generator">
                <Button variant="default">
                  <FilePlus2 className="mr-2 size-4 text-nowrap" />
                  Create New Template
                </Button>
              </Link>
            </div>

            <div className="gap-6 xl:flex xl:items-center xl:justify-center">
              {Object.keys(IPageType) && (
                <Tabs defaultValue={pageType}>
                  <TabsList>
                    {Object.keys(IPageType).map(
                      (page: string, index: number) => (
                        <TabsTrigger
                          onClick={() => setPageType((IPageType as any)[page])}
                          value={(IPageType as any)[page]}
                          key={index}
                        >
                          {(IPageType as any)[page]}
                        </TabsTrigger>
                      )
                    )}
                  </TabsList>
                </Tabs>
              )}
            </div>
          </div>

          {template.length === 0 && (
            <div className="flex size-full items-center justify-center">
              <div className="py-3 text-center">
                <h4 className="text-xl font-semibold">No blocks found</h4>
              </div>
            </div>
          )}

          {template.length !== 0 && (
            <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
              {template.map((template: ITemplate, index: number) => (
                <Card
                  cardData={template}
                  key={index}
                  addCategoryToSidebar={addCategoryToSidebar}
                />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
