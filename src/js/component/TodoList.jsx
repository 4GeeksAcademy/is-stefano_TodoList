import React, { useState } from "react";


export const TodoList = () => {
    const [task, setTask] = useState('');
    const [todos, setTodos] = useState(['']);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (task.trim() !== '') {
            setTodos([...todos, task])
        }
        setTask('')
    }

    const deleteTask = (item) => {
        setTodos(todos.filter((element) => element !== item))
    }

    const clearResult = () => {
        setTodos([]);
    }

    return (
        <div className="container">
            <h2 className="text-center text-success">
                LISTA DE TAREAS
            </h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInput" className="form-label">Agrega la tarea:</label>
                    <input type="text" className="form-control" id="exampleInput"
                        value={task} onChange={(event) => setTask(event.target.value)} />
                </div>
            </form>
            <h2 className="text-start text-primary">Lista</h2>
            <ul className="list-group">
                {todos.slice(1).map((item, index) =>
                    <li key={index} className="list-group-item hidden-icon d-flex justify-content-between">
                        {item}
                        <span type="button" onClick={() => deleteTask(item)}>
                            <i className="fas fa-trash text-danger"></i>
                        </span>
                    </li>)}
                <li className="list-group-item text-end">{todos.length - 1} Tareas</li>
            </ul>
            {todos.length > 1 && (
            <div className="text-center mt-2">
                <button type="button" value="reset" onClick={clearResult} class="btn btn-outline-primary">Borrar Tareas</button>
            </div>)}
        </div>
    )

}