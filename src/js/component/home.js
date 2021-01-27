import React, { useState } from "react";
import { Light } from "./light.jsx";
import PropTypes from "prop-types";
//create your first component
//

export const Home = () => {
	const [colorg, setColor] = useState("red");
	const [colorgs, setColors] = useState("red");
	//	let color2 = "green";
	const clickAlert = () => {
		if (colorg == "red") {
		}
		//setColor("black");
	};
	return (
		<div className="text-center mt-5">
			<Light color={colorg} click={() => clickAlert()} />
			<Light color={colorg} click={() => clickAlert()} />
			<Light color={colorg} click={() => clickAlert()} />
		</div>
	);
};
