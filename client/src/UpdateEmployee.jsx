import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const UpdateEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    employee_name: "",
    employee_id: "",
    department: "",
    designation: "",
    project: "",
    type: "",
    status: "",
  });

  // Fetch employee data by ID
  useEffect(() => {
    axios
      .get("http://localhost:3030/getrecord/" + id)
      .then((res) =>
        setEmployee({
          ...employee,
          employee_name: res.data.employee_name,
          employee_id: res.data.employee_id,
          department: res.data.department,
          designation: res.data.designation,
          project: res.data.project,
          type: res.data.type,
          status: res.data.status,
        })
      )
      .catch((err) => console.log(err));
  }, [id]);

  // Handle input changes
  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  // Update employee
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3030/employees/${id}`, employee)
      .then(() => navigate("/")) // redirect to home after update
      .catch((err) => console.log(err));
  };

  return (
    <div className="container mt-5">
      <h3 className="mb-4 fw-bold text-center">Edit Employee</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Name:</label>
          <input
            type="text"
            className="form-control"
            name="employee_name"
            value={employee.employee_name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Employee ID:</label>
          <input
            type="text"
            className="form-control"
            name="employee_id"
            value={employee.employee_id}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Department:</label>
          <input
            type="text"
            className="form-control"
            name="department"
            value={employee.department}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Designation:</label>
          <input
            type="text"
            className="form-control"
            name="designation"
            value={employee.designation}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Project:</label>
          <input
            type="text"
            className="form-control"
            name="project"
            value={employee.project}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Type:</label>
          <input
            type="text"
            className="form-control"
            name="type"
            value={employee.type}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Status:</label>
          <input
            type="text"
            className="form-control"
            name="status"
            value={employee.status}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-success me-2">
          Update
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => navigate("/")}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default UpdateEmployee;
