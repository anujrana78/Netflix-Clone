import React from 'react'

const Navbar = () => {
  return (
    <div>
        <h1 className='text-red-600 text-4xl font-bold cursor-pointer'> Netflix</h1>
        <div className='flex'>
            <button>Sign in</button>
            <button className="bg-red-500 text-white font-bold py-2 px-4 rounded">Sign up</button>
        </div>
    </div>
  )
}

export default Navbar