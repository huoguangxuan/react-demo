import React,{Component} from 'react'
import {connect} from 'react-redux'
import {addPerson} from '../store/actions/person'
class Person extends Component {

	addPerson = ()=>{
		const {value:age} = this.ageRef
		const {value:name} = this.nameRef
		const {addPerson} = this.props
		addPerson({name,age})
	}
    render(){
		const {personList,count} = this.props
		
        return (
					<div>
						<input type="text" placeholder="name" ref={(c)=>{this.nameRef = c}}/>
						<input type="text" placeholder="age"  ref={(c)=>{this.ageRef = c}}/>
						<button onClick={this.addPerson}>add person</button>
					<h2>person组件--------{count}</h2>
					{
						personList.map((p,i)=>{
							return ( <p key={i}>{p.name}-----------{p.age}</p>	)
						})
					}
					</div>
				)
        
    }
}

// export default Person
export default connect(
	(state)=>({
		count:state.he,
		personList:state.ren}),
	{addPerson}
)(Person)