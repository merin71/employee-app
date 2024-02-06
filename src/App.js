import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {  Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Employeeform from './components/Employeeform';

function App() {
  return (
  <div className='App'>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/employee-form' element={<Employeeform/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
