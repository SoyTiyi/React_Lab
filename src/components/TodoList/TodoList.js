import React, { useRef, useState } from 'react'
import Task from '../Task/Task';


const TodoList = props => {

    const [tasks, setTasks] = useState([]);

    const inputRef = useRef();

    const message = <p>Not task yet</p>;

    const addTask = () => {
        setTasks(tasks => [...tasks, <Task description={inputRef.current.value} />]);
    }

    

    return (
        <div className="container">
            <row className="m-3">
                <div className="jumbotron text-center">
                    <h1>TODO LIST</h1>
                    <p>Using React Js</p>
                    <p><b>Nikolai and Santiago</b></p>
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Task</span>
                    </div>
                    <input type="text" ref={inputRef} className="form-control" placeholder="description" />
                    <div className="input-group-prepend">
                        <button className="btn btn-primary" onClick={addTask}>Create</button>
                    </div>
                </div>
                <ul className="list-group">
                    {tasks.length === 0 ? message : tasks}
                </ul>
            </row>
        </div>
    );
}

export default TodoList;