import React, { Fragment } from "react";
import "./App.css";

import Navbar from "../src/components/Layout/Navbar";
import Landing from "../src/components/Layout/Landing";

const App = () => (
	<Fragment>
		<Navbar />
		<Landing />
	</Fragment>
);

export default App;
