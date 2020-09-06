import React, { Fragment, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

// Components
import Navbar from "../src/components/Layout/Navbar";
import Landing from "../src/components/Layout/Landing";
import Login from "../src/components/auth/Login";
import Register from "../src/components/auth/Register";
import Alert from "../src/components/Layout/Alert";
import Dashboard from "../src/components/dashboard/Dashboard";
import PrivateRoute from "../src/components/routing/PrivateRoute";
import CreateProfile from "../src/components/profile-forms/CreateProfile";
import EditProfile from "../src/components/profile-forms/EditProfile";
import AddExperience from "../src/components/profile-forms/AddExperience";
import AddEducation from "../src/components/profile-forms/AddEducation";

// Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Fragment>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <section className="container">
            <Alert />
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute
                exact
                path="/create-profile"
                component={CreateProfile}
              />
              <PrivateRoute
                exact
                path="/edit-profile"
                component={EditProfile}
              />
              <PrivateRoute
                exact
                path="/add-experience"
                component={AddExperience}
              />
              <PrivateRoute
                exact
                path="/add-education"
                component={AddEducation}
              />
            </Switch>
          </section>
        </Fragment>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
