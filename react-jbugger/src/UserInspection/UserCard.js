import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const UserCard = ({ user, onUserUpdate }) => {
  
  const navigate = useNavigate()

  return (
    <div className='user'>
        <h3>
            {user.username}
            <FontAwesomeIcon
                icon = {faTimes}
                color='red'
                style={{cursor : 'pointer', marginLeft: '10px'}}
            />
            <FontAwesomeIcon 
                icon={faGear}
                color='green'
                style={{cursor : 'pointer', marginLeft: '10px'}}
                onClick={(event) => {
                  navigate('/editUser', {state : {userToUpdate : user, updateUserFunction : onUserUpdate}})
                }} 
            />
        </h3>
        {/*A list of roles will be printed;*/}
        <ul>
          {user.ADM ?  <li>ADM</li> : <></>}
          {user.PM ? <li>PM</li> : <></>}
          {user.TM ? <li>TM</li> : <></>}
          {user.DEV ? <li>DEV</li> : <></>}
          {user.TEST ? <li>TEST</li> : <></>}
        </ul>
    </div>
  )
}

export default UserCard