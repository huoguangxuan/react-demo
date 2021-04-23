
import {INCREMENT,DECREMENT} from './constant'
export const increment = (data)=>({type:INCREMENT,data}) 
export const decrement = (data)=>({type:DECREMENT,data}) 
export const asyncAdd = (data,time)=>{
    // 异步的action 需要返回一个函数,同时方法被调用时默认传入了dispatch
    return (dispatch)=>{
        setTimeout(()=>{
            dispatch(increment(data))
    },time)
}
}