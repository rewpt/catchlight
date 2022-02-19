import React, {useEffect, useState} from "react";
import FriendPop from './FriendPop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceGrin, faFaceFrown, faFaceMeh, faCirclePlus, faCircleMinus } from '@fortawesome/free-solid-svg-icons';

const axios = require('axios');

export default function BottomPop(props) {

  const [watchListButton, setWatchListButton] = useState(2);
  const { refresh } = props

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

    // isInWatchList

    
    useEffect(() => {

      async function isInWatchList() {
        try {
          const isInWatchListData = await axios.get(`/api/isInWatchList/${props.mediaID}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('userToken')}`
            }
          });
          
          props.setRefresh(!props.refresh);
          
          // setWatchListButton(true);
          // console.log(isInWatchListData.data)
          return isInWatchListData.data.length
        } catch (e) {
          console.log(e)
        }
      }

      isInWatchList().then((res) => {
        // timeout to prevent double click
        setTimeout(setWatchListButton(res), 100)
      })

    }, [refresh])
    
    
  return(
    <div className='flex justify-between content-center bg-black h-[25px]'>
      <FriendPop mediaID={props.mediaID}/>

        {watchListButton === 1 ? <button>
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