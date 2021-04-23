// 创建store的核心
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import count_reducer from './count_reducer'

// 需要redux-thunk 来支持 异步事件 同时需要借助 applyMiddleware 
export default createStore(count_reducer,applyMiddleware(thunk))

