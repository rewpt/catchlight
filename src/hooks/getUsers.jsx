const axios = require('axios');

export default function getUsers() {

  const userToken = localStorage.getItem('userToken');

  const axiosUsers = async () => {

    try {
      const users = await axios.get('/api/users', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('userToken')}`
        }
      });
    } catch (err) {
      console.log(err);
    };
  }

  return axiosUsers();
}