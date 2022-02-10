import React from 'react';
import MediaBanner from './MediaBanner'
import MediaDetails from './MediaDetails'

export default function ShowMedia() {
  return (
    <React.Fragment>
    <div className='w-4/6 m-auto'>
      <MediaBanner />
      <MediaDetails />
    </div>
    </React.Fragment>
  )
}