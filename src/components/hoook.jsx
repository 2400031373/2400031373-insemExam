import React, { useState } from 'react';

const Hook = () => {
  const [emp, setEmp] = useState([
    { eid: 4322, ename: "ro", esal: 100000 },
    { eid: 1234, ename: "ro", esal: 10000 },
    { eid: 24332, ename: "ro", esal: 10000 },
    { eid: 4321, ename: "ro", esal: 1000 },
    { eid: 4323, ename: "ro", esal: 1000 }
  ]);

  const addStudent = () => {
    const newStudent = {
      eid: Math.floor(Math.random() * 10000),
      ename: "new student",
      esal: 5000
    };
    setEmp([...emp, newStudent]);
  };

  const deleteStudent = () => {
    setEmp(emp.slice(0, emp.length - 1));
  };

  return (
    <div>
      <h2>Employee List</h2>
      <table border={1} cellPadding={10} cellSpacing={10}>
        <thead>
          <tr>
            <th>eid</th>
            <th>ename</th>
            <th>esal</th>
          </tr>
        </thead>
        <tbody>
          {emp.map((element, index) => (
            <tr key={index}>
              <td>{element.eid}</td>
              <td>{element.ename}</td>
              <td>{element.esal}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ marginTop: "20px" }}>
        <button onClick={addStudent}>Add Student</button>
        <button onClick={deleteStudent} style={{ marginLeft: "10px" }}>Delete Student</button>
      </div>
    </div>
  );
};

export default Hook;
