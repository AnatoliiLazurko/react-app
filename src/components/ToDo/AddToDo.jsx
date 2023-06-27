import { Button, Form, Input, Modal } from 'antd';
import React, { useRef, useState } from 'react';

const AddToDo = ({ addTask }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const form = useRef(null);
    
    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const submitHandler = (values) => {
        setIsModalOpen(false);
        addTask(values.name);
        form.current.resetFields();
    }
    
    return (
        <>
            <Button type="primary" onClick={showModal}>
                Open Modal
            </Button>
            
            <Modal
                title="Create task"
                open={isModalOpen}
                onCancel={handleCancel}
                footer={null}
            >

                <Form onFinish={submitHandler} ref={form}>
                    <Form.Item name="name" rules={[{required: true}]}>
                        <Input placeholder='Task name...'/>
                    </Form.Item>

                    <Form.Item>
                        <Button htmlType='submit' type='primary'>Save</Button>
                    </Form.Item>
                </Form>
                
            </Modal>
        </>
    );

}


// const AddToDo = ({ addTask }) => {
    
//     const [name, setName] = useState('');

//     const submitHandler = (e) => {
//         e.preventDefault();
//         if (name.trim().length) {
//             addTask(name);
//             setName('');
//         }
//     };

//     const handleChange = (e) => {
//         setName(e.target.value);
//     }

//     return (
//         <div className='form-addTask'>
//             <form onSubmit={submitHandler}>
//                 <input type="text" value={name} onChange={handleChange}/>
//                 <button>Add</button>
//             </form>
//         </div>
//     );
// }

export default AddToDo;
