import { createStore, applyMiddleware } from 'redux';
import combineReducers from "../reducers/index";
import thunk from "redux-thunk";

let store = createStore(combineReducers, applyMiddleware(thunk))

export default store