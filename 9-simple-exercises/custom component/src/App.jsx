import Button from "./components/Button";

function App() {
  const clickHandler = (id) => {
    alert(`Your clicked on Button ${id}`);
  }
  return <div>
    <div className="nav">
      <a href="#">Home</a>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(id => <a key={id} href="#">Exercise {id}</a>)}
    </div>
    <div className="action">
      <Button onClick={clickHandler} id={1}>Button 1</Button>
      <Button onClick={clickHandler} id={2}>Button 2</Button>
      <Button onClick={clickHandler} id={3}>Button 3</Button>
    </div>
  </div>;
}

export default App
