import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProfileTransaction() {
  const [bookOrders, setBookOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const id = localStorage.getItem('userId');

    const sendRequest = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/book/viewtransaction/${id}`);
        const data = response.data;
        return data;
      } catch (err) {
        console.error(err);
        throw new Error('Failed to fetch transactions');
      }
    };

    sendRequest()
      .then((data) => setBookOrders(data.bookOrders))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      {bookOrders && bookOrders.length > 0 ? (
        bookOrders.map((order, index) => (
          <div key={index}>
            <p>Book ID: {order.bookId}</p>
            <p>User ID: {order.userId}</p>
            <p>Due Date: {order.dueDate}</p>
            <p>Transaction Type: {order.transactionType}</p>
            {/* Add more details based on your model */}
          </div>
        ))
      ) : (
        <p>No transactions found.</p>
      )}
    </>
  );
}

export default ProfileTransaction;


