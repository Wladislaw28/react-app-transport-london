import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Station from "./components/Station";
import MoreInfo from "./components/moreinfo";

const API_ID = "590700fc";
const API_KEY = "1ba91f927ac511bff67d85173bac72f8";

class App extends React.Component{

	state = {
		name: undefined,
		latitude: undefined,
		longitude: undefined,
		station_code: undefined,
		error: undefined
	};

	gettingStation = async (e) => {

		e.preventDefault();
		let station = e.target.elements.station.value;

		if (station){

			const api_url = await fetch(`http://transportapi.com/v3/uk/places.json?query=${station}&type=train_station&app_id=${API_ID}&app_key=${API_KEY}`);
			const data = await api_url.json();

			this.setState({
				name: data.member[0].name,
				latitude: data.member[0].latitude,
				longitude: data.member[0].longitude,
				station_code: data.member[0].station_code,
				error: undefined
			});
	} else {
			this.setState({
				name: undefined,
				latitude: undefined,
				longitude: undefined,
				station_code: undefined,
				error: "Enter station name"
			});
		}
	};

	render() {
		return (
			<div className="wrapper">

				<div className="info">
					<div className="container-fluid">
						<div className="row no-gutters">
								<Info />
						</div>
					</div>
				</div>

				<div className="moreinfo">
					<div className="container-fluid">
						<div className="row no-gutters">
							<MoreInfo />
						</div>
					</div>
				</div>

				<div className="form" id="form">
					<div className="container-fluid">
						<div className="row no-gutters">
							<Form stationMethod={this.gettingStation}/>
							<Station
								name = {this.state.name}
								latitude = {this.state.latitude}
								longitude = {this.state.longitude}
								station_code = {this.state.station_code}
								error = {this.state.error}
							/>
						</div>
					</div>
				</div>

			</div>
		);
	}
}

export default App;
