import { combineReducers } from "redux";
// import { createDevTools } from 'redux-devtools';
import { createStore } from "redux";
import { billingReducer } from "./reducers";


const rootReducer = combineReducers({ billing: billingReducer });

export default createStore(rootReducer);
