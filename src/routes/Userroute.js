
import React, { Fragment } from 'react';
import {Routes,Route} from "react-router-dom";
import MainHome from '../Pages/User/MainHome';

function Userroute() {
  return (
<Fragment>
  <Routes>
    <Route path='/' element={<MainHome/>}/>
  </Routes>
</Fragment>
  )
}

export default Userroute