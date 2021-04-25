import React,{Component} from 'react'
import {addPerson} from '../store/actions/person'
import {connect} from 'react-redux'
class Person extends Component {
	
    render(){
				const {personList,addPerson,count} = this.props
        return (
					<div>
					<h2>person组件-he:{count}</h2>
					<button onClick={()=>addPerson({name:'zhangsna',age:11})}>+</button>
					{
						personList.map(p=>{
							return ( <p>{p.name}-----------{p.age}</p>	)
						})
					}
					</div>
				)
        
    }
}

export default connect(
	(state)=>({
		personList:state.person,
		count:state.count
	}),
	{
		addPerson
	}
	
	)(Person)