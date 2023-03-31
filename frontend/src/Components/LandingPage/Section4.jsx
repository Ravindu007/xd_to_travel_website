import React, { useState } from 'react'
import './Section4.scss'
import FeactureCard from '../Section-4-Card/FeactureCard'

const Section4 = () => {
  const [features, setFeatures] = useState([
    {logo:'/section-4/i1.png', title:'Choose Destination', details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.', id:1},
    {logo:'/section-4/i2.png', title:'Make Payment', details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.', id:2},
    {logo:'/section-4/i3.png', title:'Reach Airport on Selected Date', details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.', id:3}
  ])

  return (
    <div className='section-4 mt-4'>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-7">
            <p className='section-title'>Book Your Next Trip</p>
            <p className='section-title'>In 3 Easy Steps</p>
            <div className="features">
              {features && features.map((feature)=>(
                <FeactureCard key={feature.id} feature={feature}/>
              ))}
            </div>
          </div>
          <div className="col-5">
            <div className="card">
              <div className="card-body">
                <img src="/section-4/staticCard/card.png" alt="" className='img-fluid mx-auto d-block'/>
                <p>Trip to Greece</p>
                <p>14-29 June  by Robbin joseph</p>
                <img src="/section-4/staticCard/OPTIONS.png" alt="" />
                <div className="row">
                  <div className="col-12 card-body-footer">
                  <img src="/section-4/staticCard/building 1.png" alt="" />
                  <p>24 people going</p>
                  </div>
                </div>
              </div>
              {/* card-top */}
              <div className="card-top d-none d-md-block">
                <div className="container">
                  <div className="row">
                    <div className="col-2">
                      <img src="/section-4/staticCard/ss1.png" alt="" />
                    </div>
                    <div className="col-10">
                      <p>Ongoing</p>
                      <p>Trip to Rome</p>
                      <div className="progress">
                        <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40"
                        aria-valuemin="0" aria-valuemax="100" style={{width:"40%"}}>
                          {/* progress bar */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section4