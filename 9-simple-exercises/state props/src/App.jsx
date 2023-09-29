import { useState } from "react";

function App() {
  const [ count, setCount ] = useState(0);

  const clickHandler = () => setCount(prevCount => prevCount + 1);

  return <div>
    <div className="nav">
      <a href="#">Home</a>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(id => <a key={id} href="#">Exercise {id}</a>)}
    </div>
    <p>Button has clicked {count}</p>
    <button onClick={clickHandler}>Click me</button>
  </div>;
}

export default App
