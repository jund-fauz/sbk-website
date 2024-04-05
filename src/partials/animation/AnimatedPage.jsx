import {motion} from "framer-motion";

const animation = {
  initial: {opacity: 0, x: -100},
  animate: {opacity: 1, x: 0},
  exit: {opacity: 0, x: 100}
}

export default function AnimatedPage({children, onScroll, bgColor = 'white'}) {
  return (
    <motion.div
      variants={animation}
      initial='initial'
      animate='animate'
      exit='exit'
      onScroll={onScroll}
      style={{backgroundColor: bgColor}}
    >
      {children}
    </motion.div>
  )
}