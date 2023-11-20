import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { globalProvider } from "./context/Context";

const Profile = () => {
	const { appUser } = useContext(globalProvider);
	const [user, setUser] = appUser;
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [userName, setUserName] = useState("");
	const [avatar, setAvatar] = useState("");

	const getSingleData = async () => {
		const response = await fetch(`https://dummyjson.com/users/${user.id}`);
		const result = await response.json();
		console.log(result);
		return result;
	};
	useEffect(() => {
		getSingleData().then((result) => {
			setFirstName(result.firstName);
			setLastName(result.lastName);
			setAvatar(result.image);
			setUserName(result.username);
		});
	}, []);
	const navigate = useNavigate();
	const handlerFormSubmit = async (event) => {
		event.preventDefault();
		const data = {
			username: userName,
			firstName: firstName,
			lastName: lastName,
		};

		const requestOptions = {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
		};
		// 0lelplR (pass)
		// kminchelle (username)
		const response = await fetch(
			`https://dummyjson.com/users/${user.id}`,
			requestOptions
		);
		const res = await response.json();
		console.log("user update", res);
	};

	return (
		<div>
			<div>
				<form action="" onSubmit={handlerFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12, justifyContent: 'center', alignItems: 'center' }}>
					<img src={avatar} alt={userName} width={200} height={200} />
					<label htmlFor="username">User name</label>
					<input
						type="text"
						name="username"
						value={userName}
						onChange={(e) => setUserName(e.target.value)}
					/>
					<label htmlFor="firstname">First name</label>
					<input
						type="text"
						name="firstname"
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
					/>
					<label htmlFor="lastname">Last name</label>
					<input
						type="text"
						name="lastname"
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
					/>
					<button>Save</button>
				</form>
			</div>
		</div>
	);
};

export default Profile;
