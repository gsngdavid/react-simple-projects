import { useState } from "react";
import Button from "../components/Button";

function Home() {
    const [ count, setCount ] = useState(0);

  const clickHandler = () => setCount(prevCount => prevCount + 1);

  return <div>
    <div className="nav">
      <a href="#">Home</a>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(id => <a key={id} href="#">Exercise {id}</a>)}
    </div>
    <p>Button has clicked {count}</p>
    <Button onClick={clickHandler} />
  </div>;
}

export default Home