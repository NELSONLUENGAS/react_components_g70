import React from 'react';
import PropTypes from 'prop-types';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const FormVite = ({ handleOnChange, handleOnSubmit }) => {
	return (
		<Form onSubmit={handleOnSubmit}>
			<Form.Group
				className="mb-3"
				controlId="formViteName"
			>
				<Form.Label>Name</Form.Label>
				<Form.Control
					onChange={handleOnChange}
					type="text"
					name="name"
					placeholder="Enter your Name"
				/>
			</Form.Group>

			<Form.Group
				className="mb-3"
				controlId="formViteUsername"
			>
				<Form.Label>Username</Form.Label>
				<Form.Control
					onChange={handleOnChange}
					type="text"
					name="username"
					placeholder="Enter your username"
				/>
			</Form.Group>

			<Form.Group
				className="mb-3"
				controlId="formViteEmail"
			>
				<Form.Label>Email address</Form.Label>
				<Form.Control
					onChange={handleOnChange}
					type="email"
					name="email"
					placeholder="Enter your email"
				/>
			</Form.Group>

			<Form.Group
				className="mb-3"
				controlId="formVitePassword"
			>
				<Form.Label>Password</Form.Label>
				<Form.Control
					onChange={handleOnChange}
					type="password"
					name="password"
					placeholder="Password"
				/>
			</Form.Group>

			<Form.Group
				className="mb-3"
				controlId="formVitePasswordRepeat"
			>
				<Form.Label>Repeat Password</Form.Label>
				<Form.Control
					onChange={handleOnChange}
					type="password"
					name="repeatPassword"
					placeholder="Repeat Password"
				/>
			</Form.Group>

			<Button
				variant="primary"
				type="submit"
			>
				Submit
			</Button>
		</Form>
	);
};

FormVite.propTypes = {
	handleOnChange: PropTypes.func.isRequired,
	handleOnSubmit: PropTypes.func.isRequired,
};
