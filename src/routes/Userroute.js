import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CategoryView from '../Pages/User/CategoryView';
import AllBooks from '../Pages/User/AllBooks';
import Singlepage from '../Pages/User/Singlepage';
import Profiletransacrion from '../Pages/User/Profiletransacrion';
import RequireAuth from '../Components/authentication/RequireAuth';

function Userroute() {
  return (
    <RequireAuth>
      <Routes>
        <Route path='/category' element={<CategoryView />} />
        <Route path='/allBooks' element={<AllBooks />} />
        <Route path='/singlebook/:id' element={<Singlepage />} />
        <Route path='/profile' element={<Profiletransacrion />} />
        <Route path='/*' element={<div>Page not found</div>} />
      </Routes>
    </RequireAuth>
  );
}

export default Userroute;
