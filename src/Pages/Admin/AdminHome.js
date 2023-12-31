import React from 'react';
import AdminSidebar from '../../Components/AdminSidebar';

function AdminHome() {
  return (
    <div className='flex'>
  <AdminSidebar />

  <div className="relative flex flex-col justify-center min-h-screen overflow-hidden w-full">
          <div className="w-full p-10 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
            <h1 className="text-3xl text-center text-gray-900 font-bold mb-2">Welcome To Admin Dashboard</h1>
            <div className="relative">
  <div class="flex flex-col items-center">
    <img src='https://images.freeimages.com/fic/images/icons/2526/bloggers/256/admin.png' class="w-28 h-w-28 rounded-full" />
    <div class="mt-4 text-center">
      <p class="text-2xl text-[#333] font-bold">Hi Admin</p>
      <p class="text-sm text-gray-400">Library Manager</p>
    </div>
  </div>
  <div class="mt-6 flex justify-between">
    <div class="bg-gray-100 hover:bg-gray-200 w-12 h-12 flex items-center justify-center rounded-full cursor-pointer">
    <img src="https://images.pexels.com/photos/824197/pexels-photo-824197.jpeg?auto=compress&cs=tinysrgb&w=600" class="w-28 h-w-28 rounded-full"/>
    </div>
    <div class="bg-gray-100 hover:bg-gray-200 w-12 h-12 flex items-center justify-center rounded-full cursor-pointer">
    <img src="https://images.pexels.com/photos/1831744/pexels-photo-1831744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="w-28 h-w-28 rounded-full"/>
    </div>
    <div class="bg-gray-100 hover:bg-gray-200 w-12 h-12 flex items-center justify-center rounded-full cursor-pointer">
    <div class="bg-gray-100 hover:bg-gray-200 w-12 h-12 flex items-center justify-center rounded-full cursor-pointer">
    <img src="https://images.pexels.com/photos/877971/pexels-photo-877971.jpeg?auto=compress&cs=tinysrgb&w=600"class="w-28 h-w-28 rounded-full" />
    </div>
    </div>
    <div class="bg-gray-100 hover:bg-gray-200 w-12 h-12 flex items-center justify-center rounded-full cursor-pointer">
    <img src="https://images.pexels.com/photos/309724/pexels-photo-309724.jpeg?auto=compress&cs=tinysrgb&w=600" class="w-28 h-w-28 rounded-full"/>
    </div>
  </div>
</div>
    </div>
    </div>
    </div>
  );
}

export default AdminHome;
