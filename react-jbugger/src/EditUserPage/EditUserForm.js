import { useEffect, useState } from 'react'
import { Form, useParams } from 'react-router-dom'

const EditUserForm = () => {
  const params = useParams()
  const [name, setName] = useState("")
  const [mobileNumber, setMobileNumber] = useState("")
  const [email, setEmail] = useState("")
  const [ADM, setADM] = useState("")
  const [PM, setPM] = useState("")
  const [TM, setTM] = useState("")
  const [DEV, setDEV] = useState("")
  const [TEST, setTEST] = useState("")

  useEffect(() => {
    fetch(`/api/inspectUsers/${params.username}`)
        .then(res => res.json())
        .then(data => {
            setName(data.name)
            setMobileNumber(data.mobileNumber)
            setEmail(data.email)
            setADM(data.admRole)
            setPM(data.pmRole)
            setTM(data.tmRole)
            setDEV(data.devRole)
            setTEST(data.testRole)
        })
  }, [params.username])

  return (
    <div className="container">
    <Form className='add-user-form'>
        <div className='form-component'>
            <label>
                Name
            </label>
            <input type='text' placeholder='First name and Last name'
            value={name}
            />
        </div>
        <div className='form-component'>
            <label>
                Mobile number
            </label>
            <input type='tel' placeholder='+40 or +49 prefix allowed'
            value={mobileNumber}
            />
        </div>
        <div className='form-component'>
            <label>
                Email
            </label>
            <input type='email' placeholder='@msggroup.com emails only'
            value = {email}
            />
        </div>
        <div className='form-component '>
            <h3>
                Roles
            </h3>
            
            <div className='form-component form-component-check'>
            <label>
                Administrator (ADM)
            </label>
            <input type='checkbox' checked={ADM}/>
            </div>

            <label>
                Project manager (PM)
            </label>
            <input type='checkbox' checked={PM}/>
            <label>
                Test manager (TM)
            </label>
            <input type='checkbox' checked={TM}/>
            <label>
                Developer (DEV)
            </label>
            <input type='checkbox' checked={DEV}/>
            <label>
                Tester (TEST)
            </label>
            <input type='checkbox' checked={TEST}/>
        </div>

        <input className='form-component btn btn-block' type='submit' value='Update User'/>
    </Form>
    </div>
  )}


export default EditUserForm