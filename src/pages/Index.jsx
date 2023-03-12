import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Axios from "axios";
import { setUser } from "../reducers/user/userSlice";

export const Index = () => {
	const emailField = useRef(null);
	const userNameField = useRef(null);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		Axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
			const users = res.data;
			const userToLog = users.find(
				(user) => user.email === emailField.current.value
			);
			if (userToLog) {
				if (userToLog.username === userNameField.current.value) {
					dispatch(
						setUser({
							email: userToLog.email,
							name: userToLog.name,
							username: userToLog.username,
							phone: userToLog.phone,
							city: userToLog.address.city,
							street: userToLog.address.street,
							token: Date.now(),
						})
					);
					navigate("/home");
				}
			}
		});
	};
	return (
		<div className="row justify-content-center">
			<div className="col-6">
				<h2 className="mb-4">Login Form</h2>
				<form onSubmit={handleSubmit}>
					<div className="mb-3">
						<label className="form-label">Email adress</label>
						<input type="email" className="form-control" ref={emailField} />
					</div>
					<div className="mb-3">
						<label className="form-label">Username</label>
						<input type="text" className="form-control" ref={userNameField} />
					</div>
					<button type="submit" className="btn btn-primary">
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};
