import WavingHand from './Hand'

export const PageTitle = () => (
  <div className='title main-font' style={{textAlign: 'left', fontSize: 'x-large', fontWeight: '700'}}>
    <h1>Hello,</h1>
    <h1 class="flex items-center gap-4">
      I'm Kristian <WavingHand />
    </h1>
  </div>
)

export const Opener = () => (
  <div className='opener' style={{textAlign: 'left', fontSize: 'x-large', fontFamily: 'var(--text-font)'}}>
    I'm a software engineer who likes to collaborate & be creative.
    Take a look around — this site is a growing collection of my work, ideas, and adventures.
  </div>
)