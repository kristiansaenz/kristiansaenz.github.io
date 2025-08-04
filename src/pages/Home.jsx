import SocialsBar from '../components/home/SocialsBar'
import {Opener, PageTitle} from '../components/home/Title'

const personalImageSrc = 'https://media.licdn.com/dms/image/v2/C5603AQHYP-a_cEqvEw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1517246406315?e=1756944000&v=beta&t=PTelK7nh0YjQdee0lD6jGPHZeo_EBs5cO4CfxG0QawA'

const LeftSection = () => (
  <div class='flex-1 m-16 grid gap-12'>
    <PageTitle />
    <Opener />
    <SocialsBar />
  </div>
)

const RightSection = () => (
  <div class='flex-1 flex p-12 justify-center'>
    <img src={personalImageSrc} style={({height: '25rem', borderRadius: '12rem'})} />
  </div>
)

const Mountains = () => {
  return (
    <svg
      viewBox="0 0 1440 400"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    // style="width: 100%; height: auto;"
    >
      {/* <!-- Back mountains (farthest, slightly dimmed white for depth) --> */}
      <path
        fill="white"
        fill-opacity="0.4"
        d="M0,320L80,293.3C160,267,320,213,480,213.3C640,213,800,267,960,277.3C1120,288,1280,256,1360,240L1440,224V400H0Z"
      />

      {/* <!-- Middle mountains --> */}
      <path
        fill="white"
        fill-opacity="0.6"
        d="M0,352L80,330.7C160,309,320,267,480,261.3C640,256,800,288,960,293.3C1120,299,1280,277,1360,266.7L1440,256V400H0Z"
      />

      {/* <!-- Front mountains (sharpest, brightest white) --> */}
      <path
        fill="white"
        fill-opacity="1"
        d="M0,384L80,373.3C160,363,320,341,480,336C640,331,800,341,960,346.7C1120,352,1280,352,1360,352L1440,352V400H0Z"
      />
    </svg>
  )
}

const OtherMountain = () => {
  return (
    <svg
      viewBox="0 0 1440 320"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    // style="display: block; width: 100%; height: auto;"
    >
      <path
        fill="white"
        d="M0,256 L180,128 L320,224 L480,96 L640,192 L800,64 L960,160 L1120,96 L1280,192 L1440,160 L1440,320 L0,320 Z"
      />
    </svg>
  )
}

export const Home = () => {
  return (
    <>
      <div class='flex flex-col md:flex-row gap-16'>
        <LeftSection />
        <RightSection />
      </div>
      <Mountains />
    </>
  )
}