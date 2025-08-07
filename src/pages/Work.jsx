import {skillColors, skills} from '../components/work/Skills'
import TimelineComponent from '../components/work/Timeline'

const fillerTempText = 'Helped team fix priority defects in USAA legacy code / deliver new features. Helped team build Product Admin Tool for USAA internal business owners to manage Reg-Z products. Worked on USAA transformation from legacy code to new web technology stack Docker'
const volunteerText = 'Volunteered for a month in Interlaken, Switzerland and a month in Stranny, Czechia to learn about sustainable living practices and cultural exchange.'

export const Work = () => {
  return (
    <div class='flex flex-1 flex-col work-page'>
      {/* Skills */}
      <div className='flex flex-col gap-2'>
        <h1 className='page-header' style={{marginBottom: '1rem'}}>Skills</h1>
        <div className='flex flex-wrap gap-4'>
          {skills.map((skill) => (
            <p
              style={{color: '#1D2835', backgroundColor: skillColors[skill.type]}}
              className='skill-tag'>
              {skill.technology}
            </p>
          ))}
        </div>
      </div>
      <br />

      {/* Line break */}
      <hr style={{borderTop: "2px solid #2B3B4F", margin: "20px 0"}} />
      <br />
      <br />

      {/* Work Experience */}
      <div className='flex flex-col gap-2 mb-15'>
        <h1 className='page-header'>Work Experience</h1>
        <div className='page-text'>
          My experience as a software engineer starting from my internship to my current role at Brikit.
        </div>
      </div>
      <TimelineComponent />
    </div>
  )
}