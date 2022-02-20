import {
  faFaceGrin,
  faFaceFrown,
  faFaceMeh,
  faGlasses,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function FriendInteractions(props) {
  const { friendsAvatarArray } = props;

  return (
    <div className="flex xs:justify-center sm:justify-center xl:justify-start ">
      {friendsAvatarArray.map((image, index) => {
        return (
          <div className={`media-avatar`}>
            <img
              key={index}
              className={`h-[90px] max-w-none`}
              src={image.profile_picture}
              alt=""
            />
            {image.rating === "like" && (
              <FontAwesomeIcon
                className={
                  "h-17 absolute bottom-0 left-[21px] text-green-600 bg-white rounded-full"
                }
                icon={faFaceGrin}
              />
            )}
            {image.rating === "meh" && (
              <FontAwesomeIcon
                className={
                  "h-17 absolute bottom-0 left-[21px] text-yellow-600 bg-white rounded-full"
                }
                icon={faFaceMeh}
              />
            )}
            {image.rating === "dislike" && (
              <FontAwesomeIcon
                className={
                  "h-17 absolute bottom-0 left-[21px] text-red-600 bg-white rounded-full"
                }
                icon={faFaceFrown}
              />
            )}
            {image.rating === "interest" && (
              <FontAwesomeIcon
                className={
                  "h-17 absolute bottom-0 left-[21px] text-blue-500 rounded-full bg-white"
                }
                icon={faEye}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
