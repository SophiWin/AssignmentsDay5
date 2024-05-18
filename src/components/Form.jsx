import React, { useState } from "react";

export default function Form({ addStudent }) {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [batch, setBatch] = useState();

  const add = (e) => {
    e.preventDefault();
    const data = { name, email, batch };
    addStudent(data);
    setName("");
    setEmail("");
    setBatch("");
  };
  return (
    <div>
      <div className="  w-[400px] pt-20">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={add}
        >
          <h2 className="text-center text-blue-600 mb-8">
            Student Record Form
          </h2>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Student Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Student Name"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="batch"
            >
              Batch Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="batch"
              type="number"
              value={batch}
              onChange={(e) => {
                setBatch(e.target.value);
              }}
              placeholder="Batch Number"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Add Student
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
