
import {INCREMENT,DECREMENT} from './constant'
const initState = 0
// reducer(a,b) ab两个参数 分别为 prestate,action
export function count_reducer(preState=initState,action){
    // action 里面包含了 类型和data
    console.log('@',action)
    const {type,data} = action
    switch (type) {
        case INCREMENT:
            return preState+data
        case DECREMENT:
            return preState-data
        default:
            return preState;
    }
}