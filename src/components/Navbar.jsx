import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-6 z-(100) w-full absolute'>
        <h1 className='text-red-600 lg:text-4xl text-4xl font-bold cursor-pointer z-10'> NETFLIX</h1>
        <div className='flex items-center justify-between p-4 gap-4'>
            <button className='text-white'>Sign in</button>
            <button className="bg-red-500 text-white font-bold py-2 px-4 rounded">Sign up</button>
        </div>
    </div>
  )
}

export default Navbar