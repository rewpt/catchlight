import React, {useState, useEffect} from "react";
import CardContainer from "./CardContainer";

const axios = require('axios');

export default function WatchList (props) {

  const [mediaData, setMediaData] = useState([]);
  
  useEffect(() => {

    async function getMedia() {
      try {
        const mediaWatched = await axios.get('/api/towatch', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('userToken')}`
          }
        });
        // console.log(mediaFriendsInteractions.data);
        const media = await axios.get('/api/media', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('userToken')}`
          }
        });
        // console.log(mediaWatched.data)
        
        const mediaIDs = [];

        for (const media of mediaWatched.data) {
          mediaIDs.push(media.media_id)
        }
        // console.log(mediaIDs)
        const mediaArray = [];

        for (const mediaData of media.data) {
          if (mediaIDs.includes(mediaData.id)) {
            mediaArray.push(mediaData)
          }
          console.log(mediaArray);
        }

        return mediaArray
      } catch (err) {
        console.log(err);
      }
    };



    getMedia().then((res) => {
      setMediaData(res);
    });
  }, []);
  
  return (
    <div>
      <CardContainer
        mediaData={mediaData}
      >
        {props.children}
      </CardContainer>
    </div>
  );
};
