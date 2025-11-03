import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Nav = ({ searchTerm, setSearchTerm }) => {
  return (
    <nav className="d-flex justify-content-between align-items-center py-2 px-3 shadow-sm fs-4 fw-bold bg-light text-primary">
      RS-TECH
      <div className="d-flex align-items-center">
        <Link to="/" className="btn btn-primary mx-2">
          Home
        </Link>
        <Link to="/create" className="btn btn-success mx-2">
          Create Employee
        </Link>
        {/* Search Bar */}
        <input
          type="text"
          className="form-control ms-3"
          style={{ width: "200px" }}
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </nav>
  );
};

export default Nav;
