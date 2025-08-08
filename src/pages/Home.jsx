import SocialsBar from '../components/home/SocialsBar'
import {Opener, PageTitle} from '../components/home/Title'

const personalImageSrc = 'https://media.licdn.com/dms/image/v2/C5603AQHYP-a_cEqvEw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1517246406315?e=1756944000&v=beta&t=PTelK7nh0YjQdee0lD6jGPHZeo_EBs5cO4CfxG0QawA'

const LeftSection = () => (
  <div class='flex-1 grid gap-12 splash-title'>
    <PageTitle />
    <Opener />
    <SocialsBar />
  </div>
)

const RightSection = () => (
  <div class='flex-1 flex justify-center'>
    <img class='md:h-80' src={personalImageSrc} style={({borderRadius: '12rem'})} />
  </div>
)

export const Home = () => {
  return (
    <>
      <div class='flex flex-col md:flex-row gap-16'>
        <LeftSection />
        <RightSection />
      </div>
    </>
  )
}