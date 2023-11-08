import { useDispatch } from "react-redux";
import { todoActions } from "../store/todo";

function Task({ task, changeTaskState }) {
    const dispatch = useDispatch()

    const changeHandler = () => changeTaskState(task.id);

    return <div className="flex justify-between items-center gap-3 border-b py-2">
        <div className="flex-1 flex gap-3 items-center">
            <input type="checkbox" id={task.id} checked={task.done} onChange={changeHandler} />
            <label htmlFor={task.id} className="flex-1 text-[#596d79] hover:cursor-pointer">{task.task}</label>
        </div>
        <button className="group w-fit rounded-full bg-[#f2f3f5] p-3" onClick={deleteHandler}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-3 fill-red-500 group-hover:transform group-hover:transition-transform group-hover:scale-125">
                <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/>
            </svg>
        </button>
    </div>
}

export default Task;