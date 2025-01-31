import React from 'react'
import {Link} from "react-router-dom"
import "../styles/navbar.css"
const Navbar = () => {
  return (
    <div>
      <nav className='navbar'>
              <Link className="nav-link-left" to="/">Home</Link>
              <Link className='nav-link-left' to="/books">Books</Link>
              <Link className='nav-link-right' to="/login">Login</Link>
      </nav>
         


    </div>
  )
}

export default Navbar
