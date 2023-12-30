import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function BookAdd() {
  const navigate = useNavigate();
  const [ISBN, setISBN] = useState("");
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState(null); // Change to null to handle file input

  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);

  
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append('ISBN', ISBN);
    formData.append('name', name);
    formData.append('author', author);
    formData.append('file', image);

    formData.append('category', category);
  
    try {
      const response = await axios.post('http://localhost:8080/api/book/addbook', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      if (response.data.message) {
        navigate("/");
      } else if (response.data.err) {
        console.error(response.data.err); // Log the error for debugging
        // Optionally, you can show an error message to the user
      }
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <>
      <div>
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
          <div className="w-full p-10 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
            <h1 className="text-3xl text-center text-gray-900 font-bold mb-2">ADD BOOKS</h1>
            <div></div>
            <div className="relative">
              <label
                title="Click to upload"
                htmlFor="button2"
                className="cursor-pointer flex items-center gap-4 px-6 py-4 before:border-gray-400/60 hover:before:border-gray-300 group dark:before:bg-darker dark:hover:before:border-gray-500 before:bg-gray-100 dark:before:border-gray-600 before:absolute before:inset-0 before:rounded-3xl before:border before:border-dashed before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
              >
                <div className="w-max relative">
                  <img
                    className="w-12"
                    src="https://www.svgrepo.com/show/485545/upload-cicle.svg"
                    alt="file upload icon"
                    width="512"
                    height="512"
                  />
                </div>
                <div className="relative">
                  <span className="block text-base font-semibold relative text-blue-900 dark:text-white group-hover:text-blue-500">
                    Upload a file
                  </span>
                  <span className="mt-0.5 block text-sm text-gray-500 dark:text-gray-400">Max 2 MB</span>
                </div>
              </label>
              <input hidden="" type="file" name="button2" id="button2" onChange={handleImageChange} />
            </div>
            <div className="mb-2">
              <label htmlFor="password" className="block text-sm font-semibold text-gray-800">
                ISBN
              </label>
              <input
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                name="ISBN"
                value={ISBN}
                onChange={(e) => setISBN(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="password" className="block text-sm font-semibold text-gray-800">
                Name
              </label>
              <input
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="password" className="block text-sm font-semibold text-gray-800">
                Author
              </label>
              <input
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                name="author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="category" className="block text-sm font-semibold text-gray-800">
                Category
              </label>
              <select
                className="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                name="category"
                id="category"
                value={category}
                onChange={(e) => setCategories(e.target.value)}
              >
                <option value="">Select Category</option>
                <option>Classics</option>
                <option>Detective and Mystery</option>
                <option>Fantasy and Romance</option>
                <option>Historical and Literary Fiction</option>
              </select>
            </div>
           
            <div className="mb-2">
              <button
                onClick={handleSubmit}
                className="w-full px-4 py-2 mt-4 text-white bg-purple-500 rounded-md hover:bg-purple-600 focus:outline-none focus:ring focus:border-purple-400"
              >
                Add Book
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookAdd;



