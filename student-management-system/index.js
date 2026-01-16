import express from "express";
import fs from "fs";

const app = express();
const PORT = 3000;
const DB_FILE = "./db.json";

app.use(express.json());

/* Helper Functions */
const readData = () => {
  const data = fs.readFileSync(DB_FILE, "utf-8");
  return JSON.parse(data);
};

const writeData = (data) => {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
};

/* Root Route */
app.get("/", (req, res) => {
  res.send("Student Management System API is running");
});

/* GET All Students */
app.get("/students", (req, res) => {
  const data = readData();
  res.json(data.students);
});

/* POST Add Student */
app.post("/students", (req, res) => {
  const data = readData();
  const { name, course, year } = req.body;

  if (!name || !course || !year) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const newStudent = {
    id: Date.now(),
    name,
    course,
    year
  };

  data.students.push(newStudent);
  writeData(data);

  res.status(201).json({
    message: "Student added successfully",
    student: newStudent
  });
});

/* PUT Update Student */
app.put("/students", (req, res) => {
  const data = readData();
  const { id, name, course, year } = req.body;

  const student = data.students.find((s) => s.id === id);

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  if (name) student.name = name;
  if (course) student.course = course;
  if (year) student.year = year;

  writeData(data);

  res.json({
    message: "Student updated successfully",
    student
  });
});

/* DELETE Student by ID */
app.delete("/students/:id", (req, res) => {
  const data = readData();
  const id = Number(req.params.id);

  const index = data.students.findIndex((s) => s.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Student not found" });
  }

  const deletedStudent = data.students.splice(index, 1);
  writeData(data);

  res.json({
    message: "Student deleted successfully",
    student: deletedStudent[0]
  });
});

/* Start Server */
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
