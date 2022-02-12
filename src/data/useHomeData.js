import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useHomePageData(){
  const [state, setState] = useState();

  useEffect(() => {
    const axiosConfig = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('userToken')}`
      }
    }

    const getUser = axios.get(`/api/users/user`, axiosConfig)
    const getFriends = axios.get(`/api/friends/`, axiosConfig)
  })
}