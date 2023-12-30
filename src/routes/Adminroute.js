
import React, { Fragment } from 'react';
import {Routes,Route} from "react-router-dom";
import AdminRegister from '../Pages/Admin/AdminRegister';
import BookAdd from '../Pages/Admin/BookAdd';
import BookView from '../Pages/Admin/BookView';
import AdminLogin from '../Pages/Admin/AdminLogin';
import AdminSidebar from '../Components/AdminSidebar'

function Adminroute() {
  return (
    <Fragment>
     <Routes>
       <Route path='/' element={<AdminLogin/>}/>
       <Route path='/register' element={<AdminRegister/>}/>
       
       <Route path='/home' element={<AdminSidebar/>}/>
       <Route path='/bookadd' element={<BookAdd/>}/>
       <Route path='/bookview' element={<BookView/>}/>
     </Routes>
   </Fragment>
  )
}

export default Adminroute