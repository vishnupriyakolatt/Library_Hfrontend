
import React, { Fragment } from 'react';
import {Routes,Route} from "react-router-dom";
import MainHome from '../Pages/User/MainHome';
import CategoryView from '../Pages/User/CategoryView';

import AllBooks from '../Pages/User/AllBooks';
import Login from '../Pages/User/Login';
import Register from '../Pages/User/Register';
import Singlepage from '../Pages/User/Singlepage';
import Profiletransacrion from '../Pages/User/Profiletransacrion';



function Userroute() {
  return (
  
<Fragment>
 
  <Routes>
    <Route path='/' element={<MainHome/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Register/>}/>
    <Route path='/category' element={<CategoryView/>}/>
    <Route path='/allBooks' element={<AllBooks/>}/>
    <Route path='/singlebook/:id' element={<Singlepage/>}/>
    <Route path='/profile' element={<Profiletransacrion/>}/>
   
  </Routes>
</Fragment>
  )
}

export default Userroute