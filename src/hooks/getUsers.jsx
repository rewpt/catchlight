const axios = require('axios');

export default async function getUsers() {
    try {
      const users = await axios.get('/api/users', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('userToken')}`
        }
      });
      console.log({users});
      return users;
    } catch (err) {
      console.log(err);
    };

}