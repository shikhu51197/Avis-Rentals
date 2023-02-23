import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import "./singleProduct.css"

const getData=(id)=>{
    return fetch(`http://localhost:8080/cars/${id}`)
    .then((res)=>res.json())
}




const SingleProduct = () => {
 
    const [data,setData]=useState({})

    const params=useParams()
    const id=params.id

    //  console.log(typeof (id))
    
   let day=["mon","tue","wed","thu","fri","sat","sun"]

   let d=new Date();


    useEffect(()=>{
        getData(id).then((res)=>setData(res))
    },[])

    console.log(data)

    return (
        <div className="singleProduct" >
            
            <div className="detailsbox" >

            <div className="imagebox" >  
                   <img src={data.image} alt={data.model} />
            </div>


            <div className="details" >
               <h1>{data.model}</h1>
               <div className="time" >
               
                <p  > ⌛ <span>{data.Availibilty}  </span> for Test drive &nbsp;&nbsp; {data.date} </p>
                <p>Call 855-850-0040 To Start Your Ultimate Test Drive or to request more information</p>

               </div>
               <div className="location" >
               
                <p> <img style={{width:"3%"}} src="https://cdn-icons-png.flaticon.com/128/535/535188.png" alt="" /> Located at {data.location}</p>
                 

               </div>
               <div className="cardetails" >
               <div>
               <p> <span> {data.color}  </span>  :{data.bodycolor}</p>
                <p> <span> Ac</span> : {data.Ac}</p>
                <p> <span> Engine</span> : {data.Engine}</p>
                {/* <p> <span> Transmission</span> : {data.Transmission}</p> */}
                <p> <span> brand</span> : {data.brand}</p>
               </div>
                
                <div>

                <p> <span> fuelcapacity </span> : {data.fuelcapacity}</p>
                <p> <span> miles </span> : {data.miles}</p>
                <p> <span> seats </span> : {data.seats}</p>
                {/* <p> <span> smallbag </span> : {data.smallbag}</p> */}
                <p> <span> type </span> : {data.type}</p>
                </div>
                <h3 className="price" ><span> Your Price $ </span> {data.value}</h3>
                

               </div>

                <div className="paybuttons" >
                    <button> PAY LATER </button>
                   <Link to={`/cars/payment/${data.id}`} ><button className="paybutton" > PAY NOW </button> </Link>
                </div>
            
            </div>
            </div>


            <div className="text" >
                {/* new arivals */}
                 <div>
                 <p>
                 <span style={{fontSize:"21px",fontWeight:"500"}} > Estimated </span>
                     Loan term, monthly payment and APR are all based on approved credit. Your actual APR,
                     monthly payment and loan term could change depending on your actual credit and amount financed.</p>
                  
                  <p>
                    <span style={{fontSize:"21px",fontWeight:"500"}} > Please note : </span>
                     If SiriusXM is available as one of the entertainment features on the pre-owned vehicle, SiriusXM Satellite radio trial duration with used vehicle purchase is only for 3 months, irrespective of what shows in the details below.
                  </p>
                 </div>
                 <div>
                    <h3> Included Packages & Options </h3>
                    <p>Welcome Package <span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {data.value/100} </span> </p>
                    <img src="https://pictures.dealer.com/a/aviscarsalesgroup/1757/1ca78ee3e0bfd28a8180a2bb530f9ec7x.jpg" alt="" /></div> 

               

            </div>


            <div>
                {/* footer */}
                <h1>Footer</h1>
                {/* {d.getDate()+1}
                <br />
                {day[d.getDay()]+1} */}
            </div>
            
        </div>
    );
};

export default SingleProduct;