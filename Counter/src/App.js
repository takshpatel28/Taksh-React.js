import { useState } from "react";

export default function App() {
  const [count, setcount] = useState(0);

  function CheckPrime() {
    let factor = 0;
    for (let i = 1; i <= count; i++) {
      if (count % i == 0) {
        factor++;
      }
    }
    if (factor == 2) {
      return "true";
    } else {
      return "false";
    }
  }

  return (
    <div style={{ textAlign: "center" }}>
      <div className="block">
        <div className="box">
          <h2 className="h1">Welcome to Counter 2.0</h2>
          <br/><br/>
          <button
            style={{ padding: "10px 15px", margin: "0 8px" }}
            disabled={count == 0}
            onClick={() => setcount(count - 1)}
          >
            -1
          </button>
          <button
            style={{ padding: "10px 15px", margin: "0 8px" }}
            onClick={() => setcount(count + 1)}
          >
            +1
          </button>
          <br />
          <br />
          <button style={{ padding: "10px 15px" }} onClick={() => setcount(0)}>
            Reset Count
          </button>
          <br />
          <br />
          <h2 style={{color:"white"}}>Count : {count}</h2>

          <h3 style={{color:"white"}}>This Number is : {count % 2 == 0 ? "Even" : "Odd"}</h3>
          <h3 style={{color:"white"}}>Prime Number is : {CheckPrime()}</h3>
        </div>
      </div>
    </div>
  );
}
