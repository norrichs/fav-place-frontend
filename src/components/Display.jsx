import React from "react";
import {useHistory} from "react-router-dom"


const Display = (props) => {
	const history = useHistory()
	
	const handleClickNewPlace = () => {
		history.push("/form")
	}

	const loading = () => {
		return <h2>Loading</h2>;
	};
	const loaded = () => {
		const places = props.places.map((place, i) => {
			return (
				<article key={i}>
					<img src={place.img} alt={place.description} />
					<h2>{place.name}</h2>
					<h3>{place.description}</h3>
					<button>Edit</button>
				</article>
			);
		});
		return (
			<main>
				<h1>My Favorite Places</h1>
				<button onClick={handleClickNewPlace}>New Place</button>
				{places}
			</main>
		);
	};

	return props.places.length > 0 ? loaded() : loading();
};
export default Display;
