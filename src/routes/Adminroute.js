import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BookAdd from '../Pages/Admin/BookAdd';
import BookView from '../Pages/Admin/BookView';
import CategoryAdd from '../Pages/Admin/CategoryAdd';
import CategoryView from '../Pages/Admin/CategoryView';
import Transaction from '../Pages/Admin/Transaction';
import UserView from '../Pages/Admin/UserView';
import Transactionview from '../Pages/Admin/Transactionview';
import AdminHome from '../Pages/Admin/AdminHome';
import RequireAuth from '../Components/authentication/RequireAuth';

function Adminroute() {
  return (
    <RequireAuth>
      <Routes>
        <Route path='/home' element={<AdminHome />} />
        <Route path='/bookadd' element={<BookAdd />} />
        <Route path='/bookview' element={<BookView />} />
        <Route path='/categoryadd' element={<CategoryAdd />} />
        <Route path='/categoryview' element={<CategoryView />} />
        <Route path='/transaction' element={<Transaction />} />
        <Route path='/transactionview' element={<Transactionview />} />
        <Route path='/users' element={<UserView />} />
        <Route path='/*' element={<div>Page not found</div>} />
      </Routes>
    </RequireAuth>
  );
}

export default Adminroute;
