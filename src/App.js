import './App.css';
import Navbar from './Pages/Shared/Navbar/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login';
import MakeAppointment from './Pages/Home/MakeAppointment';
import Testimonial from './Pages/Home/Testimonial';
import Contract from './Pages/Home/Contract';
import Appointment from './Pages/Appointment/Appointment';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/testimonial' element={<Testimonial></Testimonial>}></Route>
        <Route path='/appointment' element={<Appointment></Appointment>}></Route>
        <Route path='/contract' element={<Contract></Contract>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes >
    </div >
  );
}

export default App;
