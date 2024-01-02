import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAxiosInstance from '../../axios/interceptor';
import useAuth from '../../Components/authentication/authContext/useAuth';

function AdminLogin() {
  const navigate = useNavigate();
  const { axiosInstance } = useAxiosInstance();
  const { setAuth } = useAuth();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post('/admin/login', formData);
      if (response.data.token) {
        localStorage.setItem('accessToken', response.data.token);
        setAuth({
          name: response.data.name,
          accessToken: response.data.token,
          role: response.data.role,
        });
        navigate('/admin/home');
      }
    } catch (error) {
      console.log('Error:', error);
      toast.error(
        error?.response?.data?.msg ||
          error?.message ||
          'Something went wrong ! please try again',
        {
          position: toast.POSITION.TOP_CENTER,
        }
      );
    }
  };

  return (
    <div>
      <div className='relative flex flex-col justify-center min-h-screen overflow-hidden'>
        <div className='w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl'>
          <img
            src='https://images.pexels.com/photos/2393789/pexels-photo-2393789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            className='w-40 h-40 mx-auto'
            alt='Logo'
          />
          <h1 className='text-3xl text-center text-gray-900 font-bold'>
            Welcome, Login Here!
          </h1>
          <form className='mt-6' onSubmit={handleSubmit}>
            <div className='mb-2'>
              <label
                htmlFor='email'
                className='block text-sm font-semibold text-gray-900'
              >
                Email
              </label>
              <input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                className='block w-full px-4 py-2 mt-2 text-gray-900 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40'
              />
            </div>
            <div className='mb-2'>
              <label
                htmlFor='password'
                className='block text-sm font-semibold text-gray-800'
              >
                Password
              </label>
              <input
                type='password'
                name='password'
                value={formData.password}
                onChange={handleChange}
                className='block w-full px-4 py-2 mt-2 text-gray-800 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40'
              />
            </div>
            <div className='mt-6'>
              <button
                className='w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-900 rounded-md'
                type='submit'
              >
                Login
              </button>
            </div>
          </form>
          <div className='mt-6'>
            <button
              className='w-full px-4 py-2 tracking-wide font-bold text-xl text-black transition-colors duration-200 transform bg-white-900 rounded-md'
              type='submit'
            >
              <Link to='/admin/register'>Register Here</Link>
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default AdminLogin;
