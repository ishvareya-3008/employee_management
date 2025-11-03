import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "crud",
});

db.connect((err) => {
  if (err) return console.error("Database connection failed:", err);
  console.log("Connected to MySQL");
});

// GET all employees
app.get("/employees", (req, res) => {
  db.query("SELECT * FROM employees", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// CREATE employee
app.post("/create", (req, res) => {
  const {
    employee_name,
    employee_id,
    department,
    designation,
    project,
    type,
    status,
  } = req.body;
  const sql =
    "INSERT INTO employees (employee_name, employee_id, department, designation, project, type, status) VALUES (?, ?, ?, ?, ?, ?, ?)";
  db.query(
    sql,
    [
      employee_name,
      employee_id,
      department,
      designation,
      project,
      type,
      status,
    ],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: "Employee created" });
    }
  );
});

// DELETE employee
app.delete("/employees/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM employees WHERE id = ?", [id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Employee deleted" });
  });
});

// UPDATE employee
app.put("/employees/:id", (req, res) => {
  const id = req.params.id;
  const {
    employee_name,
    employee_id,
    department,
    designation,
    project,
    type,
    status,
  } = req.body;
  const sql =
    "UPDATE employees SET employee_name=?, employee_id=?, department=?, designation=?, project=?, type=?, status=? WHERE id=?";
  db.query(
    sql,
    [
      employee_name,
      employee_id,
      department,
      designation,
      project,
      type,
      status,
      id,
    ],
    (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: "Employee updated" });
    }
  );
});
app.get("/getrecords/:id", (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * from employees where id=?";
    db.query(
    sql,
    [
      employee_name,
      employee_id,
      department,
      designation,
      project,
      type,
      status,
    ],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: "Employee created" });
    }
  );
});
app.listen(3030, () => console.log("Server running on port 3030"));
