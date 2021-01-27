import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
// const red = "red";
// const black
export const Light = props => {
	// const [color, setColor] = useState("black");
	// const [light, setLight] = useState(props.value);
	// // useEffect(
	// // 	() => {
	// // 		light ? setColor(props.colorg) : setColor("black");
	// // 	},
	// // 	[light]
	// // );

	return (
		<button className={"btn circle " + props.color} onClick={props.click} />
	);
};

Light.propTypes = {
	color: PropTypes.string,
	value: PropTypes.bool,
	click: PropTypes.string
};
