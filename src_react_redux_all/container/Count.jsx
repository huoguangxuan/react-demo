import React,{Component} from 'react'
// 要用到store 数据 要用到react-redux connect 进行连接
import {connect} from 'react-redux'
import {increment,decrement,asyncAdd} from '../store/actions/count'

class Count extends Component {
    add = ()=>{
        console.log('+')
    }
    render(){
        const {count,increment,decrement,asyncAdd} = this.props
        return (
            <div>
                <h2>{count}</h2>
                <button onClick={()=>increment(1)}>+</button>
                <button onClick={()=>decrement(1)}>-</button>
                <button onClick={()=>asyncAdd(1,500)}>async + </button>
                <br/>
                <br/>
                <hr/>
            </div>
            
        )
    }
}

export default  connect(
    (state)=>({count:state.he}),
    {
        increment,
        decrement,
        asyncAdd
    }
    )(Count)