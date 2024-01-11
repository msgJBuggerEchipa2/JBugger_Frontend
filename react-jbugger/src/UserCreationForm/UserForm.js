import React from 'react'
import { useState } from 'react'
import { Form } from 'react-router-dom'
import "./UserForm.css"
import axios from 'axios';

const UserForm = ({authToken}) => {
    /*Câte un useState pentru fiecare atribut
    al unui utilizator. Ele vor fi setate, indiferent dacă
    valorile sunt sau nu valide. În schimb se va afișa
    un mesaj dacă valorile nu sunt valide */
    const [name, setName] = useState('')
    const [mobileNumber, setMobileNumber] = useState('')
    const [email, setEmail] = useState('')
	

    /*Câte un useState pentru fiecare rol,
    Așa voi ști ce rol va avea noul utilizator*/
    const [admRole, setAdmRole] = useState(false)
    const [pmRole, setPmRole] = useState(false)
    const [tmRole, setTmRole] = useState(false)
    const [devRole, setDevRole] = useState(false)
    const [testRole, setTestRole] = useState(false)
	
	
	const handleUserCreation = async (firstN, lastN) => {
		let user = {
			"firstName": firstN,
			"lastName": lastN,
			"email": email,
			"mobileNumber" : mobileNumber
		
		}
    try {
      const response = await axios.post('http://localhost:8080/api/users/add', user, {
    headers: {
       Authorization: "Bearer " + authToken,
    }
	},);
      
	  if(response.status){
		  console.log(user);
	  }
	  if(!response.status){ 
	  console.log(response);
	  }
      
    } catch (error) {
      console.error('Login failed:', error.response ? error.response.data : error.message);
    }
  };
	
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', {
      name,
      email,
      mobileNumber,
    });
	const namesArr = name.split(" ");
	handleUserCreation(namesArr[0], namesArr[1]);
  };


  return (
    <div className="container">
    <form className='add-user-form' onSubmit={handleSubmit}>
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

        <input className='form-component btn btn-block' type='submit' style={{ textAlign: 'center' }} value='Create user'/>
    </form>
    </div>
  )
}

export default UserForm