import React, { useEffect, useState } from 'react';

import axios from 'axios';
import Background from '../../assets/background1.jpg';

import searchIcon from '../../assets/search-icon.svg';
import { heroSubtitle, heroTitle } from '../../data';

import Frame from '../../Components/Frame';
import { useNavigate } from 'react-router-dom';
import useAxiosInstance from '../../axios/interceptor';

function UserHome() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = async () => {
    if (!searchTerm) return alert('Please search');
    navigate(`/singlebook/${searchTerm}`)
  };
  return (
    <>
      <div
        className='h-screen  flex flex-col items-center'
        style={{
          background: `url(${Background})`,
          backgroundPosition: 'bottom',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <Frame delay={0.2} direction='down' padding fullwidth>
          <h1 className='mt-[160px] text-center text-5xl leading-tight xs:text-[64px] text-white font-bold max-w-[1050px]'>
            {heroTitle}
          </h1>
        </Frame>

        <Frame delay={0.4} direction='down' padding fullwidth>
          <h5 className='mt-6 text-center text-lg xs:text-xl text-white font-bold max-w-[500px]'>
            {heroSubtitle}
          </h5>
        </Frame>
        <Frame delay={0.2} direction='up' padding fullWidth>
          <div className='relative w-full xs:w-[460px] mt-11'>
            <input
              type='text'
              placeholder='Search'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className='rounded-full w-full pl-6 pr-[68px] py-4 bg-primary outline-none text-white font-bold
              text-base xs:text-lg placeholder-white'
            />
            <img
              src={searchIcon}
              alt=''
              onClick={handleSearch}
              className='absolute top-2/4 -translate-y-2/4 right-3 h-11 w-11 cursor-pointer'
            />
          </div>
        </Frame>
      </div>
    </>
  );
}

export default UserHome;
