import React, { useState, useEffect } from "react";
import CardContainer from "./CardContainer";

const axios = require("axios");

export default function WatchList(props) {
  const [mediaData, setMediaData] = useState([]);

  useEffect(() => {
    async function getMedia() {
      try {
        const mediaWatched = await axios.get("/api/towatch", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        });
        const media = await axios.get("/api/media", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        });

        const mediaIDs = [];

        for (const media of mediaWatched.data) {
          mediaIDs.push(media.media_id);
        }
        const mediaArray = [];

        for (const mediaData of media.data) {
          if (mediaIDs.includes(mediaData.id)) {
            mediaArray.push(mediaData);
          }
        }

        return mediaArray;
      } catch (err) {
        console.log(err);
      }
    }

    let cancel = false;
    getMedia().then((res) => {
      if (cancel) return;
      setMediaData(res);
    });
    return () => {
      cancel = true;
    };
  }, [props.refresh]);

  return (
    <CardContainer
      mediaData={mediaData}
      removeFromWatchList={true}
      refresh={props.refresh}
      setRefresh={props.setRefresh}
    >
      {props.children}
    </CardContainer>
  );
}
