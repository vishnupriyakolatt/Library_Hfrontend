import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CategoryView() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/book/viewCategory');
      const data = response.data;
      setBooks(data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  return (
    <>
      <section className="container mx-auto p-6 font-mono">
        <h1 className="font-bold text-xl text-center mb-5">Book Details</h1>

        <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
          <div className="w-full overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                
                  <th className="px-4 py-3">Image</th>
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {books.map((book) => (
                  <tr key={book._id} className="text-gray-700">
                
                    <td className="px-4 py-3 border">
                      <div className="flex items-center text-sm">
                        <div className="relative w-6 h-6 mr-3 rounded-full md:block overflow-hidden">
                          <img
                            className="object-cover w-full h-full rounded-full"
                            src={book.image}
                            alt=""
                            loading="lazy"
                          />
                          <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                        </div>
                    
                      </div>
                    </td>
                    <td className="px-4 py-3 border font-bold text-xl">{book.author}</td>
                 
                    <td className="px-4 py-3 border">
                      <button className="text-red-600 hover:text-red-800">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          className="h-6 w-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"
                          ></path>
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}

export default CategoryView;

