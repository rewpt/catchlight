import {React, useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import RatingBar from './RatingBar';
import RatingFaces from './RatingFaces';
import Title from './MediaTitle';
import MediaPoster from './MediaPoster'
import FriendInteractions from './FriendInteractions';
import MediaDescription from './MediaDescription';
import StreamsOn from './StreamsOn';
import axios from 'axios';

export default function MediaDetails() {
  const { id } = useParams()
  const [ mediaInteraction, setMediaInteraction] = useState(false)
  const [ mediaDetails, setMediaDetails] = useState({});

  useEffect(() => {
    const jwt = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('userToken')}`
      }
    }
    
    const singleMedia = axios.get(`/api/media/${id}`, jwt);
    const userInteraction = axios.get(`/api/media/${id}/interactions/`, jwt);

    Promise.all([singleMedia, userInteraction])
    .then(([media, interactions]) => {
    setMediaDetails(media.data)
    setMediaInteraction(interactions.data)
    })
  }, [id]);

  return (
   <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-6 mt-10 mx-10">
     <MediaPoster image={mediaDetails.image}/>
     <Title title={mediaDetails.title} description={mediaDetails.description}/>
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