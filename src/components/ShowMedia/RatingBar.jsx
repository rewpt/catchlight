import * as React from 'react';

export default function RatingBar() {
  return (
     <div className= 'flex h-6 max-w-sm min-w-full border border-black'>
      <div className='like-bar w-1/3 h-full bg-green-500'>Like</div>
      <div className='meh-bar w-1/3 h-full bg-yellow-500'>Meh</div>
      <div className='dislike-bar w-1/3 h-full bg-red-500'>Dislike</div>
     </div>
     
  );
}