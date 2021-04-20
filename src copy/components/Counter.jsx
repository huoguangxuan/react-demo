import React from 'react'


export default class Counter extends React.Component {
    state = {
        count:0
    }
    decrement = ()=>{
        let {state:{count}} = this;
        count--
        this.setState({
            count
        })
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
    //     console.log(this)
    // }
    render(){
        const {state:{count},increment,decrement,asyncincrement} = this
        return (
            <div>
                <button onClick={asyncincrement}>async +</button> <button onClick={increment}>+</button> <button onClick={decrement}>-</button> &nbsp;&nbsp;<span>{count}</span>
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