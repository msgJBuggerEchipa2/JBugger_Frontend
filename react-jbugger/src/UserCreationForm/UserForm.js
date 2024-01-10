import React from 'react'
import { Form, Navigate, redirect } from 'react-router-dom'

const UserForm = () => {

  return (
    <div className="container">
    <Form className='add-user-form' method='post'>
        <div className='form-component'>
            <label>
                Name
            </label>
            <input name='name' type='text' placeholder='First name and Last name' />
        </div>
        <div className='form-component'>
            <label>
                Mobile number
            </label>
            <input name='mobileNumber' type='tel' placeholder='+40 or +49 prefix allowed'/>
        </div>
        <div className='form-component'>
            <label>
                Email
            </label>
            <input name='email' type='email' placeholder='@msggroup.com emails only'/>
        </div>
        <div className='form-component '>
            <h3>
                Roles
            </h3>
            
            <div className='form-component form-component-check'>
            <label>
                Administrator (ADM)
            </label>
            <input name='admRole' type='checkbox'/>
            </div>

            <label>
                Project manager (PM)
            </label>
            <input name='pmRole' type='checkbox'/>
            <label>
                Test manager (TM)
            </label>
            <input name='tmRole' type='checkbox'/>
            <label>
                Developer (DEV)
            </label>
            <input name='devRole' type='checkbox'/>
            <label>
                Tester (TEST)
            </label>
            <input name='testRole' type='checkbox'/>
        </div>

        <button className='form-component btn btn-block'>Create user</button>
    </Form>
    </div>
  )
}

export const addUserAction = async({ request }) => {

    const data = await request.formData()

    const submission = {
        name : data.get("name"),
        mobileNumber : data.get("mobileNumber"),
        email : data.get("email"),
        ADM : data.get("admRole"),
        PM : data.get("pmRole"),
        TM : data.get("tmRole"),
        DEV : data.get("devRole"),
        TEST : data.get("testRole")
    }

    const response = await fetch('/api/createUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submission),
      });

    if(!response.ok){
        console.log(response.statusText)
    }

    Navigate("/inspectUsers")

    return redirect("/inspectUsers")

}

export default UserForm