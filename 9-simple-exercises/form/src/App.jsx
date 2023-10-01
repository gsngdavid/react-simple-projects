import Button from "./components/Button"
import Input from "./components/Input"

function App() {
  return <div>
    <div className="w-fit mx-auto flex gap-4 py-5">
      <a href="#" className="nav-link">Home</a>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number, index) => <a key={index} href="#" className="nav-link">Exercise {number}</a>)}
    </div>
      <form className="w-fit mx-auto flex flex-col gap-3 mt-10">
        <Input />
        <Input />
        <Button>Greet me</Button>
      </form>
  </div>
}

export default App
