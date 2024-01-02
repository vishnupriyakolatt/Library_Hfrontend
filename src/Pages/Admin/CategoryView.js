import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminSidebar from '../../Components/AdminSidebar';
import { Link, useNavigate } from 'react-router-dom';
import useAxiosInstance from '../../axios/interceptor';

function CategoryView() {
  const [books, setBooks] = useState([]);
  const { axiosInstance } = useAxiosInstance();

  const fetchBooks = async () => {
    try {
      const response = await axiosInstance.get('/book/viewCategory');
      const data = response.data;
      setBooks(data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };
  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <>
      <div className='flex'>
        <AdminSidebar />
        <section className='container mx-auto p-6 font-mono'>
          <h1 className='font-bold text-xl text-center mb-5'>
            Category Details
          </h1>
          <button
            type='button'
            class='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'
          >
            <Link to='/admin/categoryadd'>Add category</Link>
          </button>

          <div className='w-full mb-8 overflow-hidden rounded-lg shadow-lg'>
            <div className='w-full overflow-x-auto'>
              <table className='w-full'>
                <thead>
                  <tr className='text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600'>
                    <th className='px-4 py-3'>Image</th>
                    <th className='px-4 py-3'>Name</th>
                  </tr>
                </thead>
                <tbody className='bg-white'>
                  {books.map((book) => (
                    <tr key={book._id} className='text-gray-700'>
                      <td className='px-4 py-3 border'>
                        <div className='flex items-center text-sm'>
                          <div className='relative w-20 h-20 mr-3 rounded-md md:block overflow-hidden'>
                            <img
                              className=' w-full h-full rounded-md'
                              src={book.image}
                              alt=''
                              loading='lazy'
                            />
                            <div
                              className='absolute inset-0 rounded-md shadow-inner'
                              aria-hidden='true'
                            ></div>
                          </div>
                        </div>
                      </td>
                      <td className='px-4 py-3 border font-bold text-xl'>
                        {book.name}
                      </td>

                      <td className='px-4 py-3 border'></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default CategoryView;
