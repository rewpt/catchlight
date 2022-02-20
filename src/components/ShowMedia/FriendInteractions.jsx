import { faFaceGrin, faFaceFrown, faFaceMeh, faGlasses, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'


export default function FriendInteractions(props) {
  const { friendsAvatarArray } = props;


  return (
      <div className="flex xs:justify-center sm:justify-center lg:justify-start -space-x-3">
      {friendsAvatarArray.map((image, index) => {
          
          return <div className={"relative hover:scale-125 ease-in duration-100"}>
                  <img
                    key={index}
                    className={`media-avatar`}
                    src={image.profile_picture}
                    alt=""
                  />
                  {image.rating === 'like' && <FontAwesomeIcon className={'h-17 absolute top-0 left-0 text-green-600 bg-white rounded-full'} icon={faFaceGrin}/>}
                  {image.rating === 'meh' && <FontAwesomeIcon className={'h-17 absolute top-0 left-0 text-yellow-600 bg-white rounded-full'} icon={faFaceMeh}/>}
                  {image.rating === 'dislike' && <FontAwesomeIcon className={'h-17 absolute top-0 left-0 text-red-600 bg-white rounded-full'} icon={faFaceFrown}/>}
                  {image.rating === 'interest' && <FontAwesomeIcon className={'h-17 absolute top-0 left-0 text-blue-500	0 rounded-full bg-white'} icon={faEye}/>}
                </div>
        })}
    </div>
  );
};