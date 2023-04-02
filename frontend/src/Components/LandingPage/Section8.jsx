import React from 'react'
import {Link} from "react-router-dom"

import "./Section8.scss"

const Section8 = () => {
  return (
    <div className='Section8'>
      <div className="container">
        <div className="row">
          <div className="col-3 brand">
            <p id='brand'>Jadoo</p>
            <p id='details'>Book your trip in minute, get full Control for much longer.</p>
            </div>
          <div className="col-2 company">
            <p className='heading'>Company</p>
            <Link to="/" className='link'>About</Link>
            <Link to="/" className='link'>Careers</Link>
            <Link to="/" className='link'>Mobile</Link>
          </div>
          <div className="col-2 contact">
            <p className='heading'>Contact</p>
            <Link to="/" className='link'>Help/FAQ</Link>
            <Link to="/" className='link'>Press/</Link>
            <Link to="/" className='link'>Affiliates</Link>
          </div>
          <div className="col-2 more">
            <p className='heading'>More</p>
            <Link to="/" className='link'>Airline Fees</Link>
            <Link to="/" className='link'>Airline</Link>
            <Link to="/" className='link'>Low fair tips</Link>
          </div>
          <div className="col-3 external-links">
            <div className="social-media">
              <img src="./section-8/fb.png" alt="" className='img-fluid'/>
              <img src="./section-8/twitte.png" alt="" className='img-fluid'/>
              <img src="./section-8/insta.png" alt="" className='img-fluid'/>
            </div>
            <p className='ml-3'>Discover our apps</p>
            <div className="apps">
              <img src="./section-8/Google Play.png" alt="" className='img-fluid'/>
              <img src="./section-8/Play Store.png" alt="" className='img-fluid'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section8