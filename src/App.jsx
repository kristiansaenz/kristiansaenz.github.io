import { useState } from 'react'
import './App.css'
import Content from './components/Content'

function App() {
  const [view, setView] = useState('main')

  const Navbar = () => (
    <div class='flex items-center gap-6 m-8 navbar'>
      <div className='nav-item' onClick={() => setView('main')}>Home</div>
      <div className='nav-item' onClick={() => setView('blog')}>Articles</div>
      <div className='nav-item' onClick={() => setView('pics')}>Pics</div>
      <div className='nav-item' onClick={() => setView('work')}>Work</div>
    </div>
  )

  return (
    <>
      <Navbar />
      <Content view={view} />
    </>
  )
}

export default App
