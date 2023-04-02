import React, { useState } from 'react'
import "./Section6.scss"

const Section6 = () => {
  const [sponsors, setSponsors] = useState([
    {logo:"./section-6/s1.png",id:1},
    {logo:"./section-6/s2.png",id:2},
    {logo:"./section-6/s3.png",id:3},
    {logo:"./section-6/s4.png",id:4},
  ])

  return (
    <div className='section6'>
      {sponsors && sponsors.map((sponsor)=>(
        <div className="item" key={sponsor.id}>
          <img src={sponsor.logo} alt="" />
        </div>
      ))}
    </div>
  )
}

export default Section6