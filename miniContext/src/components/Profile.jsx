import React from 'react'
import { useContext } from 'react';
import UserContext from '../context/userContext';

function Profile() {
    const {user} = useContext(UserContext);
    //console.log(`${user.username}`)
    //console.log(`${user.password}`)
        if(user == null){
               return <div>Please Login</div>
            }

            else{
              return <div>Welcome {user.username} your password is {user.password}</div>
            }
}

export default Profile
