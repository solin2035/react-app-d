


import {combineReducers } from "redux";
import count from "./count";
import { CHANGECITY } from "../actions";
import data from "./data";

// reducers 拆分 
const reducers =  combineReducers({
    count:count,
    num:count,
    city:(state='大武汉',action)=>{
        switch(action.type){

            case CHANGECITY:
            return action.city;
            break;

            default:
            return state;
            break;
        }
    },
    data:data
})

export default reducers;