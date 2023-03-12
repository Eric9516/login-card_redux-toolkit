import React from "react";
import { Index } from "./pages/Index";
import { Home } from "./pages/Home";
import { Routes, Route } from "react-router-dom";

export const App = () => {
	return (
		<div className="container">
			<Routes>
				<Route path="/" element={<Index />} />
				<Route path="/home" element={<Home />} />
			</Routes>
		</div>
	);
};
