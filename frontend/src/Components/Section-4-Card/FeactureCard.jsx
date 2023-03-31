import React from 'react'
import "./featureCard.scss"

const FeactureCard = ({feature}) => {
  return (
    <div className='FeatureCard'>
      <div className="row">
        <div className="col-1">
          <img src={feature.logo} alt="" />
        </div>
        <div className="col-11">
          <p><strong>{feature.title}</strong></p>
          <p>{feature.details}</p>
        </div>
      </div>
    </div>
  )
}

export default FeactureCard