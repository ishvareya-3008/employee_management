import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Employees = () => {
  const [employees, setEmployees] = useState([]);

  // Fetch employees
  const fetchEmployees = () => {
    axios
      .get("http://localhost:3030/employees")
      .then((res) => setEmployees(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  // Delete employee
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      axios
        .delete(`http://localhost:3030/employees/${id}`)
        .then(() => fetchEmployees()) // refresh list after delete
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="container mt-5">
      <h3 className="mb-4 text-center fw-bold">Employee Records</h3>

      {employees.length > 0 ? (
        <table className="table table-bordered table-hover">
          <thead className="table-dark text-center">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Employee ID</th>
              <th>Department</th>
              <th>Designation</th>
              <th>Project</th>
              <th>Type</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp, index) => (
              <tr key={emp.id}>
                <td>{index + 1}</td>
                <td>{emp.employee_name}</td>
                <td>{emp.employee_id}</td>
                <td>{emp.department}</td>
                <td>{emp.designation}</td>
                <td>{emp.project}</td>
                <td>{emp.type}</td>
                <td>{emp.status}</td>
                <td className="text-center">
                  <Link
                    to={`/update/${emp.id}`}
                    className="btn btn-primary btn-sm me-2"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(emp.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h5 className="text-center text-muted">No Employee Records Found</h5>
      )}
    </div>
  );
};

export default Employees;
