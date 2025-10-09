import React, { useState } from 'react';

const Todo = () => {
  const [task, settask] = useState('');
  const [tasks, settasks] = useState([]);

  const addtasks = () => {
    if (task !== '') {
      settasks([...tasks, { text: task, completed: false }]); // store task with status
      settask('');
    }
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed; // flip status
    settasks(updatedTasks);
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh"
    }}>
      <div style={{
        textAlign: "center",
        padding: "20px",
        border: "2px solid black",
        borderRadius: "10px",
        backgroundColor: "#f0f0f0",
        minWidth: "300px"
      }}>
        <h1 style={{ backgroundColor: "aqua", padding: "10px" }}>TO - DO List</h1>

        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            value={task}
            onChange={e => settask(e.target.value)}
          />
          <input
            type="button"
            onClick={addtasks}
            value="ADD"
          />
        </form>

        <ul style={{ listStyle: "none", padding: 0 }}>
          {tasks.map((t, index) => (
            <li key={index} style={{ margin: "10px 0" }}>
              <span style={{
                textDecoration: t.completed ? "line-through" : "none",
                marginRight: "10px"
              }}>
                {t.text}
              </span>
              <button onClick={() => toggleTask(index)}>
                {t.completed ? "Mark Incomplete" : "Mark Complete"}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
