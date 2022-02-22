import React, { useEffect, useState } from 'react'


const axios = require('axios');

export default function FriendPop(props) {

  const [friends, setFriends] = useState([]);

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

        // console.log('props.mediaID', props.mediaID);

        for (const friend of friendsPictures.data) {
          // console.log(`friend id:${friend.friend_id}`)
          // console.log(friend.profile_picture)
          for (const mediaFriend of mediaFriendsInteractions.data) {
            if (friend.friend_id === mediaFriend.id) {
              for (const interactionMedia of mediaFriend.interactions) {
                // console.log(interactionMedia)
                if (interactionMedia.media_id === props.mediaID) {
                  results.push({profile_picture: friend.profile_picture});
                }
              }
            }
          }
        }

        // console.log('results', results)
        
        return results;
      } catch (e) {
        console.log(e)
      }
    }

    getMediaFriends().then((res) => {
      setFriends(res.slice(0, 3));
    });

  }, [])
  
  // console.log('booooooooo', friends.map(image => image.profile_picture))

  return (
    <div className="flex min-w-[60px] min-h-[22px] max-w-[60px] max-h-[22px] overflow-visible items-center">

      
        {friends.map((image, index) => {

          return <img
            key={index}
            className="media-avatar-popout"
            src={image.profile_picture}
            alt=""
          />
        })}
      
      
    </div>
  );
}