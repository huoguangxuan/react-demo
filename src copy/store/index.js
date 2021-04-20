import {createStore} from 'redux'
const fn = function(){
    return {
        msg:'store'
    }
}
const store = createStore(fn)

export default store