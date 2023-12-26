
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Adminroute from './routes/Adminroute';
import Userroute from './routes/Userroute';

function App() {
  return (
   <>
<BrowserRouter>
<Routes>
<Route path='/admin/*' element={<Adminroute/>}/>
<Route path='/' element={<Userroute/>}/>
</Routes>
</BrowserRouter>
   
   
   </>
  );
}

export default App;
