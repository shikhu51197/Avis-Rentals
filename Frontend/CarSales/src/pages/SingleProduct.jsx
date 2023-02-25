import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import "./singleProduct.css"

const getData=(id)=>{
    return fetch(`https://lime-silly-goshawk.cyclic.app/cars/${id}`)
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

    console.log(data[0])

    return (
        <div className="singleProduct" >
            
            <div className="detailsbox" >

            <div className="imagebox" >  
                   <img src={data[0]?.image} alt={data[0]?.model} />
            </div>


            <div className="details" >
               <h1 className="ModelHeading" >{data[0]?.model}</h1>
               <div className="time" >
               
                <p  > ⌛ <span>{data[0]?.Availibilty}  </span> for Test drive &nbsp;&nbsp; {data[0]?.date} </p>
                <p>Call 855-850-0040 To Start Your Ultimate Test Drive or to request more information</p>

               </div>
               <div className="location" >
               
                <p> <img style={{width:"3%"}} src="https://cdn-icons-png.flaticon.com/128/535/535188.png" alt="" /> Located at {data.location}</p>
                 

               </div>
               <div className="cardetails" >
               <div>
               <p> <span> {data[0]?.color}  </span>  :{data[0]?.bodycolor}</p>
                <p> <span> Ac</span> : {data[0]?.Ac}</p>
                <p> <span> Engine</span> : {data[0]?.Engine}</p>
                {/* <p> <span> Transmission</span> : {data[0]?.Transmission}</p> */}
                <p> <span> brand</span> : {data[0]?.brand}</p>
               </div>
                
                <div>

                <p> <span> fuelcapacity </span> : {data[0]?.fuelcapacity}</p>
                <p> <span> miles </span> : {data[0]?.miles}</p>
                <p> <span> seats </span> : {data[0]?.seats}</p>
                {/* <p> <span> smallbag </span> : {data[0]?.smallbag}</p> */}
                <p> <span> type </span> : {data[0]?.type}</p>
                </div>
                <h3 className="price" ><span> Your Price $ </span> {data[0]?.value}</h3>
                

               </div>

                <div className="paybuttons" >
                <Link to={`/cars/payment/${data[0]?._id}`} >  <button className='paylater'   >   PAY LATER </button></Link>
                   <Link to={`/cars/payment/${data[0]?._id}`} ><button     className="paybutton" > PAY NOW </button> </Link>
                   
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
                    <p>Welcome Package <span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {data[0]?.value/100} </span> </p>
                    <img src="https://pictures.dealer.com/a/aviscarsalesgroup/1757/1ca78ee3e0bfd28a8180a2bb530f9ec7x.jpg" alt="" /></div> 

               

            </div>


            
            
        </div>
    );
};

export default SingleProduct;