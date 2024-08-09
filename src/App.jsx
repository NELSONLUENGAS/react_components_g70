import './App.css';
import { AlertVite } from './components/AlertVite';
import { FormVite } from './components/FormVite';
import { useState } from 'react';

function App() {
	const [formData, setFormData] = useState({
		name: '',
		username: '',
		email: '',
		password: '',
		repeatPassword: '',
	});

	const [formStatus, setFormStatus] = useState({
		color: '',
		msg: '',
	});

	const [showAlert, setShowAlert] = useState(false);

	const handleOnChange = (event) => {
		const { name, value } = event.target;

		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleOnSubmit = (event) => {
		event.preventDefault();
		const { name, username, email, password, repeatPassword } = event.target;

		const form = {
			name: name.value,
			username: username.value,
			email: email.value,
			password: password.value,
			repeatPassword: repeatPassword.value,
		};

		handleValidateForm(form);

		setShowAlert(true);

		setTimeout(() => {
			setShowAlert(false);
		}, 5000);
	};

	const handleValidateForm = ({
		name,
		username,
		email,
		password,
		repeatPassword,
	}) => {
		const formErrors = {};

		if (!name || !username || !email || !password) {
			setFormStatus({
				color: 'danger',
				msg: 'Todos los campos son obligatorios',
			});
		} else if (password !== repeatPassword) {
			setFormStatus({
				color: 'warning',
				msg: 'Credenciales incorrectas',
			});
		} else if (name && username && email && password) {
			setFormStatus({
				color: 'success',
				msg: 'Registro éxitoso',
			});
		}

		// switch (form) {
		// 	case !form.name:
		// 		formErrors['name'] = 'Escribe el nombre';
		// 		break;

		// 	case !form.username:
		// 		formErrors['username'] = 'Escribe el username';
		// 		break;

		// 	case !form.email:
		// 		formErrors['email'] = 'Escribe el email';
		// 		break;

		// 	case !form.password:
		// 		formErrors['password'] = 'Escribe el password';
		// 		break;

		// 	case !form.repeatPassword:
		// 		formErrors['repeatPassword'] = 'Escribe el password repeat';
		// 		break;

		// 	case form.repeatPassword !== form.password:
		// 		formErrors['repeatPasswordWrong'] = 'Las password no coinciden';
		// 		break;

		// 	default:
		// 		break;
		// }
	};

	return (
		<>
			<h1>My app forms</h1>
			<hr />
			<FormVite
				handleOnChange={handleOnChange}
				handleOnSubmit={handleOnSubmit}
			/>
			<AlertVite
				color={formStatus.color}
				msg={formStatus.msg}
				show={showAlert}
				setShow={setShowAlert}
			/>
		</>
	);
}

export default App;
