import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear, faTimes } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom'

const UserCard = ({ user }) => {

  return (
    <div className='userCard'>
      <div className='userCardHeader'>
        <h3>
            {user.username}
        </h3>
        <div>
          <FontAwesomeIcon
            icon = {faTimes}
            color='red'
            style={{cursor : 'pointer', marginLeft: '10px'}}
          />
          <NavLink to={`${user.username}`}>
            <FontAwesomeIcon 
              icon={faGear}
              color='green'
              style={{cursor : 'pointer', marginLeft: '10px'}} 
            />
          </NavLink>
          
        </div>
      </div>
      {/*A list of roles will be printed;*/}
      <ul>
        {user.ADM ?  <li className='role'>ADM</li> : <></>}
        {user.PM ? <li className='role'>PM</li> : <></>}
        {user.TM ? <li className='role'>TM</li> : <></>}
        {user.DEV ? <li className='role'>DEV</li> : <></>}
        {user.TEST ? <li className='role'>TEST</li> : <></>}
      </ul>
    </div>
  )
}

export default UserCard