import React from "react"

export interface ITabs {
  page: string
  pageDocument: React.ReactNode
}

interface ITabsProps {
  pages: ITabs[]
}

const Tabs: React.FC<ITabsProps> = ({ pages }) => {
  const [currentTab, setCurrentTab] = React.useState<string>(pages[0]?.page)

  return (
    <>
      <div className="">
        <div className="gap-[20px]">
          {pages.map((page, index) => {
            return (
              <button
                key={index}
                className={`font-poppins text-lg font-normal ${
                  currentTab === page.page
                    ? "bg-themeGreen text-white"
                    : "text-textGray"
                } rounded-xl px-[27px] py-3`}
                onClick={() => setCurrentTab(page.page)}
              >
                {page.page}
              </button>
            )
          })}
        </div>
      </div>

      <div className="w-full">
        {pages.map((page, index) => {
          if (currentTab === page.page) {
            return page.pageDocument
          }
        })}
      </div>
    </>
  )
}

export default Tabs
