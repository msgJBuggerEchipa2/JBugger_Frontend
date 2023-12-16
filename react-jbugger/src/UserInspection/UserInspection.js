import React, { useState } from 'react'
import UserCard from './UserCard'

const UserInspection = () => {
    {/*const handleUpdates = (updatedUser) => {
        setUsers((previousUsers) => 
        previousUsers.map((currentUser) =>
            currentUser.username === updatedUser.username ? {
                mobileNumber : updatedUser.mobileNumber,
                email : updatedUser.email,
                name : updatedUser.name,
                ADM : updatedUser.ADM,
                PM : updatedUser.PM,
                TM : updatedUser.TM,
                DEV : updatedUser.DEV,
                TEST : updatedUser.TEST
            } : currentUser))
    }*/}

    /*A list of hardcoded users */
    const [users, setUsers] = useState([
        {
            name : 'Alan B',
            mobileNumber : '00',
            email : 'alan@msggroup.com',
            username : 'alan',
            ADM : true,
            PM : true,
            TM : false,
            DEV : false,
            TEST : false

        },
        {
            name : 'Wake B',
            mobileNumber : '00',
            email : 'wake@msggroup.com',
            username : 'wake',
            ADM : false,
            PM : false,
            TM : true,
            DEV : false,
            TEST : false
        },
        {
            name : 'Super B',
            mobileNumber : '00',
            email : 'super@msggroup.com',
            username : 'super',
            ADM : false,
            PM : false,
            TM : false,
            DEV : true,
            TEST : true
        },
    ])
  return (
    <div className='container'>
        {/*Loops through every user and creates an UserCard */}
        {users.map((currentuser) => (
            <UserCard user={currentuser} /*onUserUpdate={(updatedUser) =>
            handleUpdates(updatedUser)}*//>
        ))}
    </div>
  )
}

export default UserInspection