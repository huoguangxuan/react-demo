import React,{Component} from 'react'

import {connect} from 'react-redux'
class Person extends Component {
	
    render(){
				const {personList } = this.props
        return (
					<div>
					<h2>person组件</h2>
					{
						personList.map(p=>{
							return ( <p>{p.name}-----------{p.age}</p>	)
						})
					}
					</div>
				)
        
    }
}

export default connect((state)=>({personList:state}))(Person)