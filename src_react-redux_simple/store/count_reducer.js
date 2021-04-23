
// 为 count组件创建的reduccer
import {INCREMENT,DECREMENT} from './constant'
const initState = 10
export default function count_reducer(preState=initState,action){
    console.log('@',action)
    const {type,data} = action
    switch (type) {
        case INCREMENT:
            return preState+data
        case DECREMENT:
            return preState-data
        default:
            return preState
    }
}
