import React from 'react';
import MediaBanner from './MediaBanner'
import MediaDetails from './MediaDetails'

export default function ShowMedia() {
  return (
    <React.Fragment>
      <div className='m-auto'>
        <MediaBanner />
        <MediaDetails />
      </div>

    </React.Fragment>
  )
}