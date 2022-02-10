import React from 'react';
import MediaBanner from './MediaBanner'
import MediaDetails from './MediaDetails'
import Button from './MediaButton'

export default function ShowMedia() {
  return (
    <React.Fragment>
    <div className='m-auto'>
      <MediaBanner />
      <MediaDetails />
    </div>
    <Button>Add to Watched</Button>
    <Button className='m-y-10'>Add to Watch List</Button>
    </React.Fragment>
  )
}