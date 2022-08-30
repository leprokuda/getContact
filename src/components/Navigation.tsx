import React from 'react'
import {Link} from 'react-router-dom'

import LoginPage from './../pages/LoginPage';
import ContactsPage from './../pages/ContactsPage';

function Navigation() {
  return (
    <nav className='flex justify-between items-center h-[60px] px-5 shadow-md bg-cyan-800 text-white text-xl'>
      <h3 className='text-3xl font-semibold'>Infinity++</h3>
      <span>
        <Link to='/' className='mr-3'>Home</Link>
        <Link to='/LoginPage' className='mr-3'>Login</Link>
        <Link to='/ContactsPage'>Contacts</Link>
      </span>
    </nav>
  )
}

export default Navigation