import React from "react"

const keyFeatureMap: IFeatureGridElement[] = [
  {
    image: "/icons/home/templateReadMEGeneration.svg",
    title: "Template-based ReadME Generation",
    description:
      "Layout: Organize key features into a grid or a list format, with icons or images representing each feature. Use short, descriptive headings, followed by a brief explanation of each feature.",
  },
  {
    image: "/icons/home/customizableTemplates.svg",
    title: "Customizable Templates",
    description:
      "Choose from a wide range of beautifully designed templates that can be easily customized and mixed-and-matched to suit your project's needs.",
  },
  {
    image: "/icons/home/intuitiveUserInterface.svg",
    title: "Intuitive User Interface",
    description:
      "Our user-friendly interface allows you to effortlessly customize and generate your ReadME, streamlining the entire process.",
  },
  {
    image: "/icons/home/shieldsBadgeIntegration.svg",
    title: "Shields.io Badge Integration",
    description:
      "Enhance your project presentation with seamless integration of badges from Shields.io, adding both visual appeal and valuable information to your ReadME.",
  },
  {
    image: "/icons/home/extensiveCustomizationOptions.svg",
    title: "Extensive Customization Options",
    description:
      "Tailor your ReadME's appearance and functionality with a variety of customization options, such as light and dark mode, copy and download buttons, and more.",
  },
  {
    image: "/icons/home/realTimePreview.svg",
    title: "Real-Time Preview",
    description:
      "Instantly see the changes you make to your ReadME through our real-time preview feature, allowing you to refine your content as you go.",
  },
  {
    image: "/icons/home/exportAndShareFunctionality.svg",
    title: "Export and Share Functionality",
    description:
      "Download your ReadME as a '.md' file or copy it to your clipboard to easily share your project's documentation.",
  },
  {
    image: "/icons/home/gptFunctionality.svg",
    title: "GPT-3 Integration (if available)",
    description:
      "Leverage advanced AI-powered writing assistance to further enhance the content of your ReadME.",
  },
  {
    image: "/icons/home/richSetOfTemplates.svg",
    title: "Rich Set of Contributing Templates",
    description:
      "Utilize a wide selection of ReadME templates created and shared by our passionate and experienced community members.",
  },
]

const KeyFeatures = () => {
  return (
    <div className="my-5 relative">
      <h2 className="text-themeGreen font-poppins text-center text-base font-semibold">
        Features
      </h2>
      <h1 className="text-white font-manrope text-center text-6xl font-bold mb-16">
        Key Features
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-5">
        {keyFeatureMap.map((feature: IFeatureGridElement, index: number) => {
          return (
            <FeatureGridElement
              image={feature.image}
              title={feature.title}
              description={feature.description}
              key={index}
            />
          )
        })}
      </div>
      <div
        className="absolute bg-themeGreen
          left-[50%] bottom-0 translate-x-[-50%] translate-y-[50%]
          w-[780px] h-[729px] rounded-[780px] opacity-50 blur-[367px]
          z-[-1]"
      ></div>
    </div>
  )
}

interface IFeatureGridElement {
  image: string
  title: string
  description: string
}

const FeatureGridElement: React.FC<IFeatureGridElement> = ({
  image,
  title,
  description,
}) => {
  return (
    <div className="bg-white bg-opacity-[0.08] p-8 rounded-[30px] border-white border-[1px]">
      <div>
        <img className="w-[60px] h-auto mb-[15px]" src={image} alt={title} />
      </div>
      <h3 className="text-homeBlue font-poppins text-base font-semibold mb-4">
        {title}
      </h3>
      <p className="tex-twhite font-poppins text-sm font-light leading-[175%] mb-4">
        {description}
      </p>
    </div>
  )
}

export default KeyFeatures
