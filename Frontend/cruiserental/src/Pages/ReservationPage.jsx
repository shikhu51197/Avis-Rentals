import { Box, Button, Collapse, SkeletonCircle, SkeletonText, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { get_Data } from '../Redux/action'
import "../styles/reservation.css"

const ReservationPage = () => {
    const state=useSelector((data)=>{return data})
    console.log(state)

    const { isOpen, onToggle } = useDisclosure()
    
    const [view,setView]=useState("View Vehicle Information")

    const dispatch=useDispatch()

  let location=localStorage.getItem("loc")
  const pick=localStorage.getItem("pick")
  const drop=localStorage.getItem("drop")

  console.log(location)

    useEffect(()=>{
        dispatch(get_Data({location}))
    },[])
    if(state.isLoading){
      return(
        <>
         <Box padding='6' boxShadow='lg' bg='white'>
        <SkeletonCircle size='300' />
        <SkeletonText mt='4' noOfLines={6} spacing='5' skeletonHeight='5' />
</Box>
<Box padding='6' boxShadow='lg' bg='white'>
        <SkeletonCircle size='300' />
        <SkeletonText mt='4' noOfLines={6} spacing='5' skeletonHeight='5' />
</Box>
        </>
      )
    }
    if(state.isError){
      return(
        <>
          <h1>Error Occured Please Check If your Backend Is up And Running</h1>
        </>
      )
    }
  return (
    <div>
        <h1 className='rsr'>Reserve one of these vehicles while they are still available at {pick}</h1>
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
                
              </div>
              <div>
                  
                  <h1 className='brnd'>{ele.brand}</h1>

                  <p>{ele.model}</p>
                  <p>seater: {ele.seats}</p>
                  <Button color={"red"} onClick={onToggle}>{view}</Button>

      <Collapse in={isOpen} animateOpacity>
        <Box
          p='40px'
          color='black'
          mt='4'
          bg='#e7e7e7'
          rounded='md'
          shadow='md'
        >
        <h1>Body Color: {ele.bodycolor}</h1>
        <h1>Wheel: {ele.wheel}</h1>

        <h1>Seats: {ele.seats}</h1>
        <h1>AC: {ele.Ac}</h1>
        <h1>Type: {ele.type}</h1>
        </Box>
      </Collapse>

                  
                </div>
              <div className="r-mainr">
              <div>
              <div>
                <h1 > <span className='inr'>$: </span>  {Math.floor((ele.value-ele.value*0.1)/82)}.00</h1>
                <Link to={`/cars/payment/${ele._id}`}><button className='btn1'>PAY NOW</button></Link> 
                <p>And save <span className='inr'>10%</span> </p>
              </div>
              <div>
                <h1 ><span className='inr'>$: </span> {Math.floor(ele.value/82)}.00</h1>
               <Link to={`/cars/paymenth/${ele._id}`}><button className='btn2'>PAY LATER</button></Link> 
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