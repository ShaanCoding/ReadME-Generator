import React from "react"
import Image from "next/image"

const Testimonials = () => {
  return (
    <div className="my-5">
      <h2 className="text-themeGreen font-poppins text-center text-base font-semibold">
        Testimonials
      </h2>
      <h1 className="text-white font-manrope text-center text-6xl font-bold mb-16">
        What our users say
      </h1>

      {/* Testimonials Carasoul */}
      <div className="w-full flex items-center justify-center relative">
        <div className=" w-full grid grid-cols-3 gap-4">
          <TestimonialCard
            name="John Doe"
            title="CEO"
            testimony="I can't believe how easy it was to create an amazing ReadME with makeread.me. Highly
        recommended to all developers!"
          />
          <TestimonialCard
            name="John Doe"
            title="CEO"
            testimony="I can't believe how easy it was to create an amazing ReadME with makeread.me. Highly
        recommended to all developers!"
          />
          <TestimonialCard
            name="John Doe"
            title="CEO"
            testimony="I can't believe how easy it was to create an amazing ReadME with makeread.me. Highly
        recommended to all developers!"
          />
        </div>
      </div>

      {/* Testimonials Carasoul - Controls */}
      <div className="my-[50px] flex items-center justify-center space-x-4">
        <div className="w-[10px] h-[10px] rounded-full bg-themeGreen"></div>
        <div className="w-[10px] h-[10px] rounded-full bg-[#56555F]"></div>
        <div className="w-[10px] h-[10px] rounded-full bg-[#56555F]"></div>
      </div>
    </div>
  )
}

interface ITestimonialCard {
  name: string
  title: string
  testimony: string
}

const TestimonialCard: React.FC<ITestimonialCard> = ({
  name,
  title,
  testimony,
}) => {
  return (
    <div className="relative overflow-hidden w-[507px] py-16 px-8 bg-white text-center font-poppins bg-opacity-[0.08] border-[#454545] border-[1px] rounded-[30px]">
      <img
        className="absolute bottom-0 right-0 pointer-events-none select-none"
        src="icons/home/testimonialUnion.svg"
      />

      <h1 className="text-white font-poppins text-base font-bold mb-[10px]">
        {name}
      </h1>
      <h2 className="text-[#7E8A9F] text-base font-normal mb-[15px]">
        {title}
      </h2>
      <p className="text-white text-xl font-normal font-inter leading-[160%]">
        {testimony}
      </p>
    </div>
  )
}

export default Testimonials
