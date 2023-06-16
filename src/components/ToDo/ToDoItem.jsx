import React from 'react';

const ToDoItem = ({name, completed}) => {
    return (
        <li>
            <input type="checkbox" defaultChecked={completed} />
            {name}
            <div>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </li>
    );
}

export default ToDoItem;

