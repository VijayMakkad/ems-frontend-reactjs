import { useEffect, useState } from 'react'
import { getEmployees, deleteEmployee } from '../../services/EmployeeService'
import { useNavigate } from 'react-router-dom'

const ListEmployee = () => {
  const [employeeData, setEmployeeData] = useState([])
  const navigator = useNavigate()

  useEffect(() => {
    getAllemployees()
  }, [])

  function getAllemployees() {
    getEmployees()
      .then((response) => {
        setEmployeeData(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  function addnewEmployee() {
    navigator('/addEmployee')
  }

  function updateEmployee(id) {
    navigator(`/editEmployee/${id}`)
  }

  function removeEmployee(id) {
    console.log('Delete Employee with id: ' + id)
    deleteEmployee(id)
      .then((response) => {
        getAllemployees()
      })
      .catch((error) => {
        console.log(error)
      })
  }

  function viewEmployeeDetails(id){
    navigator(`/viewEmployee/${id}`)
  }

  return (
    <div className="row text-center mt-5 container">
      <h2>List Of Employees</h2>
      <br />
      <button
        className="btn btn-primary"
        style={{ width: '140px', marginTop: '30px' }}
        onClick={addnewEmployee}
      >
        Add Employee
      </button>
      <br />
      <div className="col-lg-12 mt-4">
        <table className="table table-striped table-bordered border-black">
          <thead>
            <tr>
              <th>Employee Id</th>
              <th>Employee FirstName</th>
              <th>Employee LastName</th>
              <th>Employee Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employeeData.map((employee) => {
              return (
                <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.email}</td>
                  <td>
                    <button
                      className="btn btn-info"
                      onClick={() => updateEmployee(employee.id)}
                    >
                      Update
                    </button>
                    <button
                      className="btn btn-danger m-1"
                      onClick={() => removeEmployee(employee.id)}
                    >
                      Delete
                    </button>
                    <button className='btn btn-primary' onClick={()=>viewEmployeeDetails(employee.id)}>View</button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default ListEmployee
