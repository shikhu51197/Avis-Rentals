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
            
        }
        case Reserved:{

        }
        case Isloading:{

        }
        case IsError:{

        };

        default:return state
    }
  
}