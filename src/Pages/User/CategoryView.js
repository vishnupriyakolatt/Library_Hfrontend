import React, { useState, useEffect } from 'react';
import Header from '../../Components/Header';
import Background from '../../assets/background1.jpg';
import useAxiosInstance from '../../axios/interceptor';

function CategoryView() {
  const [categories, setCategories] = useState([]);
  const { axiosInstance } = useAxiosInstance();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axiosInstance.get('/book/viewCategory');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories().catch((error) => console.error(error));
  }, []);

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

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 w-full mt-12 dark:bg-gray-800'>
        {categories.map((category) => (
          <div
            key={category._id} // Assuming your category objects have a unique identifier
            className='relative overflow-hidden rounded-lg shadow-lg cursor-pointer m-4 dark:bg-gray-600 duration-300 ease-in-out transition-transform transform hover:-translate-y-2'
          >
            <img
              className='object-cover w-full h-80'
              src={category.image} // Replace with the actual property name in your category object
              alt={category.name} // Replace with the actual property name in your category object
            />

            <div className='items-center text-center m-3'>
              <p className='text-lg font-bold text-gray-700 dark:text-gray-200'>
                {category.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default CategoryView;
