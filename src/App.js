import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Adminroute from './routes/Adminroute';
import Userroute from './routes/Userroute';
import Login from './Pages/User/Login';
import MainHome from './Pages/User/MainHome';
import Register from './Pages/User/Register';
import AdminLogin from './Pages/Admin/AdminLogin';
import AdminRegister from './Pages/Admin/AdminRegister';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainHome />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Register />} />
          <Route path='/*' element={<Userroute />} />

          <Route path='/admin' element={<AdminLogin />} />
          <Route path='/admin/register' element={<AdminRegister />} />
          <Route path='/admin/*' element={<Adminroute />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
