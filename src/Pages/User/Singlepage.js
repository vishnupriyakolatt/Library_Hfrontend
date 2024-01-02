import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header';
import Background from '../../assets/background1.jpg';
import { useParams } from 'react-router-dom';
import useAxiosInstance from '../../axios/interceptor';
function Singlepage() {
  const [book, setBook] = useState({});
  const id = useParams();
  const { axiosInstance } = useAxiosInstance();

  useEffect(() => {
    const getsingleBook = async (id) => {
      try {
        const response = await axiosInstance.get('/book/search?name=' + id);
        const data = response.data;
        setBook(data[0]);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };
    getsingleBook();
  });
  return book ? (
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

      <div class='flex flex-col mx-auto rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-2xl md:flex-row mt-4'>
        <div class='flex flex-col justify-start p-6'>
          <img
            class='h-20 w-full rounded-t-lg object-cover md:h-auto md:w-40 md:!rounded-none md:!rounded-l-lg mb-4'
            src={book.image}
            alt=''
          />
        </div>
        <div class='flex flex-col w-full mx-auto rounded-lg  dark:bg-neutral-700 md:max-w-2xl md:flex-row mt-4'>
          <div class='flex w-72 flex-col items-end gap-6'>
            <div class='relative h-10 w-full min-w-[200px]'>
              <input
                class='peer h-full w-full rounded-[7px] border border-red-500 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-red-500 placeholder-shown:border-t-red-500 focus:border-2 focus:border-red-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50'
                placeholder=' '
              />
              <label class=' absolute left-0 -top-1.5 text-xl font-bold flex h-full w-full select-none text-[11px]  leading-tight text-red-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-red-500 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-red-500 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-red-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-red-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-red-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-red-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500'>
                ISBN:<span></span>
                {book.ISBN}
              </label>
            </div>
            <div class='relative h-10 w-full min-w-[200px]'>
              <input
                class='peer h-full w-full rounded-[7px] border border-red-500 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-red-500 placeholder-shown:border-t-red-500 focus:border-2 focus:border-red-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50'
                placeholder=' '
              />
              <label class=' absolute left-0 -top-1.5 text-xl font-bold flex h-full w-full select-none text-[11px]  leading-tight text-red-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-red-500 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-red-500 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-red-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-red-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-red-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-red-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500'>
                Name of Books:<span></span>
                {book.name}
              </label>
            </div>
            <div class='relative h-10 w-full min-w-[200px]'>
              <input
                class='peer h-full w-full rounded-[7px] border border-green-500 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-green-500 placeholder-shown:border-t-green-500 focus:border-2 focus:border-green-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50'
                placeholder=' '
              />
              <label class='absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] text-xl font-bold leading-tight text-green-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-green-500 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-green-500 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-green-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-green-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-green-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-green-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500'>
                Book Author:<span></span> {book.author}
              </label>
            </div>
            <button class='text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>
              {' '}
              {book.category}
            </button>
          </div>
        </div>
      </div>
    </>
  ) : (
    <div>nothing to show</div>
  );
}

export default Singlepage;
