import * as React from 'react';

export default function MediaPoster() {
  return (
  <React.Fragment>
    <div className='flex justify-center lg:justify-start w-full row-span-2'>
      <div className='w-3/4 h-full bg-cover bg-center ' >
        <img className='h-full w-full object-cover' 
          src='https://m.media-amazon.com/images/M/MV5BZmExNmEwYWItYmQzOS00YjA5LTk2MjktZjEyZDE1Y2QxNjA1XkEyXkFqcGdeQXVyMTQxNzMzNDI@.jpg' 
        />
      </div>
    </div>
  </React.Fragment>
  )
}