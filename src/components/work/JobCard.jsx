
const cardStyle = {
  borderRadius: '1rem',
  borderColor: '#ffffff',
  minWidth: '20rem',
  minHeight: '30rem',
  borderWidth: '.1rem'
}

const JobCard = ({years, company, role, description}) => {
  return (
    <div class='flex flex-col p-2' style={cardStyle}>
      <div class='m-4' style={{fontSize: '1rem', fontFamily: 'JetBrains Mono'}}>{years}</div>
      <div class='flex flex-col p-4'>
        <div style={{fontFamily: 'Work Sans', fontSize: '2rem'}}>{company}</div>
        <div style={{fontFamily: 'Work Sans', fontSize: '1.3rem', fontWeight: '700'}}>{role}</div>
        <br />
        <div>{description}</div>
      </div>
    </div>
  )
}

export default JobCard