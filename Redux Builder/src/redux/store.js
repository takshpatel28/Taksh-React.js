import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as CounterReducer } from "./counter/reducer";
import { reducer as ThemeReducer } from "./theme/reducer";
import { thunk } from "redux-thunk";

const rootreducer=combineReducers({CounterReducer,ThemeReducer})
export const store=legacy_createStore(rootreducer,applyMiddleware(thunk))