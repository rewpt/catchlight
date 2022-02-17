import React from "react";
import FriendPop from './FriendPop'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceGrin, faFaceFrown, faFaceMeh, faCirclePlus } from '@fortawesome/free-solid-svg-icons'

export default function BottomPop(props) {
  return(
    <div className='flex justify-between content-center bg-black h-[25px]'>
      <FriendPop mediaID={props.mediaID}/>

        <button><FontAwesomeIcon title='Add to watch list' className='add-to-watch-popout' icon={faCirclePlus} /></button>

      <div className='mr-2'>
      <button><FontAwesomeIcon className='like-btn-sml rating-face-popout' icon={faFaceGrin} /> </button>
      <button><FontAwesomeIcon className='meh-btn-sml rating-face-popout' icon={faFaceMeh} /> </button>
      <button><FontAwesomeIcon className='dislike-btn-sml rating-face-popout' icon={faFaceFrown} /> </button>
      </div>
    </div>
  )
}