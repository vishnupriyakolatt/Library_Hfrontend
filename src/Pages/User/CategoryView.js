import React from 'react'

import Background from "../../assets/background1.jpg";

function CategoryView() {
  return (
  <>

<div
        className="h-60  flex flex-col items-center"
        style={{
          background: `url(${Background})`,
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          
        }}
      /> 
     
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 w-full mt-12 dark:bg-gray-800 ">

  <div
    class="relative overflow-hidden rounded-lg shadow-lg cursor-pointer m-4 dark:bg-gray-600 duration-300 ease-in-out transition-transform transform hover:-translate-y-2">
    <img class="object-cover w-full h-80"
      src="https://images.pexels.com/photos/19495045/pexels-photo-19495045/free-photo-of-tarot-deck-atop-piles-of-books.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt="Flower and sky" />
   
    <div class="items-center text-center m-3">
      <p class="text-lg font-bold text-gray-700 dark:text-gray-200">Classics</p>
    </div>
  </div>
  <div
    class="relative overflow-hidden rounded-lg shadow-lg cursor-pointer m-4 dark:bg-gray-600 duration-300 ease-in-out transition-transform transform hover:-translate-y-2">
    <img class=" object-cover w-full h-80"
      src="https://images.pexels.com/photos/6475044/pexels-photo-6475044.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt="Flower and sky" />
   
    <div class="items-center text-center m-3">
      <p class="text-lg font-bold text-gray-700 dark:text-gray-200">Detective and Mystery</p>
    </div>
  </div>
  <div
    class="relative overflow-hidden rounded-lg shadow-lg cursor-pointer m-4 dark:bg-gray-600 duration-300 ease-in-out transition-transform transform hover:-translate-y-2">
    <img class=" object-cover w-full h-80"
      src="https://images.pexels.com/photos/15871643/pexels-photo-15871643/free-photo-of-close-up-of-a-book.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt="Flower and sky" />
    
     
    <div class="items-center text-center m-3">
      <p class="text-lg font-bold text-gray-700 dark:text-gray-200">Fantasy and Romance</p>
    </div>
  </div>
  <div
    class="relative overflow-hidden rounded-lg shadow-lg cursor-pointer m-4 dark:bg-gray-600 duration-300 ease-in-out transition-transform transform hover:-translate-y-2">
    <img class=" object-cover w-full h-80"
      src="https://images.pexels.com/photos/4245026/pexels-photo-4245026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt="Flower and sky" />
   
    <div class="items-center text-center m-3">
      <p class="text-lg font-bold text-gray-700 dark:text-gray-200">Historical and Literary Fiction</p>
    </div>
  </div>
</div>





  </>
  )
}

export default CategoryView