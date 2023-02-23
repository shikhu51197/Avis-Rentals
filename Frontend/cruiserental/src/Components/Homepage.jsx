import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "../styles/homepage.css"
import h1 from "../assest/h1.jpeg"
import h2 from "../assest/h2.jpeg"
import h3 from "../assest/h3.jpeg"
import t1 from "../assest/tik1.jpeg"
import t2 from "../assest/tik2.jpeg"
import t3 from "../assest/tik3.jpeg"
const Homepage = () => {
  let date= Date.now()
 

  const navigate=useNavigate()

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
          <select name="" id="location" onSelect={()=>{}}>
            <option value="usa">Residency: U S A</option>
            <option value="india">INDIA</option>
            <option value="russia">Russia</option>
            <option value="UK">United Kingdom</option>
          </select>
            
          </div>

        </div>
        <button onClick={()=>navigate("/reservation")}>Reserve</button>
      </div>

    {/* body */}
    <div>
    <h1>Get OUR BEST RATES when you book at Avis.com</h1>
    <span>PLUS</span><p>save up to 35% when you pay now!</p>
    <button>SAVE NOW</button>
    
    </div>
      
      <div className="h-mid">
        <h1>EXPLORE ALL THE WAYS YOU CAN SAVE</h1>
        <p>Save on your next daily or monthly car rental with these deals and offers.</p>
        <div className='h-mid-sub'>
          <div>
            <img src={h2} alt="img" />
            <h2>GET A FREE UPGRADE!</h2>
            <p>Travel in a roomier ride.</p>
            <h3>UPGRADE NOW</h3>
          </div>
          <div>
            <img src={h3} alt="img" />
            <h2>GET LAST MINUTE TRAVEL DEALS.</h2>
            <p>Use our last-minute car rental travel deals to save today.</p>
            <h3>SAVE NOW</h3>
          </div>
          <div>
            <img src={h1} alt="img" />
            <h2>EARN FREE DAYS!</h2>
            <p>Start earning FREE days by registering today.</p>
            <h3>REGISTER NOW</h3>
          </div>
        </div>
      </div>

      <div className="h-partner">
        <h1>BENEFITS FROM OUR TRAVEL PARTNERS</h1>
        <div className="h-part-sub">
          <div>
            <img src={t1} alt="" />
            <div>
            <p>Get up to 30% off with pay now plus 10% back in an Amazon Gift Card*</p>
            <h1>LEARN MORE</h1>
            </div>
          </div>
          <div>
            <img src={t2} alt="" />
            <div>
            <p>Learn more about our exclusive offers and savings for AARP members</p>
            <h1>LEARN MORE</h1>
            </div>
          </div>
          <div>
            <img src={t3} alt="" />
            <div>
            <p>Save up to 25% with Veteran's Advantage</p>
            <h1>LEARN MORE</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage
