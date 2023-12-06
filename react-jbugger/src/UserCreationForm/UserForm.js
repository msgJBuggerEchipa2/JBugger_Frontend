import React from 'react'

const UserForm = () => {
  return (
    <form className='add-user-form'>
        <div className='form-component'>
            <label>
                Name
            </label>
            <input type='text' placeholder='First name and Last name' />
        </div>
        <div className='form-component'>
            <label>
                Mobile number
            </label>
            <input type='tel' placeholder='+40 or +49 prefix allowed' />
        </div>
        <div className='form-component'>
            <label>
                Email
            </label>
            <input type='email' placeholder='@msggroup.com emails only' />
        </div>
        <div className='form-component'>
            <label>
                Roles
            </label>
            <input type='text' placeholder='one or more roles' />
        </div>

        <input className='form-component btn btn-block' type='submit' value='Create user'/>
    </form>
  )
}

export default UserForm