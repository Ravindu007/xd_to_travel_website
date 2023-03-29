import React from 'react'
import "./Section1.scss"

const Section1 = () => {
  return (
    <div className='section-1' style={{marginTop:"100px"}}>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <p style={{fontSize:"20px"}}>Best Destinations around the world</p>
            <p style={{fontSize:"84px", lineHeight:1.2, fontWeight:800}}>
              <span>Travel, enjoy</span>
              <span>and live a new</span>
              <span>and full life</span>
            </p>
            <p>
            Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.
            </p>
            <div className="buttons" style={{display:"flex", height:"60px"}}>
              <button 
                className='btn btn-warning mr-5'
                style={{height:"40px"}}
              >
                Find out more
              </button>
              <button
                style={{display:"flex", alignItems:"center", border:"0.2px solid grey", height:"40px", color:"#000",backgroundColor:"#fff"}}
              >
                <img src="/Play button.png" alt="" className='img-fluid mx-auto d-block' style={{width:"52px", height:"52px"}}/>
                  Play Demo
                </button>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <img src="/Image.png" alt="" className='mx-auto img-fluid d-none d-md-block'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section1