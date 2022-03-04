import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { useApplicationData } from "../../hooks/useApplicationData";
import RatingBar from "./RatingBar";
import Title from "./MediaTitle";
import MediaPoster from "./MediaPoster";
import FriendInteractions from "./FriendInteractions";
import MediaWatchedButton from "./MediaWatchedButton";
import StreamsOn from "./StreamsOn";
import SearchBox from "../SearchBox";
const axios = require("axios");

export default function MediaDetails() {
  const {
    jwt,
    mediaID,
    mediaInteraction,
    mediaDetails,
    friendsAvatars,
    interactionStats,
    streamingServices,
    buttonState,
    setButtonState,
    postMediaButtonClick,
    handleRatingClick,
    isLoading,
    setInteractionStats,
    postNewConversation,
  } = useApplicationData();
  const [topicRefresh, setTopicRefresh] = useOutletContext();

  useEffect(() => {
    const getTotalCount = async () => {
      try {
        const response = await axios.get(
          `/api/interactions/count/${mediaID}`,
          jwt
        );

        setInteractionStats(response.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    const reqInterval = setInterval(() => {
      getTotalCount();
    }, 2000);

    return () => {
      clearInterval(reqInterval);
    };
  });

  return (
    <React.Fragment>
      <SearchBox />
      {!isLoading && (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-6 mt-10 mx-10">
          <MediaPoster image={mediaDetails.image} />
          <Title
            title={mediaDetails.title}
            description={mediaDetails.description}
          />
          <RatingBar
            handleRatingClick={handleRatingClick}
            interactionStats={interactionStats}
            mediaInteraction={mediaInteraction}
          />
          <FriendInteractions
            topicRefresh={topicRefresh}
            setTopicRefresh={setTopicRefresh}
            friendsAvatarArray={friendsAvatars}
            mediaID={mediaID}
            postNewConversation={postNewConversation}
          />
          <StreamsOn streamingServices={streamingServices} />
          <div className=" flex">
            <MediaWatchedButton
              postMediaButtonClick={postMediaButtonClick}
              buttonState={buttonState}
              setButtonState={setButtonState}
              handleRatingClick={handleRatingClick}
            ></MediaWatchedButton>
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
