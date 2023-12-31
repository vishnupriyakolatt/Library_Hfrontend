import React, { useState } from 'react'
import {useNavigate,NavLink} from 'react-router-dom';
import axios from 'axios';





function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/user/login', formData);

      if (response.data.token) {
        localStorage.setItem('userToken', response.data.token);
        navigate('/');
      } else {
        console.error('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('An error occurred. Please try again later.', error);
    }
  };

  return (
<>
<section className="min-h-screen bg-gray-100 flex items-center justify-center">
  <div className="container py-5">
    <div className="lg:w-10/12">
      <div className="card rounded-lg flex flex-col lg:flex-row overflow-hidden items-center justify-center">
        <div className="lg:w-4/12 bg-cover bg-center hidden md:block bg-image ml-890 rounded-lg">
            <img src='https://images.pexels.com/photos/10935417/pexels-photo-10935417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
        </div>
        <div className="lg:w-7/12 flex items-center">
          <div className="card-body p-4 p-lg-5 text-gray-800 w-full">

          <form
            className="max-w-md mx-auto bg-gray-200 p-8 px-8 rounded-lg"onSubmit={handleSubmit}
            
          >
            <h2 className="text-4xl dark:text-white font-bold text-center">
              LOGIN HERE
            </h2>
            <div className="flex flex-col py-2 font-bold">
              <label className='font-bold'>Email</label>
              <input
                className="rounded-lg"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col py-2">
              <label className='font-bold'>Password</label>
              <input
                className="rounded-lg"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <button
              className="bg-black text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              LOGIN
            </button>
            <div className="flex mx-auto font-bold">
              <p className="flex items-center">
                Don't have account?
                <span className="p-2 underline">
                  <NavLink to="/signup">sign up </NavLink>
                </span>
              </p>
            </div>
          </form>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>

   
   


</>
  )
}

export default Login