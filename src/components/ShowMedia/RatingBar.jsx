import * as React from 'react';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceGrin, faFaceFrown, faFaceMeh } from '@fortawesome/free-solid-svg-icons';
import classNames from "classnames";
import axios from 'axios';


export default function RatingBar(props) {
  const { interactionStats, setInteractionStats, mediaInteraction, setMediaInteraction, mediaId } = props;
  const { like_count, dislike_count, meh_count, total_count } = interactionStats

  function getPercentages(count) {
    return `${(parseInt(count) / parseInt(total_count)) * 100}%`
  }

  function handleRatingsOnClick(ratingType) {
    let currentRating = mediaInteraction.rating;
    let newInteractionStats = {...interactionStats}

    if (currentRating) {
      // this conditional decreases the rating of the stat previously selected stat by one
      newInteractionStats[`${currentRating}_count`] = parseInt(newInteractionStats[`${currentRating}_count`]) - 1;
    }
    if (currentRating !== ratingType) {
      // when a user selects a different rating for media, it changes the stats related to the media
      newInteractionStats[`${ratingType}_count`] = parseInt(newInteractionStats[`${ratingType}_count`]) + 1;
    }
    const newRating = currentRating !== ratingType ? ratingType : null
    setMediaInteraction({...mediaInteraction, rating: newRating});
    setInteractionStats(newInteractionStats);
    postNewMediaInteraction(newRating);
  }

  getPercentages(like_count)
  const toggleLike = classNames({"like-btn-clicked": mediaInteraction.rating === "like", "like-btn": mediaInteraction.rating !== "like"});
  const toggleMeh = classNames({"meh-btn-clicked": mediaInteraction.rating === "meh", "meh-btn": mediaInteraction.rating !== "meh"});
  const toggleDislike = classNames({"dislike-btn-clicked": mediaInteraction.rating === "dislike", "dislike-btn": mediaInteraction.rating !== "dislike"});

    const jwt = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('userToken')}`
      }
    };

    const postNewMediaInteraction = (rating) => {
      axios.post('/api/interactions', {rating, mediaId}, jwt).then((res) => {console.log(res)}).catch((err) => console.log(err))
    };
    

  return (
    <div className='row-span-2 justify-items-center grid grid-cols-3'>
     <div className='like-container'>
       <div className='flex items-end h-full bg-gray-200 w-full rounded-full'>
        <div className='rounded-b-full bg-green-200 w-full' style={{height: getPercentages(like_count)}}></div>  
        </div>
       <button><FontAwesomeIcon onClick={() => {handleRatingsOnClick('like');}} className={toggleLike} icon={faFaceGrin} /> </button>
      </div>
      
      <div className='meh-container'>
       <div className='flex items-end h-full mr-2 bg-gray-200 rounded-full w-full'>
        <div className={`rounded-b-full bg-yellow-200 w-full`} style={{height: getPercentages(meh_count)}}></div>
       </div>
       <button><FontAwesomeIcon onClick={() => {handleRatingsOnClick('meh');}} className={toggleMeh} icon={faFaceMeh} /> </button>
      </div>
      <div className='dislike-container'>
        <div className='flex items-end h-full bg-gray-200 rounded-full w-full'>
          <div className={'rounded-b-full bg-red-200 w-full'} style={{height: getPercentages(dislike_count)}}></div>
        </div>
        <button><FontAwesomeIcon onClick={() => {handleRatingsOnClick('dislike');}} className={toggleDislike} icon={faFaceFrown} /> </button>
      </div>
    </div>
  );
}