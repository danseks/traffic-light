import React, { useState } from "react";
import { Light } from "./light.jsx";
import PropTypes from "prop-types";
//create your first component
//

export const Home = () => {
	const [lightColor, setLightColor] = useState({
		black: "off",
		yellow: "off",
		green: "off"
	});

	return (
		<div className="text-center mt-5">
			<Light
				class={"btn circle " + lightColor.black}
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
