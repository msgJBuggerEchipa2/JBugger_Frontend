import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

const EditUserForm = () => {
  
  const location = useLocation()
  const user = location.state.userToUpdate
  const updateUserFunction = location.state.updateUserFunction

    const [name, setName] = useState(user.name)
    const [mobileNumber, setMobileNumber] = useState(user.mobileNumber)
    const [email, setEmail] = useState(user.email)
    const [admRole, setAdmRole] = useState(user.ADM)
    const [pmRole, setPmRole] = useState(user.PM)
    const [tmRole, setTmRole] = useState(user.TM)
    const [devRole, setDevRole] = useState(user.DEV)
    const [testRole, setTestRole] = useState(user.TEST)

  return (
    <div className="container">
    <form className='add-user-form' onSubmit={(event) => {
      event.preventDefault();
      updateUserFunction(user);
    }}>
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
            value={mobileNumber}
            onChange={(event) => {
                setMobileNumber(event.target.value)
            }}
            />
            {/*Some paragraphs showing error messages*/}
            {mobileNumber && (!mobileNumber.startsWith("+40") && !mobileNumber.startsWith("+49")) ?
             (<p style={{ color: 'red' }} >Invalid phone number prefix</p>) : <></>}
            {mobileNumber && mobileNumber.length !== 12 ?
             (<p style={{ color: 'red' }} >Invalid phone number</p>) : <></>}
        </div>
        <div className='form-component'>
            <label>
                Email
            </label>
            <input type='email' placeholder='@msggroup.com emails only'
            value = {email}
            onChange={(event) => {
                setEmail(event.target.value)
            }} 
            />
            {/*Some paragraphs showing error messages*/}
            {email && !email.endsWith("@msggroup.com") ?
             (<p style={{ color: 'red' }} >Invalid email address</p>) : <></>}
        </div>
        <div className='form-component '>
            <h3>
                Roles
            </h3>
            
            <div className='form-component form-component-check'>
            <label>
                Administrator (ADM)
            </label>
            <input type='checkbox' checked={admRole}
            onChange={(event) => setAdmRole(event.currentTarget.checked)}/>
            </div>

            <label>
                Project manager (PM)
            </label>
            <input type='checkbox' checked={pmRole}
            onChange={(event) => setPmRole(event.currentTarget.checked)}/>
            <label>
                Test manager (TM)
            </label>
            <input type='checkbox' checked={tmRole}
            onChange={(event) => setTmRole(event.currentTarget.checked)}/>
            <label>
                Developer (DEV)
            </label>
            <input type='checkbox' checked={devRole}
            onChange={(event) => setDevRole(event.currentTarget.checked)}/>
            <label>
                Tester (TEST)
            </label>
            <input type='checkbox' checked={testRole}
            onChange={(event) => setTestRole(event.currentTarget.checked)}/>
        </div>

        <input className='form-component btn btn-block' type='submit' value='Update User'/>
    </form>
    </div>
  )
}

export default EditUserForm