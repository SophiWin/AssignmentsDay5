import React from "react";

export default function Student({ students }) {
  return (
    <div className="pt-20">
      {students && (
        <>
          <table className="shadow-lg">
            <thead>
              <tr>
                <th className="p-5 bg-blue-700 text-white text-xl ">No.</th>
                <th className="p-5 bg-blue-700 text-white text-xl ">
                  Student Name
                </th>
                <th className="p-5 bg-blue-700 text-white text-xl">
                  Student Email
                </th>
                <th className="p-5 bg-blue-700 text-white text-xl">
                  Batch Number
                </th>
              </tr>
            </thead>

            {students.map((student, i) => (
              <tbody key={i}>
                <tr className=" border-b-2 border-blue-500">
                  <td className="p-5 bg-blue-200 text-black ">{i + 1}.</td>
                  <td className="p-5 bg-blue-200 text-black">{student.name}</td>
                  <td className="p-5 bg-blue-200 text-black">
                    {student.email}
                  </td>
                  <td className="p-5  bg-blue-200 text-black">
                    Batch -{student.batch}
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </>
      )}
    </div>
  );
}
