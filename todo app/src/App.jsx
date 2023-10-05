import { useEffect, useState } from "react";
import AddTodo from "./components/AddTodo"
import Task from "./components/Task"

function App() {
  const [ tasks, setTasks ] = useState([]);

  const changeTaskStateHandler = id => {
    setTasks(prevTasks => prevTasks.map(prevTask => prevTask.id === id ? { ...prevTask, done: !prevTask.done}: prevTask));
  }

  const deleteTaskHandler = id => {
    setTasks(prevTasks => prevTasks.filter(prevTask => prevTask.id !== id));
  }

  const addTaskHandler = text => {
    setTasks(prevTasks => [ ...prevTasks, { id: prevTasks.length, task: text, done: false }]);
  }

  return <div>
    <h1 className="text-center text-[#EBEBEB] font-primary-bold text-8xl my-8">todos</h1>
    <AddTodo onAddTask={addTaskHandler} />

    <div className="max-w-lg mx-auto mt-10">
      { !tasks.length && <p className="text-center">No tasks yet!</p>}
      { tasks.map(task => <Task key={task.id} task={task} changeTaskState={changeTaskStateHandler} deleteTask={deleteTaskHandler} />) }
    </div>
  </div>
}

export default App
