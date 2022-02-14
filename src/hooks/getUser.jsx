const axios = require('axios');

export default async function getUser() {

    try {
      const user = await axios.get('/api/users/user', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('userToken')}`
        }
      })
      return user;
    } catch (err) {
      console.log(err);
    };
}