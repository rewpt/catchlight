import React from 'react'
import getUsers from '../../hooks/getUsers';

export default function Test() {
  

  // userToken: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTgsI…3NjB9.aLaaQ4RVesaksRNtie1TjwlObq5ScLojzhyyQ2k1m7M

  getUsers();
  
  return (
    <div>
      users
    </div>
  )
}
