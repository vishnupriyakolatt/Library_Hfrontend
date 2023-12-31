import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import axios from 'axios';
import { FaTrash } from 'react-icons/fa';
import AdminSidebar from '../../Components/AdminSidebar';

function Transactionview() {
const {TransactionId}=useParams()
const navigate=useNavigate()
  const [transaction, setTransaction] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(() => {
    const token = localStorage.getItem('userToken');
    if (!token) {
      navigate('/admin');
    }
  }, []); 


  useEffect(() => {
    Transactionfetch();
  }, []);
  

  const Transactionfetch = async () => {
    try {

      const response = await axios.get('http://localhost:8800/api/book/AdminviewTransaction');
      console.log(response)
      const data = response.data;
      setTransaction(data);
 
    } catch (error) {
      console.error('Error fetching books:', error);
      
    }
  };

  const handleSearch = async () => {
    try {
 
      const response = await axios.post(`http://localhost:8800/api/book/search?name=${searchTerm}`);
      const data = response.data;
      setTransaction(data);
     
    } catch (error) {
      console.error('Error searching books:', error);
   
    }
  };


  
  return (
    <>
    <div className='flex'>
        <AdminSidebar/>
      <section className="container mx-auto p-6 font-mono">
        <h1 className="font-bold text-2xl text-center mb-5">Transaction Details</h1>
        <form className="mb-5" onSubmit={(e) => { e.preventDefault(); handleSearch(); }}>
          <div className="max-w-xl">
            <div className="flex rounded-md overflow-hidden w-full mb-4">
              <input
                type="text"
                className="w-full rounded-md rounded-r-none border border-black px-4 py-2"
                placeholder="Search by Name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button
                type="submit"
                className="bg-indigo-600 text-white px-6 text-lg font-semibold py-2 rounded-r-md"
              >
                Go
              </button>
            </div>
          </div>
        </form>

        <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
          <div className="w-full overflow-x-auto">
      
          <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"><Link to='/admin/transaction'>Add Transaction</Link></button>
       
              <table className="w-full">
                <thead>
                  <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                    <th className="px-4 py-3">ISBN</th>
                    <th className="px-4 py-3">Book-name</th>
                    <th className="px-4 py-3">Transaction-Type</th>
                    <th className="px-4 py-3">Email</th>
                    <th className="px-4 py-3">Borrow-Date</th>
                    <th className="px-4 py-3">Due-Date</th>
                  
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {transaction.map((item) => (
                    <tr key={item._id} className="text-gray-700">
                      <td className="px-4 py-3 border font-bold text-xl text-black">{item.ISBN}</td>
                      <td className="px-4 py-3 border">
                        <div className="flex items-center text-sm">
                          <div className="relative w-6 h-6 mr-3 rounded-full md:block overflow-hidden">
                            <img
                              className="object-cover w-full h-full rounded-full"
                              src={item.image}
                              alt=""
                              loading="lazy"
                            />
                            <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                          </div>
                          <div>
                            <p className="font-bold text-xl text-black">{item.name}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 borde font-bold text-xl text-black">{item.name}</td>
                      <td className="px-4 py-3 border font-bold text-xl text-black">{item.author}</td>
                      <td className="px-4 py-3 border font-bold text-xl text-black">{item.category}</td>
                      <td className="px-4 py-3 border font-bold text-xl text-black">{item.category}</td>
                      <td>
  
</td>


                    
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

export default Transactionview;