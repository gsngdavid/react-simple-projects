const ANIMALS = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'];

function Home() {
  return <div>
    <ul>
      <h1>Domestic Animals</h1>
      {ANIMALS.map((animal, index) => <li key={index}>{animal}</li>)}
    </ul>
  </div>
}

export default Home;