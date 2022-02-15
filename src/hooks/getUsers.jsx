const axios = require('axios');

export default function getUsers() {

  const axiosUsers = async () => {

    try {
      const users = await axios.get('/api/users', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('userToken')}`
        }
      });
      console.log({users});
    } catch (err) {
      console.log(err);
    };
  }

  return axiosUsers();
}