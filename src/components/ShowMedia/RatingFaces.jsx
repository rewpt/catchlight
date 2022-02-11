import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceGrin, faFaceFrown, faFaceMeh } from '@fortawesome/free-solid-svg-icons'

export default function RatingFaces() {

  return (
      <div className='flex justify-center'>
        <button><FontAwesomeIcon className='text-7xl mr-2 text-slate-400 hover:text-green-500 cursor-pointer' icon={faFaceGrin} /> </button>
        <button><FontAwesomeIcon className='text-7xl mr-2 text-slate-400 hover:text-amber-500' icon={faFaceMeh} /> </button>
        <button><FontAwesomeIcon className='text-7xl text-slate-400 hover:text-red-500' icon={faFaceFrown} /> </button>
      </div>
  )
}