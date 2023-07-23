import React from "react"
import Link from "next/link"
import DropDownButton from "public/icons/collapse-button.svg"

const Navbar = () => {
  return (
    <div className="w-full my-16 relative">
      <div className="w-full flex items-center justify-between">
        <h1 className="w-1/3 text-white font-poppins text-xl font-bold">
          ReadME Generator
        </h1>
        <div className="w-2/3 flex justify-end items-center">
          <div className="mx-8">
            <Link
              href="/"
              className="text-white font-poppins text-xl font-normal hover:opacity-90
              px-4 py-2 hover:bg-themeGreen hover:rounded-[30px] transition-all"
            >
              Home
            </Link>
          </div>
          <div className="mx-8">
            <Link
              href="/"
              className="text-white font-poppins text-xl font-normal hover:opacity-90
              px-4 py-2 hover:bg-themeGreen hover:rounded-[30px] transition-all"
            >
              ReadME Editor
            </Link>
          </div>
          <div className="mx-8">
            <Link
              href="/"
              className="text-white font-poppins text-xl font-normal hover:opacity-90
              px-4 py-2 hover:bg-themeGreen hover:rounded-[30px] transition-all"
            >
              Contact Us
            </Link>
          </div>
          <div className="mx-8">
            <Link
              href="/"
              className="text-white font-poppins text-xl font-normal hover:opacity-90
              px-4 py-2 hover:bg-themeGreen hover:rounded-[30px] transition-all
              "
            >
              ReadME Examples
            </Link>
          </div>
          <div className="mx-8">
            {/* On hover we need chevron to spin */}
            <Link
              href="/"
              className="text-white font-poppins text-xl font-normal hover:opacity-90 flex items-center justify-center
              px-4 py-2 hover:bg-themeGreen hover:rounded-[30px] transition-all"
            >
              <div className="mr-4">Guides</div>
              <div>
                <DropDownButton />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div
        className="absolute bg-themeGreen top-0 left-0
      w-[371px] h-[371px] rounded-[371px] opacity-50 blur-[175px] z-[-1]
      "
      ></div>
    </div>
  )
}

// width: 50%;
// height: 1000px;
// background: #8d3bf421;
// filter: blur(316px);
// position: absolute;
// pointer-events: none;

export default Navbar
