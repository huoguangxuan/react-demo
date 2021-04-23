import  {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import count_reducer from './reducers/count'
import person_reducer from './reducers/person'
// 处理异步要用到 applyMiddleware中间件 和redux-thunk 
export default createStore(person_reducer,applyMiddleware(thunk))