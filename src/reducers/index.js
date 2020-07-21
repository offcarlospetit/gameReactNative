import { combineReducers } from 'redux';
import  ScoreReducer  from "./scoresReducer";
import  UserReducer from "./userReducer";
import  MainData  from "./MainData";

export default combineReducers({
    scores: ScoreReducer,
    user: UserReducer,
    words: MainData,
});


