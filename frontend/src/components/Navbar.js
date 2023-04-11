import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
        <div className='container'>
            <Link to="/">
                <h1 className='text-3xl text-teal-600'>Exersize</h1>
            </Link>
        </div>
    </header>
  )
}

export default Navbar
