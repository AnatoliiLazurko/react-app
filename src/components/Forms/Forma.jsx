import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import styles from './Forma.module.css';

const initialValues = {
    name: '',
    amount: '',
    price: 0
};

const PRODUCT_SCHEMA = Yup.object().shape({
    name: Yup.string()
        .min(3)
        .max(50)
        .required(),
    amount: Yup.number()
        .min(1)
        .required(),
    price: Yup.number()
        .min(0)
        .required(),
});

const Forma = () => {

    const submitHandler = (values, formikBag) => {
        formikBag.resetForm();
    }

    return (
        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={submitHandler}
                validationSchema={PRODUCT_SCHEMA}
            >
                {({errors}) => (
                    <Form>
                        <div>
                            <Field name="name" placeholder="Product name" />
                            <ErrorMessage name='name' component="div" className={styles.error}/>
                        </div>

                        <div>
                            <Field name="amount" placeholder="Product amount" />
                            <ErrorMessage name='amount' component="div" className={styles.error}/>
                        </div>

                        <div>
                            <Field name="price" placeholder="Product price" />
                            <ErrorMessage name='price' component="div" className='error'/>
                        </div>

                        <Field type="submit" value="Add product" id="add"/>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default Forma;
