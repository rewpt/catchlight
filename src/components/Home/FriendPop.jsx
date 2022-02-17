import React, { useEffect, useState } from 'react'


const axios = require('axios');

export default function FriendPop(props) {

  const [friends, setFriends] = useState([]);

  // GET all friend's profile picture who'v interacted with a media
  // user.profile_picture
  //

  // results
  // const friendsPictures = [pic1, pic2, pic3, ect]


  useEffect(() => {

    async function getMediaFriends() {
      try {
        const friendsPictures = await axios.get('/api/friendsPictures', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('userToken')}`
          }
        });

        const mediaFriendsInteractions = await axios.get('/api/mediaFriendsRecommendations', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('userToken')}`
          }
        });

        // console.log('mediaFriendsInteractions ===', mediaFriendsInteractions.data)

        const results = [];

        console.log('props.mediaID', props.mediaID);

        for (const friend of friendsPictures.data) {
          console.log(`friend id:${friend.friend_id}`)
          // console.log(friend.profile_picture)
          for (const mediaFriend of mediaFriendsInteractions.data) {
            console.log(mediaFriend)
            if (friend.friend_id === mediaFriend.id) {
              for (const interactionMedia of mediaFriend.interactions) {
                console.log(interactionMedia)
                if (interactionMedia.media_id === props.mediaID) {
                  results.push({profile_picture: friend.profile_picture});
                }
              }
            }
          }
        }

        console.log('results', results)
        

        return results;
      } catch (e) {
        console.log(e)
      }
    }

    
    

    getMediaFriends().then((res) => {
      setFriends(res);
    });

    // console.log('props',props)
  }, [])
  
  // console.log('booooooooo', friends.map(image => image.profile_picture))

  return (
    <div className="ml-2 xs:justify-center sm:justify-center lg:justify-start -space-x-2">
      {friends.map(image => {
        return <img
          className="media-avatar-popout"
          src={image.profile_picture}
          alt=""
        />
      })}

      {/* <img
        className="media-avatar-popout"
        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt=""
      />
      <img
        className="media-avatar-popout"
        src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt=""
      />
      <img
        className="media-avatar-popout"
        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
        alt=""
      />
      <img
        className="media-avatar-popout"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt=""
     /> */}

    </div>
  );
}