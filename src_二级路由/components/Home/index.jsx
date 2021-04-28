import React, { Component } from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
import MyNavLink from '../MyNavLink'
import Message from './Message'
import News from './News'
export default class index extends Component {
    render() {
        return (
            <div>
                Home
                <div>
                    <MyNavLink to="/home/news">News</MyNavLink>
                    <MyNavLink to="/home/message">Message</MyNavLink>
                </div>
                <div>
                    <Switch>
                        <Route path="/home/news" component={News}></Route>
                        <Route path="/home/message" component={Message}></Route>
                        <Redirect to='/home/message'/>
                    </Switch>
                </div>
            </div>
        )
    }
}
