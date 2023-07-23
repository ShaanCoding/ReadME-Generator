"use client"

import React, { useState } from "react"

import { Button } from "../ui/Button"
import CollapseButton from "/public/icons/collapse-button.svg"
import DeleteButton from "/public/icons/delete-button.svg"
import DownButton from "/public/icons/down-button.svg"
import RefreshButton from "/public/icons/refresh-button.svg"
import ReorderButton from "/public/icons/reorder-button.svg"
import UpButton from "/public/icons/up-button.svg"

export interface IBlocks {
  title: string
  subtitle: string
}

export interface IBlockProps {
  title: string
  subtitle: string
  index: number
  blocks: IBlocks[]
  setBlocks: React.Dispatch<React.SetStateAction<IBlocks[]>>
  resetBlocks: () => void
  children?: React.ReactNode
}

const Block: React.FC<IBlockProps> = ({
  title,
  subtitle,
  index,
  blocks,
  setBlocks,
  resetBlocks,
  children,
}) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="bg-primary w-full rounded-2xl px-[25px] py-[28px] my-8">
      {/* Make a line stroke width 0.25 px of FFF of 0.5 opacity*/}
      <div className="border-b-[0.25px] border-white border-opacity-50 mb-[18px]">
        <div className="flex items-center justify-between">
          <p className="text-white font-poppins font-size-[15px] font-bold pb-[18px]">
            {title}
          </p>

          <div>
            {/* Collapse Buttons */}
            <Button
              className="hover:opacity-90"
              onClick={() => {
                if (index !== 0) {
                  let newBlocks = [...blocks]
                  let temp = newBlocks[index]
                  newBlocks[index] = newBlocks[index - 1]
                  newBlocks[index - 1] = temp
                  setBlocks(newBlocks)
                }
              }}
            >
              <UpButton />
            </Button>
            <Button
              className="hover:opacity-90"
              onClick={() => {
                if (index !== blocks.length - 1) {
                  let newBlocks = [...blocks]
                  let temp = newBlocks[index]
                  newBlocks[index] = newBlocks[index + 1]
                  newBlocks[index + 1] = temp
                  setBlocks(newBlocks)
                }
              }}
            >
              <DownButton />
            </Button>
            <Button className="hover:opacity-90" onClick={resetBlocks}>
              <RefreshButton />
            </Button>
            <Button
              className="hover:opacity-90"
              onClick={() => {
                let newBlocks = [...blocks]
                newBlocks.splice(index, 1)
                setBlocks(newBlocks)
              }}
            >
              <DeleteButton />
            </Button>
            <Button
              className="hover:opacity-90"

              // Make this draggable to reorder blocks
            >
              <ReorderButton />
            </Button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-white font-poppins size-[13px] font-medium pb-[18px]">
          {subtitle}
        </p>

        {/* TO DO will park for now */}
        <div>
          <Button
            className={`hover:opacity-90 transition-transform duration-500 transform ${
              isExpanded && "rotate-180"
            }`}
            onClick={() => {
              setIsExpanded(!isExpanded)
            }}
          >
            <CollapseButton />
          </Button>
        </div>
      </div>

      {isExpanded && <div>{children}</div>}
    </div>
  )
}

export default Block
