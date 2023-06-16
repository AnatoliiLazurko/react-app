import React, { useState } from 'react';
import AddToDo from './AddToDo';
import FilterToDo from './FilterToDo';
import ToDoItem from './ToDoItem';
import { toDoItems } from './toDoItems';
import { v4 as uuidv4 } from 'uuid';
import './style.css';


const ToDo = () => {
    const [taskList, setTaskList] = useState(toDoItems);

    const addTask = (name) => {

        let newTask = ({
            id: uuidv4(),
            name: name,
            completed: false
        });

        setTaskList([...taskList, newTask]);
    }

    const toggleTaskCompleted = (id) => {
        const updatedTasks = taskList.map(task => {
            if (task.id === id) {
                return {...task, completed: !task.completed}
            }
            return task;
        });

        setTaskList(updatedTasks);
    }

    const deleteTask = (id) => {
        
        setTaskList(taskList.filter(task => task.id !== id));
    }

    const tasksWord = taskList.length === 1 ? 'task' : 'tasks';
    const taskHeading = `${taskList.length} ${tasksWord}`

    return (
        <div className='container'>
            <h2 className="title">TodoMatic</h2>
            
            <AddToDo addTask={addTask} />
            <FilterToDo />

            <div>
                <h3>{taskHeading} remaining</h3>
                <ul>
                    {taskList.map((task) => (
                        <ToDoItem
                            task={task}
                            toggleTaskCompleted={toggleTaskCompleted}
                            deleteTask={deleteTask}
                            key={task.id} />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ToDo;