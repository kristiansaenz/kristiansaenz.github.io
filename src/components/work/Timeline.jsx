import {motion} from 'framer-motion'
import React, {useState} from 'react'

const TimelineComponent = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  // Sample job data - replace with your actual experience
  const jobExperience = [
    {
      id: 1,
      company: "USAA",
      position: "IT Intern",
      duration: "Summer 2016",
      description: "Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and architecting microservices solutions.",
      technologies: ["React", "Node.js", "AWS", "PostgreSQL"]
    },
    {
      id: 2,
      company: "USAA",
      position: "Fullstack Engineer III",
      duration: "August 2017 - March 2019",
      description: "Developed and maintained multiple client projects using modern web technologies. Collaborated with design teams to create responsive user interfaces.",
      technologies: ["Vue.js", "Python", "Docker", "MongoDB"]
    },
    {
      id: 3,
      company: "Nike",
      position: "Software Engineer",
      duration: "January 2020 - May 2020",
      description: "Built responsive web applications and implemented UI/UX designs. Optimized application performance and user experience across multiple platforms.",
      technologies: ["JavaScript", "HTML5", "CSS3", "Webpack"]
    },
    {
      id: 4,
      company: "Brikit",
      position: "Software Developer",
      duration: "May 2020 - Present",
      description: "Started career developing websites and learning modern web development practices. Contributed to team projects and gained experience in version control.",
      technologies: ["jQuery", "PHP", "MySQL", "Bootstrap"]
    }
  ]

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

  const lineVariants = {
    hidden: {scaleX: 0},
    visible: {
      scaleX: 1,
      transition: {delay: 0.5, duration: 0.8, ease: "easeInOut"}
    }
  }

  return (
    <div className="w-full max-w-6xl mx-auto p-6 min-h-screen">
      {/* Desktop Horizontal Timeline */}
      <div className="hidden lg:block">
        <motion.div
          variants={timelineVariants}
          initial="hidden"
          animate="visible"
          className="relative"
        >
          {/* Timeline points and cards */}
          <div className="flex justify-between items-center relative z-10 h-80">
            {/* Main timeline line */}
            <motion.div
              variants={lineVariants}
              className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transform -translate-y-1/2 origin-left"
            />
            {jobExperience.map((job, index) => {
              const isEven = index % 2 === 0
              const isBelow = isEven

              return (
                <div key={job.id} className="flex flex-col items-center relative h-full justify-center">
                  {/* Card above timeline (for odd indices) */}
                  {!isBelow && (
                    <motion.div
                      variants={cardVariants}
                      whileHover="hover"
                      className={`absolute bottom-1/2 mb-12 transition-all duration-300 ${hoveredIndex === index ? 'z-20' : 'z-10'
                        }`}
                      onHoverStart={() => setHoveredIndex(index)}
                      onHoverEnd={() => setHoveredIndex(null)}
                    >
                      <motion.div
                        className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden"
                        animate={{
                          width: hoveredIndex === index ? 320 : 240,
                          height: hoveredIndex === index ? 'auto' : 120
                        }}
                        transition={{type: "spring", stiffness: 300, damping: 30}}
                      >
                        <div className="p-4">
                          <h3 className="font-bold text-base text-gray-800 leading-tight mb-2">{job.position}</h3>
                          <h4 className="font-semibold text-blue-700 mb-3">{job.company}</h4>

                          <motion.div
                            initial={false}
                            animate={{
                              opacity: hoveredIndex === index ? 1 : 0,
                              height: hoveredIndex === index ? 'auto' : 0
                            }}
                            transition={{duration: 0.3}}
                            className="overflow-hidden"
                          >
                            <p className="text-gray-600 text-sm mb-4 leading-relaxed">{job.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {job.technologies.map((tech, techIndex) => (
                                <span
                                  key={techIndex}
                                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </motion.div>
                        </div>
                      </motion.div>
                      {/* Connection line */}
                      <motion.div
                        initial={{scaleY: 0}}
                        animate={{scaleY: 1}}
                        transition={{delay: 0.8 + index * 0.1, duration: 0.4}}
                        className="w-0.5 h-12 bg-gradient-to-b from-blue-500 to-purple-600 mx-auto origin-top"
                      />
                    </motion.div>
                  )}

                  {/* Duration text above timeline */}
                  <div className="absolute bottom-1/2 mb-5 left-1/2 transform -translate-x-1/2">
                    <span className="text-sm text-gray-700 font-semibold whitespace-nowrap px-2 py-1 rounded shadow-sm">
                      {job.duration}
                    </span>
                  </div>

                  {/* Timeline point */}
                  <motion.div
                    variants={pointVariants}
                    whileHover={{scale: 1.3}}
                    className="absolute top-1/2 transform -translate-y-1/2 w-6 h-6 bg-white border-4 border-blue-500 rounded-full shadow-lg cursor-pointer z-20"
                    onHoverStart={() => setHoveredIndex(index)}
                    onHoverEnd={() => setHoveredIndex(null)}
                  >
                    <motion.div
                      className="absolute inset-1 bg-blue-500 rounded-full"
                      animate={{
                        scale: hoveredIndex === index ? 1.2 : 1,
                        backgroundColor: hoveredIndex === index ? '#8b5cf6' : '#3b82f6'
                      }}
                      transition={{type: "spring", stiffness: 500, damping: 30}}
                    />
                  </motion.div>

                  {/* Card below timeline (for even indices) */}
                  {isBelow && (
                    <motion.div
                      variants={cardVariants}
                      whileHover="hover"
                      className={`absolute top-1/2 mt-8 transition-all duration-300 ${hoveredIndex === index ? 'z-20' : 'z-10'
                        }`}
                      onHoverStart={() => setHoveredIndex(index)}
                      onHoverEnd={() => setHoveredIndex(null)}
                    >
                      {/* Connection line */}
                      <motion.div
                        initial={{scaleY: 0}}
                        animate={{scaleY: 1}}
                        transition={{delay: 0.8 + index * 0.1, duration: 0.4}}
                        className="w-0.5 h-12 bg-gradient-to-b from-blue-500 to-purple-600 mx-auto origin-top mb-0"
                      />
                      <motion.div
                        className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden"
                        animate={{
                          width: hoveredIndex === index ? 320 : 240,
                          height: hoveredIndex === index ? 'auto' : 120
                        }}
                        transition={{type: "spring", stiffness: 300, damping: 30}}
                      >
                        <div className="p-4">
                          <h3 className="font-bold text-base text-gray-800 leading-tight mb-2">{job.position}</h3>
                          <h4 className="font-semibold text-blue-700 mb-3">{job.company}</h4>

                          <motion.div
                            initial={false}
                            animate={{
                              opacity: hoveredIndex === index ? 1 : 0,
                              height: hoveredIndex === index ? 'auto' : 0
                            }}
                            transition={{duration: 0.3}}
                            className="overflow-hidden"
                          >
                            <p className="text-gray-600 text-sm mb-4 leading-relaxed">{job.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {job.technologies.map((tech, techIndex) => (
                                <span
                                  key={techIndex}
                                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </motion.div>
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>

      {/* Mobile Vertical Timeline */}
      <div className="lg:hidden">
        <motion.div
          variants={timelineVariants}
          initial="hidden"
          animate="visible"
          className="relative"
        >
          {/* Vertical timeline line */}
          <motion.div
            variants={lineVariants}
            className="absolute left-8 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600 rounded-full origin-top"
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
                  className="w-6 h-6 bg-white border-4 border-blue-500 rounded-full shadow-lg cursor-pointer z-20 relative flex-shrink-0 mt-4"
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                >
                  <motion.div
                    className="absolute inset-1 bg-blue-500 rounded-full"
                    animate={{
                      scale: hoveredIndex === index ? 1.2 : 1,
                      backgroundColor: hoveredIndex === index ? '#8b5cf6' : '#3b82f6'
                    }}
                    transition={{type: "spring", stiffness: 500, damping: 30}}
                  />
                </motion.div>

                {/* Connection line */}
                <motion.div
                  initial={{scaleX: 0}}
                  animate={{scaleX: 1}}
                  transition={{delay: 0.8 + index * 0.1, duration: 0.4}}
                  className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 mt-6 origin-left"
                />

                {/* Job card */}
                <motion.div
                  variants={cardVariants}
                  className="ml-4 flex-1"
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                >
                  <motion.div
                    className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden"
                    animate={{
                      height: hoveredIndex === index ? 'auto' : 100
                    }}
                    transition={{type: "spring", stiffness: 300, damping: 30}}
                  >
                    <div className="p-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h3 className="font-bold text-base text-gray-800 leading-tight mb-1 sm:mb-0">{job.position}</h3>
                        <span className="text-sm text-blue-600 font-medium">{job.duration}</span>
                      </div>
                      <h4 className="font-semibold text-blue-700 mb-3">{job.company}</h4>

                      <motion.div
                        initial={false}
                        animate={{
                          opacity: hoveredIndex === index ? 1 : 0,
                          height: hoveredIndex === index ? 'auto' : 0
                        }}
                        transition={{duration: 0.3}}
                        className="overflow-hidden"
                      >
                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">{job.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {job.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default TimelineComponent