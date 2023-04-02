import React from 'react'
import "./Section7.scss"

const Section7 = () => {
  return (
    <div className='section7'>
      <div className="email-box">
        <p>Subscribe to get information, latest news and other</p>
        <p> interesting offers about Cobham</p>
        <form>
          <input 
            type="text" 
            className='form-control'
            placeholder = "Your Email"  
          />
          <button
            className='btn ml-2'
          > 
            Subscribe
          </button>
        </form>
      </div>
    </div>
  )
}

export default Section7