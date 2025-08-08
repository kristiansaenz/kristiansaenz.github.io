import {motion} from "motion/react"
import About from '../pages/About'
import {Blog} from '../pages/Blog'
import {Home} from '../pages/Home'
import {Pictures} from '../pages/Pictures'
import {Work} from '../pages/Work'

const Content = ({view}) => {

  // Slide up animation on content render
  const renderView = (Component) => (
    <motion.div
      key={view}
      initial={{y: 50, opacity: 0}}
      animate={{y: 0, opacity: 1}}
      transition={{duration: 1, ease: "easeOut"}}
      className="mx-4 my-8 md:mx-20 md:my-24"
    >
      <Component />
    </motion.div>
  )

  switch (view) {
    case 'main': return renderView(Home)
    case 'blog': return renderView(Blog)
    case 'pics': return renderView(Pictures)
    case 'work': return renderView(Work)
    case 'about': return renderView(About)
    default: return renderView(Home)
  }
}

export default Content