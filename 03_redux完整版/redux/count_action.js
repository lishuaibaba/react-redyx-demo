import {INCREMENT,DECREMENT} from "./constant"


export const creatIncrementAction = data => ({type:INCREMENT,data});
export const creatDecrementAction = data => ({type:DECREMENT,data});