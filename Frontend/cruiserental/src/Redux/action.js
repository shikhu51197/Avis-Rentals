import axios from "axios"
import {GET_DATA,IsError,Isloading,Reserved} from "./actionTypes"

export const get_Data=()=>async(dispatch)=>{
    dispatch({type:Isloading})
    try{
       let res= await axios.get("https://fakestoreapi.com/products")
       console.log(res.data)
       dispatch({
        type:GET_DATA,
        payload:res.data
       })
       
    }
    catch(err){
        dispatch({type:IsError})
    }
}

export const get_filterData=(value)=>async(dispatch)=>{
    dispatch({type:Isloading})
    try{
        let res=await axios.get("https://fakestoreapi.com/products")
        dispatch({
            type:Reserved,
            payload:{data:res.data,value}
        })
    }catch(err){

    }
}