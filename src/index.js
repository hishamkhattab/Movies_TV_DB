import React from "react";
import { render } from "react-dom";
import App from "./App";
import { GlobalStyles } from "./global.style";
import { BrowserRouter } from "react-router-dom";
import { FirebaseContext } from "./contexts/firebase";
import { auth } from "./lib/firebase.init";
render(
	<>
		<GlobalStyles />
		<FirebaseContext.Provider value={{ auth }}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</FirebaseContext.Provider>
	</>,
	document.getElementById("root")
);
