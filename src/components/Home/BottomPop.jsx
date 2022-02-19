import React, {useEffect, useState} from "react";
import FriendPop from './FriendPop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceGrin, faFaceFrown, faFaceMeh, faCirclePlus, faCircleMinus } from '@fortawesome/free-solid-svg-icons';

const axios = require('axios');

export default function BottomPop(props) {

  const [watchListButton, setWatchListButton] = useState(2);

  // addToWatchList
  async function addToWatchList() {
    try {
      await axios.get(`/api/addToWatchList/${props.mediaID}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('userToken')}`
        }
      });

      props.setRefresh(!props.refresh);
      setWatchListButton(!watchListButton);

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
      setWatchListButton(!watchListButton);
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
          
          // props.setRefresh(!props.refresh);
          
          // setWatchListButton(true);
          // console.log(isInWatchListData.data)
          return isInWatchListData.data.length
        } catch (e) {
          console.log(e)
        }
      }

      
      isInWatchList().then((res) => {
        // timeout to prevent double click
        setWatchListButton(res)
      })

    }, [watchListButton])

    console.log(props)
      
  return(
    <div className='flex justify-between content-center bg-black h-[25px]'>
      <FriendPop mediaID={props.mediaID}/>

        {(() => {
          switch (watchListButton) {
            case 0:
              return <button>
              <FontAwesomeIcon 
              title='Add to watch list' 
              className='add-to-watch-popout' 
              icon={faCirclePlus}
              onClick={() => {
                // timeout to fix double click bug
                  setTimeout(addToWatchList, 100)
                }
              }
              />
            </button>
            case 1:
              return <button>
              <FontAwesomeIcon 
              title='Remove to watch list' 
              className='remove-from-watch-popout' 
              icon={faCircleMinus}
              onClick={() => {
                // timeout to fix double click bug
                  setTimeout(removeFromWatchList, 100)
                }
              }
              />
            </button>
            default:
              return <button>E</button>
          }
        })()}

      <div className='mr-2'>
      <button><FontAwesomeIcon className='like-btn-sml rating-face-popout' icon={faFaceGrin} /> </button>
      <button><FontAwesomeIcon className='meh-btn-sml rating-face-popout' icon={faFaceMeh} /> </button>
      <button><FontAwesomeIcon className='dislike-btn-sml rating-face-popout' icon={faFaceFrown} /> </button>
      </div>
    </div>
  )
}