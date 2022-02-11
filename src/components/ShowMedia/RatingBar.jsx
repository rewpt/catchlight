import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceGrin, faFaceFrown, faFaceMeh } from '@fortawesome/free-solid-svg-icons'

export default function RatingBar() {
  return (
    <div className='ml-5 row-span-2 justify-items-center grid grid-cols-3'>
     <div className='like-container'>
       <div className='flex items-end h-full bg-gray-200 w-full rounded-full'>
        <div className='h-1/2 rounded-b-full bg-green-200 w-full'></div>
       </div>
       <button><FontAwesomeIcon className='like-btn-clicked' icon={faFaceGrin} /> </button>
      </div>
      
      <div className='meh-container'>
       <div className='flex items-end h-full mr-2 bg-gray-200 rounded-full w-full'>
        <div className='h-1/3 rounded-b-full bg-yellow-200 w-full'></div>
       </div>
       <button><FontAwesomeIcon className='meh-btn' icon={faFaceMeh} /> </button>
      </div>

      <div className='dislike-container'>
        <div className='flex items-end h-full bg-gray-200 rounded-full w-full'>
          <div className='h-1/3 rounded-b-full bg-red-200 w-full'></div>
        </div>
        <button><FontAwesomeIcon className='dislike-btn' icon={faFaceFrown} /> </button>
       </div>

        
    </div>
  );
}