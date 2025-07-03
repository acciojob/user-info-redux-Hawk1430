import React from "react";
import "./../styles/App.css";
import { useDispatch, useSelector } from "react-redux";
import { changeEmail, changeName } from "./store/state/userSlice";

const App = () => {
	const { name, email } = useSelector((state) => state.user.value);
	const dispatch = useDispatch();

	return (
		<div>
			<h1>User Information</h1>
			<label htmlFor="name">Name:</label>
			<input
				id="name"
				type="text"
				value={name}
				onChange={(e) => dispatch(changeName(e.target.value))}
			/>
			<label htmlFor="email">Email:</label>
			<input
				id="email"
				type="email"
				value={email}
				onChange={(e) => dispatch(changeEmail(e.target.value))}
			/>

			<h3>Current values in store:</h3>
			<div className="output">
				<p>{`Name - ${name}`}</p>
				<p>{`Email - ${email}`}</p>
			</div>
		</div>
	);
};

export default App;
