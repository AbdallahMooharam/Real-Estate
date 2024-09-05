import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import property1 from '../../assets/pngtree-modern-residential-architecture-residential-urban-ecology-photo-picture-image_6660558.jpg'; // تأكد من أن المسار صحيح

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().min(6, 'Password too short').required('Required'),
    confirmPassword: isLogin ? null : Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Required'),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="relative min-h-screen bg-gray-100 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={property1}
          alt="Background"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      {/* Content */}
      <div className="relative flex justify-center items-center min-h-screen p-4">
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg bg-opacity-90">
          <h1 className="text-2xl font-bold mb-4 text-center">{isLogin ? 'Login' : 'Register'}</h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700">Email</label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                  <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                </div>
                <div className="mb-4">
                  <label htmlFor="password" className="block text-gray-700">Password</label>
                  <Field
                    type="password"
                    id="password"
                    name="password"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                  <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
                </div>
                {!isLogin && (
                  <div className="mb-4">
                    <label htmlFor="confirmPassword" className="block text-gray-700">Confirm Password</label>
                    <Field
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                    <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-sm" />
                  </div>
                )}
                <button
                  type="submit"
                  className="w-full bg-custom-blue-dark text-white p-2 rounded hover:bg-custom-blue-light"
                >
                  {isLogin ? 'Login' : 'Register'}
                </button>
                <button
                  type="button"
                  onClick={() => setIsLogin(!isLogin)}
                  className="mt-4 w-full text-custom-blue-dark hover:underline"
                >
                  {isLogin ? 'Need an account? Register' : 'Already have an account? Login'}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Auth;
