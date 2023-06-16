import React from 'react';
import AddToDo from './AddToDo';
import FilterToDo from './FilterToDo';
import ToDoItem from './ToDoItem';
import { toDoItems } from './toDoItems';
import './style.css';


const ToDo = () => {
    return (
        <div>
            <h2 className="title">TodoMatic</h2>
            
            <AddToDo />
            <FilterToDo />

            <div>
                <h3> tasks remaining</h3>
                <ul>
                    {toDoItems.map(task => <ToDoItem name={task.name} completed={task.completed} key={task.id} />)}
                </ul>
            </div>
        </div>
    );
}

export default ToDo;