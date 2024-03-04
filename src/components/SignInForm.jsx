// SignInForm.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "../styles/Navbar.css";
import { useNavigate } from 'react-router-dom';

function SignInForm({ closeSignIn }) {

    const navigate = useNavigate(); // Access the navigate function

  // Function to handle navigation to customer board
  const handleSignIn = () => {
    navigate('/customer-board'); // Navigate to the customer board route
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeSignIn}>
          &times;
        </span>
        <h2 className="modal-title">Sign In</h2>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={Yup.object({
            email: Yup.string().email('Invalid email address').required('Email is required'),
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
            <label htmlFor="email">Email</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />

            <label htmlFor="password">Password</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />

            <div style={{ display: 'flex', justifyContent: 'space-between', width: '12em' }}>
                 <button type="button" onClick={handleSignIn}>Sign In</button>
               <button type="button" style={{ height: '36px' }} onClick={closeSignIn}>
                Cancel</button>
            </div>

            <div>
              <a href="/forgot-password">Forgot Password?</a>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default SignInForm;
