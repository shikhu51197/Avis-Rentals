import React from 'react'
import {Routes , Route} from 'react-router-dom'
import ReservationPage from '../Pages/ReservationPage';
import Homepage from './../Components/Homepage';
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/reservation" element={<ReservationPage/>}></Route>
      </Routes>
    </div>
  )
}

export default AllRoutes
