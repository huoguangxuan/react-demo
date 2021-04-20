
// 为 count组件创建的reduccer
/**
 * 
 * @param {*} preState 
 * @param {*} action 
 */
const initState = 99
export default function count_reducer(preState=initState,action){
    console.log(preState,action)
    const {type,data} = action
    switch (type) {
        case 'increment':
            return preState+data
        case 'decrement':
            return preState-data
        default:
            return preState
    }
}
