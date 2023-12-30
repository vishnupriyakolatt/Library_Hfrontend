import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [userName, setUserName] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const navigate=useNavigate()

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:8080/api/user/register', {
        userName,
        name,
        mobile,
        email,
        password,
      });

      console.log(res.data);
      navigate('/');
    } catch (error) {
      console.error(error.response.data);
   

    }
  };

  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="container py-5">
        <div className="lg:w-10/12">
          <div className="card rounded-lg flex flex-col lg:flex-row overflow-hidden">
            <div className="lg:w-5/12 bg-cover bg-center hidden md:block bg-image">
              <img src='https://images.pexels.com/photos/10625978/pexels-photo-10625978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="Background" />
            </div>
            <div className="lg:w-7/12 flex items-center">
              <div className="card-body p-4 p-lg-5 text-gray-800 w-full">
                <form className="max-w-md mx-auto bg-gray-200 p-8 px-8 rounded-lg">
                  <h2 className="text-4xl dark:text-white font-bold text-center">REGISTER HERE</h2>
                  <div className="flex flex-col py-2 font-bold">
                    <label>User Name</label>
                    <input
                      className="rounded-lg"
                      type="text"
                      onChange={(e) => setUserName(e.target.value)}
                      name='userName'
                    />
                  </div>
                  <div className="flex flex-col py-2 font-bold">
                    <label>Name</label>
                    <input
                      className="rounded-lg"
                      type="text"
                      onChange={(e) => setName(e.target.value)}
                      name='name'
                    />
                  </div>
                  <div className="flex flex-col py-2 font-bold">
                    <label>Mobile</label>
                    <input
                      className="rounded-lg"
                      type="mobile"
                      onChange={(e) => setMobile(e.target.value)}
                      name='mobile'
                    />
                  </div>
                  <div className="flex flex-col py-2 font-bold">
                    <label>Email</label>
                    <input
                      className="rounded-lg"
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                      name='email'
                    />
                  </div>
                  <div className="flex flex-col py-2 font-bold">
                    <label>Password</label>
                    <input
                      className="rounded-lg"
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                      name='password'
                    />
                  </div>
                  <button
                    className="bg-black text-white font-bold py-2 px-4 rounded"
                    type="submit"
                    onClick={handleRegister}
                  >
                    REGISTER
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
