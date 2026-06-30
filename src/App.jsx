import { useState } from "react";
import './App.css';

function App() {
  const [count, setcount] = useState(0);
  return (
    <div className="counter">
      <h4>સ્વામિનારાયણ સ્વામિનારાયણ....</h4>
      <h2>{count}</h2>
      <div className="buttons">
        <button className="reset" onClick={() => setcount(0)}>Reset</button>
        <button className="c-up" onClick={() => setcount(count + 1)}>Click</button>
      </div>
    </div>
  );
}

export default App;