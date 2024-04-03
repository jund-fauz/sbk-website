import {motion} from "framer-motion";

const animation = {
  initial: {opacity: 0, x: -100},
  animate: {opacity: 1, x: 0},
  exit: {opacity: 0, x: 100}
}

function AnimatedPage({children, onScroll}) {
  return (
    <motion.div
      variants={animation}
      initial='initial'
      animate='animate'
      exit='exit'
      onScroll={onScroll}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedPage