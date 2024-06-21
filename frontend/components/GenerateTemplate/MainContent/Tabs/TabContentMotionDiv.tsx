import { motion } from "framer-motion"

const TabContentMotionDiv: React.FC<{
  show: boolean
  children: React.ReactNode
}> = ({ show, children }) => {
  return (
    <motion.div
      className="size-full"
      style={{
        display: "block",
      }}
      variants={{
        enter: {
          opacity: 1,
        },
        exit: {
          opacity: 0,
          transitionEnd: {
            display: "none",
          },
        },
      }}
      initial={false}
      animate={show ? "enter" : "exit"}
    >
      {children}
    </motion.div>
  )
}

export default TabContentMotionDiv
