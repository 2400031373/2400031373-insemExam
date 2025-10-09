import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{
      width: "250px",
      margin: "50px auto",
      padding: "20px",
      textAlign: "center",
      border: "2px solid #333",
      borderRadius: "10px"
    }}>
      <h2 style={{ marginBottom: "15px" }}>Counter</h2>
      <h1 style={{ margin: "10px 0", color: "green" }}>{count}</h1>
      <div>
        <button 
          onClick={() => setCount(count + 1)} 
          style={{ margin: "5px", padding: "8px 16px" }}
        >
          ADD
        </button>
        <button 
          onClick={() => setCount(count - 1)} 
          style={{ margin: "5px", padding: "8px 16px" }}
        >
          SUB
        </button>
        <button 
          onClick={() => setCount(0)} 
          style={{ margin: "5px", padding: "8px 16px" }}
        >
          RESET
        </button>
      </div>
    </div>
  );
};

export default Counter;
