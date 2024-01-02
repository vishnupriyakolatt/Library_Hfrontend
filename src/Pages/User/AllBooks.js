import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header';
import Background from '../../assets/background1.jpg';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useAxiosInstance from '../../axios/interceptor';
function AllBooks() {
  const [books, setBooks] = useState([]);
  const { axiosInstance } = useAxiosInstance();

  useEffect(() => {}, []);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axiosInstance.get('/book/viewbook');
        const data = response.data;
        setBooks(data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };
    fetchBooks();
  });
  return (
    <>
      <Header />
      <div
        className='h-60  flex flex-col items-center'
        style={{
          background: `url(${Background})`,
          backgroundPosition: 'bottom',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      />
      <div className='flex justify-center items-center mt-4'>
        {books.map((book, index) => (
          <div
            key={index}
            className='flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'
          >
            <img
              className='object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg'
              src={book.image}
            />
            <div className='flex flex-col justify-between p-4 leading-normal'>
              <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                <span className='bg-light-green'>Book-ISBN :</span> {book.ISBN}
              </h5>
              <div className='relative w-6 h-6 mr-3 rounded-md md:block overflow-hidden'>
                <img
                  className='object-cover w-full h-full rounded-md'
                  src={book.image}
                  alt=''
                  loading='lazy'
                />
              </div>
              <div className='bg-green-100 p-3 rounded-md'>
                <p className='mb-3 font-bold tracking-tight text-gray-900 dark:text-gray-400'>
                  Book-name: {book.name}
                </p>
                <p className='mb-3 font-bold tracking-tight text-gray-900 dark:text-gray-400'>
                  Author: {book.author}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default AllBooks;
