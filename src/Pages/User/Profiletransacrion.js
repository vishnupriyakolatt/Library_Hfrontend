import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';
import Header from '../../Components/Header'
import Background from "../../assets/background1.jpg";

function ProfileTransaction() {
  const navigate=useNavigate()
  const [bookOrders, setBookOrders] = useState([]);
  
  useEffect(() => {
    const token = localStorage.getItem('userToken');
    if (!token) {
      navigate('/login');
    }

    const sendRequest = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/book/viewtransaction', {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        const data = response.data;
        setBookOrders(data.transaction);
      } catch (err) {
        console.error(err);
        throw new Error('Failed to fetch transactions');
      }
    };

    sendRequest()
      .catch((error) => console.error(error));
  }, []);

  const borrowedTransactions = bookOrders.filter(order => order.transactionType === 'borrowed');
  const returnedTransactions = bookOrders.filter(order => order.transactionType === 'returned');

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
      <section className="container mx-auto p-6 font-mono">
        <h1 className="font-bold text-2xl text-center mb-5">Borrowed History</h1>
        <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
          <div className="w-full overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                  <th className="px-4 py-3">ISBN</th>
                  <th className="px-4 py-3">Name of book</th>
                  <th className="px-4 py-3">Transaction-Type</th>
                  <th className="px-4 py-3">Borrowed-Date</th>
                  <th className="px-4 py-3">Due-Date</th>
                </tr>
              </thead>
              <tbody className="bg-white">
  {borrowedTransactions.length > 0 ? (
    borrowedTransactions.map((order, index) => (
    
   
      <tr key={index} className="text-gray-700">
         
        <td className="px-4 py-3 border text-xl semi-bold text-black">
          {order.bookId.ISBN}
        </td>
        <td className="px-4 py-3 border text-xl semi-bold text-black">
          {order.bookId.name}
        </td>
        <td className="px-4 py-3 border text-xl semi-bold text-black">
          {order.transactionType}
        </td>
        <td className="px-4 py-3 border text-xl semi-bold text-black">
     {order.timeStamp.split(' ')[0]}
        </td>
        <td className="px-4 py-3 border text-xl semi-bold text-black">
          {order.dueDate}
        </td>
        <td></td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="6" className="px-4 py-3 border text-xl semi-bold text-red-500">
        Clean borrowed history.
      </td>
    </tr>
  )}
</tbody>
</table>
          </div>
        </div>
        
        <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
        <h1 className="font-bold text-2xl text-center mb-5">Returned History</h1>
          <div className="w-full overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                  <th className="px-4 py-3">ISBN</th>
                  <th className="px-4 py-3">Name of book</th>
                  <th className="px-4 py-3">Transaction-Type</th>
                  <th className="px-4 py-3">Return-Date</th>
                  <th className="px-4 py-3">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white">
  {returnedTransactions.length > 0 ? (
    returnedTransactions.map((order, index) => (
      <tr key={index} className="text-gray-700">
        <td className="px-4 py-3 border text-xl semi-bold text-black">
          {order.bookId.ISBN}
        </td>
        <td className="px-4 py-3 border text-xl semi-bold text-black">
          {order.bookId.name}
        </td>
        <td className="px-4 py-3 border text-xl semi-bold text-black">
          {order.transactionType}
        </td>
        <td className="px-4 py-3 border text-xl semi-bold text-black">
          {order.timeStamp}
        </td>
        <td></td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="5" className="px-4 py-3 border text-xl semi-bold text-red-500">
        No clean transaction history.
      </td>
    </tr>
  )}
</tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProfileTransaction;
