// 创建store的核心
import {createStore} from 'redux'
import count_reducer from './count_reducer'
export default createStore(count_reducer)

