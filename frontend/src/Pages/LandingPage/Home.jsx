import React from 'react'
import Section1 from '../../Components/LandingPage/Section1'
import Section2 from '../../Components/LandingPage/Section2'
import Section3 from '../../Components/LandingPage/Section3'
import Section4 from '../../Components/LandingPage/Section4'
import Section5 from '../../Components/LandingPage/Section5'
import Section6 from '../../Components/LandingPage/Section6'
import Section7 from '../../Components/LandingPage/Section7'

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
      <div className="section-5">
        <Section5/>
      </div>
      <div className="section-6">
        <Section6/>
      </div>
      <div className="section-7">
        <Section7/>
      </div>
    </div>
  )
}

export default Home