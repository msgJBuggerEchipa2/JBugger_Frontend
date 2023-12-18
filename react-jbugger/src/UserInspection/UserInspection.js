import React, { useEffect, useState } from 'react'
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

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('/api/inspectUsers')
            .then(res => res.json())
            .then(data => setUsers(data.users))
    }, [])

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