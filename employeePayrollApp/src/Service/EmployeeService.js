import axios from "axios";
const EMPLOYEE_API_BASE_URL = "http://localhost:8082";

class EmployeeService {
    getAllEmployees() {
        return axios.get(`${EMPLOYEE_API_BASE_URL}/Show_All_Emp_Data`);
    }

    addEmployees(data) {
        return axios.post(`${EMPLOYEE_API_BASE_URL}/Register_Employee`, data);
    }

    deleteEmployee(empId) {
        return axios.delete(
            `${EMPLOYEE_API_BASE_URL}/Delete_Employee_Data/${empId}`
        );
    }

    getEmployee(empId) {
        return axios.get(`${EMPLOYEE_API_BASE_URL}/Find_Employee_Data/${empId}`);
    }

    updateEmployee(empID, data) {
        return axios.put(
            `${EMPLOYEE_API_BASE_URL}/Update_Employee_Data/${empID}`,
            data
        );
    }
}

export default new EmployeeService();
