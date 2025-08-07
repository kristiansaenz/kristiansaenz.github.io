import {motion} from 'framer-motion'
import React, {useState} from 'react'
import JobCard from './JobCard'
import {jobExperience} from './Jobs'

const TimelineComponent = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const timelineVariants = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const pointVariants = {
    hidden: {scale: 0, opacity: 0},
    visible: {
      scale: 1,
      opacity: 1,
      transition: {type: "spring", stiffness: 500, damping: 30}
    }
  }

  const lineVariants = {
    hidden: {scaleX: 0},
    visible: {
      scaleX: 1,
      transition: {delay: 0.5, duration: 0.8, ease: "easeInOut"}
    }
  }

  const cardVariants = {
    hidden: {opacity: 0, y: 20},
    visible: {
      opacity: 1,
      y: 0,
      transition: {type: "spring", stiffness: 300, damping: 30}
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
      transition: {type: "spring", stiffness: 400, damping: 30}
    }
  }

  return (
    <div style={{maxWidth: '85rem'}}>
      <div className='w-full mx-auto' style={{maxWidth: '85rem'}}>
        <motion.div
          variants={timelineVariants}
          initial="hidden"
          animate="visible"
          className="relative"
        >
          {/* Vertical timeline line */}
          <motion.div
            variants={lineVariants}
            style={{background: 'linear-gradient(135deg, #BFD7B5, #BFD7B5)'}}
            className="absolute left-8 top-0 w-1 h-full rounded-full origin-top"
          />

          {/* Timeline items */}
          <div className="space-y-12">
            {jobExperience.map((job, index) => (
              <motion.div
                key={job.id}
                variants={cardVariants}
                className="flex items-start relative"
              >
                {/* Timeline point */}
                <motion.div
                  variants={pointVariants}
                  whileHover={{scale: 1.3}}
                  style={{borderColor: '#A3C4BC'}}
                  className="w-6 h-6 bg-white rounded-full shadow-lg cursor-pointer z-20 relative flex-shrink-0 mt-4"
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                >
                  <motion.div
                    style={{background: '#D7816A'}}
                    className="absolute inset-1 rounded-full"
                    animate={{
                      scale: hoveredIndex === index ? 1.2 : 1,
                      backgroundColor: hoveredIndex === index ? '#D7816A' : '#2C3E50'
                    }}
                    transition={{type: "spring", stiffness: 500, damping: 30}}
                  />
                </motion.div>

                {/* Connection line */}
                <motion.div
                  initial={{scaleX: 0}}
                  animate={{scaleX: 1}}
                  transition={{delay: 0.8 + index * 0.1, duration: 0.4}}
                  style={{background: 'linear-gradient(135deg, #BFD7B5,rgb(121, 150, 144))'}}
                  className="w-8 h-0.5 mt-6 origin-left"
                />

                {/* Job card */}
                <JobCard job={job} index={index} hoveredIndex={hoveredIndex} setHoveredIndex={setHoveredIndex} cardVariants={cardVariants} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default TimelineComponent