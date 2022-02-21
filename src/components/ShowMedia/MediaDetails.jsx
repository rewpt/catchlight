import React from 'react';
import { useApplicationData } from '../../hooks/useApplicationData';
import RatingBar from './RatingBar';
import Title from './MediaTitle';
import MediaPoster from './MediaPoster'
import FriendInteractions from './FriendInteractions';
import MediaWatchedButton from './MediaWatchedButton';
import StreamsOn from './StreamsOn';


// route used several times, put in function


export default function MediaDetails() {
  const {
    mediaInteraction, 
    mediaDetails, 
    friendsAvatars, 
    interactionStats, 
    streamingServices, 
    buttonState, 
    setButtonState,
    postMediaButtonClick,
    handleRatingClick,
    isLoading
  } = useApplicationData()

  return (
    <React.Fragment>
      { !isLoading && (
     <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-6 mt-10 mx-10">
       <MediaPoster image={mediaDetails.image}/>
       <Title title={mediaDetails.title} description={mediaDetails.description}/>
       <RatingBar handleRatingClick={handleRatingClick} interactionStats={interactionStats} mediaInteraction={mediaInteraction} />
       <FriendInteractions friendsAvatarArray={friendsAvatars}/>
       <StreamsOn streamingServices={streamingServices}/>
       <div className=' flex'>
       <MediaWatchedButton postMediaButtonClick={postMediaButtonClick} buttonState={buttonState} setButtonState={setButtonState} handleRatingClick={handleRatingClick}></MediaWatchedButton>
      </div>
     </div>
    )}
    {isLoading && (
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-6 mt-10 mx-10">
      Loading...
      </div>
    )}

    </React.Fragment>
  );
}
