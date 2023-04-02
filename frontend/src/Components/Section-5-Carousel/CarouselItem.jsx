import React from 'react'
import "./item.scss"

const CarouselItem = ({review}) => {
  return (
    <div data-interval="4000" className={`carousel-item ${review.className}`}>
      <div className="carousel-item-top">
        <img src={review.img} alt="" className='img-fluid'/>
      </div>
      <p>{review.message}</p>
      <p>{review.name}</p>
    </div>
  )
}

export default CarouselItem