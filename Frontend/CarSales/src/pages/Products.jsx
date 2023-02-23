import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./style.css"

const getData=()=>{
    return fetch(`http://localhost:8080/cars?page=1&limit=25`)
    .then((res)=>res.json())
}

const Products = () => {

  const [data,setData]=useState([])


  useEffect(()=>{
   getData().then((res)=>setData(res))
  },[])

//   console.log(data)



  const QuickLook=(id)=>{
    // console.log("quicklook",id)
   

  
}


  const viewDetails=(id)=>{
    console.log("view Details",id)
  }

    return (
        <div className="container" >

            <div className="info" >
                <div> <h3> Shop Used Cars and Fleet Vehicles for Sale </h3> </div>

                <div className="filterDetails" >
                    <div className="filterDetails1">Show Only</div>
                    <div className="filterDetails2" >
                        <div> <span> {data.length}  </span> Vehicles Found</div>
                        <div>
                            <select className="selectTag" >
                                <option value="">&nbsp;&nbsp; Sort by</option>
                                <option value="near to far"> &nbsp;&nbsp;  Distence: Near to Far</option>
                                <option value="far to near"> &nbsp;&nbsp; Distence: Far to Near</option>
                                <option value="Earliest"> &nbsp;&nbsp; Availability: Earliest</option>
                                <option value="old"> &nbsp;&nbsp; Year: Old to New</option>
                                <option value="new"> &nbsp;&nbsp; Year: New to Old</option>
                                <option value="Milage_low"> &nbsp;&nbsp; Milage: Low to High</option>
                                <option value="Milage_high"> &nbsp;&nbsp; Milage: High to Low </option>
                                <option value="price_high"> &nbsp;&nbsp; Price: Low to high </option>
                                <option value="price_low"> &nbsp;&nbsp; Price: High to Low </option>
                            </select>
                        </div>
                    </div>
                </div>
                
            </div>




            <div className="mainbox" >
                <div className="filterdiv" >filters
                </div>

                <div className="carsdiv" >
                
                   
                   {
                    data?.map((el)=>(
                        <div key={el.id } className="cars" >
                            <div className="testdrive" >Ultimate Test Drive</div>
                            <img src={el.image} alt={el.model} />
                            <div><Link to={`/cars/${el.id}`} > <button className="quickLook" onClick={()=>QuickLook(el.id)} >Quick Look</button></Link> 
                            <button onClick={()=>viewDetails(el.id)} >View Details</button> </div>
                             <h5>{el.model}</h5>
                             <p className="miles" > {el.miles}. {el.color} </p>
                             <hr />
                             <p className="availibilty" >{el.Availibilty} {el.date} </p>
                             <hr />
                             <h3><span> Your Price $ </span> {el.value}</h3>
                        </div>
                    ))
                   }

                </div>
            </div>



            <div className="pagination" >
               pagination and other buttons
            </div>
            
            <div className="footer" >
               footer
            </div>
            
        </div>
    );
};

export default Products;