import { Button, Form, Input, Modal } from 'antd';
import { useForm } from 'antd/es/form/Form';
import React, { useEffect, useRef, useState } from 'react';

const EditToDo = ({ task, editTask }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form] =  Form.useForm();
    
    useEffect(() => {
        form.initialValues = {
            name: task.name,
        };
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
                <Form onFinish={submitHandler} form={form} initialValues={initialValues}>
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
