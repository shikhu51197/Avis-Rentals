import axios from "axios"
import {GET_DATA,IsError,Isloading,Reserved,DELETE,POST_DATA} from "./actionTypes"

export const get_Data=(location)=>async(dispatch)=>{
    dispatch({type:Isloading})
    try{
        let res
        
        if(location!==""){
             res=await axios.get("https://lime-silly-goshawk.cyclic.app/cars")
        }
        else{
             res= await axios.get(`https://lime-silly-goshawk.cyclic.app/cars?location=${location}`)
        }
       
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
        dispatch({type:IsError})
    }
}

export const Delete_data=(id)=>async(dispatch)=>{
    dispatch({type:Isloading})
    try{
        let res=await axios.delete(`https://lime-silly-goshawk.cyclic.app/cars/delete/${id}`)
        dispatch({
            type:DELETE
        })
    }catch(err){
        dispatch({type:IsError})
    }
}

export const post_data=(data)=>async(dispatch)=>{
    dispatch({type:Isloading})
    try{
        let res=await axios.post("https://lime-silly-goshawk.cyclic.app/cars",data)
        dispatch({
            type:POST_DATA,
            payload:res.data
        })
    }catch(err){
        dispatch({type:IsError})
    }
}