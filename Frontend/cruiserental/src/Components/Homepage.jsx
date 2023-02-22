import React from 'react'
import "../styles/homepage.css"
const Homepage = () => {
  let date= Date.now()
  return (
    <div>
      <div className="h-head">
        <h1>FIND YOUR BEST CAR RENTAL WITH AVIS</h1>
        <div className="reservation">
          <div>
            <input type="text" placeholder='Enter your pickup location or zip code' />
            <input type="date" placeholder={date} />
            <input type="time" placeholder='noon'/>
          </div>
          <div>
            <input type="text" placeholder='Return to same location' />
            <input type="date" placeholder={date} />
            <input type="time" placeholder='noon'/>
          </div>
          <div>
          <select name="" id="">
            <option value="">Age: 25+</option>
            <option value="24">24</option>
            <option value="24">23</option>
            <option value="24">22</option>
            <option value="24">21</option>
            <option value="24">20</option>
            <option value="24">19</option>
          </select>
          <select name="" id="">
            <option value="usa">Residency: U S A</option>
            <option value="india">INDIA</option>
            <option value="russia">Russia</option>
            <option value="UK">United Kingdom</option>
          </select>
            
          </div>

        </div>
      </div>
    </div>
  )
}

export default Homepage
