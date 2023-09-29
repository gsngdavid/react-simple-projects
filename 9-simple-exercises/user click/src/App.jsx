function App() {

  const clickHandler = () => {
    alert("Clicked!");
  }

  return <div>
    <div className="nav">
      <a href="#">Home</a>
      <a href="#">Exercise 1</a>
      <a href="#">Exercise 2</a>
      <a href="#">Exercise 3</a>
      <a href="#">Exercise 4</a>
      <a href="#">Exercise 5</a>
      <a href="#">Exercise 6</a>
      <a href="#">Exercise 7</a>
      <a href="#">Exercise 8</a>
      <a href="#">Exercise 9</a>
    </div>
    <button onClick={clickHandler}>Click me</button>
  </div>
}

export default App
