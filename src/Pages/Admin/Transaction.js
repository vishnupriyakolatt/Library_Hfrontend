import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminSidebar from '../../Components/AdminSidebar';
import { useNavigate } from 'react-router-dom';
import useAxiosInstance from '../../axios/interceptor';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Transaction() {
  const [ISBN, setISBN] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const { axiosInstance } = useAxiosInstance();
const navigate=useNavigate()
  const handleTransaction = async (action) => {
    try {
      const response = await axiosInstance.post('/book/transaction', {
        ISBN,
        userEmail,
        action,
      });
      toast.success("Transaction successful")
      navigate('/admin/transactionview')
    } catch (error) {
      toast.error(
        error?.response?.data?.message ||
          error?.message ||
          'Something went wron ! please try again',
        {
          position: toast.POSITION.TOP_CENTER,
        }
      );
      console.error('Error processing transaction:', error);
    }
  };

  return (
    <div className='flex'>
      <AdminSidebar />
      <div className='relative flex flex-col justify-center min-h-screen overflow-hidden w-full'>
        <div className='w-full p-10 m-auto bg-white rounded-md shadow-md lg:max-w-xl'>
          <h1 className='text-3xl text-center text-gray-900 font-bold mb-2'>
            ADD Category
          </h1>
          <div className='relative'>
            <div className='mb-2'>
              <label
                htmlFor='ISBN'
                className='block text-sm font-semibold text-gray-800'
              >
                ISBN of Book
              </label>
              <input
                type='text'
                value={ISBN}
                onChange={(e) => setISBN(e.target.value)}
                className='block w-full px-4 py-2 mt-2 text-gray-800 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40'
                name='ISBN'
              />
            </div>
            <div className='mb-2'>
              <label
                htmlFor='userEmail'
                className='block text-sm font-semibold text-gray-800'
              >
                User Email
              </label>
              <input
                type='email'
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                className='block w-full px-4 py-2 mt-2 text-gray-800 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40'
                name='email'
              />
            </div>

            <div className='flex justify-between mt-4'>
              <button
                onClick={() => handleTransaction('borrow')}
                className='px-4 py-2 bg-blue-500 text-white rounded-md'
              >
                Borrow
              </button>
              <button
                onClick={() => handleTransaction('return')}
                className='px-4 py-2 bg-green-500 text-white rounded-md'
              >
                Return
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
}

export default Transaction;
