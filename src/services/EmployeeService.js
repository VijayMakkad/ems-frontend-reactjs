import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/employees";

export const getEmployees = async () => {
    return await axios.get(REST_API_BASE_URL);
}

export const createEmployee = async (employee) => {
    return await axios.post(REST_API_BASE_URL, employee);
}