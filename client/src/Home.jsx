import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3030/employees")
      .then(res => setEmployees(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container mt-3">
      <h3>All Employees</h3>
      <table className="table table-bordered mt-2">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Employee ID</th>
            <th>Department</th>
            <th>Designation</th>
            <th>Project</th>
            <th>Type</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(emp => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.employee_name}</td>
              <td>{emp.employee_id}</td>
              <td>{emp.department}</td>
              <td>{emp.designation}</td>
              <td>{emp.project}</td>
              <td>{emp.type}</td>
              <td>{emp.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
