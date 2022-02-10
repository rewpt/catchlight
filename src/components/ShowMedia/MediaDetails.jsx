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
   <div className="grid grid-cols-3 gap-y-3 mt-10 mx-10">
     <MediaPoster />
     <Title />
     <RatingBar />
     <FriendInteractions />
     <RatingFaces />
     <StreamsOn />
     <div>
      <button className="btn">Watched!</button>
      <button className="btn">Add to Watch List</button>
    </div>
    
   </div>
  );
}