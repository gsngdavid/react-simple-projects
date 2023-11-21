import AddTodo from "./components/AddTodo"
import Todo from "./components/Todo"
import { useSelector } from "react-redux";

function App() {
  const todos = useSelector(state => state.todos)

  return <div>
    <h1 className="text-center text-[#EBEBEB] font-primary-bold text-8xl my-8">todos</h1>
    <AddTodo />

    <div className="max-w-lg mx-auto mt-10">
      { todos.length === 0 && <p className="text-center">No todos yet!</p>}
      { todos.map(todo => <Todo key={todo.id} todo={todo} />) }
    </div>
  </div>
}

export default App
