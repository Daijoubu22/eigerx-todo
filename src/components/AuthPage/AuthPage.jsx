import React, {useEffect, useState} from 'react';
import styles from './AuthPage.module.scss';
import { useNavigate } from "react-router-dom";

function AuthPage() {
	const navigate = useNavigate();
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	useEffect(() => {
		const authData = localStorage.getItem('auth');
		if (authData) {
			navigate('/');
		}
	}, [navigate]);

	function onUsernameChange(event) {
		setUsername(event.target.value);
	}

	function onPasswordChange(event) {
		setPassword(event.target.value);
	}

	function onLogin(event) {
		event.preventDefault();
		const authData = {
			username,
			password,
		};
		localStorage.setItem('auth', JSON.stringify(authData));
		navigate('/');
	}

	return (
		<form className={styles.main}>
			<h1>Login</h1>
			<input
				type="text"
				placeholder="Username"
				value={username}
				onChange={onUsernameChange}
			/>
			<input
				type="password"
				placeholder="Password"
				value={password}
				onChange={onPasswordChange}
			/>
			<button type="submit" onClick={onLogin}>Login</button>
		</form>
	);
}

export default AuthPage;
