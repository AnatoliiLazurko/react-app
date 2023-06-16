import React from 'react';

const AddToDo = () => {

    const submitHandler = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type="text" />
                <button>Add</button>
            </form>
        </div>
    );
}

export default AddToDo;
