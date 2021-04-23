
import React from 'react'
import {connect} from 'react-redux'
import {increment,decrement,asyncIncrement} from '../store/actions' 

class Counter extends React.Component {
    state = {
        car:'c63'
    }

    componentDidMount(){
        console.log(this.props)
    }
    render(){
        const {count,increment,decrement,asyncIncrement} = this.props
        return (
            <div>
                <button onClick={()=>asyncIncrement(1,500)}>async +</button> <button onClick={()=>increment(1)}>+</button> <button onClick={()=>decrement(1)}>-</button> &nbsp;&nbsp;<span>{count}</span>
                <hr/>
            </div>
        )
    }
}

// connect 接收俩参数 mapStateToProps 和 mapDispatchToProps
export default connect(
    (state)=>({count:state}),
    //mapDispatchToProps 一般写法
    // (dispatch)=>({
    //     increment,
    //     decrement,
    //     asyncIncrement
    // })
    //mapDispatchToProps 简写的方法
    {
        increment,
        decrement,
        asyncIncrement
})(Counter)
