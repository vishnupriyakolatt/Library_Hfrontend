import React, { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { MdOutlineDashboard } from 'react-icons/md';
import { AiOutlineUser } from 'react-icons/ai';
import { SiBookstack } from 'react-icons/si';
import { Link, useNavigate } from 'react-router-dom';
import { IoBookSharp } from 'react-icons/io5';
import { IoIosLogOut } from 'react-icons/io';

const AdminSidebar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    navigate('/admin/');
  };
  const menus = [
    { name: 'dashboard', link: '/admin/home', icon: MdOutlineDashboard },
    { name: 'Category', link: '/admin/categoryview', icon: IoBookSharp },
    { name: 'Books', link: '/admin/bookview', icon: SiBookstack },
    { name: 'Users', link: '/admin/users', icon: AiOutlineUser },
    { name: 'Transaction', link: '/admin/transactionview', icon: SiBookstack },
  ];
  const [open, setOpen] = useState(true);
  return (
    <section className='flex gap-6'>
      <div
        className={`bg-[#0e0e0e] min-h-screen ${
          open ? 'w-72' : 'w-16'
        } duration-500 text-gray-100 px-4`}
      >
        <div className='py-3 flex justify-end'>
          <HiMenuAlt3
            size={26}
            className='cursor-pointer'
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className='mt-4 flex flex-col gap-4 relative'>
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={` ${
                menu?.margin && 'mt-5'
              } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: '20' })}</div>
              <h2
                className={`whitespace-pre duration-500 ${
                  !open && 'opacity-0 translate-x-28 overflow-hidden'
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && 'hidden'
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
          <Link
            to='/admin/'
            className='flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md'
          >
            <IoIosLogOut />
            <h2 onClick={handleLogout}>Logout</h2>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AdminSidebar;
