// SignUpForm.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "../styles/Navbar.css";

function SignUpForm({ closeSignUp }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeSignUp}>
          &times;
        </span>
        <h2 className="modal-title">Sign Up</h2>
        <Formik
          initialValues={{ name: '', email: '', phone: '', address: '', password: '' }}
          validationSchema={Yup.object({
            name: Yup.string().required('Name is required'),
            email: Yup.string().email('Invalid email address').required('Email is required'),
            phone: Yup.string().required('Phone number is required'),
            address: Yup.string().required('Address is required'),
            password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          <Form>
            <label htmlFor="name">Name</label>
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="div" />

            <label htmlFor="email">Email</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />

            <label htmlFor="phone">Phone</label>
            <Field type="tel" name="phone" />
            <ErrorMessage name="phone" component="div" />

            <label htmlFor="address">Address</label>
            <Field type="text" name="address" />
            <ErrorMessage name="address" component="div" />

            <label htmlFor="password">Password</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />

            <div style={{ display: 'flex', justifyContent: 'space-between', width: '13em' }}>
              <button type="submit">Sign Up</button>
              <button type="button" style={{ height: '36px' }} onClick={closeSignUp}>
                Cancel
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default SignUpForm;
