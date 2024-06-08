import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/employees";

export const getEmployees = async () => {
    return await axios.get(REST_API_BASE_URL);
}

export const createEmployee = async (employee) => {
    return await axios.post(REST_API_BASE_URL, employee);
}

export const getEmployeeById =async(employeeId)=>{
    return await axios.get(REST_API_BASE_URL + '/' + employeeId);
}

export const updateEmployee=async(employee, employeeId)=>{
    return await axios.put(REST_API_BASE_URL + '/' + employeeId, employee);
}

export const deleteEmployee=async(employeeId)=>{
    return await axios.delete(REST_API_BASE_URL + '/' + employeeId)
}

export const getEmployeeDetails=async(employeeId)=>{
    return await axios.get(REST_API_BASE_URL + '/' + employeeId)
}