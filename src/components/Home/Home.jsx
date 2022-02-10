import { useEffect } from 'react';

export default function Home() {
  
  function validateUser () {
    const userToken = localStorage.getItem('userToken')
    if (!userToken) {
      // redirect to login
    }
    return userToken
  };

  useEffect(() => {
    const token = validateUser();
    alert(token);
  }, []);

  return (
    <div>
      Home 123z
    </div>
  )
};