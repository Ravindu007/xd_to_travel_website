import React from 'react'
import "./card.scss"

const Sec2Card = ({card}) => {  
  return (
    <div className="col-sm-12 col-md-3" style={{display:"flex", justifyContent:"center"}}>
      <div className="card-2" style={{ height:"347px", width:"267px"}}>
        <div className="card-body" style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
          <img src={card.imgSrc} alt="" className='mx-auto d-block img-fluid' />
          <p>{card.title}</p>
          <p>{card.details}</p>
        </div>
      </div>
    </div>
  )
}

export default Sec2Card