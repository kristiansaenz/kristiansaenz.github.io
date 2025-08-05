import TimelineComponent from '../components/work/Timeline'

const fillerTempText = 'Helped team fix priority defects in USAA legacy code / deliver new features. Helped team build Product Admin Tool for USAA internal business owners to manage Reg-Z products. Worked on USAA transformation from legacy code to new web technology stack Docker'
const volunteerText = 'Volunteered for a month in Interlaken, Switzerland and a month in Stranny, Czechia to learn about sustainable living practices and cultural exchange.'

export const Work = () => {
  return (
    <div class='flex flex-1' style={{margin: '15rem 0'}}>
      {/* <h1 className='main-font'>Experience</h1> */}
      <br />
      <br />
      {/* <div class='flex'> */}
      <TimelineComponent />
      {/* </div>

      <br />

      <div class='flex-1 flex justify-center gap-18'>
        <JobCard years='Summer 2016' company='USAA' role='IT Intern' description='Worked on a team of five intern developers for the summer fixing defects in backlog of MI team in USAA bank credit card.' />
        <JobCard years='Sept 2017 - March 2019' company='USAA' role='Software Developer III' description={fillerTempText} />
        {/* <JobCard years='March 2019 - May 2019' company='Workaway' role='Volunteer' description={volunteerText} /> */}
      {/* <JobCard years='Jan 2020 - May 2020' company='Nike' role='Software Engineer (contract)' description={fillerTempText} />
        <JobCard years='2020 - Present' company='Brikit' role='Software Developer' description={fillerTempText} />
      </div> */}
    </div>
  )
}