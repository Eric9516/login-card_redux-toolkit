import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./app/store";
import { Provider } from "react-redux";

import "bootstrap/dist/css/bootstrap.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>
);
