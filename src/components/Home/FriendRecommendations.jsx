import React, {useState, useEffect} from "react";
import CardContainer from "./CardContainer";

const axios = require('axios');

export default function FriendRecommendations(props) {

  const [mediaData, setMediaData] = useState([]);
  
  async function getMedia() {
    try {
      const media = await axios.get('/api/mediaFriendsRecommendations', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('userToken')}`
        }
      });
      // console.log(media.data);
      return media.data;
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getMedia().then((res) => {
      setMediaData(res);
    })
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
