import * as React from 'react';
import RatingBar from './RatingBar'
import RatingFaces from './RatingFaces';
import Title from './MediaTitle'
import MediaPoster from './MediaPoster'
import FriendInteractions from './FriendInteractions'
import MediaDescription from './MediaDescription'
import StreamsOn from './StreamsOn'

export default function MediaDetails() {
  return (
   <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3 mt-10 mx-10">
     <MediaPoster />
     <Title />
     <RatingBar />
     <FriendInteractions />
     <StreamsOn />
     <div className=' flex'>
      <button className="btn-clicked mr-1">Watched!</button>
      <button className="btn ml-1">Add to Watch List</button>
    </div>
     
     
    
   </div>
  );
}