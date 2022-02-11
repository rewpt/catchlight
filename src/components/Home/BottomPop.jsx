import React from "react";
import FriendPop from './FriendPop'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceGrin, faFaceFrown, faFaceMeh } from '@fortawesome/free-solid-svg-icons'

export default function BottomPop() {
  return(
    <div className='flex justify-between bg-black h-[25px]'>
      <FriendPop />
      <div className='media-avatar-popout bg-green-500'>
        <span>+</span>
      </div>
      <div className='mr-2'>
      <button><FontAwesomeIcon className='like-btn-sml rating-face-popout' icon={faFaceGrin} /> </button>
      <button><FontAwesomeIcon className='meh-btn-sml rating-face-popout' icon={faFaceMeh} /> </button>
      <button><FontAwesomeIcon className='dislike-btn-sml rating-face-popout' icon={faFaceFrown} /> </button>
      </div>
    </div>
  )
}