import React from "react";

const Station = props => (
	<div className="infoStation">
		{props.name &&
		<div>
			<p>Station name: {props.name}</p>
			<p>Latitude: {props.latitude}</p>
			<p>Longitude: {props.longitude}</p>
			<p>Station Code: {props.station_code}</p>
		</div>
		}
		<p className="error">{ props.error }</p>
	</div>
);

export default Station;