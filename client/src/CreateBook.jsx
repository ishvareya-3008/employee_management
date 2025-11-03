import React, { useState } from "react";
import axios from "axios";


const CreateBook = () => {
  const [values, setValues] = useState({
    employee_name: "",
    employee_id: "",
    department: "",
    designation: "",
    project: "",
    type: "Office",
    status: ""
  });
    
    

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:3030/create", values)
      .then(res => {
        alert("Employee created successfully!");
        setValues({
          employee_name: "",
          employee_id: "",
          department: "",
          designation: "",
          project: "",
          type: "Office",
          status: ""
        });
          
      })
      .catch(err => {
        console.error(err);
        alert("Error creating employee!");
      });
      
  };

  return (
    <div className="d-flex justify-content-center mt-3">
      <form className="w-50" onSubmit={handleSubmit}>
        <label className="form-label">employee_name</label>
        <input
          type="text"
          className="form-control"
          value={values.employee_name}
          onChange={(e) => setValues({ ...values, employee_name: e.target.value })}
        />

        <label className="form-label mt-3">employee_id</label>
        <input
          type="text"
          className="form-control"
          value={values.employee_id}
          onChange={(e) => setValues({ ...values, employee_id: e.target.value })}
        />

        <label className="form-label mt-3">department</label>
        <input
          type="text"
          className="form-control"
          value={values.department}
          onChange={(e) => setValues({ ...values, department: e.target.value })}
        />

        <label className="form-label mt-3">designation</label>
        <input
          type="text"
          className="form-control"
          value={values.designation}
          onChange={(e) => setValues({ ...values, designation: e.target.value })}
        />

        <label className="form-label mt-3">project:</label>
        <input
          type="text"
          className="form-control"
          value={values.project}
          onChange={(e) => setValues({ ...values, project: e.target.value })}
        />

        <label className="form-label mt-3">Type:</label>
        <div className="form-check">
          <input
            type="radio"
            className="form-check-input"
            name="type"
            value="Office"
            checked={values.type === "Office"}
            onChange={(e) => setValues({ ...values, type: e.target.value })}
          />
          <label className="form-check-label">Office</label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            className="form-check-input"
            name="type"
            value="Remote"
            checked={values.type === "Remote"}
            onChange={(e) => setValues({ ...values, type: e.target.value })}
          />
          <label className="form-check-label">Remote</label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            className="form-check-input"
            name="type"
            value="Hybrid"
            checked={values.type === "Hybrid"}
            onChange={(e) => setValues({ ...values, type: e.target.value })}
          />
          <label className="form-check-label">Hybrid</label>
        </div>

        <label className="form-label mt-3">Status:</label>
        <input
          type="text"
          className="form-control"
          value={values.status}
          onChange={(e) => setValues({ ...values, status: e.target.value })}
        />

        <button type="submit"  className="btn btn-primary mt-3">Submit</button>
      </form>
    </div>
  );
};

export default CreateBook;
