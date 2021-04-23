
/*
    该文件专门为Count组件生成action对象
**/
 
import store from '.';
import {INCREMENT,DECREMENT} from './constant'
export const increment = (data) =>({type:INCREMENT,data});
export const decrement = (data) =>({type:DECREMENT,data});
export const asyncIncrement = (data,time) =>{
    return ()=>{
        setTimeout(()=>{
            store.dispatch(increment(data))
        },time)
    }
};
