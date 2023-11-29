import React, { useState } from "react";
import "./App.css";

function App() {
  const [units, setUnits] = useState("");
  const [totalBill, setTotalBill] = useState(null);

  const calculateBill = async () => {
    try {
      const response = await fetch("http://localhost:5000/calculateBill", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ units }),
      });

      if (!response.ok) {
        throw new Error("Error calculating bill.");
      }

      const data = await response.json();
      setTotalBill(data.total);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="App">
      <h1>Bill Calculation</h1>
      <hr />
      <div>
        <label htmlFor="units">Units</label>
        <input
          type="text"
          id="units"
          name="units"
          value={units}
          onChange={(e) => setUnits(e.target.value)}
        />
      </div>
      <button onClick={calculateBill}>Get Bill</button>
      {totalBill !== null && (
        <div>
          <hr />
          <p>Total Bill: {totalBill}</p>
        </div>
      )}
    </div>
  );
}

export default App;
