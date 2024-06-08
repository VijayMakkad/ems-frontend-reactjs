import React, { useEffect, useState } from 'react'
import { getEmployeeDetails } from '../../services/EmployeeService'
import { useParams } from 'react-router-dom'

const ViewEmployee = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    const {id} = useParams();
    useEffect(() => {
        getEmployeeDetails(id).then((response)=>{
            setFirstName(response.data.firstName)
            setLastName(response.data.lastName)
            setEmail(response.data.email)
        })
    },[id])

  return (
    <div className="container mt-4 mb-4" style={{height:"77.6vh"}}>
      <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3 border-black">
            <div className="card-body">
              <h5 className="card-title text-center">Employee Details</h5>
              <p className="card-text">First Name: {firstName}</p>
              <p className="card-text">Last Name: {lastName}</p>
              <p className="card-text">Email: {email}</p>
            </div>
        </div>
      </div>
    </div>
  )
}
export default ViewEmployee