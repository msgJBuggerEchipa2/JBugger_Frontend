import React from 'react'
import { useState } from 'react'

const UserForm = () => {
    const [name, setName] = useState('')
    const [mobileNumber, setMobileNumber] = useState('')
    const [email, setEmail] = useState('')
    const [roles, setRoles] = useState('')

    /*Temporary values for storing data, used for validation */
    const [tempMobileNumber, setTempMobileNumber] = useState('')
    const [tempEmail, setTempEmail] = useState('')

    const handlePhoneNumberChange = (e) => {
        // Validate the phone number
        // Check if the prefix is +40 or +49
        // Also check the length
        const inputPhoneNumber = e.target.value

        setTempMobileNumber(inputPhoneNumber)
        if((inputPhoneNumber.startsWith("+40") || inputPhoneNumber.startsWith("+49")) && inputPhoneNumber.length === 12){
            setMobileNumber(inputPhoneNumber)
        }
    }

    const handleEmailChange = (e) => {
        //Validate the provided Email
        //Check if the domain is msggroup.com
        setTempEmail(e.target.value)
        if(/@msggroup.com$/.test(e.target.value)){
            setEmail(e.target.value)
        }
    }

  return (
    <form className='add-user-form'>
        <div className='form-component'>
            <label>
                Name
            </label>
            <input type='text' placeholder='First name and Last name'
            value={name}
            onChange={(event) => {
                setName(event.target.value)
            }} />
        </div>
        <div className='form-component'>
            <label>
                Mobile number
            </label>
            <input type='tel' placeholder='+40 or +49 prefix allowed'
            value={tempMobileNumber}
            onChange={handlePhoneNumberChange}
            />
            {/*Some paragraphs showing error messages*/}
            {tempMobileNumber && (!tempMobileNumber.startsWith("+40") && !tempMobileNumber.startsWith("+49")) ?
             (<p style={{ color: 'red' }} >Invalid phone number prefix</p>) : <></>}
            {tempMobileNumber && tempMobileNumber.length !== 12 ?
             (<p style={{ color: 'red' }} >Invalid phone number</p>) : <></>}
        </div>
        <div className='form-component'>
            <label>
                Email
            </label>
            <input type='email' placeholder='@msggroup.com emails only'
            value = {tempEmail}
            onChange={handleEmailChange} 
            />
            {/*Some paragraphs showing error messages*/}
            {tempEmail && !tempEmail.endsWith("@msggroup.com") ?
             (<p style={{ color: 'red' }} >Invalid email address</p>) : <></>}
        </div>
        <div className='form-component'>
            <label>
                Roles
            </label>
            <input type='text' placeholder='one or more roles' 
            value = {roles}
            onChange={(event) => {
                setRoles(event.target.value)
            }}/>
        </div>

        <input className='form-component btn btn-block' type='submit' value='Create user'/>
    </form>
  )
}

export default UserForm