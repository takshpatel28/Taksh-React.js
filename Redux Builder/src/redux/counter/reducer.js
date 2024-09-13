import { DECREMENT, INCREMENT, RESET } from "../actionType"

const intitalstate = {
    counter:0
}
export const reducer = (state = intitalstate, action) => {
    switch (action.type) {
        case INCREMENT:
            return { counter: state.counter + action.payload }
        case DECREMENT:
            return { counter: state.counter - action.payload }
        case RESET:
            return { counter: 0 }
        default:
            return state
    }
}