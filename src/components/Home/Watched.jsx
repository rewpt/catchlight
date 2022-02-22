import React, {useState, useEffect} from "react";
import CardContainer from "./CardContainer";

const axios = require('axios');

export default function Watched (props) {

  const [mediaData, setMediaData] = useState([]);
  
  useEffect(() => {

    async function getMedia() {
      try {
        const mediaWatched = await axios.get('/api/watched', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('userToken')}`
          }
        });

        const media = await axios.get('/api/media', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('userToken')}`
          }
        });
        
        const mediaIDs = [];

        for (const media of mediaWatched.data) {
          mediaIDs.push(media.media_id)
        }
        const mediaArray = [];

        for (const mediaData of media.data) {
          if (mediaIDs.includes(mediaData.id)) {
            mediaArray.push(mediaData)
          }
        }

        return mediaArray
      } catch (err) {
        console.log(err);
      }
    };



    getMedia().then((res) => {
      setMediaData(res);
    });
  }, [props.refresh]);
  
  return (
      <CardContainer
        mediaData={mediaData}
        refresh={props.refresh}
        setRefresh={props.setRefresh}
      >
        {props.children}
      </CardContainer>
  );
};
