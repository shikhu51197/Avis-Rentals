import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./Payment.css"

const getData=(id)=>{
    return fetch(`http://localhost:8080/cars/${id}`)
    .then((res)=>res.json())
}



const Payment = () => {


    const [data,setData]=useState({})
    
    const [form,setForm]=useState("")
    const params=useParams()
    const id=params.id

    //  console.log(typeof (id))
    
   let returnday=["mon","tue","wed","thu","fri","sat","sun"]
   let picupday=["sun","mon","tue","wed","thu","fri","sat"]
   const months=["jan","feb","mar","aprl" , "may","jun","aug","sep","oct","nov","dec"]
   let d=new Date();


    useEffect(()=>{
        getData(id).then((res)=>setData(res))
    },[])

    console.log(data)


    return (
        <div className="mainBox" >

            <div className="detailsdiv" >
                 <div className="imagediv" >
                     <div className="pickup" >
                        <div>
                            <p style={{color:"rgb(189, 5, 5)"}} >PICK-UP</p>
                            <p>{data.PickupLocation =="" ? data.location :data.PickupLocation}  </p>
                            <p className="date" > {picupday[d.getDay()]}, {months[d.getMonth()]}, {d.getDate()}, 12:00 PM  </p>
                        </div>
                         <div>
                         <p style={{color:"rgb(189, 5, 5)"}} >RETURN</p>
                            <p>{data.PickupLocation ==="" ? data.location :data.PickupLocation}  </p>
                         <p className="date" > {returnday[d.getDay()]}, {months[d.getMonth()]}, {d.getDate()+1}, 12:00 PM  </p>
                         </div>
                     </div>
                     <div className="img" >
                          <div>
                            <img src={data.image} alt={data.model} />
                          </div>
                          <div>
                            <h3>{data.model}</h3>
                            <span style={{marginLeft:"0px"}}  >{data.bodycolor}</span>
                            <span>{data.type}</span>
                            <span>{data.seats}</span>
                            <p>{data.Wheel}</p>
                          </div>
                     </div>

                 </div>
                 <div className="rate" >
                    <div className="priceList" >
                        <p> <span>Base rate :</span> <del> ${Math.floor(data.value/90)}.00 </del> ${data.value/100}</p>
                        <p> <span>Taxes & Fees :</span>  ${Math.floor(data.value/456)}.00</p>
                        <p> <span>Estimated Total (Prepaid) :</span>  ${Math.floor(data.value/456 +(data.value/100) )}.00</p>
                        
                        <p> <span>Total Savings :</span> <span> ${Math.floor(data.value/90-(data.value/100) )}.00 </span> </p>
                    </div>

                    <div className="benefite" >
                        <p> 
                            
                            Unlimited Mileage</p>
                      <p>  $0 Due Today</p>
                      <p> Free Cancellation</p>
                    </div>
                 </div>
            </div>


            <div className="formDiv" >
                <div className="form" >
                   <h1>YOUR INFORMATION</h1>
                 <form className="formdata">
                   <p> <span> First Name : </span> <input type="text" name="first" /> </p> 
                   <p> <span> Last Name : </span> <input type="text" name="last" /> </p> 
                   <p> <span> Email : </span> <input type="email" name="email" /> </p> 
                   <p> <span> Phone : </span> <input type="Number" name="phone" /> </p> 
                    
                 </form>
                </div>
            </div>
        </div>
    );
};

export default Payment;