import React, { useState, useEffect } from 'react';
import AdminSidebar from '../../Components/AdminSidebar';
import useAxiosInstance from '../../axios/interceptor';

function UserView() {
  const { axiosInstance } = useAxiosInstance();
  const [users, setUser] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axiosInstance.get('/admin/userview');
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <>
      <div className='flex'>
        <AdminSidebar />
        <section className='container mx-auto p-6 font-mono'>
          <h1 className='font-bold text-2xl text-center mb-5'>User Details</h1>

          <div className='w-full mb-8 overflow-hidden rounded-lg shadow-lg'>
            <div className='w-full overflow-x-auto'>
              <table className='w-full'>
                <thead>
                  <tr className='text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600'>
                    <th className='px-4 py-3'>Email</th>
                    <th className='px-4 py-3'>User Name</th>
                    <th className='px-4 py-3'>Name</th>
                    <th className='px-4 py-3'>Mobile</th>
                  </tr>
                </thead>
                <tbody className='bg-white'>
                  {users.map((user) => (
                    <tr key={user._id} className='text-gray-700'>
                      <td className='px-4 py-3 border font-bold text-xl text-black'>
                        {user.email}
                      </td>

                      <td className='px-4 py-3 borde font-bold text-xl text-black'>
                        {user.userName}
                      </td>
                      <td className='px-4 py-3 border font-bold text-xl text-black'>
                        {user.name}
                      </td>
                      <td className='px-4 py-3 border font-bold text-xl text-black'>
                        {user.mobile}
                      </td>
                      <td></td>
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

export default UserView;
