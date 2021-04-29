import  {createStore, applyMiddleware,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import count_reducer from './reducers/count'
import person_reducer from './reducers/person'
// 处理异步要用到 applyMiddleware中间件 和redux-thunk 

// combinReduces 传入的对象就是redux帮我们保存的总的对象
const allReducer = combineReducers({
    he:count_reducer,
    ren:person_reducer
})

export default createStore(allReducer,applyMiddleware(thunk))