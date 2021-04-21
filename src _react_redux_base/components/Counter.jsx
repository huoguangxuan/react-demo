import React from 'react'
import store from '../store'
export default class Counter extends React.Component {
    state = {
        car:'c63'
    }

    componentDidMount(){
        console.log(this.props)
    }
    render(){
        const {increment,decrement,asyncIncrement} = this.props
        return (
            <div>
                <button onClick={()=>asyncIncrement(1,500)}>async +</button> <button onClick={()=>increment(1)}>+</button> <button onClick={()=>decrement(1)}>-</button> &nbsp;&nbsp;<span>{store.getState()}</span>
                <hr/>
            </div>

        )
    }
}
// const Counter = function(){
//     return (
//         <div>{count}</div>
//     )
// }