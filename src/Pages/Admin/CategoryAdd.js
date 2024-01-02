import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AdminSidebar from '../../Components/AdminSidebar';
import useAxiosInstance from '../../axios/interceptor';

function CategoryAdd() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const { axiosInstance } = useAxiosInstance();

  const addCategory = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('file', image);

    try {
      const response = await axiosInstance.post('/book/addcategory', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response);
      if (response.data.message) {
        navigate('/admin/categoryview');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <div className='flex'>
        <AdminSidebar />
        <div className='relative flex flex-col justify-center min-h-screen overflow-hidden w-full'>
          <div className='w-full p-10 m-auto bg-white rounded-md shadow-md lg:max-w-xl'>
            <h1 className='text-3xl text-center text-gray-900 font-bold mb-2'>
              ADD Transaction
            </h1>
            <div className='relative'>
              <label
                title='Click to upload'
                htmlFor='button2'
                className='cursor-pointer flex items-center gap-4 px-6 py-4 before:border-gray-400/60 hover:before:border-gray-300 group dark:before:bg-darker dark:hover:before:border-gray-500 before:bg-gray-100 dark:before:border-gray-600 before:absolute before:inset-0 before:rounded-3xl before:border before:border-dashed before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95'
              >
                <div className='w-max relative'>
                  <img
                    className='w-12'
                    src='https://www.svgrepo.com/show/485545/upload-cicle.svg'
                    alt='file upload icon'
                    width='512'
                    height='512'
                  />
                </div>
                <div className='relative'>
                  <span className='block text-base font-semibold relative text-blue-900 dark:text-white group-hover:text-blue-500'>
                    Upload a file
                  </span>
                  <span className='mt-0.5 block text-sm text-gray-500 dark:text-gray-400'>
                    Max 2 MB
                  </span>
                </div>
              </label>
              <input
                hidden=''
                type='file'
                name='file'
                id='button2'
                onChange={handleImageChange}
              />
            </div>
            <div className='mb-2'>
              <label
                htmlFor='name'
                className='block text-sm font-semibold text-gray-800'
              >
                Name
              </label>
              <input
                type='text'
                className='block w-full px-4 py-2 mt-2 text-gray-800 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40'
                name='name'
                id='name'
                value={name}
                onChange={handleNameChange}
              />
            </div>
            <button
              onClick={addCategory}
              className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600'
            >
              Add Category
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoryAdd;
