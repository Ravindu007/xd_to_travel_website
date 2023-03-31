import React, { useState } from 'react'
import Sec3Card from '../Section-3-Card/Sec3Card'
import "./Section3.scss"

const Section3 = () => {

  // data set
  const [locations, setLocations] = useState([
    {imgSrc: "/section-3/i1.png", place:"Rome, Italty", price:"$5,42k", trip:"10 Days Trip", id:1},
    {imgSrc: "/section-3/i2.png", place:"London, UK", price:"$4.2k", trip:"12 Days Trip", id:2},
    {imgSrc: "/section-3/i3.png", place:"Full Europe", price:"$15k", trip:"28 Days Trip", id:3},
  ])

  return (
    <div className='section-3'>
      <div className="container">
        <p>CATEGORY</p>
        <p className='section-title'>We Offer Best Services</p>
        <div className="card-deck">
          {locations && locations.map((location)=>(
            <Sec3Card key={location.id} location={location}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Section3