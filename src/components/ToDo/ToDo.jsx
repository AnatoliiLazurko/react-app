import React, { useReducer, useState } from 'react';
import AddToDo from './AddToDo';
import FilterToDo from './FilterToDo';
import ToDoItem from './ToDoItem';
import { toDoItems } from './toDoItems';
import { v4 as uuidv4 } from 'uuid';
import './style.css';
import tasksReducer from './ToDoReducer';


const ToDo = () => {
    const [taskList, dispatch] = useReducer(tasksReducer, toDoItems);
    const [filter, setFilter] = useState("All");

    const addTask = (name) => {
        dispatch({
            type: 'added',
            name: name
        });
    }

    const toggleTaskCompleted = (id) => {
        dispatch({
            type: 'changeCompleted',
            id: id
        });
    }

    const deleteTask = (id) => {
        dispatch({
            type: 'deleted',
            id: id
        });
    }

    const editTask = (id, name) => {
        dispatch({
            type: 'edited',
            id: id,
            name: name
        });
    }

    const filter_map = {
        All: () => true,
        Active: (task) => !task.completed,
        Completed: (task) => task.completed,
    };

    const tasksWord = taskList.filter(filter_map[filter]).length === 1 ? 'task' : 'tasks';
    const taskHeading = `${taskList.filter(filter_map[filter]).length} ${tasksWord}`

    return (
        <div className='container'>
            <h2 className="title">TodoMatic</h2>
            
            <AddToDo addTask={addTask} />
            <FilterToDo filter_map={filter_map} filter={filter} setFilter={setFilter} />

            <div>
                <h3>{taskHeading}</h3>
                <ul>
                    {taskList.filter(filter_map[filter]).map((task) => (
                        <ToDoItem
                            task={task}
                            toggleTaskCompleted={toggleTaskCompleted}
                            deleteTask={deleteTask}
                            editTask={editTask}
                            key={task.id} />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ToDo;