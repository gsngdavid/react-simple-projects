import Animal from "./components/Animal";
import animals from './data/animals.json';

function App() {
  return <div>
    <h1 className="text-center my-5 text-3xl">Domestic animals</h1>
    <div className="border w-fit mx-auto">
      {animals.map((animal, index) => <Animal key={index} animal={animal} />)}
    </div>
  </div>
}

export default App
