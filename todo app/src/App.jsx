import AddTodo from "./components/AddTodo"
import Task from "./components/Task"
import { useSelector } from "react-redux";

function App() {
  const tasks = useSelector(state => state.todo)

  return <div>
    <h1 className="text-center text-[#EBEBEB] font-primary-bold text-8xl my-8">todos</h1>
    <AddTodo />

    <div className="max-w-lg mx-auto mt-10">
      { tasks.length === 0 && <p className="text-center">No tasks yet!</p>}
      { tasks.map(task => <Task key={task.id} task={task} />) }
    </div>
  </div>
}

export default App
