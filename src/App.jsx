import React, { useState } from "react";
import Form from "./components/Form";
import Student from "./components/Student";
import Navbar from "./components/Navbar";

export default function App() {
  let [students, setStudents] = useState([]);

  const addStudent = (studentInfo) => {
    setStudents([...students, studentInfo]);
  };
  return (
    <>
      <Navbar />
      <div className=" flex justify-around">
        <Student students={students} />
        <Form addStudent={addStudent} />
      </div>
    </>
  );
}
