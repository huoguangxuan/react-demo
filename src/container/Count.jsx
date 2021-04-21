
import CountUI from '../components/Counter'
import {connect} from 'react-redux'
import {increment,decrement,asyncIncrement} from '../store/actions' 

function mapStateToProps(state){
    console.log('mapState',state)
    return {
        count:state
    }
}
function mapDispatchToProps(dispatch){
    return {
        increment:(data)=>dispatch(increment(data)),
        decrement:(data)=>dispatch(decrement(data)),
        asyncIncrement:(data,time)=> dispatch(asyncIncrement(data,time))
    }
}
// connect 接收俩参数 mapStateToProps 和 mapDispatchToProps
export default connect(mapStateToProps,mapDispatchToProps)(CountUI)
