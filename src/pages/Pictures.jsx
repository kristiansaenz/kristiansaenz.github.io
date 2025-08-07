export const Pictures = () => {

  const images = [
    {
      id: 1,
      src: 'https://photos.fife.usercontent.google.com/pw/AP1GczPgbK68yt66hgui_leSMcLfMDaWmL3YcZrqZ5TwgQ9T2ki8_ZePClCS=w2128-h1596-s-no-gm?authuser=0',
      alt: 'Image 1',
      title: 'Image 1'
    }
  ]

  return (
    <div className='flex flex-col gap-5' style={{textAlign: 'left'}}>
      <h1 className='page-header'>Pictures</h1>
      <div className='page-text'>


        <div class='flex flex-col'>
          <a data-flickr-embed="true" href="https://www.flickr.com/photos/203348799@N08" title=""><img src="https://live.staticflickr.com/65535/54698711198_6f274fd46a_c.jpg" width="600" height="400" alt="" /></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>
        </div>
      </div>
    </div>
  )
}