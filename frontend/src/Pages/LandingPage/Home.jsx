import React from 'react'
import Section1 from '../../Components/LandingPage/Section1'
import Section2 from '../../Components/LandingPage/Section2'
import Section3 from '../../Components/LandingPage/Section3'
import Section4 from '../../Components/LandingPage/Section4'

const Home = () => {
  return (
    <div className='home'>
      <div className="section-1">
        <Section1/>
      </div>
      <div className="section-2">
        <Section2/>
      </div>
      <div className="section-3">
        <Section3/>
      </div>
      <div className="section-4">
        <Section4/>
      </div>
    </div>
  )
}

export default Home