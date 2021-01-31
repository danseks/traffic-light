import React, { useState } from "react";
import { Light } from "./light.jsx";
import PropTypes from "prop-types";

export const Home = () => {
	const [lightColor, setLightColor] = useState({
		black: "off",
		yellow: "off",
		green: "off"
	});

	return (
		<div className="traffic-light text-center mt-5 bg-dark offset-5 col-2">
			<Light
				class={"btn circle " + lightColor.black}
				className="red"
				click={() =>
					setLightColor({
						black: "red",
						yellow: "off",
						green: "off"
					})
				}
			/>
			<Light
				class={"btn circle " + lightColor.yellow}
				click={() =>
					setLightColor({
						black: "off",
						yellow: "yellow",
						green: "off"
					})
				}
			/>
			<Light
				class={"btn circle " + lightColor.green}
				click={() =>
					setLightColor({
						black: "off",
						yellow: "off",
						green: "green"
					})
				}
			/>
		</div>
	);
};
