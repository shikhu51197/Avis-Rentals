import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/Products.css"
import Faq from "react-faq-component";
// import { MDBAccordion, MDBAccordionItem, MDBContainer } from "mdb-react-ui-kit";


const getData=(page,sort)=>{
    return fetch(`https://lime-silly-goshawk.cyclic.app/cars?page=${page}&limit=24&sort=${sort}`)
    .then((res)=>res.json())
}

const Products = () => {

  const [data,setData]=useState([])
  const [page,setPage]=useState(1)
  const [sort,setSort]=useState("ace") 
//   const [price,setPrice]=useState([])  

  

  useEffect(()=>{
   getData(page,sort).then((res)=>setData(res))
  },[page,sort])

//   console.log("data",data)
//   console.log("results",data.results)



  const QuickLook=(id)=>{
    console.log("quicklook",id)
   

  
}


  const viewDetails=(id)=>{
    console.log("view Details",id)
  }

//////////////////////////////////

const price1=(min,max)=>{
  console.log("price")
  let filterPrice=data.results.filter((el)=>{
    return (el.value>min && el.value<max)

    // {
    //    return el
    // //    console.log(el)
    // }

    
})

setData(filterPrice)

console.log("filterPrice",filterPrice)
}

console.log("data",data.results)




// console.log(data)

const FILTER = {
    title: "",
    rows: [
        {
            title: "Price,",
            content: <ul type="circle" >
            <li onClick={()=>price1(10000,19000)} >
            $10,000 – $19,999(1)
            </li>
            <li onClick={()=>price1(20000,29000)} >
            $20,000 – $29,999(74)
            </li>
            <li onClick={()=>price1(30000,39000)} >
            $30,000 – $39,999(1)
            </li>
            
            </ul>,
        },
        {
            title: "Model",
            content: <ul type="circle" >
            <li>
            Camaro(8)
            </li>
            <li>
            Mustang(68)
            </li>
            
            
            </ul>,
        },
        {
            title: "Location,",
            content: <ul type="circle" >
            <li>
            AVIS Car Sales Houston South(2)
            </li>
            <li>
                Avis Car Sales Colton(3)
            </li>
            <li>
            Avis Car Sales Glendale(2)
            </li>
            <li>
            Avis Car Sales Jacksonville(2)
            </li>
            </ul>,
        },
        {
            title: "Inventory Type",
            content:
            <ul type="circle" >
            <li>
           ALL
            </li>
            <li>
            On The Lot(23)
            </li>
            <li>
            Ultimate Test Drive(53)
            </li>
            
            </ul>,
        },
        
        {
            title: "Make",
            content: <ul type="circle" >
            <li>
            Chevrolet(8)
            </li>
            <li>
            Ford
            </li>
            
            </ul>,
        },
        
        {
            title: "Trim",
            content: <ul type="circle" >
            <li>
            1Lot
            </li>
            <li>
            Ecoboost(3)
            </li>
            <li>
            EcoBoost Premium(1)
            </li>
            <li>
            GT Premium(1)
            </li>
            
            </ul>,
        },
        
        {
            title: "Mileage",
            content: <ul type="circle" >
            <li>
            30,000 or less(1)
            </li>
            <li>
            40,000 or less(4)
            </li>
            
            </ul>,
        },
        {
            title: "Year",
            content: <ul type="circle" >
            <li>
            2022(1)
            </li>
            <li>
            2021
            </li>
            
            </ul>,
        },
        {
            title: "Drive Line",
            content: <ul type="circle" >
            <li>
            ROW
            </li>
            <li>
            OTHER
            </li>
            
            </ul>,
        },
        {
            title: "Exterior Color",
            content: <ul type="circle" >
            <li>
            Black⬛
            </li>
            <li>
            White⬜
            </li>
            <li>
            Grey🟫
            </li>
            <li>
            Blue🟦
            </li>
            
            </ul>,
        },
        {
            title: "Interior Color",
            content: <ul type="circle" >
            <li>
            Black⬛
            </li>
            <li>
            White⬜
            </li>
            <li>
            Grey🟫
            </li>
            <li>
            Blue🟦
            </li>
            
            </ul>,
        },
        {
            title: "Features",
            content: <ul type="circle" >
            <li>
            Alloy Wheels(76)
            </li>
            <li>
            Android Auto(21)
            </li>
            <li>
            Apple CarPlay(21)
            </li>
            
            </ul>,
        },
    ],
}


const styles = {
    // bgColor: 'white',
     
    titleTextColor: "grey",
    rowTitleColor: "black",
    rowContentColor: 'rgb(50, 50, 50)',
    // arrowColor: "red",
};

const config = {
    // animate: true,
    // arrowIcon: "+",
    openOnload: 0,
    collapseIcon: "_",
    expandIcon: "+"
    // tabFocus: true
};


//////////////////////////////////

    return (
        <div className="bodyDiv" >
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
                                <option  value="desc" > &nbsp;&nbsp; Price: Low to high </option>
                                <option  value="asc"> &nbsp;&nbsp; Price: High to Low </option>
                            </select>
                        </div>
                    </div>
                </div>
                
            </div>




            <div className="mainbox" >
                <div className="filterdiv" >
        {/* ///////////////////////////////////////////////////////////////////// */}

        <Faq
                data={FILTER}
                styles={styles}
                config={config}
            />
        
        {/* ///////////////////////////////////////////////////////////////////// */}
                </div>

                <div className="carsdiv" >
                
                
                   
                   {
                    data?.results?.map((el)=>(
                        <div key={el._id } className="cars" >
                            <div className="testdrive" >Ultimate Test Drive</div>
                            <img src={el.image} alt={el.model} />
                            <div><Link to={`/cars/${el._id}`} > <button className="quickLook" onClick={()=>QuickLook(el.id)} >Quick Look</button></Link> 
                            <Link to={`/cars/${el._id}`} ><button className="ViewDetails" onClick={()=>viewDetails(el._id)} >View Details</button> </Link> </div>
                             <h5>{el.model}</h5>
                             <p className="miles" > {el.miles}. {el.color} </p>
                             <hr />
                             <p className="availibilty" >⌛ {el.Availibilty} {el.date} </p>
                             <hr />
                             <h3><span> Your Price $ </span> {el.value}</h3>
                        </div>
                    ))
                   }

                </div>
            </div>



            <div className="pagination" >
               
               <button className="btn"  disabled={page===1}  onClick={()=>setPage(page-1)}   > - </button>
               <input className="pageno" value={page}/>
               <button className="btn"  onClick={()=>setPage(page+1)} > + </button>
            </div>
            
            <div className="footer" >
                     
                  <button onClick={()=>setSort("asc")} >asc</button>   
                  <button>{sort}</button>   
                  <button onClick={()=>setSort("desc")} >dsc</button>   

               footer
            </div>
            
        </div>
        </div>
    );
};

export default Products;