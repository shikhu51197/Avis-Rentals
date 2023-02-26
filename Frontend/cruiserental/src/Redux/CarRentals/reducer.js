import {DELETE, GET_DATA,IsError,Isloading,POST_DATA,Reserved} from "./actionTypes"



const initialState={
    data:[],
    res:[],
    isLoading:false,
    isError:false,

}

export const reducer=(state=initialState,{type,payload})=>{
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
        case POST_DATA:{
            return{
                ...state,
                res:[...state.res,payload]
            }
        };
        
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
        case DELETE:{
            return{
                ...state,

            }
        }

        default:return state
    }
  
}