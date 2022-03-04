import {
  faFaceGrin,
  faFaceFrown,
  faFaceMeh,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import classNames from "classnames";

export default function FriendInteractions(props) {
  const {
    topicRefresh,
    setTopicRefresh,
    friendsAvatarArray,
    postNewConversation,
    mediaID,
  } = props;

  return (
    <div
      className="flex flex-wrap
      mt-20 content-end
      sm:justify-around sm:mt-20
      md:justify-start md:mt-0
      lg:justify-start lg:mt-0
      xl:justify-start lg:mt-0"
    >
      {friendsAvatarArray.map((image, index) => {
        let borderColor = classNames("media-avatar", {
          "hover:ring-2 hover:ring-green-600": image.rating === "like",
          "hover:ring-2 hover:ring-yellow-600": image.rating === "meh",
          "hover:ring-2 hover:ring-red-600": image.rating === "dislike",
          "hover:ring-2 hover:ring-blue-600": image.rating === "interest",
        });

        return (
          <div
            key={index}
            userid={image.userId}
            onClick={() => {
              postNewConversation(image.userId, mediaID).then(() => {
                setTopicRefresh(!topicRefresh);
              });
            }}
            className="media-avatar-outer"
          >
            {image.rating === "like" && (
              <FontAwesomeIcon
                className={
                  "h-17 absolute top-2 right-[14px] z-20 text-green-600 bg-white rounded-full"
                }
                icon={faFaceGrin}
              />
            )}
            {image.rating === "meh" && (
              <FontAwesomeIcon
                className={
                  "h-17 absolute top-2 right-[14px] z-20 text-yellow-600 bg-white rounded-full"
                }
                icon={faFaceMeh}
              />
            )}
            {image.rating === "dislike" && (
              <FontAwesomeIcon
                className={
                  "h-17 absolute top-2 right-[14px] z-20 text-red-600 bg-white rounded-full"
                }
                icon={faFaceFrown}
              />
            )}
            {image.rating === "interest" && (
              <FontAwesomeIcon
                className={
                  "h-17 absolute top-1 right-[14px] z-20 text-blue-500  rounded-full bg-white"
                }
                icon={faEye}
              />
            )}
            <div className={`${borderColor}`}>
              <img
                key={index}
                className={`h-[105px] max-w-none`}
                src={image.profile_picture}
                alt=""
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
