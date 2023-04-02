import React, { useState } from 'react'
import CarouselItem from './CarouselItem'

import "./Carousel.scss"

const Carousel = () => {
  const [reviews, setReviews] = useState([
    {img:"./section-5/carousel/r1.png", message:"“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”  ", name:"Mike taylor",className:"active", id:1 },
    {img:"./section-5/carousel/r2.png", message:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis incidunt reiciendis blanditiis voluptatibus rerum ducimus harum, minima sunt quas maiores, nobis saepe eius. Magnam natus eaque molestias rerum quia atque?", name:"Bob marley",className:"", id:2}
  ])
 
  return (
    <>
      <div className="carousel slide carousel-fade" data-ride="carousel" id='controller'>
        <div className="carousel-inner">
          {/* carousel simgle item */}
          {reviews && reviews.map((review)=>(
            <CarouselItem key={review.id} review={review}/>
          ))}
        </div>
      </div>
      
    </>
  )
}

export default Carousel