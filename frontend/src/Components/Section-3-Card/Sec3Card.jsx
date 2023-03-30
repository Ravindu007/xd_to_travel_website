import React from 'react'
import "./card.scss"

const Sec3Card = ({location}) => {

  return (
    <div className='sec3Card col-sm-12 col-md-4'>
        <div className="card-3">
          <div className="card-body">
            <img src={location.imgSrc} alt="" className='card-img-top' /> 
          </div>
          <div className="card-footer">
            <div className="col-12 location-price">
              <p>{location.place}</p>
              <p>{location.price}</p>
            </div>
            <div className="col-12">
              <p>{location.trip}</p>
            </div>
          </div>
        </div>
      
    </div>
  )
}

export default Sec3Card