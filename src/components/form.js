import React from "react";

const Form = props => (
		<form onSubmit={props.stationMethod}>
			<div className="form_h4">
			<h4>Let`s go</h4>
			</div>
			<div className="form_input">
			<input type="text" name="station" placeholder="Station"/>
			<button>Get stop info</button>
			</div>
		</form>
);

export default Form;