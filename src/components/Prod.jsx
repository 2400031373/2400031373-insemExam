import React, { useState } from "react";

function Prod() {
  const products = [
    { id: 1, name: "Pen", price: 100, description: "writing." },
    { id: 2, name: "Notebook", price: 200, description: "notes." },
    { id: 3, name: "Pencil", price: 50, description: "writing." },
    { id: 4, name: "Eraser", price: 20, description: "erase " },
  ];

  const [selected, setSelected] = useState(null);

  return (
    <>
      <style>{`
        .prodinf {
          border: 1px solid black;
          margin: 5px;
          padding: 5px;
          width: 180px;
          cursor: pointer;
        }

        .showpopup {
          position: fixed;
          top: 30%;
          left: 35%;
          background: white;
          border: 1px solid black;
          padding: 10px;
          width: 200px;
        }
      `}</style>

      <h2>Product List</h2>

      {products.map((p) => (
        <div
          key={p.id}
          className="prodinf"
          onClick={() => setSelected(p)}
        >
          <p>ID: {p.id}</p>
          <p>Name: {p.name}</p>
          <p>Price: ₹{p.price}</p>
        </div>
      ))}

      {selected && (
        <div className="showpopup">
          <h3>{selected.name}</h3>
          <p>Price: ₹{selected.price}</p>
          <p>{selected.description}</p>
          <button onClick={() => setSelected(null)}>Close</button>
        </div>
      )}
    </>
  );
}

export default Prod;
