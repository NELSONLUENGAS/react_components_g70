import React from 'react';
import PropTypes from 'prop-types';

import Alert from 'react-bootstrap/Alert';

export const AlertVite = ({ color, msg, show, setShow }) => {
	return (
		<>
			<Alert
				show={show}
				variant={color}
			>
				<Alert.Heading>{color.toUpperCase()}</Alert.Heading>
				<p>{msg}</p>
			</Alert>
		</>
	);
};

AlertVite.propTypes = {
	color: PropTypes.oneOf(['success', 'warning', 'danger', '']).isRequired,
	msg: PropTypes.string.isRequired,
	show: PropTypes.bool.isRequired,
	setShow: PropTypes.func.isRequired,
};
