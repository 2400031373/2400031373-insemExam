import React from "react";

const LoginPage = ({ onBackClick }) => {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#f4f6f9"
    }}>
      <div style={{
        textAlign: "center",
        padding: "30px",
        border: "2px solid #003366",
        borderRadius: "10px",
        width: "300px"
      }}>
        <h2 style={{ fontFamily: "'Roboto Slab', serif", color: "#003366" }}>Login</h2>
        <form>
          <input 
            type="text" 
            placeholder="Username" 
            style={{ width: "100%", padding: "0.7rem", margin: "0.5rem 0", borderRadius: "5px", border: "1px solid #ccc" }}
          /><br />
          <input 
            type="password" 
            placeholder="Password" 
            style={{ width: "100%", padding: "0.7rem", margin: "0.5rem 0", borderRadius: "5px", border: "1px solid #ccc" }}
          /><br />
          <button type="submit" style={{ width: "100%", padding: "0.7rem", marginTop: "1rem" }}>Login</button>
        </form>
        <p style={{ marginTop: "1rem", fontStyle: "italic", fontSize: "0.9rem", color: "#444" }}>
          "Don’t worry if you forget your password… even the Constitution has amendments!"
        </p>
        <button onClick={onBackClick} style={{ marginTop: "10px" }}>Back to Home</button>
      </div>
    </div>
  );
};

export default LoginPage;
