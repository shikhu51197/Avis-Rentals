import React from 'react'
import {Routes , Route} from 'react-router-dom'
import SignUp from '../Components/SignUp';
import Payment from '../Pages/payment';
import Paymenth from '../Pages/paymenth';
import Products from '../Pages/Products';
import ReservationPage from '../Pages/ReservationPage';
import SingleProduct from '../Pages/SingleProduct';
import Homepage from './../Components/Homepage';
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/reservation" element={<ReservationPage/>}></Route>
        <Route path="/cars/paymenth/:id" element={<Paymenth/>}></Route>
        <Route path="/cars" element={<Products/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/cars/:id" element={<SingleProduct/>} />
        <Route path="/cars/payment/:id" element={<Payment/>} />
        
      </Routes>
    </div>
  )
}

export default AllRoutes
