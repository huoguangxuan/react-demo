import  {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {count_reducer} from './reducers'
// 处理异步要用到 applyMiddleware中间件 和redux-thunk 
export default createStore(count_reducer,applyMiddleware(thunk))