import React, {useState, useEffect} from "react";
// import getUsers from '../../hooks/getUsers';
const axios = require('axios');

export default function Test() {
  
  const [mediaData, setMediaData] = useState([]);
  
  async function getMedia() {
    try {
      const media = await axios.get('/api/media', {
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
  
  // console.log(mediaData)
  return (
    <div>
      {mediaData.map((i) => {
        return <h1>{i.id}, {i.name}, {i.email}</h1>
      })}    
    </div>
  )
}
