import { useState } from "react";
import TaskList from "./TaskList";

const listManager = new TaskList();

export default function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState("");

    const sync = () => setTasks(listManager.getAll());

    const handleAdd = () => {
        if (listManager.add(input)) {
            setInput("");
            sync();
        }
    };

    const handleToggle = (id) => {
        listManager.toggle(id);
        sync();
    };

    const handleRemove = (id) => {
        listManager.remove(id);
        sync();
    };

    return (
        <div id="divM">
            <h2>Lista de tareas</h2>
            <h3>*Clickee el nombre de la tarea para tacharla*</h3>
            <div id="form">
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleAdd()}
                    placeholder="Nueva tarea..."
                />
                <button
                    id="add"
                    onClick={handleAdd}>
                    Añadir
                </button>
            </div>

            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <span
                            className={`todo-item__text${task.done ? " todo-item__text--done" : ""}`}
                            onClick={() => handleToggle(task.id)}
                        >
                            {task.text}
                        </span>
                        <button
                            id="delete"
                            onClick={() => handleRemove(task.id)}
                        >
                            ✕
                        </button>
                    </li>
                ))}
            </ul>

            {tasks.length === 0 && (
                <p>
                    No hay tareas aún.
                </p>
            )}
        </div>
    );
}
