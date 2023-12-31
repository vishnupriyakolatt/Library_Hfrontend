import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AdminRegister() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userName: "",
    name: "",
    mobile: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8800/api/admin/register",
        formData
      );
      console.log("Response:", response.data);

      toast.success("Registration successful!", {
        position: toast.POSITION.TOP_CENTER,
      });

      navigate("/admin/home");
    } catch (error) {
      console.error("Error:", error);

      toast.error(
        error?.response?.data?.msg ||
          error?.message ||
          "Something went wron ! please try again",
        {
          position: toast.POSITION.TOP_CENTER,
        }
      );
    }
  };

  return (
    <div>
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
          <img
            src="https://images.pexels.com/photos/2393789/pexels-photo-2393789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="w-40 h-40 mx-auto"
            alt="Logo"
          />
          <h1 className="text-3xl text-center text-gray-900 font-bold">
            Welcome, Register Here!
          </h1>
          <form className="mt-6" onSubmit={handleSubmit}>
            <div className="mb-2">
              <label
                htmlFor="userName"
                className="block text-sm font-semibold text-gray-900"
              >
                UserName
              </label>
              <input
                type="text"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
                className="block w-full px-4 py-2 mt-2 text-gray-900 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="userName"
                className="block text-sm font-semibold text-gray-900"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="block w-full px-4 py-2 mt-2 text-gray-900 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <label
              htmlFor="userName"
              className="block text-sm font-semibold text-gray-900"
            >
              Mobile
            </label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="block w-full px-4 py-2 mt-2 text-gray-900 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />

            <div className="mb-2">
              <label
                htmlFor="userName"
                className="block text-sm font-semibold text-gray-900"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="block w-full px-4 py-2 mt-2 text-gray-900 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="userName"
                className="block text-sm font-semibold text-gray-900"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="block w-full px-4 py-2 mt-2 text-gray-900 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div className="mt-6">
              <button
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-900 rounded-md"
                type="submit"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default AdminRegister;
