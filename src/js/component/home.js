import React, { useState } from "react";
import { Light } from "./light.jsx";
import PropTypes from "prop-types";

export const Home = () => {
	const [lightColor, setLightColor] = useState({
		red: "redOff",
		yellow: "yellowOff",
		green: "greenOff"
	});

	return (
		<div className="traffic-light text-center mt-5 bg-dark offset-5 col-2">
			<Light
				class={"btn circle " + lightColor.red}
				click={() =>
					setLightColor({
						red: "red",
						yellow: "yellowOff",
						green: "greenOff"
					})
				}
			/>
			<Light
				class={"btn circle " + lightColor.yellow}
				click={() =>
					setLightColor({
						red: "redOff",
						yellow: "yellow",
						green: "greenOff"
					})
				}
			/>
			<Light
				class={"btn circle " + lightColor.green}
				click={() =>
					setLightColor({
						red: "redOff",
						yellow: "yellowOff",
						green: "green"
					})
				}
			/>
		</div>
	);
};
