import {GET_DATA,IsError,Isloading,Reserved} from "./actionTypes"



const initialState={
    data:[],
    res:[],
    isLoading:false,
    isError:false,

}

export const GlobalReducer=(state=initialState,{type,payload})=>{
    switch(type){
        case GET_DATA:{
            return {
                ...state,
                data:payload,
                isLoading:false,


            }
        }
        case Reserved:{
            const filtered=payload.data.filter((ele)=> {return ele.location===payload.value})
                return{
                    ...state,
                    data:payload.data,
                    res:filtered,
                    isLoading:false,

                }
        }
        case Isloading:{
            return{
                ...state,
                isLoading:true
            }
        }
        case IsError:{
            return{
                ...state,
                isError:true
            }
        };

        default:return state
    }
  
}