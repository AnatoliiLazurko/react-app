import { Button, Form, Input, Modal } from 'antd';
import React, { useEffect, useRef, useState } from 'react';

const EditToDo = ({ task, editTask }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const form = useRef(null);
    
    useEffect(() => {
        
    }, [])

    const initialValues = {
        name: task.name,
    };

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const submitHandler = (values) => {
        setIsModalOpen(false);
        editTask(task.id, values.name);
        form.current.resetFields();
    }

    return (
        <>
            <Button type="primary" onClick={showModal}>
                Edit modal
            </Button>

            <Modal
                title="Edit task"
                open={isModalOpen}
                onCancel={handleCancel}
                footer={null}
            >
                <Form onFinish={submitHandler} ref={form} initialValues={initialValues}>
                    <Form.Item name="name" rules={[{required: true}]}>
                        <Input />
                    </Form.Item>

                    <Form.Item>
                        <Button htmlType='submit' type='primary'>Save</Button>
                    </Form.Item>
                </Form>

            </Modal>

        </>
    );
}

export default EditToDo;
