import React from 'react'
import store from '../store'

export default class Counter extends React.Component {
    state = {
        car:'c63'
    }
    decrement = ()=>{
        // 通知 redux 加1 默认不更新视图
        store.dispatch({type:'decrement',data:1})
    }
    increment = ()=>{
        let {state:{count}} = this;
        count++
        this.setState({
            count
        })
    }
    // 异步加载
    asyncincrement=()=>{
        let {state:{count}} = this;
        count++
        setTimeout(()=>{
            this.setState({
                count
            })  
        },1000)
          
    }
    // componentDidMount(){
    //     console.log(store)
    //     // 检测redux中状态改变，只要改变就更新试图
    //     store.subscribe(()=>{
    //         this.setState({})
    //     })
    // }
    render(){
        const {increment,decrement,asyncincrement} = this
        return (
            <div>
                <button onClick={asyncincrement}>async +</button> <button onClick={increment}>+</button> <button onClick={decrement}>-</button> &nbsp;&nbsp;<span>{store.getState()}</span>
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