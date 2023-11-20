import React from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
	const navigate = useNavigate();
	const handlerFormSubmit = async (event) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const data = {
			username: formData.get("username"),
			password: formData.get("password"),
			firstName: formData.get("firstname"),
			lastName: formData.get("lastname"),
		};

		const requestOptions = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
		};
		// 0lelplR (pass)
		// kminchelle (username)
		const response = await fetch(
			"https://dummyjson.com/users/add",
			requestOptions
		);
		const res = await response.json();
		navigate('/login')

	};

	return (
		<div>
			<div>
				<form action="" onSubmit={handlerFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12, justifyContent: 'center', alignItems: 'center' }}>
					<label htmlFor="username">User name</label>
					<input type="text" name="username" />
					<label htmlFor="firstname">First name</label>
					<input type="text" name="firstname" />
					<label htmlFor="lastname">Last name</label>
					<input type="text" name="lastname" />
					<label htmlFor="password">Password</label>
					<input type="password" name="password" />
					<button>Login</button>
				</form>
			</div>
		</div>
	);
};

export default Register;
