import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav 
      className="navbar navbar-expand-lg navbar-light bg-light"
      style={{paddingLeft:"100px", paddingRight:"100px"}}
    >
    <a className="navbar-brand" href="#">
      <img src="/Logo.png" alt="" />
    </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul 
        className="navbar-nav"
        style={{display:"flex",justifyContent:"space-around", width:"100%"}}
        >
          <li className="nav-item active">
            <Link className='nav-link' to="#">Destinations</Link>
          </li>
          <li className="nav-item active">
            <Link className='nav-link' to="#">Hotels</Link>
          </li>
          <li className="nav-item active">
            <Link className='nav-link' to="#">Flites</Link>
          </li>
          <li className="nav-item active">
            <Link className='nav-link' to="#">Bookings</Link>
          </li>
          <li className="nav-item active">
            <Link className='nav-link' to="#">Login</Link>
          </li>
          <li className="nav-item active">
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