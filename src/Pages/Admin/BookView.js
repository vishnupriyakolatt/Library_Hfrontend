import React, { useState, useEffect,useParams } from 'react';
import axios from 'axios';
import { FaTrash } from 'react-icons/fa';
import AdminSidebar from '../../Components/AdminSidebar';
import { Link, useNavigate } from 'react-router-dom';

function BookView() {

  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate=useNavigate()
  useEffect (()=>{
    const token = localStorage.getItem('userToken');
    fetchBooks();
    if (!token) {
      navigate('/admin');
    }
  }, []);

  const fetchBooks = async () => {
    try {

      const response = await axios.get('http://localhost:8800/api/book/viewbook');
      console.log(response)
      const data = response.data;
      setBooks(data);
 
    } catch (error) {
      console.error('Error fetching books:', error);
      
    }
  };

  const handleSearch = async () => {
    try {
 
      const response = await axios.post(`http://localhost:8800/api/book/search?name=${searchTerm}`);
      const data = response.data;
      setBooks(data);
     
    } catch (error) {
      console.error('Error searching books:', error);
   
    }
  };

  const handleDelete = async (bookId) => {
    try {
      console.log('Deleting book with ID:', bookId);
      await axios.delete(`http://localhost:8800/api/book/delete/${bookId}`);
      fetchBooks(); // Fetch the updated list of books after deletion
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };
  
  return (
    <>
    <div className='flex'>
        <AdminSidebar/>
      <section className="container mx-auto p-6 font-mono">
        <h1 className="font-bold text-2xl text-center mb-5">Book Details</h1>
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
        <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"><Link to='/admin/bookadd'>Add Book</Link></button>

        <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
          <div className="w-full overflow-x-auto">
      
           
       
              <table className="w-full">
                <thead>
                  <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                    <th className="px-4 py-3">ISBN</th>
                    <th className="px-4 py-3">Image</th>
                    <th className="px-4 py-3">Name</th>
                    <th className="px-4 py-3">Author</th>
                    <th className="px-4 py-3">Category</th>
                    <th className="px-4 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {books.map((book) => (
                    <tr key={book._id} className="text-gray-700">
                      <td className="px-4 py-3 border font-bold text-xl text-black">{book.ISBN}</td>
                      <td className="px-4 py-3 border">
                        <div className="flex items-center text-sm">
                        <div className="relative w-20 h-20 mr-3 rounded-md md:block overflow-hidden">
  <img
    className=" w-full h-full rounded-md"
    src={book.image}
    alt=""
    loading="lazy"
  />
  <div className="absolute inset-0 rounded-md shadow-inner" aria-hidden="true"></div>
</div>
                          <div>
                            <p className="font-bold text-xl text-black">{book.name}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 borde font-bold text-xl text-black">{book.name}</td>
                      <td className="px-4 py-3 border font-bold text-xl text-black">{book.author}</td>
                      <td className="px-4 py-3 border font-bold text-xl text-black">{book.category}</td>
                      <td>
  <button className="text-red-600 hover:text-red-800 mt-3" onClick={() => {
    console.log('Deleting book with ID:', book._id);
    handleDelete(book._id);
  }}>
    <FaTrash size={20} />
  </button>
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

export default BookView;
