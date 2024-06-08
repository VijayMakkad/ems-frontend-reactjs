import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createEmployee } from '../../services/EmployeeService'

const EmployeeComponent = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [errors,setErrors]=useState({
    firstName: '',
    lastName: '',
    email: ''
  })


  const Navigate = useNavigate()

  const handleFirstName = (e) => {
    setFirstName(e.target.value)
  }

  const handleLastName = (e) => {
    setLastName(e.target.value)
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const saveEmployee = (e) => {
    e.preventDefault()

    if(validateForm()){
      const employee = { firstName, lastName, email }
      createEmployee(employee)
        .then((response) => {
          Navigate('/employees')
          console.log(response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }

  function validateForm(){
    let valid=true;

    const errorsCopy={...errors};

    if(firstName.trim()){
        errorsCopy.firstName = ''
    }else{
        errorsCopy.firstName = 'First Name should be atleast 3 characters'
        valid = false
    }

    if(lastName.trim()){
        errorsCopy.lastName = ''
    }else{
        errorsCopy.lastName = 'Last Name should be atleast 3 characters'
        valid = false
    }

    if(email.trim().includes('@')){
        errorsCopy.email = ''
    }else{
        errorsCopy.email = 'Email should contain @'
        valid = false
    }

    setErrors(errorsCopy);
    return valid;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3 border-black">
          <h2>Add Employee</h2>
          <div className="card-body">
            <form>
              <div className="form-group mb-2 ">
                <label className="form-label">First Name:</label>
                <input
                  type="text"
                  className={`form-control border-black ${
                    errors.firstName ? 'is-invalid' : ''
                  }`}
                  placeholder="Enter First Name"
                  value={firstName}
                  onChange={handleFirstName}
                />
                {errors.firstName && (
                  <div className="invalid-feedback text-danger">
                    {errors.firstName}
                  </div>
                )}
              </div>
              <div className="form-group mb-2">
                <label>Last Name:</label>
                <input
                  type="text"
                  className={`form-control border-black ${
                    errors.lastName ? 'is-invalid' : ''
                  }`}
                  placeholder="Last Name"
                  value={lastName}
                  onChange={handleLastName}
                />
                {errors.lastName && (
                  <div className="invalid-feedback text-danger">
                    {errors.lastName}
                  </div>
                )}
              </div>
              <div className="form-group mb-2">
                <label>Email:</label>
                <input
                  type="email"
                  className={`form-control border-black ${
                    errors.email ? 'is-invalid' : ''
                  }`}
                  placeholder="Email"
                  value={email}
                  onChange={handleEmail}
                />
                {errors.email && (
                  <div className="invalid-feedback text-danger">
                    {errors.email}
                  </div>
                )}
              </div>
              <button
                type="submit"
                className="btn btn-success mt-3"
                onClick={saveEmployee}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
export default EmployeeComponent
