export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "makeread.me",
  description:
    "Make your README.md file with ease. Select a template or make your own.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Select A Template",
      href: "/select-template",
    },
    {
      title: "Create Your Own",
      href: "/generator",
    },
    {
      title: "Contributors",
      href: "/contributors",
    },
    {
      title: "Articles",
      href: "/articles",
    }
  ],
  links: {
    twitter: "https://twitter.com/ShaanCoding",
    linkedin: "https://www.linkedin.com/in/shaancoding/",
    github: "https://github.com/ShaanCoding/makeread.me",
  },
  footer: {
    title: "makeread.me",
    description:
      "Make your README.md file with ease. Select a template or make your own.",
    quickLinks: [
      {
        title: "Home",
        href: "/",
      },
      {
        title: "Select A Template",
        href: "/select-template",
      },
      {
        title: "Create Your Own",
        href: "/generator",
      },
      {
        title: "Contributors",
        href: "/contributors",
      },
    ],
    socialMedia: [
      {
        name: "Github",
        url: "https://github.com/ShaanCoding/makeread.me",
        icon: "/icons/home/social/github.svg",
      },
      {
        name: "LinkedIn",
        icon: "/icons/home/social/linkedin.svg",
        url: "https://www.linkedin.com/in/shaancoding/",
      },
      {
        name: "Twitter",
        icon: "/icons/home/social/twitter.svg",
        url: "https://twitter.com/ShaanCoding",
      },
    ],
  },
  homePage: {
    splashScreen: {
      title: "Empowering Project Documentation",
      subtitle: "Welcome to makeread.me",
      description:
        "Elevate your project presentations with captivating ReadME files. Our intuitive ReadME Generator makes creating professional documentation a breeze, whether you're a beginner or an experienced developer. Choose from our extensive collection of customizable templates and streamline your workflow. Experience the simplicity and effectiveness of makeread.me - the ultimate tool to enhance your projects.",
      cta: {
        title: "Start Generating ReadMEs Now!",
        href: "/select-template",
      },
    },
    demo: "/Demo.jpg",
    keyFeatures: [
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
        image: "/icons/home/richSetOfTemplates.svg",
        title: "Rich Set of Contributing Templates",
        description:
          "Utilize a wide selection of ReadME templates created and shared by our passionate and experienced community members.",
      },
      {
        image: "/icons/home/gptFunctionality.svg",
        title: "GPT-3 Integration (Coming Soon)",
        description:
          "Leverage advanced AI-powered writing assistance to further enhance the content of your ReadME.",
      },
    ],
    callToAction: {
      title: "Ready to create professional-quality ReadMEs for your projects?",
      url: {
        title: "Begin your ReadME journey!",
        href: "/select-template",
      },
    },
    testimonials: [
      {
        name: "dylanheaslip",
        imageURL: "/testimonials/dylanheaslip.png",
        title: "User",
        testimony: `"I can't believe how easy it was to create an amazing ReadME with makeread.me. Highly recommended to all developers!"`,
      },
      {
        name: "ShaanCoding",
        imageURL: "/testimonials/shaancoding.jpg",
        title: "Creator",
        testimony: `"Whilst I've used many ReadME Generator tools in the past, I've often found myself manually rekeying the same information over and over again when starting a project. With templating, I'm able to ship faster, and worry less about making the perfect ReadME."`,
      },
      {
        name: "mianni1",
        imageURL: "/testimonials/mianni1.png",
        title: "User",
        testimony: `"Makeread.me has significantly reduced my documentation time, making READMEs clear and concise. Its customizable template suits all my project needs and has optimised my workflow by allowing me more time for development. A must-try for any developer!"`,
      },
    ],
  },
}
