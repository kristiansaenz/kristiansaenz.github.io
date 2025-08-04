const Navbar = ({setView}) => {
  return (
    <>
      <div onClick={() => setView('main')}>Home</div>
      <div onClick={() => setView('blog')}>Articles</div>
      <div onClick={() => setView('pics')}>Pics</div>
      <div onClick={() => setView('work')}>Portfolio</div>
    </>
  )
}

export default Navbar