import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import useAxiosInstance from '../../axios/interceptor';

const Register = () => {
  const navigate = useNavigate();
  const { axiosInstance } = useAxiosInstance();

  const [formData, setFormData] = useState({
    userName: '',
    name: '',
    mobile: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post('/user/register', formData);
      console.log('Response:', response.data);

      toast.success('Registration successful!', {
        position: toast.POSITION.TOP_CENTER,
      });

      navigate('/login');
    } catch (error) {
    
      console.error(error.response.data);
    }
  };

  return (
    <section className='min-h-screen bg-gray-100 flex items-center justify-center'>
      <div className='container py-5'>
        <div className='lg:w-10/12'>
          <div className='card rounded-lg flex flex-col lg:flex-row overflow-hidden'>
            <div className='lg:w-5/12 bg-cover bg-center hidden md:block bg-image'>
              <img
                src='https://images.pexels.com/photos/10625978/pexels-photo-10625978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt='Background'
              />
            </div>
            <div className='lg:w-7/12 flex items-center'>
              <div className='card-body p-4 p-lg-5 text-gray-800 w-full'>
                <form className='max-w-md mx-auto bg-gray-200 p-8 px-8 rounded-lg'onSubmit={handleSubmit}>
                  <h2 className='text-4xl dark:text-white font-bold text-center'>
                    REGISTER HERE
                  </h2>
                  <div className='flex flex-col py-2 font-bold'>
                    <label>User Name</label>
                    <input
                      className='rounded-lg'
                      type='text'
                      value={formData.userName}
                      onChange={handleChange}
                      name='userName'
                    />
                  </div>
                  <div className='flex flex-col py-2 font-bold'>
                    <label>Name</label>
                    <input
                      className='rounded-lg'
                      type='text'
                      value={formData.name}
                      onChange={handleChange}
                      name='name'
                    />
                  </div>
                  <div className='flex flex-col py-2 font-bold'>
                    <label>Mobile</label>
                    <input
                      className='rounded-lg'
                      type='mobile'
                      value={formData.mobile}
                      onChange={handleChange}
                      name='mobile'
                    />
                  </div>
                  <div className='flex flex-col py-2 font-bold'>
                    <label>Email</label>
                    <input
                      className='rounded-lg'
                      type='email'
                      value={formData.email}
                      onChange={handleChange}
                      name='email'
                    />
                  </div>
                  <div className='flex flex-col py-2 font-bold'>
                    <label>Password</label>
                    <input
                      className='rounded-lg'
                      type='password'
                      value={formData.password}
                      onChange={handleChange}
                      name='password'
                    />
                  </div>
                  <button
                    className='bg-black text-white font-bold py-2 px-4 rounded'
                    type='submit'
                  
                  >
                    REGISTER
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </section>
  );
};

export default Register;
