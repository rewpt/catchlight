import React from "react";
import FriendPop from './FriendPop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceGrin, faFaceFrown, faFaceMeh, faCirclePlus, faCircleMinus } from '@fortawesome/free-solid-svg-icons';

const axios = require('axios');

export default function BottomPop(props) {

  // addToWatchList
  async function addToWatchList() {
    try {
      await axios.get(`/api/addToWatchList/${props.mediaID}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('userToken')}`
        }
      });

      props.setRefresh(!props.refresh);
    } catch (e) {
      console.log(e)
    }
  }

  // RemoveToWatchList
  async function removeFromWatchList() {
    try {
      await axios.get(`/api/removeFromWatchList/${props.mediaID}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('userToken')}`
        }
      });

      props.setRefresh(!props.refresh);
    } catch (e) {
      console.log(e)
    }
  }
    
  return(
    <div className='flex justify-between content-center bg-black h-[25px]'>
      <FriendPop mediaID={props.mediaID}/>

        {props.removeFromWatchList ? <button>
          <FontAwesomeIcon 
          title='Remove to watch list' 
          className='remove-from-watch-popout' 
          icon={faCircleMinus}
          onClick={removeFromWatchList}
          />
        </button> : <button>
          <FontAwesomeIcon 
          title='Add to watch list' 
          className='add-to-watch-popout' 
          icon={faCirclePlus}
          onClick={addToWatchList}
          />
        </button>}

      <div className='mr-2'>
      <button><FontAwesomeIcon className='like-btn-sml rating-face-popout' icon={faFaceGrin} /> </button>
      <button><FontAwesomeIcon className='meh-btn-sml rating-face-popout' icon={faFaceMeh} /> </button>
      <button><FontAwesomeIcon className='dislike-btn-sml rating-face-popout' icon={faFaceFrown} /> </button>
      </div>
    </div>
  )
}