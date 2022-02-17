import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceGrin, faFaceFrown, faFaceMeh } from '@fortawesome/free-solid-svg-icons';
import classNames from "classnames";

export default function RatingBar(props) {
  const { mediaInteraction } = props;

  const toggleLike = classNames({"like-btn-clicked": mediaInteraction.rating === "like", "like-btn": mediaInteraction !== "like"});
  const toggleMeh = classNames({"meh-btn-clicked": mediaInteraction.rating === "meh", "meh-btn": mediaInteraction !== "meh"});
  const toggleDislike = classNames({"dislike-btn-clicked": mediaInteraction.rating === "dislike", "dislike-btn": mediaInteraction !== "dislike"});

  return (
    <div className='row-span-2 justify-items-center grid grid-cols-3'>
     <div className='like-container'>
       <div className='flex items-end h-full bg-gray-200 w-full rounded-full'>
        <div className='h-1/2 rounded-b-full bg-green-200 w-full'></div>
       </div>
       <button><FontAwesomeIcon className={toggleLike} icon={faFaceGrin} /> </button>
      </div>
      
      <div className='meh-container'>
       <div className='flex items-end h-full mr-2 bg-gray-200 rounded-full w-full'>
        <div className='h-1/3 rounded-b-full bg-yellow-200 w-full'></div>
       </div>
       <button><FontAwesomeIcon className={toggleMeh} icon={faFaceMeh} /> </button>
      </div>

      <div className='dislike-container'>
        <div className='flex items-end h-full bg-gray-200 rounded-full w-full'>
          <div className='h-1/3 rounded-b-full bg-red-200 w-full'></div>
        </div>
        <button><FontAwesomeIcon className={toggleDislike} icon={faFaceFrown} /> </button>
       </div>

        
    </div>
  );
}