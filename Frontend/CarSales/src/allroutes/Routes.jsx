
// import React from 'react';
import {Routes,Route} from "react-router-dom"
import Payment from "../pages/Payment";
import Products from "../pages/Products";
import SingleProduct from "../pages/SingleProduct";
const AllRoutes = () => {
    return (
        <Routes>
             <Route path="/cars" element={<Products/>} />
             <Route path="/cars/:id" element={<SingleProduct/>} />
             <Route path="/cars/payment/:id" element={<Payment/>} />
        </Routes>
    );
};  

export default AllRoutes;