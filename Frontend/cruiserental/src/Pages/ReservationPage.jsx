import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { get_Data } from '../Redux/action'


const ReservationPage = () => {
    const state=useSelector((data)=>{return data})
    console.log(state)
    const dispatch=useDispatch()
  let location=localStorage.getItem("loc")
  const pick=localStorage.getItem("pick")
  const drop=localStorage.getItem("drop")

  console.log(location)

    useEffect(()=>{
        dispatch(get_Data({location}))
    },[])
  return (
    <div>
        <h1>Reserve one of these vehicles while they are still available at {pick}</h1>
        <div className="r-main">
        {
          state.data.map((ele)=>{
            
            return(
              <>
              <div className="r-main-sub">
              <div className="r-mainl">
                <div className="r-img">
                  <img src={ele.image} alt="img" />

                </div>
                <div>
                  
                  <h1>{ele.brand}</h1>

                  <p>{ele.model}</p>
                  <p>seater: {ele.seats}</p>
                  <h2 onClick={()=>{}}>View Vehicle Information</h2>
                </div>
              </div>
              <div className="r-mainr">
              <div>
              <div>
                <h1>INR: {Math.floor(ele.value-ele.value*0.1)}</h1>
                <button onClick={()=>{}}>PAY NOW</button>
                <p>And save 10%</p>
              </div>
              <div>
                <h1>INR: {ele.value}</h1>
               <Link to={`/cars/payment/${ele._id}`}><button>PAY LATER</button></Link> 
              </div>
                
              </div>
               
              </div>
          </div>
              </>
            )
          })
        }

        <div className="r-foot">
          <p>Fees and taxes are not included in the car rates displayed above.</p>
<p>The makes/models shown above are examples only. Avis is unable to guarantee a specific make/model. For Specialty, makes and models can be reserved online where available, but may vary by location. All US cars have automatic transmission. US and Canadian vehicles are 100% smoke-free.</p>
        </div>
          
        </div>
    </div>
  )
}

export default ReservationPage