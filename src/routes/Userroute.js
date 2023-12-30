
import React, { Fragment } from 'react';
import {Routes,Route} from "react-router-dom";
import MainHome from '../Pages/User/MainHome';
import CategoryView from '../Pages/User/CategoryView';

import AllBooks from '../Pages/User/AllBooks';
import Login from '../Pages/User/Login';
import Register from '../Pages/User/Register';


function Userroute() {
  return (
  
<Fragment>
 
  <Routes>
    <Route path='/' element={<MainHome/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Register/>}/>
    <Route path='/category' element={<CategoryView/>}/>
    <Route path='/allBooks' element={<AllBooks/>}/>

  </Routes>
</Fragment>
  )
}

export default Userroute