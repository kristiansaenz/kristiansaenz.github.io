import {Blog} from '../pages/Blog'
import {Home} from '../pages/Home'
import {Pictures} from '../pages/Pictures'
import {Work} from '../pages/Work'
import { motion } from "motion/react"

const Content = ({view}) => {

  // Slide up animation on content render
  const renderView = (Component) => (
    <motion.div
      key={view}
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <Component />
    </motion.div>
  )

  switch (view) {
    case 'main': return renderView(Home)
    case 'blog': return renderView(Blog)
    case 'pics': return renderView(Pictures)
    case 'work': return renderView(Work)
    default: return renderView(Home)
  }
}

export default Content