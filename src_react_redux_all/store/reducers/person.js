import {ADD_PERSON} from '../constant'
const initState = [{name:'zhansan',age:25}]
// reducer(a,b) ab两个参数 分别为 prestate,action
export default function count_reducer(preState=initState,action){
    // action 里面包含了 类型和data
    const {type,data} = action
    switch (type) {
        case ADD_PERSON:
            return [data,...preState]
        default:
            return preState
    }
}