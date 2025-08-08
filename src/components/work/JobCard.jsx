import {motion} from 'framer-motion'

const JobCard = ({job, index, hoveredIndex, setHoveredIndex, cardVariants}) => {
  return (
    <motion.div
      variants={cardVariants}
      className="ml-4 flex-1"
      onClick={() => setHoveredIndex(hoveredIndex === index ? null : index)}
    >
      <motion.div
        className="rounded-lg shadow-lg border"
        style={{borderColor: '#A3C4BC', backgroundColor: '#2B3B4F'}}
        animate={{
          height: hoveredIndex === index ? 'auto' : 'fit-content'
        }}
        transition={{type: "spring", stiffness: 300, damping: 30}}
      >
        <div style={{textAlign: 'left', padding: '1rem 2rem'}}>
          <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
            <h3 className='' style={{fontSize: '1.4em', fontFamily: 'Work Sans', fontWeight: 'bold', color: '#A3C4BC'}}>{job.position}</h3>
            <span style={{fontSize: '1.1em', fontFamily: 'JetBrains Mono', color: '#D7816A', fontWeight: 'bold'}}>{job.duration}</span>
          </div>
          <h4 style={{fontFamily: 'Work Sans', fontSize: '2rem', fontWeight: '700', marginBottom: '1rem'}}>{job.company}</h4>

          <motion.div
            initial={false}
            animate={{
              opacity: hoveredIndex === index ? 1 : 0,
              height: hoveredIndex === index ? 'auto' : 0
            }}
            transition={{duration: 0.3}}
            className="overflow-hidden"
          >
            {/* Description */}
            <p style={{fontFamily: 'Work Sans', fontSize: '1em', marginBottom: '1rem', color: '#A3C4BC'}}>{job.description}</p>

            {/* Bullets */}
            <ul style={{marginBottom: '2rem'}}>
              {job.bullets?.map((bullet, bulletIndex) => (
                <li key={bulletIndex} style={{fontFamily: 'Work Sans', fontSize: '1em', marginBottom: '1rem', listStyleType: 'disc', color: '#A3C4BC'}}>{`- ${bullet}`}</li>
              ))}
            </ul>

            {/* Links */}
            <div className='flex flex-wrap gap-3'>
              {job.links && job.links.map(link => {
                return (
                  <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" style={{fontFamily: 'Work Sans', fontSize: '1.2rem', marginBottom: '1rem', color: '#A3C4BC'}}>{link.label}</a>
                )
              })}
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-3">
              {job.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  style={{
                    fontFamily: 'JetBrains Mono',
                    fontSize: '1em',
                    fontWeight: 'bold',
                    backgroundColor: '#BFD7B5',
                    padding: '0.5rem .5rem',
                    color: '#1D2835',
                    borderRadius: '.5rem'
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default JobCard