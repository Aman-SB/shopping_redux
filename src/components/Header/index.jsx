import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
      <nav className='flex items-center justify-between h-20 max-w-6xl mx-auto'>
        <Link to={"/"}>
            <div className='ml-5'>
                <div className='text-red-900 font-bold text-xl sm:text-2xl md:text-3xl'>
                     <h1>SHOPPING MACHINE</h1>
                </div>
            </div>
        </Link>
        <ul className='flex items-center space-x-6 text-gray-800 font-semibold'>
            <Link to={'/'}>
                <li className="cursor-pointer">Home</li>
            </Link>
            <Link to={'/cart'}>
                <li className="cursor-pointer">Cart</li>
            </Link>
        </ul>
      </nav>
    </div>
  )
}
