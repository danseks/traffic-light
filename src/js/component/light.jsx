import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";

export const Light = props => {
	return <button className={props.class} onClick={props.click} />;
};

Light.propTypes = {
	click: PropTypes.string,
	class: PropTypes.string
};
