import { React, useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import RatingBar from './RatingBar';
import Title from './MediaTitle';
import MediaPoster from './MediaPoster'
import FriendInteractions from './FriendInteractions';
import MediaWatchedButton from './MediaWatchedButton';
import StreamsOn from './StreamsOn';
import axios from 'axios';



export const postNewMediaInteraction = (rating, id, jwt) => {
  axios.post('/api/interactions', {rating, id}, jwt)
  .then((res) => {console.log(res)})
  .catch((err) => console.log(err))
};

export default function MediaDetails() {
  const { id } = useParams() // id of media set by react router
  const [ mediaInteraction, setMediaInteraction ] = useState({}) // set user interaction with media
  const [ mediaDetails, setMediaDetails] = useState({});
  const [ friendsAvatars, setFriendsAvatars ] = useState([]);
  const [ interactionStats, setInteractionStats ] = useState({})
  const [ buttonState, setButtonState ] = useState('')

  const jwt = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('userToken')}`
    }
  }
  const mediaButtonClick = rating => {
    postNewMediaInteraction(rating, id, jwt)
  }

  // --------------------------business logic---------------------------
  // if current rating === interest, render remove from watch list
  // else if !currentRating, render Add to Watch List
  // else Watch it again!
  // 
  // for remove from watchlist, onclick = setCurrentRating(null)
  // for addToWatchList, onclick = setCurrentRating('interest')
  // for watchItAgain, onclick = setCurrentrating('interest')
  // 
  // when adding face, setCurrentRating = "like dislike meh"
  // when removing face, setCurrentRating = null


  function handleRatingClick(ratingType) {
    let currentRating = mediaInteraction.rating;
    let newInteractionStats = {...interactionStats};

    if(currentRating) {
      // this conditional decreases the rating of the stat previously selected stat by one
      newInteractionStats[`${currentRating}_count`] = parseInt(newInteractionStats[`${currentRating}_count`]) - 1;
      setButtonState(null)
    }

    if(currentRating !== ratingType) {
      // when a user selects a different rating for media, it changes the stats related to the media
      newInteractionStats[`${ratingType}_count`] = parseInt(newInteractionStats[`${ratingType}_count`]) + 1;
      setButtonState(ratingType)
    }

    const newRating = currentRating !== ratingType ? ratingType : null
    setMediaInteraction({...mediaInteraction, rating: newRating});
    setInteractionStats(newInteractionStats);
    postNewMediaInteraction(newRating, id, jwt);
  }
    
  //---------------- axios calls and data manipulation --------------------
  useEffect(() => {    
    const singleMedia = axios.get(`/api/media/${id}`, jwt);
    const userInteraction = axios.get(`/api/media/${id}/interactions/`, jwt);
    const totalUsersInteractions = axios.get(`/api/interactions/count/${id}`, jwt);
    const friendsPictures = axios.get('/api/friendsPictures', jwt);
    const mediaFriendsInteractions = axios.get('/api/mediaFriendsRecommendations', jwt);
    
    Promise.all([singleMedia, userInteraction, totalUsersInteractions, friendsPictures, mediaFriendsInteractions])
    .then(([media, userRating, interactionStats, friendsPictures, mediaFriendsInteractions]) => {
      setMediaDetails(media.data);
      setMediaInteraction(userRating.data);
      setInteractionStats(interactionStats.data[0]);
      setButtonState(userRating.data.rating)
    
      const results = [];

      for (const friend of friendsPictures.data) {
        for (const mediaFriend of mediaFriendsInteractions.data) {
          if (friend.friend_id === mediaFriend.id) {
            for (const interactionMedia of mediaFriend.interactions) {
              if (interactionMedia.media_id === ~~id) {
                results.push({profile_picture: friend.profile_picture});
              }
            }
          }
        }
      }
      setFriendsAvatars(results);
    })
    .catch((error) =>  {
      console.error(error)
    });
  }, [id]);
  
  return (
   <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-6 mt-10 mx-10">
     <MediaPoster image={mediaDetails.image}/>
     <Title title={mediaDetails.title} description={mediaDetails.description}/>
     <RatingBar handleRatingClick={handleRatingClick} interactionStats={interactionStats} mediaInteraction={mediaInteraction} />
     <FriendInteractions friendsAvatarArray={friendsAvatars}/>
     <StreamsOn />
     <div className=' flex'>
     <MediaWatchedButton setInteractionStats={setInteractionStats} mediaButtonClick={mediaButtonClick} buttonState={buttonState} setButtonState={setButtonState} ></MediaWatchedButton>
    </div>
   </div>
  );
}