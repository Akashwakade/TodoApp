import { GET_TODO, POST_TODO } from "./action.type"

const initState={
    
    data:[],
    
  


}

export const TodoReducer=(state=initState,{type,payload})=>{
  switch(type){
    case GET_TODO:{
        return{...state,isLoading:true}
    }
    case POST_TODO:{
        return{...state,}
    }
    default:{
      return{...state}
    }
  }
}