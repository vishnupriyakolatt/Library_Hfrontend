import React from 'react'
import UserHome from './UserHome'
import Service from './Service'
import Category from './Category'
import About from './About'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'


function MainHome() {
  return (
<>
<Header/>
<UserHome/>
<Service/>
<Category/>
<About/>
<Footer/>
</>
  )
}

export default MainHome