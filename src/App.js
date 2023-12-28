
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Adminroute from './routes/Adminroute';
import Userroute from './routes/Userroute';

function App() {
  return (
   <>
<BrowserRouter>
<Routes>
<Route path='/*' element={<Userroute/>}/>
<Route path='/admin/*' element={<Adminroute/>}/>

</Routes>
</BrowserRouter>
   
   
   </>
  );
}

export default App;
