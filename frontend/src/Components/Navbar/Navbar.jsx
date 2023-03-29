import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav 
      class="navbar navbar-expand-lg navbar-light bg-light"
      style={{paddingLeft:"100px", paddingRight:"100px"}}
    >
    <a class="navbar-brand" href="#">
      <img src="/Logo.png" alt="" />
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul 
        class="navbar-nav"
        style={{display:"flex",justifyContent:"space-around", width:"100%"}}
        >
          <li class="nav-item active">
            <Link className='nav-link' to="#">Destinations</Link>
          </li>
          <li class="nav-item active">
            <Link className='nav-link' to="#">Hotels</Link>
          </li>
          <li class="nav-item active">
            <Link className='nav-link' to="#">Flites</Link>
          </li>
          <li class="nav-item active">
            <Link className='nav-link' to="#">Bookings</Link>
          </li>
          <li class="nav-item active">
            <Link className='nav-link' to="#">Login</Link>
          </li>
          <li class="nav-item active">
            <Link 
              className='nav-link mr-2'
              to="#"
              style={{border:"1px solid", borderRadius:"8px",width:"100%"}}
              >Signup</Link>
          </li>
          <select 
            className='nav-select bg-light'
            style={{color:"#000"}}
          >
            <option value="">EN</option>
          </select>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar