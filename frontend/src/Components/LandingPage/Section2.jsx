import React, { useState } from 'react'
import Sec2Card from '../Section-2-Card/Sec2Card'

const Section2 = () => {

  const [cards, setCards] = useState([
    {imgSrc:"/section-2/c1.png",title:"Calculated Weather " , details:"Built Wicket longer admire do barton vanity itself do in it.", id:1},
    {imgSrc:"/section-2/c4.png",title:"Best Flights " , details:"Engrossed listening. Park gate sell they west hard for the.", id:2},
    {imgSrc:"/section-2/c2.png",title:"Local Events" , details:"Barton vanity itself do in it. Preferd to men it engrossed listening. ", id:3},
    {imgSrc:"/section-2/c3.png",title:"Customization" , details:"We deliver outsourced aviation services for military customers", id:4},
  ])
  return (
    <div className='section-2 mb-5' style={{textAlign:"center"}}>
      <p>CATEGORY</p>
      <p className='section-title'>We Offer Best Services</p>
      <div className="card-deck">
        {cards.map((card)=>(
          <Sec2Card key={card.id} card={card}/>
        ))}
      </div>
    </div>
  )
}

export default Section2