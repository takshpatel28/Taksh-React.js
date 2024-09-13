import { DECREMENT, INCREMENT, RESET } from "../actionType"

export const Increment=()=>{
    return{type:INCREMENT,payload:1}
}
export const Decrement=()=>{
    return{type:DECREMENT,payload:1}
}
export const Reset=()=>{
    return{type:RESET,payload:0}
}