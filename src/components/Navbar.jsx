import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  
  return (
    <div className='flex items-center justify-between p-6 z-[100] w-full absolute'>
      <Link to="/">
        <h1 className='text-red-600 lg:text-4xl text-4xl font-bold cursor-pointer '> NETFLIX</h1>
      </Link>
        <div className='flex items-center justify-between p-4 gap-4'>
          <Link to="login">
            <button className='text-white' >Sign in</button>
            </Link>
            <Link to="signup">
            <button className="bg-red-500 text-white font-bold py-2 px-4 rounded">Sign up</button>
            </Link>
        </div>
    </div>
  )
}

export default Navbar