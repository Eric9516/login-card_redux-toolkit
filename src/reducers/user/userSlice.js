import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	email: "",
	name: "",
	username: "",
	phone: "",
	city: "",
	street: "",
	token: "",
};

export const userSlice = createSlice({
	name: "user",
	initialState: initialState,
	reducers: {
		setUser: (state, action) => {
			state.email = action.payload.email;
			state.name = action.payload.name;
			state.username = action.payload.username;
			state.phone = action.payload.phone;
			state.city = action.payload.city;
			state.street = action.payload.street;
			state.token = action.payload.token;
		},
		unsetUser: (state) => {
			(state.email = ""), (state.name = ""), (state.token = "");
		},
	},
});

export const { setUser, unsetUser } = userSlice.actions;

export default userSlice.reducer;
