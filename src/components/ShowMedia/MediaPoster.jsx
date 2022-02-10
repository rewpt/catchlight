import * as React from 'react';

export default function MediaPoster() {
  return (
  <React.Fragment>
    <div className='w-3/4 h-full bg-cover bg-center row-span-2' >
      <img className='h-full w-full object-cover' 
        src='https://m.media-amazon.com/images/M/MV5BZmExNmEwYWItYmQzOS00YjA5LTk2MjktZjEyZDE1Y2QxNjA1XkEyXkFqcGdeQXVyMTQxNzMzNDI@.jpg' 
      />
    </div>
  </React.Fragment>
  )
}