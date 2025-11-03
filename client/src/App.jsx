import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Employees from './Employees';
import CreateBook from './CreateBook';
import UpdateEmployee from "./UpdateEmployee";


import Nav from './Nav';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Employees />} />
        <Route path='/create' element={ <CreateBook /> } />
        <Route path='/nav' element={ <Nav /> } />
        <Route path='/update/:id' element={<UpdateEmployee />} />

        
       
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
