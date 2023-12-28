
import React, { Fragment } from 'react';
import {Routes,Route} from "react-router-dom";
import Adminsidebar from '../Components/AdminSidebar';
import CategoryView from '../Pages/Admin/CategoryView';
function Adminroute() {
  return (
    <Fragment>
<Adminsidebar/>
     <Routes>
       <Route path='/' element={<CategoryView/>}/>
       
     </Routes>
   </Fragment>
  )
}

export default Adminroute