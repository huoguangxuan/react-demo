import React, { Component } from 'react'
import {NavLink,Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
export default class index extends Component {
    render() {
        return (
            <div style={{display:'flex'}}>
                <div>
                <NavLink to="/home">HOME</NavLink>
                <NavLink to='/about'>ABOUT</NavLink>
                </div>
                <div>
                <Route path="/home" component={Home}></Route>
                <Route path="/about" component={About}></Route>
                </div>
            </div>
        )
    }
}
