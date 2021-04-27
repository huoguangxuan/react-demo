
import {ADD_PERSON} from '../constant'
// 创建一个增加人的action
// actions 就是 将来 用dispatch 要调用的 方法 ,会接受一个data
export function addPerson(data) {
    return  {
        type:ADD_PERSON, 
        data
    }
}