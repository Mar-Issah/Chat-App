import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Chat from "./components/Chat";
import Join from "./components/Join";

// react router dom allows you to handle routing in the app

//the root is '/' which is a login page and when the user logs with correct credential it take the user to the chat conponent page

const App = () => {
	return (
		<Router>
			<Route path="/" exact component={Join} />
			<Route path="/" component={Chat} />
		</Router>
	);
};

export default App;
