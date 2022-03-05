import React, { useEffect, useState } from "react";

const axios = require("axios");

export default function FriendPop(props) {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    async function getMediaFriends() {
      try {
        const friendsPictures = await axios.get("/api/friendsPictures", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        });

        const mediaFriendsInteractions = await axios.get(
          "/api/mediaFriendsRecommendations",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("userToken")}`,
            },
          }
        );

        const results = [];

        for (const friend of friendsPictures.data) {
          for (const mediaFriend of mediaFriendsInteractions.data) {
            if (friend.friend_id === mediaFriend.id) {
              if (mediaFriend.interactions) {
                for (const interactionMedia of mediaFriend.interactions) {
                  if (interactionMedia.media_id === props.mediaID) {
                    results.push({ profile_picture: friend.profile_picture });
                  }
                }
              }
            }
          }
        }

        return results;
      } catch (e) {
        console.log(e);
      }
    }

    getMediaFriends().then((res) => {
      if (res) {
        setFriends(res.slice(0, 3));
      }
    });
  }, []);

  return (
    <div className="flex min-w-[60px] min-h-[22px] max-w-[60px] max-h-[22px] overflow-visible items-center">
      {friends.map((image, index) => {
        return (
          <img
            key={index}
            className="media-avatar-popout"
            src={image.profile_picture}
            alt=""
          />
        );
      })}
    </div>
  );
}
