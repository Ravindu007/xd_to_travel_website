import React from 'react'
import Carousel from '../Section-5-Carousel/Carousel'

const Section5 = () => {
  return (
    <div className='Section5 mt-5'>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <p>Testimonials</p>
            <p className='section-title'>What People Say</p>
            <p className='section-title'>About Us.</p>
          </div>
          <div className="col-sm-12 col-md-6">
            <Carousel/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section5