import React from "react";
import PropTypes from "prop-types";

const Counter = props => {
	return (
		<>
			<div>
				<div className="fourthDigit">{props.fourthDigit}</div>
				<div className="thirdDigit">{props.thirdDigit}</div>
				<div className="secondDigit">{props.secondDigit}</div>
				<div className="firstDigit">{props.firstDigit}</div>
			</div>
		</>
	);
};

Counter.propTypes = {
	firstDigit: PropTypes.number,
	secondDigit: PropTypes.number,
	thirdDigit: PropTypes.number,
	fourthDigit: PropTypes.number
};

export default Counter;
