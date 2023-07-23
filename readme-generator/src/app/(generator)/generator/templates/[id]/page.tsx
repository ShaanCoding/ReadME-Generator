"use client"

import { FC, useState } from "react"

import Block, { IBlockProps, IBlocks } from "@/components/Blocks/Block"
import BlocksPage from "@/components/Blocks/BlocksPage"
import PreviewPage from "@/components/Blocks/PreviewPage"
import RawPage from "@/components/Blocks/RawPage"
import Tabs from "@/components/Blocks/Tabs"

interface pageProps {
  params: {
    id: string
  }
}

const Page: FC<pageProps> = ({ params }) => {
  const [blocks, setBlocks] = useState<IBlocks[]>([
    { title: "Hello", subtitle: "World" },
    { title: "Hello 2", subtitle: "World 2" },
    { title: "Hello 3", subtitle: "World 3" },
  ])

  return (
    <main>
      <div className="gap-[21px] px-[37px] pt-[25px]">
        {/* <h2>Hello World {params.id}</h2> */}

        {/* Block, Preview, Raw Tabs */}
        <Tabs
          pages={[
            {
              page: "Block",
              pageDocument: (
                <BlocksPage blocks={blocks} setBlocks={setBlocks} />
              ),
            },
            {
              page: "Preview",
              pageDocument: <PreviewPage output="# Hello World" />,
            },
            {
              page: "Raw",
              pageDocument: <RawPage />,
            },
          ]}
        />
      </div>
    </main>
  )
}

export default Page
