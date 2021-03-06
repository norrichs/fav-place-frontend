import "./App.css";
import React from "react";
import {Switch, Route} from "react-router-dom"
import Display from "./components/Display"
import Form from "./components/Form"
function App() {
	const url = "http://localhost:4500";
  const emptyPlace = {name:'',img:'',description:''}
	const [places, setPlaces] = React.useState([]);

  // Fetch data from database
	const getPlaces = () => {
		fetch(url + "/place")
			.then((response) => response.json())
			.then((data) => setPlaces(data));
	};

  // Initialize state
	React.useEffect(() => {
		getPlaces();
	}, []);


  // Handler functions
  const handleCreate = (newPlace) =>{
    console.log(newPlace)
    fetch(url + "/place/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPlace)
    }).then(() => {getDogs()})
  }
  const handleEdit = (place) => {
    console.log(place)
    fetch(url + "/place/" + place.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      }
      body: JSON.stringify(place)
    }).then(()=>{getDogs()})
  }
	return (
		<div className="App">
			<Switch>
				<Route exact path="/">
					<Display places={places}  />
				</Route>
				<Route path="/form">
					<Form handleCreate={handleCreate} handleEdit={handleEdit} place={emptyPlace}/>
				</Route>
			</Switch>
		</div>
	);
}

export default App;
