import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import "../styles/Payment.css"

const getData=(id)=>{
    return fetch(`https://lime-silly-goshawk.cyclic.app/cars/${id}`)
    .then((res)=>res.json())
}


const InitState={
    first:"",
    last:"",
    email:"",
    phone:"",
    click:""
}
const cardInitState={
    no:"",

    date:"",
    code:""
    
}

const Payment = () => {


    const [data,setData]=useState({})
    
    const [form,setForm]=useState(InitState)
    const [formData,setFormData]=useState([])

    const [card,setcard]=useState(cardInitState)

    const [craditcard,setcraditcard]=useState([])

    const params=useParams()
    const id=params.id
    const navigate=useNavigate()

    //  console.log(typeof (id))
    
   let returnday=["mon","tue","wed","thu","fri","sat","sun"]
   let picupday=["sun","mon","tue","wed","thu","fri","sat"]
   const months=["jan","feb","mar","aprl" , "may","jun","aug","sep","oct","nov","dec"]
   let d=new Date();
 

    useEffect(()=>{
        getData(id).then((res)=>setData(res))
    },[])

     console.log(data[0])

    const changeData=(e)=>{

     let value = e.target.value
     let name = e.target.name
     
     setForm({...form,[name]:value})


    }

    const submitData=(e)=>{
        e.preventDefault()

        const newData={...form,id:new Date().getTime().toString()}
        
        setFormData([...formData,newData])
        alert("your data is successfully submit")
        console.log(formData)
    }
    


    const changeCard=(e)=>{
        let value = e.target.value
        let name = e.target.name
        
        setcard({...card,[name]:value})
    }


    const submitCard=(e)=>{
        e.preventDefault()

        const newData={...card,id:new Date().getTime().toString()}
        
        setcraditcard([...craditcard,newData])
        alert("Order Successfully plased")
        navigate("/")

        // console.log(craditcard)
    }


    return (
        <div className="outerBox" >
        <div className="mainBox" >

            <div className="detailsdiv" >
                 <div className="imagediv" >
                     <div className="pickup" >
                        <div>
                            <p style={{color:"rgb(189, 5, 5)"}} >PICK-UP</p>
                            <p>{data[0]?.PickupLocation =="" ? data[0]?.location :data[0]?.PickupLocation}  </p>
                            <p className="date" > {picupday[d.getDay()]}, {months[d.getMonth()]}, {d.getDate()}, 12:00 PM  </p>
                        </div>
                         <div>
                         <p style={{color:"rgb(189, 5, 5)"}} >RETURN</p>
                            <p>{data[0]?.PickupLocation ==="" ? data[0]?.location :data[0]?.PickupLocation}  </p>
                         <p className="date" > {returnday[d.getDay()]}, {months[d.getMonth()]}, {d.getDate()+1}, 12:00 PM  </p>
                         </div>
                     </div>
                     <div className="img" >
                          <div>
                            <img src={data[0]?.image} alt={data[0]?.model} />
                          </div>
                          <div  >
                            <h3 className="carModel" >{data[0]?.model}</h3>
                            <span style={{marginLeft:"0px"}}  >{data[0]?.bodycolor}</span>
                            <span>{data[0]?.type}</span>
                            <span>{data[0]?.seats}</span>
                            <p>{data[0]?.Wheel}</p>
                          </div>
                     </div>

                 </div>
                 <div className="rate" >
                    <div className="priceList" >
                        <p> <span>Base rate :</span> <del> ${Math.floor(data[0]?.value/90)}.00 </del> ${data[0]?.value/100}</p>
                        <p> <span>Taxes & Fees :</span>  ${Math.floor(data[0]?.value/456)}.00</p>
                        <p> <span>Estimated Total (Prepaid) :</span>  ${Math.floor(data[0]?.value/456 +(data[0]?.value/100) )}.00</p>
                        
                        <p> <span>Total Savings :</span> <span> ${Math.floor(data[0]?.value/90-(data[0]?.value/100) )}.00 </span> </p>
                    </div>

                    <div className="benefite" >
                        <p><img src="https://as2.ftcdn.net/v2/jpg/05/19/99/45/1000_F_519994541_TABPKuZ1QFkxo7uo33kYa0CBLnQ5MUq6.jpg" alt="" />Unlimited Mileage</p>
                      <p>
                      <img src="https://as2.ftcdn.net/v2/jpg/05/19/99/45/1000_F_519994541_TABPKuZ1QFkxo7uo33kYa0CBLnQ5MUq6.jpg" alt="" />

                        $0 Due Today</p>
                      <p>
                      <img src="https://as2.ftcdn.net/v2/jpg/05/19/99/45/1000_F_519994541_TABPKuZ1QFkxo7uo33kYa0CBLnQ5MUq6.jpg" alt="" />
                         Free Cancellation</p>
                    </div>
                 </div>
            </div>


            <div className="formDiv" >
                <div className="form" >
                   <h1>YOUR INFORMATION</h1>
                 <form className="formdata" onSubmit={submitData} >
                   <p> <span> First Name : </span> <input required="true" type="text" name="first" onChange={changeData}  value={form.first} /> </p> 
                   <p> <span> Last Name : </span> <input required="true" type="text" name="last"  onChange={changeData} value={form.last} /> </p> 
                   <p> <span> Email : </span> <input required="true" type="email" name="email" onChange={changeData}  value={form.email} /> </p> 
                   <p> <span> Phone : </span> <input required="true" type="Number" name="phone" onChange={changeData}  value={form.phone} /> </p> 
                   {/* <p> <span> Phone : </span> <input type="Number" name="phone" onChange={changeData}  value={phone} /> </p>  */}
                     {/* <button onClick={()=>submitData()} > submit </button> */}
                     <input className="submit" type="submit" />
                 </form>
                </div>
                <div className="pay" >
                <div className="craditcard" >
                   <h1>CREDIT CARD & BILLING INFORMATION</h1>
                 <form className="carddata" onSubmit={submitCard} >
                   <p className="cardNo" > <span> Card Number : </span> <input required="true" type="text" name="no" onChange={changeCard}  value={card.no} /> </p> 
                   <p> <span> Expiration Date : </span> <input required="true" type="date" name="date"  onChange={changeCard} value={card.date} /> </p> 
                   <p> <span> Security Code</span> <input required="true" type="Number" name="code" onChange={changeCard}  value={card.code} /> </p> 
                     {/* <button onClick={()=>submitData()} > submit </button> */}
                     <input className="submit" type="submit" value="Pay" />
                 </form>
                </div>
                </div>
                
            </div>
        </div>
        </div>
    );
};

export default Payment;




