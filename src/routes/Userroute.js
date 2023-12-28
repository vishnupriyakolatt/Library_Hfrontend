
import React, { Fragment } from 'react';
import {Routes,Route} from "react-router-dom";
import MainHome from '../Pages/User/MainHome';
import CategoryView from '../Pages/User/CategoryView';
import Header from '../Components/Header'
import AllBooks from '../Pages/User/AllBooks';


function Userroute() {
  return (
  
<Fragment>
 <Header/>
  <Routes>
    <Route path='/' element={<MainHome/>}/>
    <Route path='/category' element={<CategoryView/>}/>
    <Route path='/allBooks' element={<AllBooks/>}/>
  </Routes>
</Fragment>
  )
}

export default Userroute