import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import Navbar from "../src/components/Layout/Navbar";
import Landing from "../src/components/Layout/Landing";
import Login from "../src/components/auth/Login";
import Register from "../src/components/auth/Register";

const App = () => (
	<BrowserRouter>
		<Fragment>
			<Navbar />
			<Route exact path="/" component={Landing} />
			<section className="container">
				<Switch>
					<Route exact path="/register" component={Register} />
					<Route exact path="/login" component={Login} />
				</Switch>
			</section>
		</Fragment>
	</BrowserRouter>
);

export default App;
