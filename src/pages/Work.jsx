import {motion} from 'motion/react'
import JobCard from '../components/work/JobCard'

const fillerTempText = 'Helped team fix priority defects in USAA legacy code / deliver new features. Helped team build Product Admin Tool for USAA internal business owners to manage Reg-Z products. Worked on USAA transformation from legacy code to new web technology stack Docker'
const volunteerText = 'Volunteered for a month in Interlaken, Switzerland and a month in Stranny, Czechia to learn about sustainable living practices and cultural exchange.'

export const Work = () => {
  return (
    <div>
      {/* <h1 className='main-font'>Experience</h1> */}
      <br />
      <br />
      <div class='flex'>
        <svg width="100%" height="200" viewBox="0 0 800 80" xmlns="http://www.w3.org/2000/svg">
          {/* <!-- Timeline bar --> */}
          <defs>
            <linearGradient id="timelineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#191919" />
              <stop offset="100%" stop-color="#1f3b47" />
            </linearGradient>
          </defs>

          <rect x="50" y="35" width="700" height="30" fill="url(#timelineGradient)" rx="5" />

          {/* <!-- Milestone circles with motion animation --> */}

          {/* First timeline point */}
          <motion.g
            whileHover={{
              scale: 1.5,
              transition: {duration: 0.2}
            }}
            style={{cursor: 'pointer'}}
          >
            <motion.circle
              cx="100"
              cy="50"
              r="10"
              fill="#0ea5e9"
            />
            <motion.text
              x="95"
              y="75"
              fill="white"
              textAnchor="middle"
              fontSize="12"
            >
              2016
            </motion.text>
          </motion.g>

          {/* Second timeline point */}
          <motion.g
            whileHover={{
              scale: 1.5,
              transition: {duration: 0.2}
            }}
            style={{cursor: 'pointer'}}
          >
            <motion.circle
              cx="300"
              cy="50"
              r="10"
              fill="#0ea5e9"
            />
            <motion.text
              x="295"
              y="75"
              fill="white"
              textAnchor="middle"
              fontSize="12"
            >
              2017-2019
            </motion.text>
          </motion.g>

          {/* Third timeline point */}
          <motion.g
            whileHover={{
              scale: 1.5,
              transition: {duration: 0.2}
            }}
            style={{cursor: 'pointer'}}
          >
            <motion.circle
              cx="500"
              cy="50"
              r="10"
              fill="#0ea5e9"
            />
            <motion.text
              x="495"
              y="75"
              fill="white"
              textAnchor="middle"
              fontSize="12"
            >
              2020
            </motion.text>
          </motion.g>

          {/* Fourth timeline point */}
          <motion.g
            whileHover={{
              scale: 1.5,
              transition: {duration: 0.2}
            }}
            style={{cursor: 'pointer'}}
          >
            <motion.circle
              cx="700"
              cy="50"
              r="10"
              fill="#0ea5e9"
            />
            <motion.text
              x="695"
              y="75"
              fill="white"
              textAnchor="middle"
              fontSize="12"
            >
              2020-Present
            </motion.text>
          </motion.g>
        </svg>
      </div>

      <br />

      <div class='flex-1 flex justify-center gap-18'>
        <JobCard years='Summer 2016' company='USAA' role='IT Intern' description='Worked on a team of five intern developers for the summer fixing defects in backlog of MI team in USAA bank credit card.' />
        <JobCard years='Sept 2017 - March 2019' company='USAA' role='Software Developer III' description={fillerTempText} />
        {/* <JobCard years='March 2019 - May 2019' company='Workaway' role='Volunteer' description={volunteerText} /> */}
        <JobCard years='Jan 2020 - May 2020' company='Nike' role='Software Engineer (contract)' description={fillerTempText} />
        <JobCard years='2020 - Present' company='Brikit' role='Software Developer' description={fillerTempText} />
      </div>
    </div>
  )
}