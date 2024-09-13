import { SET_THEME } from "../actionType"

const intitalstate='light'

export const reducer=(state=intitalstate,action)=>{
    switch(action.type){
        case SET_THEME:
            return action.payload
            default :
            return state
    }
}