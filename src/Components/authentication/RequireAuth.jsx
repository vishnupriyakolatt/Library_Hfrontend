import React, { useEffect, useState } from 'react';
import useAuth from './authContext/useAuth';
import { Navigate, useNavigate, useLocation } from 'react-router-dom';
import useAxiosInstance from '../../axios/interceptor';
import { toast } from 'react-toastify';

function RequireAuth({ children }) {
  const { auth, setAuth } = useAuth();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const { axiosInstance } = useAxiosInstance();
  const verifyAccessToken = async () => {
    try {
      if (!auth.accessToken) {
        const response = await axiosInstance.get('/verify/accessToken');
        setAuth({
          name: response.data.name,
          accessToken: response.data.token,
          role: response.data.role,
        });
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  useEffect(() => {
    verifyAccessToken();
  }, []);

  useEffect(() => {
    if (
      auth.accessToken &&
      location.pathname.includes('admin') &&
      auth.role !== 'ADMIN'
    ) {
      navigate('/admin');
      toast.error('Login as admin');
    }
  }, [auth]);

  return loading ? (
    <div>Loading...</div>
  ) : auth.accessToken ? (
    children
  ) : (
    <Navigate to='/login' replace state={{ path: location.pathname }} />
  );
}

export default RequireAuth;
