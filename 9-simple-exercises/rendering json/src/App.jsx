import Joke from "./components/Joke";
import jokes from './data/jokes.json';

function App() {
  return <div className="bg-[#E1F7DD] h-screen flex items-center justify-center gap-6">
    {jokes.map(joke => <Joke key={joke.id} joke={joke} />)}
  </div>
}

export default App
