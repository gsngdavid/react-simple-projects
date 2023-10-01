import AddTodo from "./components/AddTodo"
import Task from "./components/Task"

function App() {
  return <div>
    <h1 className="text-center text-[#EBEBEB] font-primary-bold text-8xl my-8">todos</h1>
    <AddTodo />

    <div className="max-w-lg mx-auto mt-10">
      <Task />
    </div>
  </div>
}

export default App
