import { motion } from "motion/react"

const WavingHand = () => {
  return  (
    <motion.div
      whileHover={{ 
        x: [0, -20, 20, -20, 20, 0],
        transition: { 
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
      whileTap={{ scale: 0.8 }}>
        👋
    </motion.div>
  )
}

export default WavingHand