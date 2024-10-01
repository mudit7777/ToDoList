import React, {useState} from "react"

function ToDoList() {
    // two state variables 
    const [tasks, setTasks] = useState([]);
    // state variable for new task 
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value)
    }

    // func to add a task 
    function addTask() {
        if(newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    // func to delete the task 
    function deleteTask(index) {
        const updatedTasks = tasks.filter((_ , i) => i !== index);
         setTasks(updatedTasks);
    }

    function moveTaskUp(index) {
        if(index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index-1]] = [updatedTasks[index-1], updatedTasks[index]]; 
            setTasks(updatedTasks)
        }
    }

    function moveTaskDown(index) {
        if(index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index+1]] = [updatedTasks[index+1], updatedTasks[index]]; 
            setTasks(updatedTasks)
        }
    }
    return (
    <div className="to-do-list">
        <h1>To-Do-List</h1>

        <div>
            <input 
                 type="text"
                 placeholder="Enter"
                 value={newTask}
                 onChange={handleInputChange}
            />

            <button
                className="add-button"
                onClick={addTask}>
                    Add
            </button>
        </div>

        <ol>
            {tasks.map((task, index) => 
            
                <li key={index}>
                    <span className="text">{task}</span>

                    <button className="delete-button"
                        onClick={() => deleteTask(index)}>
                        Delete
                    </button>

                    <button className="move-button"
                        onClick={ () => moveTaskUp(index)}>
                        👆
                    </button>

                    <button className="move-button"
                        onClick={ () => moveTaskDown(index)}>
                        👇
                    </button>


                </li>
            )}
        </ol>
    </div>);
}
export default ToDoList