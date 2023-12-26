import React, { useState } from "react";

import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import Background from "../../assets/background1.jpg";
import logo from "../../assets/logo.svg";
import searchIcon from "../../assets/search-icon.svg";
import { heroSubtitle, heroTitle } from "../../data";
import NavLink from "../../Components/UserNavbar";
import Frame from "../../Components/Frame";

function UserHome() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div
        className=" sticky top-0  h-screen  flex flex-col items-center"
        style={{
          background: `url(${Background})`,
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="relative w-full max-w-[1490] flex items-center justify-between pt-10 mx-auto px-10">
          {/* <img src={logo} className="mt-[-30px]" /> */}
          <div className="flex items-center">
  <img src={logo} className="mt-[-30px]" alt="Logo" />
  <p className="ml-[-120px] mt-[-30px] font-extrabold text-4xl">BookHeaven</p>
</div>

          <ul className="hidden md:flex item-center gap-10 lg:gap-[68px]">
            <NavLink to="service">Home</NavLink>
            <NavLink to="service">Home</NavLink>
            <NavLink to="service">Home</NavLink>
            <NavLink to="service">Home</NavLink>
          </ul>

          <button
            type="button"
            className="text-white mt-[-20px] bg-black hover:bg-white hover:text-black border hidden md:block cursor-pointer  focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 font-bold"
          >
            Login
          </button>

          <HiMenuAlt3
            size={30}
            className="block md:hidden cursor-pointer text-black mt-[-38px]"
            onClick={() => setShowMenu((prev) => !prev)}
          />

          <div
            className={`block md:hidden w-full fixed ${
              !showMenu ? "-top-[410px]" : "top-0"
            } left-0 bg-white h-[410px] transition-all duration-[800ms] shadow-xl z-10 py-8 px-12 rounded-b-xl`}
          >
            <AiOutlineClose
              size={25}
              className="absolute top-5 right-5 cursor-pointer"
              onClick={() => setShowMenu(false)}
            />
            <ul className="pt-[60px] items-center flex flex-col gap-8">
              <NavLink to="services" mobileMenu>
                Services
              </NavLink>
              <NavLink to="products" mobileMenu>
                Shop
              </NavLink>
              <NavLink to="reference" mobileMenu>
                Reference
              </NavLink>
              <NavLink to="care" mobileMenu>
                Care
              </NavLink>
              <NavLink to="care" mobileMenu>
                Login
              </NavLink>
            </ul>
          </div>
        </div>

<Frame delay={0.2} direction="down" padding fullwidth >
  <h1 className='mt-[90px] text-center text-5xl leading-tight xs:text-[64px] text-white font-bold max-w-[1050px]'>{heroTitle}</h1>
</Frame>

<Frame delay={0.4} direction="down" padding fullwidth>
  <h5 className="mt-6 text-center text-lg xs:text-xl text-white font-bold max-w-[500px]">
          {heroSubtitle}
        </h5>
</Frame>
<Frame delay={0.2} direction="up" padding fullWidth>
        <div className="relative w-full xs:w-[460px] mt-11">
          <input
            type="text"
            placeholder="Search"
            className="rounded-full w-full pl-6 pr-[68px] py-4 bg-primary outline-none text-white font-bold
              text-base xs:text-lg placeholder-white"
          />
          <img
            src={searchIcon}
            alt=""
            className="absolute top-2/4 -translate-y-2/4 right-3 h-11 w-11 cursor-pointer"
          />
        </div>
        </Frame>

    </div>


    </>
  );
}

export default UserHome;
