import  {createStore, applyMiddleware,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import count_reducer from './reducers/count'
import person_reducer from './reducers/person'
// 处理异步要用到 applyMiddleware中间件 和redux-thunk 
const allReduces = combineReducers({
    count:count_reducer,
    person:person_reducer
})
export default createStore(allReduces,applyMiddleware(thunk))