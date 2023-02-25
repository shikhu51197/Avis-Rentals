import React from 'react'
import {Routes , Route} from 'react-router-dom'
import Payment from '../Pages/Payment';
import ReservationPage from '../Pages/ReservationPage';
import Homepage from './../Components/Homepage';
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/reservation" element={<ReservationPage/>}></Route>
        <Route path="/cars/payment/:id" element={<Payment/>}></Route>
      </Routes>
    </div>
  )
}

export default AllRoutes
