import React, { useEffect, useState } from 'react'
import UserCard from './UserCard'
import axios from 'axios';

const UserInspection = ({authToken}) => {
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
	let requestSent = false;
	
	if(requestSent === false){
	const concatenatedToken = `Bearer ${authToken}`;
	
	const handleGetUsers = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/printUsers', {
    headers: {
       Authorization: "Bearer " + authToken
    }
	},);
      
	  if(response.status){
		  setUsers(response.data);
	  }
	  if(!response.status){ 
	  console.log(response);
	  }
      
    } catch (error) {
      console.error('Login failed:', error.response ? error.response.data : error.message);
    }
	requestSent = true;
  };
		handleGetUsers();
	}
	 
    /*
    useEffect(() => {
        fetch('/api/inspectUsers')
            .then(res => res.json())
            .then(data => setUsers(data.users))
    }, [])
	*/

  return (
    <div className='container'>
        {/*Loops through every user and creates an UserCard */}
        {users.map((currentuser, index) => (
            <UserCard key={currentuser.id} user={currentuser} /*onUserUpdate={(updatedUser) =>
            handleUpdates(updatedUser)}*//>
        ))}
    </div>
  )
}

export default UserInspection