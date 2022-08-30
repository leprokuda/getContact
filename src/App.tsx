import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ContactsPage from './pages/ContactsPage';
import LoginPage from './pages/LoginPage';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';


function App() {
  return (
    <>
      <Navigation/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/LoginPage' element={<LoginPage/>} />
        <Route path='/ContactsPage' element={<ContactsPage/>} />
      </Routes>
    </>
  );
}

export default App;
