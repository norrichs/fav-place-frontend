import React from "react";
import {useHistory} from 'react-router-dom'
const Form = (props) => {
	let history = useHistory()
	const [formData, setFormData] = React.useState(props.place)


	// Handler functions
	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.id]: e.target.value
		})
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		props.handleCreate(formData)
		history.push("/")
	}
	const handleDelete
	return (

		<div>
			<h2>{props.title}</h2>
			<input onChange={handleChange} id="name" type="text" value={formData.name}/>
			<input onChange={handleChange} id="img" type="text" value={formData.img}/>
			<input onChange={handleChange} id="description" type="text" value={formData.description}/>
			<button onClick={handleDelete}>Delete</button><button onClick={handleSubmit}>Submit</button>
		</div>
	);
};
export default Form;
