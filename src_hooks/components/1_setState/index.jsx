import React, { Component } from 'react'

export default class index extends Component {
    state = {count:0}
    plusOne= ()=>{
        
        this.setState({count:this.state.count+1},()=>{
            console.log(this.state)
        })

        // 函数式setState(updater,cb)

        // 对象式setState是函数式setState的语法糖

        // this.setState(state=>({count:state.count+1}))
    }

    
   
    render() {
        const {state:{count},plusOne} = this
        return (
            <div>
               <div>合：{count}</div>

               <br/>
               <br/>
               <input onClick={plusOne} type="button" value="加"/>
            </div>
        )
    }
}
