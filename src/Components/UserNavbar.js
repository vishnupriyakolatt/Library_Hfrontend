import React from 'react'
import { Link } from 'react-scroll';

function UserNavbar({children,to,offset=-50,mobileMenu=false}) {
  const className = mobileMenu
  ? "text-lg text-black font-bold cursor-pointer mt-[-30px]  max-w-md mx-auto text-center w-30 rounded-md p-4"
  : " text-lg lg:text-xl text-black font-bold cursor-pointer mt-[-30px]  max-w-md mx-auto text-center rounded-md p-4";



  return (
    <>
    <Link   to={to} spy={true} smooth={true} offset={offset}
    duration={1000}
    className= {className}>{children}</Link>
    
    </>
  )
}

export default UserNavbar