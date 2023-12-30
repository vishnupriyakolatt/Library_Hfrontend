
import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header'
import Background from "../../assets/background1.jpg";
import { useParams } from 'react-router-dom';
import axios from 'axios';
function Singlepage() {
    const[book,setBook]=useState({})
const id=useParams()
const getsingleBook = async (id) => {
    try {
 
        const response = await axios.post(`http://localhost:8080/api/book/search?name=${id}`);
      console.log(response)
      const data = response.data;
      setBook(data[0]);
      
     
    } catch (error) {
      console.error('Error searching books:', error);
   
    }
  };
    useEffect(()=>{
        getsingleBook(id)
    },[])
  return (
<>
<Header/>
<div
        className="h-60  flex flex-col items-center"
        style={{
          background: `url(${Background})`,
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          
        }}
      /> 
 <div className="flex justify-center items-center mt-4">
        <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src={book.image}
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {book.name}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
             {book.author}
            </p>
          </div>
        </div>
      </div>
       
     

     

</>
  )
}

export default Singlepage